import { Poppins } from "next/font/google";
import "../src/scss/styles.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://www.anastasiaadamoudi.com";
const siteName = "Anastasia Adamoudi";
const title = "Anastasia Adamoudi | WordPress & Web Developer";
const description =
  "Anastasia Adamoudi is a WordPress and web developer who creates meaningful websites and experiences that help people achieve their goals, from custom block themes to React and Next.js apps.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Anastasia Adamoudi",
    "WordPress developer",
    "web developer",
    "block themes",
    "Gutenberg",
    "React",
    "Next.js",
    "front-end developer",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport = {
  themeColor: "#3b0764",
};

// Structured data so search engines can show a richer result for Anastasia
// (name, role, employer and linked profiles). See the Next.js JSON-LD guide.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: "WordPress Developer",
  worksFor: {
    "@type": "Organization",
    name: "PIE Code",
  },
  knowsAbout: [
    "WordPress",
    "Block themes",
    "PHP",
    "JavaScript",
    "React",
    "Next.js",
    "Web accessibility",
  ],
  sameAs: [
    "https://github.com/spiralnebulam31",
    "https://www.linkedin.com/in/anastasiaadamoudi-webdev/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
