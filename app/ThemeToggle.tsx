// app/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

const THEMES = ["light", "dark", "sepia"] as const;
type Theme = typeof THEMES[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // read saved theme
    try {
      const s = localStorage.getItem("a1-theme") as Theme | null;
      if (s && THEMES.includes(s)) {
        setTheme(s);
        document.documentElement.setAttribute("data-theme", s);
        return;
      }
    } catch {}
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  function change(t: Theme) {
    setTheme(t);
    try { localStorage.setItem("a1-theme", t); } catch {}
    document.documentElement.setAttribute("data-theme", t);
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {THEMES.map((t) => (
        <button
          key={t}
          onClick={() => change(t)}
          aria-pressed={theme === t}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: theme === t ? "2px solid #0366d6" : "1px solid #d1d5db",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
