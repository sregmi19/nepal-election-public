import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Home({ candidates }) {
  // ---------- Derived Stats ----------
  const totalCandidates = candidates.length;
  const parties = [...new Set(candidates.map(c => c.party))];
  const states = [...new Set(candidates.map(c => c.state))];
  const constituencies = [...new Set(candidates.map(c => c.constituency))];

  // ---------- Aggregations ----------
  const partyCount = {};
  const stateCount = {};

  candidates.forEach(c => {
    partyCount[c.party] = (partyCount[c.party] || 0) + 1;
    stateCount[c.state] = (stateCount[c.state] || 0) + 1;
  });

  // ---------- Charts ----------
  const partyChart = {
    labels: Object.keys(partyCount),
    datasets: [
      {
        label: "Candidates by Party",
        data: Object.values(partyCount),
        backgroundColor: "#b30000"
      }
    ]
  };

  const stateChart = {
    labels: Object.keys(stateCount),
    datasets: [
      {
        label: "Candidates by State",
        data: Object.values(stateCount),
        backgroundColor: "#003366"
      }
    ]
  };

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <h1>Nepal General Election Portal</h1>
        <p>
          A neutral public platform providing election facts, voter context,
          and candidate information for Nepal’s upcoming general election.
        </p>
      </section>

      {/* KEY STATS */}
      <section className="stats-grid">
        <div className="stat-card">
          <h2>{totalCandidates}</h2>
          <p>Candidates</p>
        </div>
        <div className="stat-card">
          <h2>{parties.length}</h2>
          <p>Political Parties</p>
        </div>
        <div className="stat-card">
          <h2>{states.length}</h2>
          <p>States Covered</p>
        </div>
        <div className="stat-card">
          <h2>{constituencies.length}</h2>
          <p>Constituencies</p>
        </div>
      </section>

      {/* CHARTS */}
      <section className="charts">
        <h2>Candidate Distribution</h2>

        <div className="chart-box">
          <Bar data={partyChart} />
        </div>

        <div className="chart-box">
          <Bar data={stateChart} />
        </div>
      </section>

      {/* VOTER & ELECTION FACTS */}
      <section className="facts">
        <h2>Voter Demographics & Election Facts</h2>

        <div className="facts-grid">
          <div>
            <h3>Voter Demographics</h3>
            <ul>
              <li>Total Registered Voters: ~18 million</li>
              <li>Female Voters: ~49%</li>
              <li>Male Voters: ~51%</li>
              <li>Youth Voters (18–35): ~40%</li>
            </ul>
          </div>

          <div>
            <h3>Election Facts</h3>
            <ul>
              <li>Election Type: Federal Parliamentary</li>
              <li>Total Seats: 275</li>
              <li>Direct (FPTP): 165</li>
              <li>Proportional Representation: 110</li>
              <li>Voting System: Mixed (FPTP + PR)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer">
        <p>
          This platform is for public information only. It does not endorse any
          political party or candidate. Data is compiled from publicly available
          sources.
        </p>
      </section>
    </div>
  );
}
