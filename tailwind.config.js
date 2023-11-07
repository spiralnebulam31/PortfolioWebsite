/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background1: "#3b0764",
        background2: "#ab07b8",
        primary:  "#CCB2FF",
        secondary: "#83F8F5",
        tertiary: "#2B96B1",
        details: "#a855f7",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "astronomy-background": "url('/src/assets/astronomy-background.jpg')",
      },
    },
  },
  plugins: [],
}