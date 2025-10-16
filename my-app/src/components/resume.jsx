import React from 'react';
import '../styles/resume.css'; // Import CSS 
import { useNavigate } from 'react-router-dom';

export default function ResumePage() {
    const navigate = useNavigate();
    const handleDiamondClick = (path) => {
    navigate(path);
    }
    
  return (
    <div className="resumePage">
        <div classname= "diamondNav">
            <button
          className={`${"diamondButton"} ${"greenDiamond"}`}
          onClick={() => handleDiamondClick('/')} // Example: navigate to Desktop
          aria-label="Navigate to Desktop"
        >
          &#9671; {/* Diamond Unicode character */}
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
        
      <h1>Your Resume</h1>
      <p>This page will display your professional resume content.</p>
      <p>You can add sections like: Education, Experience, Skills, Projects, etc.</p>
      <section className="resumeSection">
        <h2>Education</h2>
        <p>University of Example, Bachelor of Science in Computer Science (2020)</p>
        <h2>Experience</h2>
        <p>Software Engineer at Tech Corp (2020-Present)</p>
      </section>
    </div>
  );
}
