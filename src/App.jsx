import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DesktopPage from './pages/desktop';
import ResumePage from './pages/resume';
import ProcessPage from './pages/process';
import JobBoard from './pages/jobSeek';
import JobInfo from './pages/jobInfo';
import AboutMe from './pages/aboutMe';
import Login from './pages/login';

 // Import global styles
import './styles/desktop.css'; // Import desktop styles
import './styles/resume.css'; // Import resume styles
import './styles/process.css'; // Import process styles
import './styles/jobseek.css'; // Import job board styles
import './styles/jobInfo.css'; // Import job info styles
import './styles/aboutMe.css'; // Import about me styles
import './styles/login.css'; // Import login styles


 
export default function App() {
  return (
    <>
    <Router>       
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/desktop" element={<DesktopPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/job/:id" element={<JobInfo />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
    </>
  );
}