import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/pfp.jpg'; // correct relative path: components -> ../assets

export default function DesktopPage() {
  const name = "John Doe";
  const age = 25;
  const email = "johndoe@email.com";
  const occupation = "Developer at Company";

  const navigate = useNavigate();

  // Button handlers
  const handleSkillsClick = () => {
    alert('Skills button clicked! (You can add a modal or section display here)');
  };

  const handleCredentialsClick = () => {
    alert('Credentials button clicked! (You can add a modal or section display here)');
  };

  const handleJobsClick = () => {
    navigate('/job-board');
  };

  const handleResumeClick = () => {
    navigate('/resume');
  };

  const handleProcessClick = () => {
    navigate('/process');
  };

  // 🔹 NEW: navigate to About Me
  const handleAboutClick = () => {
    navigate('/');
  };

  return (
    <div className="desktopPage">
      {/* Profile Section */}
      <div className="profileSection">
        <div className="profileTop">
           {/* 🔹 New About Me Button next to profile */}
          <button className="aboutButton" onClick={handleAboutClick}>
            About Me
          </button>
          <div className="profileCircle">
            <img src={profileImage} alt="Profile" className="profileImage" />
          </div>
         
        </div>

        <div className="profileInfo">
          <p>{name}, {age}</p>
          <p>{email}</p>
          <p>{occupation}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttonsGrid">
        <button className="actionButton" onClick={handleSkillsClick}>
          SKILLS
        </button>
        <button className="actionButtonLink" onClick={handleCredentialsClick}>
          CREDENTIALS
        </button>
        <button className="actionButtonLink" onClick={handleResumeClick}>
          RESUME
        </button>
        <button className="actionButton" onClick={handleJobsClick}>
          JOBS
        </button>
      </div>

      {/* Progress Button */}
      <button className="actionButton progressButton" onClick={handleProcessClick}>
        PROGRESS
      </button>
    </div>
  );
}
