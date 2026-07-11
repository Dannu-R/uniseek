// Epic 9 — Account & Settings
import SiteNav from "../components/SiteNav";

export default function Settings() {
  return (
    <>
      <SiteNav />
      <main className="container" style={{ paddingTop: 36, paddingBottom: 60 }}>
        <span className="eyebrow">Account</span>
        <h1 className="h-title" style={{ marginTop: 8 }}>Settings</h1>

        <div className="settings-grid" style={{ marginTop: 22 }}>
          {/* Left menu (visual only) */}
          <nav className="settings-menu">
            <a className="on">Account</a>
            <a>Profile</a>
            <a>Saved colleges</a>
            <a>Notifications</a>
            <a>Privacy &amp; data</a>
            <a>Help &amp; support</a>
          </nav>

          {/* Right content */}
          <div>
            <div className="panel">
              <h2 style={{ fontSize: 17, marginBottom: 14 }}>Account information</h2>
              <div className="field"><label>Name</label><input className="input" defaultValue="Danush Raj" /></div>
              <div className="field"><label>Email</label><input className="input" defaultValue="danush@example.com" /></div>
              <button className="btn btn-primary">Save changes</button>
            </div>

            <div className="panel" style={{ marginTop: 18 }}>
              <h2 style={{ fontSize: 17, marginBottom: 6 }}>Notifications</h2>
              <div className="setting-row">
                <div className="grow">
                  <div style={{ fontWeight: 600 }}>Account &amp; college updates</div>
                  <div className="muted" style={{ fontSize: 13 }}>Essential messages about your account.</div>
                </div>
                <div className="toggle" />
              </div>
              <div className="setting-row">
                <div className="grow">
                  <div style={{ fontWeight: 600 }}>Product &amp; marketing emails</div>
                  <div className="muted" style={{ fontSize: 13 }}>Optional — separate from essential messages.</div>
                </div>
                <div className="toggle off" />
              </div>
            </div>

            <div className="panel" style={{ marginTop: 18 }}>
              <h2 style={{ fontSize: 17, marginBottom: 6 }}>Privacy &amp; data</h2>
              <div className="setting-row">
                <div className="grow">
                  <div style={{ fontWeight: 600 }}>Export my data</div>
                  <div className="muted" style={{ fontSize: 13 }}>Download your profile, saved colleges, and recommendation history.</div>
                </div>
                <button className="btn btn-ghost">Export</button>
              </div>
              <div className="setting-row">
                <div className="grow">
                  <div style={{ fontWeight: 600, color: "var(--rose-tx)" }}>Delete account</div>
                  <div className="muted" style={{ fontSize: 13 }}>Permanently remove your account and all stored data.</div>
                </div>
                <button className="btn btn-ghost" style={{ color: "var(--rose-tx)", borderColor: "#e6c3c3" }}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
