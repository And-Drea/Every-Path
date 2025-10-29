// src/components/projectPop.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projectPop.css";

export default function ProjectPopup({ isOpen, onClose, onSave, editingProject }) {
  const [projectData, setProjectData] = useState({
    projectName: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
    linkUrl: "",
    linkText: "",
  });

  // Load existing data if editing
  useEffect(() => {
    if (editingProject) setProjectData(editingProject);
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(projectData);
    onClose();
    setProjectData({
      projectName: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
      linkUrl: "",
      linkText: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="popup-box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2>{editingProject ? "Edit Project" : "Add Project"}</h2>

            <label>Project Name</label>
            <input
              type="text"
              name="projectName"
              value={projectData.projectName}
              onChange={handleChange}
            />

            <label>Role</label>
            <input
              type="text"
              name="role"
              value={projectData.role}
              onChange={handleChange}
            />

            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              placeholder="e.g., Jan 2024"
              value={projectData.startDate}
              onChange={handleChange}
            />

            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              placeholder="e.g., Apr 2024"
              value={projectData.endDate}
              onChange={handleChange}
            />

            <label>Description (2–3 bullet points)</label>
            <textarea
              name="description"
              placeholder="Built and deployed a project that solved X..."
              value={projectData.description}
              onChange={handleChange}
            ></textarea>

            <label>Optional Link URL</label>
            <input
              type="text"
              name="linkUrl"
              placeholder="https://example.com"
              value={projectData.linkUrl}
              onChange={handleChange}
            />

            <label>Optional Link Display Text</label>
            <input
              type="text"
              name="linkText"
              placeholder="View Project"
              value={projectData.linkText}
              onChange={handleChange}
            />

            <div className="popup-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={onClose} className="cancel-btn">
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
