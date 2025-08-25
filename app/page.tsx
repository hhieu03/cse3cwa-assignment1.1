// app/page.tsx
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

export default function Home() {
  return (
    <div>
      <h1>Feature 2 — Themes & Hamburger</h1>
      <p>This branch contains only theme toggle and a hamburger menu (isolated from Feature 1).</p>

      <section style={{ marginTop: 24 }}>
        <h2>Themes</h2>
        <ThemeToggle />
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Hamburger Menu (CSS transform)</h2>
        <HamburgerMenu />
      </section>
    </div>
  );
}
