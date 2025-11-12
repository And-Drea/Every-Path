// src/components/AboutMe.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="aboutPage">
      {/* ===== TITLE ===== */}
      <h1 className="aboutTitle">Every-Path</h1>
      <p className="aboutSubtitle">Start exploring your career journey!</p>

      {/* ===== MAIN CARD ===== */}
      <div className="aboutCard">
        <h2>Check Out Jobs</h2>
        <p>
          Browse different opportunities that match your interests and explore
          what paths are available for you.
        </p>

        <h2>Pick One to Begin</h2>
        <p>
          Choose a job path you’d like to focus on and start learning what it
          takes to succeed in that role.
        </p>

        <h2>Work Toward Qualifying</h2>
        <p>
          Build the skills, gain experience, and learn everything you need to
          become the best candidate for that job.
        </p>

        <h2>Already Prepared?</h2>
        <p>
          Great! You’re ready to take the next step toward your dream career.
        </p>

        <h2>Create Your Resume</h2>
        <p>
          Showcase your strengths, highlight your achievements, and get your
          resume ready to send out to employers.
        </p>

        <h2>Test Your Skills</h2>
        <p>
          Challenge yourself with practice tests, simulations, or real-world
          projects to see how well you’re prepared.
        </p>

        <h2>Earn Certificates</h2>
        <p>
          Collect as many certifications as you can to stand out and prove your
          expertise in your chosen field.
        </p>
      </div>

      {/* ===== BUTTON ===== */}
      <button className="peekButton" onClick={() => navigate("/desktop")}>
        Peek as a User
      </button>

      {/* ===== FOOTER ===== */}
      <footer className="aboutFooter">
        <p>© {new Date().getFullYear()} Every Path — Built for Growth 💙</p>
      </footer>
    </div>
  );
}
