import React, { useState } from "react";
import CandidateProfile from "./CandidateProfile";

export default function Candidates({ candidates }) {
  const [party, setParty] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  // Unique values for filters
  const parties = [...new Set(candidates.map(c => c.party))];
  const states = [...new Set(candidates.map(c => c.state))];
  const districts = [...new Set(candidates.map(c => c.district))];

  // Filter logic
  const filteredCandidates = candidates.filter(c => {
    return (
      (!party || c.party === party) &&
      (!state || c.state === state) &&
      (!district || c.district === district)
    );
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Candidates</h1>

      {/* FILTERS */}
      <div className="filters">
        <select value={party} onChange={e => setParty(e.target.value)}>
          <option value="">All Parties</option>
          {parties.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <select value={state} onChange={e => setState(e.target.value)}>
          <option value="">All States</option>
          {states.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select value={district} onChange={e => setDistrict(e.target.value)}>
          <option value="">All Districts</option>
          {districts.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* RESULTS */}
      {filteredCandidates.length === 0 && (
        <p>No candidates match the selected filters.</p>
      )}

      <div className="grid">
        {filteredCandidates.map(c => (
          <CandidateProfile key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
}
