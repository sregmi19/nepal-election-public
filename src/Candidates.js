import React from "react";
import CandidateProfile from "./CandidateProfile";

export default function Candidates({ candidates }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Candidates</h1>

      {candidates.length === 0 && <p>No candidates available.</p>}

      <div className="grid">
        {candidates.map(c => (
          <CandidateProfile key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
}
