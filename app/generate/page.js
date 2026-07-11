// Epic 3 (entry) — Recommendation ambition + explicit generation.
// Ambition is chosen per-run and is NOT saved to the profile.
import Link from "next/link";
import SiteNav from "../components/SiteNav";

export default function Generate() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ maxWidth: 680, paddingTop: 48, paddingBottom: 60 }}>
        <div className="center">
          <span className="eyebrow">Final step before your list</span>
          <h1 className="h-title" style={{ marginTop: 8 }}>How ambitious should this list be?</h1>
          <p className="muted" style={{ marginTop: 8, maxWidth: 520, margin: "8px auto 0" }}>
            This only affects the mix of reaches, matches, and safeties in this run.
            You can generate a new list with a different setting anytime.
          </p>
        </div>

        <div className="segment" style={{ marginTop: 28 }}>
          <div className="seg">
            <div className="big">Safer</div>
            <p className="muted" style={{ fontSize: 13 }}>More matches &amp; safeties</p>
          </div>
          <div className="seg on">
            <div className="big">Balanced</div>
            <p className="muted" style={{ fontSize: 13 }}>A little of everything</p>
          </div>
          <div className="seg">
            <div className="big">Ambitious</div>
            <p className="muted" style={{ fontSize: 13 }}>More reaches</p>
          </div>
        </div>

        <div className="tint" style={{ marginTop: 24, fontSize: 14 }}>
          Every run returns the same fixed number of colleges (10). Only the
          reach / match / safety balance shifts with your choice above.
        </div>

        <div className="center" style={{ marginTop: 28 }}>
          <Link href="/dashboard" className="btn btn-primary btn-lg">✨ Generate my recommendations</Link>
        </div>
        <div className="center" style={{ marginTop: 14 }}>
          <Link href="/intake" className="muted" style={{ fontSize: 13.5 }}>← Edit my profile first</Link>
        </div>
      </main>
    </>
  );
}
