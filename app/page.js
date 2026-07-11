// Epic 1 — Landing Page & Entry Flow
// Order required by the PRD: Hero -> Problem -> Solution -> Core Features
// -> How It Works -> Trust -> (Auth) -> Footer.
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";

export default function Landing() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <header className="hero container">
        <span className="eyebrow">Personalized college discovery</span>
        <h1>Discover colleges that fit you.</h1>
        <p className="lead">
          UniSeek turns your full profile into a focused set of college
          recommendations — each one explained, evidence-backed, and honest
          about how confident it is.
        </p>
        <div className="cta-row">
          <Link href="/signup" className="btn btn-primary btn-lg">Get started — it's free</Link>
          <Link href="/dashboard" className="btn btn-ghost btn-lg">See an example</Link>
        </div>
        <div className="hero-visual">
          <div className="center">
            <div className="serif" style={{ fontSize: 28 }}>Your list, explained.</div>
            <p style={{ opacity: 0.85, marginTop: 8 }}>Fit · Admission chances · Sources · Confidence</p>
          </div>
        </div>
      </header>

      {/* Problem */}
      <section className="section container">
        <div className="center" style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow">The problem</span>
          <h2 className="section-title" style={{ marginTop: 8 }}>
            Ordinary college discovery ignores the whole student.
          </h2>
          <p className="lead" style={{ marginTop: 14 }}>
            Rankings reward prestige, free filters reduce you to a GPA and a zip
            code, and a chatbot gives generic, source-less answers. None of them
            reflect your extracurriculars, values, budget, or non-negotiables.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="section-sm container">
        <div className="tint" style={{ textAlign: "center" }}>
          <span className="eyebrow">The solution</span>
          <h2 className="section-title" style={{ marginTop: 8 }}>
            A structured profile in. A focused, explainable list out.
          </h2>
          <p className="lead" style={{ marginTop: 12, maxWidth: 680, margin: "12px auto 0" }}>
            You answer guided questions once. UniSeek matches you against real
            college data and returns a balanced set of reaches, matches, and
            safeties — and shows its work on every one.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="section container">
        <div className="center"><span className="eyebrow">Why UniSeek</span></div>
        <div className="grid-3" style={{ marginTop: 28 }}>
          <div className="card feature">
            <div className="ico">🎯</div>
            <h3>Personalized recommendations</h3>
            <p className="muted">Based on you — academics, activities, goals, budget, and priorities — not a generic prestige order.</p>
          </div>
          <div className="card feature">
            <div className="ico">🔎</div>
            <h3>Transparent explanations</h3>
            <p className="muted">Every recommendation shows why it fits, its trade-offs, and the sources behind each claim.</p>
          </div>
          <div className="card feature">
            <div className="ico">💡</div>
            <h3>Discover hidden fits</h3>
            <p className="muted">Surface strong-fit colleges you'd never have found through name-based search or rankings.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-sm container">
        <div className="center"><span className="eyebrow">How it works</span></div>
        <div className="steps" style={{ marginTop: 28 }}>
          <div className="card step">
            <div className="n">1</div>
            <h3>Create your profile</h3>
            <p className="muted">Answer a guided intake covering academics, activities, goals, finances, and non-negotiables.</p>
          </div>
          <div className="card step">
            <div className="n">2</div>
            <h3>Get recommendations</h3>
            <p className="muted">Generate a balanced set of colleges with clear fit, admission, and confidence labels.</p>
          </div>
          <div className="card step">
            <div className="n">3</div>
            <h3>Explore &amp; compare</h3>
            <p className="muted">Dig into any college, compare two side by side, and understand every trade-off.</p>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section container">
        <div className="dark-panel">
          <span className="eyebrow">Built on trust</span>
          <h2 className="serif" style={{ fontSize: 26, marginTop: 8, color: "#fff" }}>
            Evidence-backed. Sources visible. Uncertainty disclosed. You stay in control.
          </h2>
          <p style={{ marginTop: 12, color: "#cfe0ec", maxWidth: 720 }}>
            UniSeek separates facts from interpretation, cites its sources, and
            labels low-data schools as low-confidence instead of guessing. It's a
            research accelerator — it narrows your options and explains them, but
            never makes the final decision for you.
          </p>
          <div style={{ marginTop: 20 }}>
            <Link href="/signup" className="btn btn-primary btn-lg">Create your profile</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
