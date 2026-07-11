import "./globals.css";
import PrototypeNav from "./components/PrototypeNav";

export const metadata = {
  title: "UniSeek — Discover colleges that fit you",
  description: "Visual prototype of UniSeek, a personalized college discovery product.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Floating bar that lets you jump to any epic/screen. Prototype only. */}
        <PrototypeNav />
      </body>
    </html>
  );
}
