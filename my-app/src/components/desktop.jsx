// src/components/DesktopPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
 // Import CSS Module


export default function DesktopPage() {
  const navigate = useNavigate();


 //defult for buttons that dont work yet
/* skills   */
  const handleSkillsClick = () => {
    alert('Skills button clicked! (You can add a modal or section display here)');
  };

/* credentuils   */
const handleCredentialsClick = () => {
    alert('Credentials button clicked! (You can add a modal or section display here)');
}
/* jobs   */
const handleJobsClick = () => {
    alert('Jobs button clicked! (You can add a modal or section display here)');
}

// working buttons 

/* resume  */
  const handleProcessClick = () => {
    navigate('/process');
  };

/* process  */
 const handleResumeClick = () => {
    navigate('/resume');
  };


  return (
    <div className="desktopPage">
      {/* Top Right Icon */}
      <div className="topRightIcon">&#9671;</div> {/* Diamond unicode character */}

      {/* Profile Section */}
      <div className="profileSection">
        <div className="profileCircle">
          <img src="./assets/pfp.jpg" alt="Profile" className="profileImage" />
          {/* <img src="path/to/your/image.jpg" alt="Profile" className="profileImage} /> */}
        </div>
        <div className="profileInfo">
          <p>Andre rodriguez alameda, 18</p>
          <p>Andrearodakam@Gmail.com</p>
          <p>Dev. Google/ intern. Accenture</p>
        </div>
      </div>

      {/* defult buttons */}
      <div className="buttonsGrid">
        <button className="actionButton" onClick={handleSkillsClick}>
          SKILLS
        </button>
        
        <button className="actionButton" onClick={handleCredentialsClick}>
          CREDENTIALS
        </button>

        <button  className="actionButtonLink" onClick= {()=> navigate("/resume")}> {/* Use Link for navigation */}
          RESUME
        </button>

        <button className="actionButton" onClick={handleJobsClick}>
          JOBS
        </button>
      </div>

      {/* Progress Button  */}
      <button className={`${"actionButton"} ${"progressButton"}`} onClick={handleProcessClick}> {/* Now a regular button */}
        PROGRESS
      </button>
    </div>
  );
}
