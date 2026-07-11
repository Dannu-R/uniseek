"use client";
// The only interactive component in the whole prototype.
// It's a floating bar that lets you jump to any screen. One useState
// (which you already know) toggles the list open/closed.

import { useState } from "react";
import Link from "next/link";

const screens = [
  { href: "/", epic: "Epic 1", label: "Landing Page" },
  { href: "/signup", epic: "Epic 1", label: "Sign Up / Auth" },
  { href: "/intake", epic: "Epic 2", label: "Student Intake" },
  { href: "/generate", epic: "Epic 3", label: "Generate Recs" },
  { href: "/dashboard", epic: "Epic 4", label: "Rec Dashboard" },
  { href: "/compare", epic: "Epic 5", label: "Comparison" },
  { href: "/explorer", epic: "Epic 6", label: "College Explorer" },
  { href: "/guidance", epic: "Epic 7", label: "AI Guidance" },
  { href: "/search", epic: "Feature", label: "Basic Search" },
  { href: "/settings", epic: "Epic 9", label: "Account & Settings" },
];

export default function PrototypeNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="proto">
      {open && (
        <div className="proto-panel">
          <div className="ph">Prototype navigator — jump to any epic</div>
          <div className="proto-links">
            {screens.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)}>
                <span className="ep">{s.epic}</span>
                <span>{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <button className="proto-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕ Close" : "☰ Screens"}
      </button>
    </div>
  );
}
