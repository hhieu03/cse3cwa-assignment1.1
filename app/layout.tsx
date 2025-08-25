// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "A1 Tabs App — Feature 2",
  description: "Themes + Hamburger Menu (isolated)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: 16, maxWidth: 1000, margin: "0 auto" }}>{children}</main>
      </body>
    </html>
  );
}
