// src/components/ProcessPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

import '../styles/process.css'; // Import CSS Module

function ProcessPage() {
  return (
    <div className="processPage">
      <h1>Our Process</h1>
      <p>This page outlines the steps or workflow involved in your project or service.</p>
      <ol className="processList">
        <li>
          <h3>Step 1: Ideation and Planning</h3> Define goals and requirements.
        </li>
        <li>
          <h3>Step 2: Design and Development</h3> Create mockups, write code.
        </li>
        <li>
          <h3>Step 3: Testing and Quality Assurance</h3> Ensure everything works as expected.
        </li>
        <li>
          <h3>Step 4: Deployment</h3> Launch the application.
        </li>
        <li>
          <h3>Step 5: Maintenance and Updates</h3> Ongoing support and improvements.
        </li>
      </ol>
    </div>
  );
}

export default ProcessPage;