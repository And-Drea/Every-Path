// src/components/ResumeBuilder.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatPopup from "./chatPop";
import EducationPopup from "./educationPop";
import ProjectPopup from "./projectPop";

export default function ResumeBuilder() {
  const navigate = useNavigate();

  // --- Popup States ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  // --- Data States ---
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    summary: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const [uiStateLoaded, setUiStateLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  // --- Load Saved Data ---
  useEffect(() => {
    try {
      const savedForm = localStorage.getItem("resumeForm");
      const savedEducation = localStorage.getItem("educationList");
      const savedProjects = localStorage.getItem("projectList");
      const savedUI = localStorage.getItem("resumeUI");

      if (savedForm) setFormData(JSON.parse(savedForm));
      if (savedEducation) setEducationList(JSON.parse(savedEducation));
      if (savedProjects) setProjectList(JSON.parse(savedProjects));
      if (savedUI) {
        const obj = JSON.parse(savedUI);
        if (typeof obj.isChatOpen === "boolean") setIsChatOpen(obj.isChatOpen);
        if (typeof obj.isEducationOpen === "boolean")
          setIsEducationOpen(obj.isEducationOpen);
        if (typeof obj.isProjectOpen === "boolean")
          setIsProjectOpen(obj.isProjectOpen);
        if (obj.editingProject) setEditingProject(obj.editingProject);
      }
    } catch (e) {
      console.warn("Error loading localStorage", e);
    } finally {
      setUiStateLoaded(true);
      setDataLoaded(true);
    }
  }, []);

  // --- Auto-Save Data ---
  useEffect(() => {
    if (dataLoaded)
      localStorage.setItem("resumeForm", JSON.stringify(formData));
  }, [formData, dataLoaded]);

  useEffect(() => {
    if (dataLoaded)
      localStorage.setItem("educationList", JSON.stringify(educationList));
  }, [educationList, dataLoaded]);

  useEffect(() => {
    if (dataLoaded)
      localStorage.setItem("projectList", JSON.stringify(projectList));
  }, [projectList, dataLoaded]);

  // --- Save UI state ---
  useEffect(() => {
    if (!uiStateLoaded) return;
    const timeout = setTimeout(() => {
      const ui = {
        isChatOpen,
        isEducationOpen,
        isProjectOpen,
        editingProject,
      };
      localStorage.setItem("resumeUI", JSON.stringify(ui));
    }, 150);
    return () => clearTimeout(timeout);
  }, [isChatOpen, isEducationOpen, isProjectOpen, editingProject, uiStateLoaded]);

  // --- Save on unload ---
  useEffect(() => {
    const handler = () => {
      localStorage.setItem("resumeForm", JSON.stringify(formData));
      localStorage.setItem("educationList", JSON.stringify(educationList));
      localStorage.setItem("projectList", JSON.stringify(projectList));
      const ui = { isChatOpen, isEducationOpen, isProjectOpen, editingProject };
      localStorage.setItem("resumeUI", JSON.stringify(ui));
    };
    window.addEventListener("beforeunload", handler);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") handler();
    });
    return () => {
      window.removeEventListener("beforeunload", handler);
      document.removeEventListener("visibilitychange", handler);
    };
  }, [formData, educationList, projectList, isChatOpen, isEducationOpen, isProjectOpen, editingProject]);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEducation = (data) => setEducationList((prev) => [...prev, data]);

  const handleSaveProject = (project) => {
    if (editingProject) {
      setProjectList((prev) =>
        prev.map((p) =>
          p.projectName === editingProject.projectName ? project : p
        )
      );
      setEditingProject(null);
    } else {
      setProjectList((prev) => [...prev, project]);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsProjectOpen(true);
  };

  const handleClearData = () => {
    localStorage.removeItem("resumeForm");
    localStorage.removeItem("educationList");
    localStorage.removeItem("projectList");
    setFormData({
      fullName: "",
      city: "",
      state: "",
      phone: "",
      email: "",
      summary: "",
    });
    setEducationList([]);
    setProjectList([]);
  };

  return (
    <div className="resume-page relative">

      {/* 🆕 Combined Title and Nav */}
      <div className="top-bar">
        <h1 className="page-title">Build a Resume</h1>
        <div className="top-nav">
          <div className="diamond green" onClick={() => navigate("/")}></div>
          <div className="diamond gray" onClick={() => navigate("/")}></div>
          <div className="diamond pink" onClick={() => navigate("/process")}></div>
          <div className="diamond blue" onClick={() => navigate("/")}></div>
        </div>
      </div>

      <div className="content">
        {/* LEFT SIDE — Form Inputs */}
        <div className="form-section">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} />
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Professional Summary</label>
          <textarea name="summary" value={formData.summary} onChange={handleChange}></textarea>

          <div className="button-group">
            <button>Add Skill</button>
            <button>Add Award</button>
          </div>

          <div className="button-group">
            <button onClick={() => setIsEducationOpen(true)}>Add Education</button>
            <button onClick={() => setIsProjectOpen(true)}>Add Project</button>
          </div>

          <div className="relative block">
            <button className="api-button" onClick={() => setIsChatOpen((p) => !p)}>
              Re-bot
            </button>
            <ChatPopup isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          </div>

          <button onClick={handleClearData} className="clear-button">
            Clear Resume Data
          </button>
        </div>

        {/* RIGHT SIDE — Resume Preview */}
        <div className="containers">
          <div className="container-box resume-preview">
            <h1>{formData.fullName || "Your Full Name"}</h1>
            <p>
              {formData.city || "City"}, {formData.state || "State"} •{" "}
              {formData.phone || "Phone"} • {formData.email || "Email"}
            </p>

            <h2>Professional Summary</h2>
            <p>
              {formData.summary ||
                "Motivated and results-oriented professional with experience in your field."}
            </p>

            {educationList.length > 0 && (
              <>
                <h2>Education</h2>
                {educationList.map((edu, i) => (
                  <div key={i}>
                    <strong>{edu.schoolName}</strong> ({edu.city}, {edu.state})
                    <br />
                    {edu.degree} • {edu.startDate} - {edu.graduationDate}
                    <hr />
                  </div>
                ))}
              </>
            )}

            {projectList.length > 0 && (
              <>
                <h2>Projects</h2>
                {projectList.map((proj, i) => (
                  <div key={i}>
                    <strong>{proj.projectName}</strong> — “{proj.role}”, {proj.startDate}, {proj.endDate},{" "}
                    {proj.linkUrl && (
                      <a
                        href={proj.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4ea1ff" }}
                      >
                        {proj.linkText || proj.linkUrl}
                      </a>
                    )}
                    <p style={{ marginTop: "6px", whiteSpace: "pre-line" }}>
                      {proj.description}
                    </p>
                    <button
                      className="edit-button"
                      onClick={() => handleEditProject(proj)}
                    >
                      Edit
                    </button>
                    <hr />
                  </div>
                ))}
              </>
            )}
          </div>

          {/* 🆕 Static Tip Message */}
          <div className="user-message">
            💡 Build a standard Resume in a fast and simple way!
              Add projects, core skill and education details to show recruiters
              why they should choose you! Don't worry everything is saved 
              -Re-bot is here to help assist you and answer any questons!
          </div>
        </div>
      </div>

      {/* Popups */}
      <EducationPopup
        isOpen={isEducationOpen}
        onClose={() => setIsEducationOpen(false)}
        onSave={handleSaveEducation}
      />
      <ProjectPopup
        isOpen={isProjectOpen}
        onClose={() => {
          setIsProjectOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        editingProject={editingProject}
      />
    </div>
  );
}
