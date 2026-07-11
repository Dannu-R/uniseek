// The three UniSeek labels, as tiny reusable components.
// UniSeek deliberately keeps Match Strength, Admission Category, and
// Confidence separate because they answer three different questions.

// Match Strength: personal fit (High / Medium / Low)
export function MatchBadge({ level }) {
  const color = level === "High" ? "b-green" : level === "Medium" ? "b-amber" : "b-gray";
  return <span className={`badge ${color}`}>{level} Match</span>;
}

// Admission Category: how likely you are to get in (Reach / Match / Safety)
export function AdmissionBadge({ level }) {
  const color = level === "Reach" ? "b-rose" : level === "Match" ? "b-blue" : "b-green";
  return <span className={`badge ${color}`}>{level}</span>;
}

// Confidence: how sure we are about this conclusion (High / Medium / Low)
export function ConfidenceBadge({ level }) {
  const dot = level === "High" ? "dot-green" : level === "Medium" ? "dot-amber" : "dot-gray";
  return (
    <span className="conf">
      <span className={`dot ${dot}`} />
      {level} confidence
    </span>
  );
}
