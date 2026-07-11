// Epic 4 — Recommendation Dashboard
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import CollegeCard from "../components/CollegeCard";
import colleges from "../data/colleges";

export default function Dashboard() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: 36, paddingBottom: 60 }}>
        {/* Set summary */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="eyebrow">Your recommendations</span>
            <h1 className="h-title" style={{ marginTop: 8 }}>10 colleges that fit you</h1>
            <p className="muted" style={{ marginTop: 6 }}>
              Generated from your profile with a <strong>Balanced</strong> ambition setting.
              Ordered for readability — not best to worst.
            </p>
          </div>
          <Link href="/generate" className="btn btn-ghost">↻ New run</Link>
        </div>

        {/* Legend explaining the three labels */}
        <div className="card" style={{ padding: 16, marginTop: 20, display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", fontSize: 13 }}>
          <div><span className="badge b-green">High Match</span> <span className="muted">= personal fit</span></div>
          <div><span className="badge b-blue">Match</span> <span className="muted">= admission chances</span></div>
          <div><span className="conf"><span className="dot dot-green" /> Confidence</span> <span className="muted">= how sure we are</span></div>
        </div>

        {/* Cards */}
        <div className="card-grid" style={{ marginTop: 22 }}>
          {colleges.map((c) => (
            <CollegeCard key={c.id} college={c} />
          ))}
        </div>

        {/* Note about the low-confidence example */}
        <div className="tint" style={{ marginTop: 24, fontSize: 14 }}>
          Notice <strong>Pinecrest University</strong> is flagged <em>Low confidence</em> —
          UniSeek labels low-data schools honestly instead of confidently guessing.
        </div>
      </main>
    </>
  );
}
