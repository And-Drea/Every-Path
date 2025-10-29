// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DesktopPage from './pages/desktop';
import ResumePage from './pages/resume';
import ProcessPage from './pages/process';
import JobBoard from './pages/jobSeek';
 // Import global styles
import './styles/desktop.css'; // Import desktop styles
import './styles/resume.css'; // Import resume styles
import './styles/process.css'; // Import process styles
import './styles/jobseek.css'; // Import job board styles

 
export default function App() {
  return (
    <>
    <Router>       
        <Routes>
          <Route path="/" element={<DesktopPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          <Route path="/job-board" element={<JobBoard />} />
        </Routes>
    </Router>
    </>
  );
}