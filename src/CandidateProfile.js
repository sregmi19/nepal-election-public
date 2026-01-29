import React from "react";

export default function CandidateProfile({ candidate }) {
  if (!candidate) return null;

  return (
    <div className="candidate-card">
      <img
        src={candidate.photo || "/images/placeholder.jpg"}
        alt={candidate.name}
        className="candidate-photo"
      />

      <div className="candidate-body">
        <h3>{candidate.name}</h3>
        <p className="party">{candidate.party}</p>

        <p>
          {candidate.constituency} • {candidate.district}, {candidate.state}
        </p>

        <p className="bio">{candidate.bio}</p>
      </div>
    </div>
  );
}
