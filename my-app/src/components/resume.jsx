import React from 'react';
import '../styles/resume.css'; // Import CSS Module

function ResumePage() {
  return (
    <div className="resumePage">
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

export default ResumePage;