// The in-product top navigation bar, reused on the app screens.
import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="inner">
        <Link href="/" className="brand">
          <span className="mark">U</span>
          UniSeek
        </Link>
        <div className="links">
          <Link href="/dashboard">Recommendations</Link>
          <Link href="/search">Search</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/guidance">Guidance</Link>
          <Link href="/settings">Settings</Link>
        </div>
        <Link href="/settings" className="avatar" aria-label="Account">DR</Link>
      </div>
    </nav>
  );
}
