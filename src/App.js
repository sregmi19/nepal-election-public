import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Candidates from "./Candidates";
import "./App.css";

export default function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("/candidates.json")
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(() => setCandidates([]));
  }, []);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/candidates">Candidates</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home candidates={candidates} />} />
        <Route path="/candidates" element={<Candidates candidates={candidates} />} />
      </Routes>
    </Router>
  );
}
