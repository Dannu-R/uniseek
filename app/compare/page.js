// Epic 5 — College Comparison (exactly two colleges)
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import { MatchBadge, AdmissionBadge } from "../components/Badges";
import colleges from "../data/colleges";

export default function Compare() {
  const a = colleges[0]; // Northwood
  const b = colleges[1]; // Cedar Valley

  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 60 }}>
        <span className="eyebrow">Side by side</span>
        <h1 className="h-title" style={{ marginTop: 8 }}>Comparing two colleges</h1>
        <p className="muted" style={{ marginTop: 6 }}>
          Comparison is limited to exactly two at a time — easier to read, easier to decide.
        </p>

        {/* Objective comparison table */}
        <div className="compare" style={{ marginTop: 22 }}>
          <div className="rowlabel" style={{ background: "var(--surface)" }} />
          <div className="head">{a.name}</div>
          <div className="head">{b.name}</div>

          <div className="rowlabel">Location</div>
          <div>{a.location}</div>
          <div>{b.location}</div>

          <div className="rowlabel">Type</div>
          <div>{a.type}</div>
          <div>{b.type}</div>

          <div className="rowlabel">Size</div>
          <div>{a.size}</div>
          <div>{b.size}</div>

          <div className="rowlabel">Est. net cost</div>
          <div>{a.cost}</div>
          <div>{b.cost}</div>

          <div className="rowlabel">Acceptance rate</div>
          <div>22%</div>
          <div>49%</div>

          <div className="rowlabel">Match strength</div>
          <div><MatchBadge level={a.match} /></div>
          <div><MatchBadge level={b.match} /></div>

          <div className="rowlabel">Admission</div>
          <div><AdmissionBadge level={a.admission} /></div>
          <div><AdmissionBadge level={b.admission} /></div>
        </div>

        {/* Personalized read */}
        <div className="grid-2" style={{ marginTop: 24 }}>
          <div className="panel">
            <h3 style={{ fontSize: 15, color: "var(--green-600)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>Shared strengths</h3>
            <p className="muted" style={{ fontSize: 14 }}>
              Both offer your intended major, both fall inside your budget, and both have the
              small, collaborative culture you asked for.
            </p>
          </div>
          <div className="panel">
            <h3 style={{ fontSize: 15, color: "var(--green-600)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>Key difference</h3>
            <p className="muted" style={{ fontSize: 14 }}>
              Northwood is the stronger academic fit but a <strong>Reach</strong>. Cedar Valley
              is a <strong>Match</strong> you're likely to get into and costs ~$7k less per year.
            </p>
          </div>
        </div>

        <div className="tint" style={{ marginTop: 20, fontSize: 14 }}>
          <strong>If affordability is your priority</strong>, Cedar Valley is the safer value.
          <strong> If program strength matters most</strong>, Northwood edges ahead — but plan
          for it as a reach. Neither is objectively "better."
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <Link href="/explorer" className="btn btn-primary">Open {a.name}</Link>
          <Link href="/dashboard" className="btn btn-ghost">Change selection</Link>
        </div>
      </main>
    </>
  );
}
