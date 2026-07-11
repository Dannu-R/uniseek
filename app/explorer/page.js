// Epic 6 — College Explorer (single college deep-dive)
// Uses the first college as a worked example.
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import { MatchBadge, AdmissionBadge, ConfidenceBadge } from "../components/Badges";
import colleges from "../data/colleges";

export default function Explorer() {
  const c = colleges[0]; // Northwood University

  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: 32, paddingBottom: 60 }}>
        <Link href="/dashboard" className="muted" style={{ fontSize: 13.5 }}>← Back to recommendations</Link>

        {/* Header */}
        <div className="detail-head" style={{ marginTop: 16 }}>
          <div className="detail-photo" style={{ background: c.accent }}>{c.initial}</div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h-title">{c.name}</h1>
            <p className="muted" style={{ marginTop: 4 }}>{c.location} · {c.type} · {c.size}</p>
            <div className="label-row" style={{ marginTop: 14 }}>
              <MatchBadge level={c.match} />
              <AdmissionBadge level={c.admission} />
              <ConfidenceBadge level={c.confidence} />
            </div>
          </div>
          <Link href="/compare" className="btn btn-ghost">+ Compare</Link>
        </div>

        <div className="split" style={{ marginTop: 28 }}>
          {/* LEFT: interpretation + fit */}
          <div>
            <div className="block">
              <h3>Why it fits you</h3>
              <div className="interp">
                <div className="mini-label">Personalized interpretation</div>
                {c.reason}
              </div>
            </div>

            <div className="block">
              <h3>Academic fit</h3>
              <div className="interp">
                <div className="mini-label">Personalized interpretation</div>
                Northwood's project-based engineering program is a strong match for your
                robotics background, and its collaborative grading culture aligns with your
                preference for a non-competitive environment.
              </div>
            </div>

            <div className="block">
              <h3>Student life &amp; campus fit</h3>
              <div className="objective">
                <div className="mini-label">Objective information</div>
                Small-town setting, 6,200 undergraduates, residential campus with a strong
                outdoor-recreation program.
              </div>
            </div>

            <div className="block">
              <h3>Extracurricular fit</h3>
              <div className="interp">
                <div className="mini-label">Personalized interpretation</div>
                Your robotics leadership maps well to Northwood's makerspace and its
                student-led engineering club — a natural continuation of your application
                narrative. (This does not affect admission odds.)
              </div>
            </div>

            <div className="block">
              <h3>Things to consider</h3>
              <div className="objective">
                <div className="mini-label">Trade-off</div>
                As a <strong>Reach</strong>, admission isn't likely even with a strong fit.
                Winters are long and the town is quiet — worth weighing if you wanted more
                city energy.
              </div>
            </div>
          </div>

          {/* RIGHT: objective facts + sources */}
          <aside>
            <div className="panel">
              <h3 style={{ fontSize: 15, marginBottom: 6 }}>Key facts</h3>
              <div className="fact-row"><span className="k">Type</span><span className="v">{c.type}</span></div>
              <div className="fact-row"><span className="k">Size</span><span className="v">{c.size}</span></div>
              <div className="fact-row"><span className="k">Setting</span><span className="v">{c.setting}</span></div>
              <div className="fact-row"><span className="k">Est. net cost</span><span className="v">{c.cost}</span></div>
              <div className="fact-row"><span className="k">Acceptance rate</span><span className="v">22%</span></div>
              <div className="fact-row"><span className="k">6-yr grad rate</span><span className="v">88%</span></div>
            </div>

            <div className="panel" style={{ marginTop: 16 }}>
              <h3 style={{ fontSize: 15, marginBottom: 10 }}>Non-negotiables</h3>
              <div className="nn"><span>Offers your major</span><span className="status ok">Satisfied</span></div>
              <div className="nn"><span>Net cost under $35k</span><span className="status ok">Satisfied</span></div>
              <div className="nn"><span>Continental U.S.</span><span className="status ok">Satisfied</span></div>
            </div>

            <div className="panel" style={{ marginTop: 16 }}>
              <h3 style={{ fontSize: 15, marginBottom: 10 }}>Sources</h3>
              <div className="sources">
                <span className="source">College Scorecard</span>
                <span className="source">IPEDS</span>
                <span className="source">Common Data Set</span>
                <span className="source">40+ student reports</span>
              </div>
            </div>

            <Link href="/guidance" className="btn btn-ghost btn-block" style={{ marginTop: 16 }}>
              Ask about this college
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
}
