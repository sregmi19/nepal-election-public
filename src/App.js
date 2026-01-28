import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import './App.css';

export default function App() {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({ state: "", district: "", party: "" });

  // Load candidate data from JSON
  useEffect(() => {
    fetch("/candidates.json")
      .then(res => res.json())
      .then(data => setCandidates(data))
     .catch(err => console.error("Failed to load candidates:", err));
 }, []);




  // Filter candidates
  const filteredCandidates = candidates.filter(c =>
    (filters.state === "" || c.state === filters.state) &&
    (filters.district === "" || c.district === filters.district) &&
    (filters.party === "" || c.party === filters.party)
  );

  // Get unique values for filter dropdowns
  const states = [...new Set(candidates.map(c => c.state))];
  const districts = [...new Set(candidates.map(c => c.district))];
  const parties = [...new Set(candidates.map(c => c.party))];

  return (
    <div className="App">
      <h1>Nepal Election Candidates</h1>

      <div className="filters">
        <select onChange={e => setFilters({...filters, state: e.target.value})}>
          <option value="">All States</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select onChange={e => setFilters({...filters, district: e.target.value})}>
          <option value="">All Districts</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select onChange={e => setFilters({...filters, party: e.target.value})}>
          <option value="">All Parties</option>
          {parties.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="candidate-list">
        {filteredCandidates.length === 0 ? (
          <p>No candidates found.</p>
        ) : (
          filteredCandidates.map(c => <CandidateCard key={c.id} candidate={c} />)
        )}
      </div>
    </div>
  );
}
