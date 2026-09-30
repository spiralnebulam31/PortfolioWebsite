import AstroPicContent from "./AstroPicContent.jsx";
import { getWebbPictureOfTheMonth } from "./esaWebbPictureOfTheMonth.js";

const NASA_APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

// NASA's Astronomy Picture of the Day — not used at the moment: since APOD
// moved to science.nasa.gov/apod/, the API returns a "NASA Science" logo
// placeholder instead of the day's photo. Kept (and mapped to the same data
// shape as the Webb source) so switching back is a one-line change in
// AstroPic below once NASA fixes it. Needs NASA_API_KEY in .env.local.
async function getNasaApod() {
  try {
    const response = await fetch(
      `${NASA_APOD_ENDPOINT}?api_key=${process.env.NASA_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      throw new Error(`NASA APOD request failed with status ${response.status}`);
    }

    const data = await response.json();

    return {
      title: data.title,
      imageUrl: data.url,
      fullImageUrl: data.hdurl ?? data.url,
      imageAlt: data.title,
      explanation: data.explanation ? [data.explanation] : [],
      credit: data.copyright ?? "",
      date: data.date ?? "",
      link: "https://science.nasa.gov/apod/",
      sourceName: "NASA’s Astronomy Picture of the Day",
      sourceUrl: "https://science.nasa.gov/apod/",
    };
  } catch (error) {
    console.error("Error fetching Astronomy Picture of the Day:", error);
    return null;
  }
}

// Server Component: fetches the picture server-side (cached for a day) and
// hands it to the client component, which adds the scroll-reveal animation.
const AstroPic = async () => {
  const data = await getWebbPictureOfTheMonth();
  return <AstroPicContent data={data} />;
};

export default AstroPic;
