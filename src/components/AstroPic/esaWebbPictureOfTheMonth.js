// Server-only helpers for ESA/Webb's Picture of the Month.
//
// The RSS feed gives the latest picture's title, date, link and image; the
// picture's own page adds the description and the image credit (Webb images
// are CC BY 4.0, so the credit must be shown). Both are cached for a day.

const FEED_URL = "https://esawebb.org/images/potm/feed/";
const REVALIDATE_SECONDS = 86400;

const decodeEntities = (text) =>
  text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

const stripTags = (html) =>
  decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

const firstMatch = (text, pattern) => text.match(pattern)?.[1] ?? "";

const fetchText = async (url) => {
  const response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });

  if (!response.ok) {
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }

  return response.text();
};

const IMAGE_DESCRIPTION_PATTERN = /^\[Image Description:\s*([\s\S]*?)\]?$/;
const PARAGRAPHS_TO_SHOW = 2;

// Description paragraphs sit between the picture and the "Credit:" label on
// the picture's page. Short fragments (link lists, empty wrappers) are
// dropped so only the actual prose is kept. ESA ends the text with an
// "[Image Description: …]" paragraph written for screen readers — that
// becomes the image's alt text instead of visible text.
const parsePicturePage = (html) => {
  const start = html.indexOf("<h1");
  const creditIndex = html.indexOf("<strong>Credit:</strong>");
  const body = -1 !== start ? html.slice(start, -1 !== creditIndex ? creditIndex : undefined) : "";

  const paragraphs = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map(([, paragraph]) => stripTags(paragraph))
    .filter((paragraph) => 80 < paragraph.length);

  const imageDescription = firstMatch(
    paragraphs.find((paragraph) => IMAGE_DESCRIPTION_PATTERN.test(paragraph)) ?? "",
    IMAGE_DESCRIPTION_PATTERN
  ).trim();

  const explanation = paragraphs
    .filter((paragraph) => !IMAGE_DESCRIPTION_PATTERN.test(paragraph))
    .slice(0, PARAGRAPHS_TO_SHOW);

  const credit = stripTags(firstMatch(html, /<div class="credit">([\s\S]*?)<\/div>/));

  return { explanation, imageDescription, credit };
};

export async function getWebbPictureOfTheMonth() {
  try {
    const feed = await fetchText(FEED_URL);
    const item = firstMatch(feed, /<item>([\s\S]*?)<\/item>/);

    const title = stripTags(firstMatch(item, /<title>([\s\S]*?)<\/title>/));
    const link = firstMatch(item, /<link>([\s\S]*?)<\/link>/).trim();
    const pubDate = firstMatch(item, /<pubDate>([\s\S]*?)<\/pubDate>/);
    const imageUrl = firstMatch(item, /<enclosure[^>]*url="([^"]+)"/);

    if ("" === title || "" === imageUrl) {
      throw new Error("ESA/Webb feed item is missing its title or image");
    }

    // The page only adds the description and credit — if it can't be read,
    // still show the picture rather than nothing.
    let details = { explanation: [], imageDescription: "", credit: "" };
    try {
      details = parsePicturePage(await fetchText(link));
    } catch (error) {
      console.error("Error fetching ESA/Webb picture details:", error);
    }

    const date = "" !== pubDate ? new Date(pubDate) : null;

    return {
      title,
      imageUrl,
      // Same file, larger rendition (e.g. /screen/ → /large/).
      fullImageUrl: imageUrl.replace("/images/screen/", "/images/large/"),
      imageAlt: "" !== details.imageDescription ? details.imageDescription : title,
      explanation: details.explanation,
      credit: details.credit,
      date: date && !Number.isNaN(date.getTime())
        ? date.toLocaleDateString("en-GB", { month: "long", year: "numeric" })
        : "",
      link,
      sourceName: "ESA/Webb Picture of the Month",
      sourceUrl: "https://esawebb.org/images/potm/",
    };
  } catch (error) {
    console.error("Error fetching ESA/Webb Picture of the Month:", error);
    return null;
  }
}
