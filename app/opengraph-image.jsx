import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The preview image shown when the site is shared (LinkedIn, Slack, etc.).
// Next.js also uses it for the Twitter card, since no twitter-image exists.
export const alt = "Anastasia Adamoudi, WordPress and web developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "src/assets/photos/photo1.png")
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "linear-gradient(135deg, #3b0764 0%, #581c87 55%, #c2410c 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: 6,
            borderRadius: 32,
            background: "linear-gradient(to bottom, #06b6d4, #d8b4fe)",
          }}
        >
          <img
            src={photoSrc}
            width={360}
            height={360}
            style={{ borderRadius: 28 }}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            Anastasia Adamoudi
          </div>
          <div style={{ fontSize: 40, color: "#83f8f5" }}>
            WordPress &amp; Web Developer
          </div>
          <div style={{ fontSize: 28, color: "#ccb2ff", maxWidth: 560 }}>
            Creating meaningful websites and experiences that help people
            achieve their goals.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
