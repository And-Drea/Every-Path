// src/components/SkillsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SkillsPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handlers for the diamond navigation
  const handleDiamondClick = (path) => {
    navigate(path);
  };

  return (
    <div className="skillsPageContainer">
      {/* Top Navigation Diamonds */}
      <div className="diamondNav">
        <button
          className="diamondButton greenDiamond"
          onClick={() => handleDiamondClick('/')} // Example: navigate to Desktop
          aria-label="Navigate to Desktop"
        >
          &#9671; {/* Diamond Unicode character */}
        </button>
        <button
          className={`${"diamondButton"} ${"brownDiamond"}`}
          onClick={() => handleDiamondClick('/resume')} // Example: navigate to Resume
          aria-label="Navigate to Resume"
        >
          &#9671;
        </button>
        <button
          className={`${"diamondButton"} ${"orangeDiamond"}`}
          onClick={() => handleDiamondClick('/process')} // Example: navigate to Process
          aria-label="Navigate to Process"
        >
          &#9671;
        </button>
        <button
          className={`${"diamondButton"} ${"blueDiamond"}`}
          onClick={() => handleDiamondClick('/another-page')} // Example: another page
          aria-label="Navigate to Another Page"
        >
          &#9671;
        </button>
      </div>

      {/* Main Content Area */}
      <div className="contentArea">
        {/* Top Circles */}
        <div className="topCircles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="horizontalLine"></div> {/* Separator line */}

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

        {/* Suggestion Section */}
        <div className="suggestionArea">
          <div className="verticalRectangle">
            <p>New Idea / Project Suggestion</p>
          </div>
          <div>
            <h2 className="sectionTitle" >Credential</h2> {/* Renamed to Credential from the image */}
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