// Epic 7 — AI Guidance (structured, NOT an open chatbot)
import Link from "next/link";
import SiteNav from "../components/SiteNav";

export default function Guidance() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ maxWidth: 760, paddingTop: 36, paddingBottom: 60 }}>
        <span className="eyebrow">AI Guidance</span>
        <h1 className="h-title" style={{ marginTop: 8 }}>Ask a supported question</h1>
        <p className="muted" style={{ marginTop: 6 }}>
          Guidance answers a fixed set of college-discovery questions in a predictable
          format — it's not an open-ended chatbot.
        </p>

        {/* Supported question chips */}
        <div className="q-list" style={{ marginTop: 22 }}>
          <div className="card q-item"><span>💬</span> Why was this college recommended?</div>
          <div className="card q-item"><span>💬</span> Why wasn't this college recommended?</div>
          <div className="card q-item"><span>💬</span> What evidence supports this statement?</div>
          <div className="card q-item"><span>💬</span> How does this college fit my profile?</div>
          <div className="card q-item"><span>💬</span> What trade-offs should I consider?</div>
          <div className="card q-item"><span>💬</span> How or where do I apply?</div>
        </div>

        {/* Example structured answer */}
        <h2 style={{ fontSize: 16, margin: "30px 0 12px", color: "var(--green-600)" }}>Example answer</h2>
        <div className="panel answer">
          <p style={{ fontWeight: 600, marginBottom: 10 }}>Why was Northwood University recommended?</p>
          <div className="row">
            <span className="k">Direct answer</span>
            <span>It's a strong personal fit for your robotics interest and collaborative-culture preference, though it's a reach on admissions.</span>
          </div>
          <div className="row">
            <span className="k">Evidence</span>
            <span>Project-based engineering program (college catalog); 40+ student reports describing a non-competitive culture; acceptance rate 22% (Common Data Set).</span>
          </div>
          <div className="row">
            <span className="k">Personal relevance</span>
            <span>Matches your stated non-negotiables (major offered, under $35k, continental U.S.) and your preference for small, collaborative campuses.</span>
          </div>
          <div className="row">
            <span className="k">Uncertainty</span>
            <span><span className="conf"><span className="dot dot-green" /> High confidence</span> — based on official data plus well-corroborated student consensus.</span>
          </div>
          <div className="row">
            <span className="k">Next step</span>
            <span><Link href="/explorer" style={{ color: "var(--green-700)", fontWeight: 600 }}>Open Northwood in the Explorer →</Link></span>
          </div>
        </div>

        <p className="muted" style={{ fontSize: 13, marginTop: 16 }}>
          Out of scope: essay review, resume building, and general chat. Guidance will
          redirect those back to supported options.
        </p>
      </main>
    </>
  );
}
