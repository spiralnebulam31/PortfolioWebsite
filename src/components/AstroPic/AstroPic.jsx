import AstroPicContent from "./AstroPicContent.jsx";

const NASA_APOD_ENDPOINT = "https://api.nasa.gov/planetary/apod";

// Server Component: fetches NASA's Astronomy Picture of the Day directly,
// replacing the old server/server.js (Express + MongoDB, polling once a day
// and serving the cached result). `next: { revalidate }` gives the same
// once-a-day caching without a database or a separate deployment.
async function getAstroPic() {
  try {
    const response = await fetch(
      `${NASA_APOD_ENDPOINT}?api_key=${process.env.NASA_API_KEY}`,
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      throw new Error(`NASA APOD request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Astronomy Picture of the Day:", error);
    return null;
  }
}

const AstroPic = async () => {
  const data = await getAstroPic();
  return <AstroPicContent data={data} />;
};

export default AstroPic;
