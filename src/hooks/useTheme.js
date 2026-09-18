"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "spiral-nebula-theme";

const readStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  } catch {
    return "dark";
  }
};

// Applies the theme to <html data-theme="..."> and persists it, backing the
// dark/light token sets declared in src/scss/globals/_themes.scss.
const useTheme = () => {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore (private browsing / storage disabled)
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
