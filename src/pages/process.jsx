import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProcessPage() {
  const navigate = useNavigate();

  return (
    <div className="processPageContainer">
      {/* ===== Top Navigation Bar ===== */}
      <div className="navBar">
        <div className="navButtons">
          <button onClick={() => navigate("/desktop")}>Desktop</button>
          <button onClick={() => navigate("/resume")}>Resume</button>
          <button onClick={() => navigate("/process")}>Process</button>
          <button onClick={() => navigate("/job-board")}>Jobs</button>
        </div>
        <h1 className="navTitle">Your Process To Success</h1>
      </div>

      {/* ===== Main Content ===== */}
      <div className="contentArea">
        <div className="topCircles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="horizontalLine"></div>

        <h2 className="sectionTitle">Skills</h2>
        <div className="skillsGrid">
          <div className="largeRectangle">
            <p>Front-End Development: React, JavaScript, HTML, CSS</p>
          </div>
          <div className="largeRectangle">
            <p>Back-End Development: Node.js, Python, Databases</p>
          </div>
          <div className="largeRectangle">
            <p>Tools & Technologies: Git, Docker, Cloud Platforms</p>
          </div>
        </div>

        <div className="suggestionArea">
          <div className="verticalRectangle">
            <p>New Idea / Project Suggestion</p>
          </div>

          <div>
            <h2 className="sectionTitle">Credential</h2>
            <div className="credentialsGrid">
              <div className="smallRectangle">
                <p>Cert. in Web Dev.</p>
              </div>
              <div className="smallRectangle">
                <p>Cert. in Cloud Arch.</p>
              </div>
              <div className="smallRectangle">
                <p>Project Mgmt Cert.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
