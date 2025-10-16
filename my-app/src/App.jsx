// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DesktopPage from './components/desktop';
import ResumePage from './components/resume';
import ProcessPage from './components/process';
 // Import global styles
import './styles/desktop.css'; // Import desktop styles
import './styles/resume.css'; // Import resume styles
import './styles/process.css'; // Import process styles

 
export default function App() {
  return (
    <>
    <Router>       
        <Routes>
          <Route path="/" element={<DesktopPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    </Router>
    </>
  );
}