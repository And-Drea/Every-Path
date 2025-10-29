// src/components/JobBoard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobDatabase from "../services/jobData";

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    date: "",
  });

  const navigate = useNavigate(); // navigation hook

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Search + Filter logic
  const filteredJobs = jobDatabase.filter((job) => {
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      !term ||
      Object.values(job).some((field) => {
        if (Array.isArray(field)) {
          return field.some((item) =>
            String(item).toLowerCase().includes(term)
          );
        }
        return String(field).toLowerCase().includes(term);
      });

    const matchesType =
      !filters.type || job.type.toLowerCase() === filters.type.toLowerCase();

    const matchesLocation =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());

    const matchesDate =
      !filters.date ||
      job.deadline.toLowerCase().includes(filters.date.toLowerCase());

    return matchesSearch && matchesType && matchesLocation && matchesDate;
  });

  const visibleJobs = filteredJobs.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  // Dropdown data
  const jobTypes = [...new Set(jobDatabase.map((j) => j.type))];
  const jobLocations = [...new Set(jobDatabase.map((j) => j.location))];
  const jobDates = [...new Set(jobDatabase.map((j) => j.deadline))];

  return (
    <div className="job-board">
      {/* ===== HEADER WITH NAVIGATION ===== */}
      <header className="header">
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Desktop</button>
          <button onClick={() => navigate("/resume")}>Resume</button>
          <button onClick={() => navigate("/process")}>Process</button>
        </div>
        <h1 className="page-title">Job Seeking</h1>
      </header>

      {/* ===== SEARCH BAR ===== */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search any keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-layout">
        {/* ===== FILTER SECTION ===== */}
        <div className="filter-section">
          <h4>Filter</h4>

          <label>
            Type:
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
            >
              <option value="">All</option>
              {jobTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Location:
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="">All</option>
              {jobLocations.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </label>

          <label>
            Deadline:
            <select
              value={filters.date}
              onChange={(e) => handleFilterChange("date", e.target.value)}
            >
              <option value="">All</option>
              {jobDates.map((date, i) => (
                <option key={i} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* ===== JOB CARDS ===== */}
        <div className="jobs-section">
          {visibleJobs.length > 0 ? (
            visibleJobs.map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.jobName}</h3>
                <p>Type: {job.type}</p>
                <p>Location: {job.location}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No jobs found.</p>
          )}

          {visibleCount < filteredJobs.length && (
            <button onClick={handleLoadMore} className="more-button">
              More...
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
