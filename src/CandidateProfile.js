import React, { useState } from "react";

// Default placeholder image and bio
const DEFAULT_PHOTO = "/images/placeholder.jpg";
const DEFAULT_BIO = "No biography available.";

export default function CandidateProfile({ candidate }) {
  // Hooks must be at the top
  const [imgSrc, setImgSrc] = useState(candidate?.photo || DEFAULT_PHOTO);

  // If candidate is null/undefined, show nothing
  if (!candidate) return null;

  const handleError = () => setImgSrc(DEFAULT_PHOTO);

  return (
    <div className="candidate-card">
      <img
        src={imgSrc}
        alt={candidate.name || "Unknown Candidate"}
        className="candidate-photo"
        onError={handleError} // fallback to placeholder if image is missing
      />

      <div className="candidate-body">
        <h3>{candidate.name || "Unknown Candidate"}</h3>
        <p className="party">{candidate.party || "Independent"}</p>
        <p>
          {candidate.constituency || "N/A"} • {candidate.district || "N/A"},{" "}
          {candidate.state || "N/A"}
        </p>
        <p className="bio">{candidate.bio?.trim() || DEFAULT_BIO}</p>
      </div>
    </div>
  );
}
