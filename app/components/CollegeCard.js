// A single recommendation card for the dashboard.
import Link from "next/link";
import { MatchBadge, AdmissionBadge, ConfidenceBadge } from "./Badges";

export default function CollegeCard({ college }) {
  return (
    <div className="card college-card">
      <div className="college-photo" style={{ background: college.accent }}>
        {college.initial}
      </div>
      <div className="college-body">
        <div>
          <h3>{college.name}</h3>
          <div className="place">{college.location} · {college.type}</div>
        </div>

        <div className="label-row">
          <MatchBadge level={college.match} />
          <AdmissionBadge level={college.admission} />
        </div>
        <ConfidenceBadge level={college.confidence} />

        <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{college.reason}</p>

        <div className="card-actions">
          <Link href="/explorer" className="btn btn-primary">Explore</Link>
          <Link href="/compare" className="btn btn-ghost">Compare</Link>
        </div>
      </div>
    </div>
  );
}
