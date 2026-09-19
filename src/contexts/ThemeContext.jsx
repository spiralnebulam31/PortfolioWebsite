"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "spiral-nebula-theme";

const readStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) || "dark";
  } catch {
    return "dark";
  }
};

const ThemeContext = createContext(null);

// Applies the theme to <html data-theme="..."> and persists it, backing the
// dark/light token sets declared in src/scss/globals/_themes.scss. A single
// provider (mounted once in App.jsx) is the source of truth so every
// consumer (Navbar's toggle, Hero's shine intensity, ...) re-renders in sync
// when the theme changes, instead of each holding its own disconnected state.
export const ThemeProvider = ({ children }) => {
  // Always start as "dark" — localStorage isn't available during SSR, so
  // reading it here would make the server-rendered HTML and the client's
  // first render disagree (e.g. Navbar's Sun/Moon icon), which React flags
  // as a hydration mismatch. The real stored value is picked up in the
  // effect below, which only ever runs client-side after hydration.
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
