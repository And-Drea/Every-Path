import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobDatabase from "../services/jobData"; // adjust path

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobDatabase[id];

  if (!job) {
    return (
      <div className="jobDetailContainer">~
        <h2 className="notFoundText">Job not found.</h2>
        <button className="backButton" onClick={() => navigate("/job-board")}>
          Back to Job Board
        </button>
      </div>
    );
  }

  // normalize important requirements into an array for rendering
  const requirementsList = Array.isArray(job.importants)
    ? job.importants
    : job.important
    ? typeof job.important === "string"
      ? (function normalizeImportant(str) {
          // try splitting on common separators first
          const primarySplit = str.split(/\r?\n|;|\u2022|\|/).map((s) => s.trim()).filter(Boolean);
          if (primarySplit.length > 1) return primarySplit;

          // if no primary separators, split on sentence endings
          const sentenceSplit = str.split(/\.\s+/).map((s) => s.trim()).filter(Boolean);
          if (sentenceSplit.length > 1) return sentenceSplit;

          // if still single, try commas when there are multiple commas
          const commaCount = (str.match(/,/g) || []).length;
          if (commaCount >= 1) {
            const commaSplit = str.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
            if (commaSplit.length > 1) return commaSplit;
          }

          // as a last resort split on ' and ' (but avoid splitting common phrases like 'Bachelor of Science and')
          if (/\band\b/i.test(str)) {
            const andSplit = str.split(/\sand\s/i).map((s) => s.trim()).filter(Boolean);
            if (andSplit.length > 1) return andSplit;
          }

          // fallback: single item
          return [str.trim()];
        })(job.important)
      : Array.isArray(job.important)
      ? job.important
      : [String(job.important)]
    : [];

  // generic normalizer: accept arrays or strings and return an array of trimmed items
  function normalizeFieldToList(field) {
    if (!field && field !== 0) return [];
    if (Array.isArray(field)) return field.map((s) => String(s).trim()).filter(Boolean);
    if (typeof field === "string") {
      // try same separators as requirements: newlines, semicolons, bullets, pipes
      const primary = field.split(/\r?\n|;|\u2022|\|/).map((s) => s.trim()).filter(Boolean);
      if (primary.length > 1) return primary;
      const sentence = field.split(/\.\s+/).map((s) => s.trim()).filter(Boolean);
      if (sentence.length > 1) return sentence;
      const commaCount = (field.match(/,/g) || []).length;
      if (commaCount >= 1) {
        const commaSplit = field.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
        if (commaSplit.length > 1) return commaSplit;
      }
      return [field.trim()];
    }
    // fallback: stringify
    return [String(field)];
  }

  return (
    <div className="jobDetailContainer">
      {/* ===== Page Header ===== */}
      <div className="jobHeader">
        <h1 className="jobTitle">{job.jobName}</h1>
        <button className="backButton" onClick={() => navigate("/job-board")}>
          ← Back
        </button>
      </div>

      {/* ===== Main Layout ===== */}
      <div className="jobDetailGrid">
        {/* Left: Requirements */}
        <div className="leftPanel">
          <h2>Important Requirements</h2>
          <ul>
            {requirementsList.length > 0 ? (
              requirementsList.map((req, idx) => <li key={idx}>{req}</li>)
            ) : (
              <li>No specific requirements listed.</li>
            )}
          </ul>
        </div>

        {/* Right: Job Info */}
        <div className="rightPanel">
          <div className="infoBox">
            <h3>Job Details</h3>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Starting Salary:</strong> ${job.startingSalary || "—"}</p>
            <p><strong>Date:</strong> {job.date || "Ongoing"}</p>
          </div>

          <div className="descriptionBox">
            <h3>Description</h3>
            <p>{job.description}</p>
          </div>

          <div className="overallBox">
            <h3>Overall Description</h3>
            <p>{job.overallDescription}</p>
          </div>
        </div>
      </div>

      {/* ===== Additional Info Section ===== */}
      <div className="additionalSection">
        <h2>Additional Information</h2>
        <div className="additionalGrid">
          <div className="infoCard">
            <h3>Skills</h3>
            {Array.isArray(job.skills) ? (
              job.skills.length > 0 ? (
                <ul>
                  {job.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p>No specific skills listed.</p>
              )
            ) : job.skills ? (
              <p>{String(job.skills)}</p>
            ) : (
              <p>No specific skills listed.</p>
            )}
          </div>
          <div className="infoCard">
            <h3>Certificates</h3>
            <p>{job.certificates || "No certificates required."}</p>
          </div>
          <div className="infoCard">
            <h3>Connections</h3>
            <p>{job.connections || "No connections required."}</p>
          </div>
        </div>
      </div>

      {/* ===== Bottom Action ===== */}
      <div className="bottomSection">
        <button className="startButton">Start Working</button>
      </div>
    </div>
  );
}
