import { Poppins } from "next/font/google";
import "../src/scss/styles.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Anastasia | Web Dev",
  description:
    "Anastasia's Portfolio Website that showcases her skills and projects as a Frontend Developer.",
  icons: {
    icon: "/logoBrackets.svg",
  },
};

export const viewport = {
  themeColor: "#3b0764",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
