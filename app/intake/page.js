// Epic 2 — Student Intake & Profile Creation
// Static visual of the intake. Inputs are for looks only (no state).
import Link from "next/link";
import SiteNav from "../components/SiteNav";

export default function Intake() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ maxWidth: 760, paddingTop: 40, paddingBottom: 60 }}>
        {/* Intro & progress */}
        <span className="eyebrow">Step 3 of 7 · Student profile</span>
        <h1 className="h-title" style={{ marginTop: 8 }}>Tell us about you</h1>
        <p className="muted" style={{ marginTop: 6 }}>
          The more we know, the better we can explain each recommendation. You can go
          back anytime without losing your answers.
        </p>
        <div className="progressbar" style={{ margin: "18px 0 8px" }}>
          <i style={{ width: "45%" }} />
        </div>
        <p className="muted" style={{ fontSize: 12.5 }}>45% complete</p>

        {/* Academic background */}
        <section className="panel" style={{ marginTop: 24 }}>
          <span className="tag">Academics</span>
          <h2 style={{ fontSize: 19, margin: "12px 0 4px" }}>Academic background</h2>
          <div className="grid-2" style={{ marginTop: 14 }}>
            <div className="field">
              <label>GPA <span className="hint">(on a 4.0 scale)</span></label>
              <input className="input" placeholder="3.8" />
            </div>
            <div className="field">
              <label>Course rigor</label>
              <select className="input">
                <option>Most rigorous available (APs / IB / honors)</option>
                <option>Above average</option>
                <option>Standard</option>
              </select>
            </div>
            <div className="field">
              <label>Test scores <span className="hint">(optional)</span></label>
              <input className="input" placeholder="SAT 1400 / ACT 31" />
            </div>
            <div className="field">
              <label>Intended field(s) of study</label>
              <input className="input" placeholder="Mechanical engineering, robotics" />
            </div>
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="panel" style={{ marginTop: 18 }}>
          <span className="tag">Extracurriculars</span>
          <h2 style={{ fontSize: 19, margin: "12px 0 4px" }}>Activities &amp; achievements</h2>
          <p className="muted" style={{ fontSize: 13.5, marginBottom: 12 }}>
            Capture depth, not just names — roles, leadership, and impact matter.
          </p>
          <div className="field">
            <label>Describe an activity that matters to you</label>
            <textarea
              className="textarea"
              defaultValue="Captain of the robotics team (3 yrs). Led an 8-person build for the regional championship and mentored two rookie members."
            />
          </div>
        </section>

        {/* Preferences */}
        <section className="panel" style={{ marginTop: 18 }}>
          <span className="tag">Preferences</span>
          <h2 style={{ fontSize: 19, margin: "12px 0 10px" }}>College experience preferences</h2>
          <div className="field">
            <label>Campus setting</label>
            <div className="chips">
              <span className="chip on">Small town</span>
              <span className="chip on">Small city</span>
              <span className="chip">Big city</span>
              <span className="chip">Rural</span>
            </div>
          </div>
          <div className="field" style={{ marginTop: 6 }}>
            <label>Campus culture</label>
            <div className="chips">
              <span className="chip on">Collaborative</span>
              <span className="chip">Competitive</span>
              <span className="chip on">Outdoorsy</span>
              <span className="chip">Big sports</span>
              <span className="chip">Artsy</span>
            </div>
          </div>
        </section>

        {/* Non-negotiables */}
        <section className="panel" style={{ marginTop: 18 }}>
          <span className="tag">Non-negotiables</span>
          <h2 style={{ fontSize: 19, margin: "12px 0 4px" }}>Hard requirements</h2>
          <p className="muted" style={{ fontSize: 13.5, marginBottom: 12 }}>
            These act as strict filters — a college that fails one won't be recommended.
          </p>
          <div className="nn"><span>Offers my intended major</span><span className="status ok">Required</span></div>
          <div className="nn"><span>Net cost under $35,000 / year</span><span className="status ok">Required</span></div>
          <div className="nn"><span>Within the continental U.S.</span><span className="status ok">Required</span></div>
        </section>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <Link href="/signup" className="btn btn-ghost">← Back</Link>
          <Link href="/generate" className="btn btn-primary btn-lg">Review &amp; continue →</Link>
        </div>
      </main>
    </>
  );
}
