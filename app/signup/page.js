// Epic 1 / Epic 8 — Authentication
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="container" style={{ maxWidth: 460, paddingTop: 70, paddingBottom: 60 }}>
      <div className="center" style={{ marginBottom: 24 }}>
        <Link href="/" className="brand" style={{ justifyContent: "center" }}>
          <span className="mark">U</span> UniSeek
        </Link>
        <h1 className="h-title" style={{ marginTop: 18 }}>Create your account</h1>
        <p className="muted" style={{ marginTop: 6 }}>Save your profile, recommendations, and colleges.</p>
      </div>

      <div className="panel">
        <button className="btn btn-ghost btn-block" style={{ marginBottom: 10 }}>
          <span>🇬</span> Continue with Google
        </button>
        <div className="center muted" style={{ fontSize: 13, margin: "14px 0" }}>or</div>

        <div className="field">
          <label>Email</label>
          <input className="input" type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label>Password</label>
          <input className="input" type="password" placeholder="Create a password" />
        </div>

        <Link href="/intake" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 6 }}>
          Create account
        </Link>

        <p className="muted center" style={{ fontSize: 12.5, marginTop: 16 }}>
          Already have an account? <Link href="/intake" style={{ color: "var(--green-700)", fontWeight: 600 }}>Sign in</Link>
        </p>
      </div>

      <div className="tint" style={{ marginTop: 18, fontSize: 13.5 }}>
        <strong>Just exploring?</strong>{" "}
        <Link href="/intake" style={{ color: "var(--green-700)", fontWeight: 600 }}>Continue as a guest</Link>
        {" "}— your profile, recommendations, and saved colleges won't be saved.
      </div>
    </main>
  );
}
