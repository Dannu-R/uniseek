// Feature — Basic College Search (a lightweight alternate way into the Explorer)
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import { MatchBadge, AdmissionBadge } from "../components/Badges";
import colleges from "../data/colleges";

export default function Search() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ maxWidth: 760, paddingTop: 36, paddingBottom: 60 }}>
        <span className="eyebrow">Basic search</span>
        <h1 className="h-title" style={{ marginTop: 8 }}>Look up a college by name</h1>
        <p className="muted" style={{ marginTop: 6 }}>
          Search is a supporting feature — it opens one college at a time and doesn't
          replace your recommendation run.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <input className="input" placeholder="e.g. Harbor College" defaultValue="Harbor" />
          <button className="btn btn-primary">Search</button>
        </div>
        <div className="chips" style={{ marginTop: 12 }}>
          <span className="chip">Filter: Public</span>
          <span className="chip">Under $30k</span>
          <span className="chip">Northeast</span>
        </div>

        {/* Results */}
        <h2 style={{ fontSize: 15, margin: "26px 0 12px", color: "var(--muted)" }}>Results</h2>
        <div className="stack">
          {colleges.slice(4, 6).map((c) => (
            <div key={c.id} className="card" style={{ padding: 16, display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: c.accent, color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--serif)", fontSize: 22, flexShrink: 0 }}>
                {c.initial}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{c.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>{c.location} · {c.type}</div>
                <div className="label-row" style={{ marginTop: 8 }}>
                  <MatchBadge level={c.match} />
                  <AdmissionBadge level={c.admission} />
                </div>
              </div>
              <Link href="/explorer" className="btn btn-ghost">Open</Link>
            </div>
          ))}
        </div>

        <div className="tint" style={{ marginTop: 22, fontSize: 14 }}>
          A search evaluation is <strong>temporary</strong> by default — it isn't saved as a
          recommendation unless you explicitly save the college.
        </div>
      </main>
    </>
  );
}
