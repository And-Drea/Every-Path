// src/components/EducationPopup.jsx
import React, { useState, useEffect } from "react";
import "../styles/educationPop.css";

export default function EducationPopup({ isOpen, onClose, onSave }) {
  const [educationData, setEducationData] = useState({
    schoolName: "",
    city: "",
    state: "",
    startDate: "",
    graduationDate: "",
    degree: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data and close popup
  const handleSubmit = () => {
    onSave(educationData);
    onClose();
  };

  if (!isOpen) return null; // Don't render if popup is closed

  return (
    <div className="education-overlay">
      <div className="education-popup">
        {/* Exit Diamond */}
        <div className="exit-diamond" onClick={onClose}></div>

        <div className="education-content">
          <label>school name</label>
          <input
            type="text"
            name="schoolName"
            value={educationData.schoolName}
            onChange={handleChange}
          />

          <div className="row">
            <div className="half">
              <label>city</label>
              <input
                type="text"
                name="city"
                value={educationData.city}
                onChange={handleChange}
              />
            </div>
            <div className="half">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={educationData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="half">
              <label>start date</label>
              <input
                type="text"
                name="startDate"
                value={educationData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="half">
              <label>Graduation date</label>
              <input
                type="text"
                name="graduationDate"
                value={educationData.graduationDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <label>degree/ certificate</label>
          <input
            type="text"
            name="degree"
            value={educationData.degree}
            onChange={handleChange}
          />

          <button className="save-btn" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
