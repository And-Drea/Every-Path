// src/components/AboutMe.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="aboutPage">
      {/* ===== TITLE ===== */}
      <h1 className="aboutTitle">Every Path</h1>
      <p className="aboutSubtitle">Your Journey. Your Growth. Your Choice.</p>

      {/* ===== MAIN CARD ===== */}
      <div className="aboutCard">
        <h2>Our Mission</h2>
        <p>
        For each induvial is free to choose there path to  specific jobs,  —{" "}
          <span className="highlight">
            working their way to become to loudest in the room.
          </span>{" "}
          Whether it’s gaining new skills, earning experience, or building a
          resume that speaks for you, Every Path gives you the tools to grow,
          learn, and shine.
        </p>

        <h2>What We Stand For</h2>
        <ul>
          <li>Empowering people to define success on their own terms</li>
          <li>Creating real opportunities for skill-building and growth</li>
          <li>Helping you become the loudest in the room — through your own effort</li>
        </ul>

        <h2>Why We Built This</h2>
        <p>
          Sometimes, all you need is a little push — a chance to prove your
          potential. Every Path is that push, designed to help you become{" "}
          <strong>the prize employers are searching for.</strong> It’s not about
          where you start, but the strength you build along the way.
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
