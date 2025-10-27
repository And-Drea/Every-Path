import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProcessPage() {
  const navigate = useNavigate();

  const handleDiamondClick = (path) => {
    navigate(path);
  };

  return (
    <div className="processPageContainer">
      {/* Top Navigation Diamonds */}
      <div className="diamondNav">
        <button
          className="diamondButton greenDiamond"
          onClick={() => handleDiamondClick("/")}
          aria-label="Navigate to Desktop"
        >
          &#9671;
        </button>
        <button
          className="diamondButton redDiamond"
          onClick={() => handleDiamondClick("/resume")}
          aria-label="Navigate to Resume"
        >
          &#9671;
        </button>
        <button
          className="diamondButton blueDiamond activeDiamond"
          onClick={() => handleDiamondClick("/process")}
          aria-label="Navigate to Process"
        >
          &#9671;
        </button>
        <button
          className="diamondButton tealDiamond"
          onClick={() => handleDiamondClick("/another-page")}
          aria-label="Navigate to Another Page"
        >
          &#9671;
        </button>
      </div>

      {/* Page Title */}
      <h1 className="processTitle">Your Process To Success</h1>

      {/* Main Content Area */}
      <div className="contentArea">
        <div className="topCircles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="horizontalLine"></div>

        {/* Skills Section */}
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

        {/* Suggestion & Credential Section */}
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
