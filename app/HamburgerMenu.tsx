// app/HamburgerMenu.tsx
"use client";
import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: 48,
          height: 48,
          display: "grid",
          placeItems: "center",
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", transform: open ? "rotate(45deg) translate(3px,3px)" : "none", transition: "transform .2s" }} />
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", marginTop: 4, opacity: open ? 0 : 1, transition: "opacity .2s" }} />
        <span style={{ width: 22, height: 2, background: "currentColor", display: "block", marginTop: 4, transform: open ? "rotate(-45deg) translate(3px,-3px)" : "none", transition: "transform .2s" }} />
      </button>

      {open && (
        <div style={{ position: "absolute", top: 56, right: 0, background: "var(--menu-bg,#fff)", border: "1px solid #e5e7eb", padding: 8, borderRadius: 8 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: 6 }}>Home</li>
            <li style={{ padding: 6 }}>About</li>
            <li style={{ padding: 6 }}>Tabs</li>
          </ul>
        </div>
      )}
    </div>
  );
}
