import React, { useState } from "react";

// Default placeholder image and bio
const DEFAULT_PHOTO = "/images/placeholder.jpg";
const DEFAULT_BIO = "No biography available.";

export default function CandidateProfile({ candidate }) {
  if (!candidate) return null;

  const [imgSrc, setImgSrc] = useState(candidate.photo || DEFAULT_PHOTO);

  // Handle broken/missing image
  const handleError = () => setImgSrc(DEFAULT_PHOTO);

  return (
    <div className="candidate-card">
      {/* Photo */}
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
