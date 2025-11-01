import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "theme"; // 'dark' | 'light' | null

export default function ThemeToggle({ className = "", size = 18 }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "dark" || stored === "light") return stored;
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  // Sync DOM & localStorage whenever theme state changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [theme]);

  // Optional: react to system changes if user hasn't explicitly chosen
  useEffect(() => {
    let mq;
    try {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => {
        // only update if user hasn't explicitly set a theme
        const stored = localStorage.getItem(THEME_KEY);
        if (stored !== "dark" && stored !== "light") {
          setTheme(e.matches ? "dark" : "light");
        }
      };
      mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
      return () => {
        mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
      };
    } catch {
      return;
    }
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      onClick={toggle}
      className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={size}  /> : <Moon size={size} className="text-white"/>}
    </button>
  );
}
