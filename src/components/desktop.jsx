import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/pfp.jpg'; // correct relative path: components -> ../assets


export default function DesktopPage() {
  // Profile data (use const so variables are defined in this module scope)
  const name = "John Doe";
  const age = 25;
  const email = "johndoe@email.com";
  const occupation = "Developer at Company";

  const navigate = useNavigate();

 //default for buttons that don't work yet
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
//buttons that work 
/* resume  */
  const handleResumeClick = () => {
    navigate('/resume');
  };

/* process  */
 const handleProcessClick = () => {
    navigate('/process');
  };
 

  return (
    <div className="desktopPage">
      {/* Top Right Icon */}

      {/* Profile Section */}
      <div className="profileSection">
        <div className="profileCircle">
          <img src={profileImage} alt="Profile" className="profileImage" />
          {/* <img src="path/to/your/image.jpg" alt="Profile" className="profileImage} /> */}
        </div>
        <div className="profileInfo">
          <p>{name}, {age}</p>
          <p>{email}</p>
          <p>{occupation}</p>
        </div>
      </div>

      {/* defult buttons */}
      <div className="buttonsGrid">
        <button className="actionButton" onClick={handleSkillsClick}>
          SKILLS
        </button>
        <button  className="actionButtonLink" onClick={handleCredentialsClick}> {/* Use handler for navigation */}
          CREDENTAILS
        </button>

        <button  className="actionButtonLink" onClick= {()=> navigate("/resume")}> 
          RESUME
        </button>

        <button className="actionButton" onClick={handleJobsClick}>
          JOBS
        </button>
      </div>

      {/* Progress Button  */}
      <button className={`${"actionButton"} ${"progressButton"}`} onClick={handleProcessClick}> 
        PROGRESS
      </button>
    </div>
  );
}