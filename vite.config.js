import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: true,
      exclude: ["server"],
    },
  },
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.JPEG",
    "**/*.jpeg",
    "**/*.PNG",
    "**/*.png",
    "**/*.GIF",
    "**/*.gif",
    "**/*.SVG",
    "**/*.svg",
    "**/*.WEBP",
    "**/*.webp",
  ],
});
