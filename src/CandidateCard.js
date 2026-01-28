import React from "react";
import PropTypes from "prop-types";

export default function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card">
      {candidate.photo && (
        <img
          src={candidate.photo}
          alt={candidate.name}
          className="candidate-photo"
        />
      )}
      <h2>{candidate.name}</h2>
      <p><strong>Party:</strong> {candidate.party}</p>
      <p><strong>Constituency:</strong> {candidate.constituency}</p>
      <p><strong>District:</strong> {candidate.district}</p>
      <p><strong>State:</strong> {candidate.state}</p>
      <p>{candidate.bio}</p>
    </div>
  );
}

CandidateCard.propTypes = {
  candidate: PropTypes.object.isRequired,
};
