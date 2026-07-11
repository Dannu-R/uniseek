// Site footer (Epic 1 requires privacy / terms / help / contact links).
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="col">
          <div className="brand" style={{ color: "#fff" }}>
            <span className="mark">U</span> UniSeek
          </div>
          <p style={{ fontSize: 13, maxWidth: 240, color: "#a9c9ba" }}>
            Discover colleges that fit you — with evidence, not just rankings.
          </p>
        </div>
        <div className="col">
          <h4>Product</h4>
          <Link href="/intake">Get started</Link>
          <Link href="/dashboard">Recommendations</Link>
          <Link href="/search">Search colleges</Link>
        </div>
        <div className="col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Contact</a>
        </div>
        <div className="col">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Help &amp; support</a>
        </div>
      </div>
    </footer>
  );
}
