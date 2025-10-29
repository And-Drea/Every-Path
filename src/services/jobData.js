const jobDatabase = [
  {
    jobName: "Registered Nurse (RN)",
    location: "Boston, MA",
    deadline: "December 15, 2025",
    type: "On-site",
    description:
      "Provide direct patient care, administer medications, monitor vital signs, and coordinate with physicians to ensure quality healthcare delivery.",
    overallDescription:
      "Registered Nurses work in hospitals, clinics, or private facilities to deliver essential medical care and support patient recovery.",
    important:
      "Must have a Bachelor of Science in Nursing (BSN) and an active RN license. Minimum 1 year of hospital experience preferred.",
    skills: ["Patient care", "Communication", "Medical documentation", "Critical thinking", "Teamwork"],
    certifications: ["BLS", "ACLS"],
    connections: "https://www.massgeneral.org/careers | hr@massgeneral.org",
  },
  {
    jobName: "Medical Laboratory Technician",
    location: "Atlanta, GA",
    deadline: "November 30, 2025",
    type: "On-site",
    description:
      "Conduct laboratory tests, analyze samples, and maintain lab equipment to assist physicians in diagnosis and treatment.",
    overallDescription:
      "Medical Lab Technicians play a vital role in detecting and diagnosing diseases through accurate lab analysis.",
    important: "Associate degree in Medical Laboratory Science or related field required.",
    skills: ["Attention to detail", "Data analysis", "Lab safety", "Time management"],
    certifications: ["ASCP or equivalent"],
    connections: "https://www.cdc.gov/careers",
  },
  {
    jobName: "Front-End Developer",
    location: "Remote (U.S.)",
    deadline: "January 10, 2026",
    type: "Remote",
    description:
      "Build and maintain interactive user interfaces for web applications using React, HTML, CSS, and JavaScript frameworks.",
    overallDescription:
      "Front-End Developers design and implement the client-facing side of digital platforms to ensure an intuitive user experience.",
    important: "Bachelor’s degree in Computer Science or equivalent experience.",
    skills: ["JavaScript", "React", "CSS", "Responsive design", "Git"],
    certifications: ["Front-End Web Developer Certification (Preferred)"],
    connections: "https://www.linkedin.com/company/techtide",
  },
  {
    jobName: "Cybersecurity Analyst",
    location: "Austin, TX",
    deadline: "December 20, 2025",
    type: "Hybrid",
    description:
      "Monitor and secure the company’s network systems, identify vulnerabilities, and respond to security breaches.",
    overallDescription:
      "Cybersecurity Analysts safeguard digital infrastructures against cyber threats and maintain data integrity.",
    important: "Bachelor’s degree in Cybersecurity or IT Security. 2+ years experience preferred.",
    skills: ["Network defense", "Threat analysis", "SIEM tools", "Scripting"],
    certifications: ["CompTIA Security+", "CISSP (Preferred)"],
    connections: "https://www.defenselogic.com | careers@defenselogic.com",
  },
  {
    jobName: "Mechanical Engineer",
    location: "Detroit, MI",
    deadline: "January 5, 2026",
    type: "On-site",
    description:
      "Design and test mechanical components for automotive manufacturing, ensuring functionality and compliance with safety standards.",
    overallDescription:
      "Mechanical Engineers develop, test, and improve systems that power vehicles, machines, and equipment.",
    important: "Bachelor’s degree in Mechanical Engineering; knowledge of CAD software required.",
    skills: ["CAD", "Problem-solving", "Thermodynamics", "Teamwork", "Communication"],
    certifications: ["EIT", "PE License (Preferred)"],
    connections: "https://www.fordcareers.com",
  },
  {
    jobName: "Civil Engineering Project Manager",
    location: "Chicago, IL",
    deadline: "February 1, 2026",
    type: "Hybrid",
    description:
      "Manage infrastructure projects, coordinate with clients, and oversee construction to ensure structural integrity and timely completion.",
    overallDescription:
      "Civil Project Managers lead teams to plan, design, and build public and private infrastructure projects.",
    important: "Bachelor’s in Civil Engineering, 5+ years project experience.",
    skills: ["Project management", "AutoCAD", "Budgeting", "Leadership"],
    certifications: ["PMP (Preferred)"],
    connections: "https://www.aecgroup.com/careers",
  },
  {
    jobName: "Hotel Front Desk Supervisor",
    location: "Orlando, FL",
    deadline: "November 20, 2025",
    type: "On-site",
    description:
      "Oversee front desk operations, assist guests, manage staff scheduling, and ensure a positive guest experience.",
    overallDescription:
      "Supervisors ensure smooth hotel operations and provide leadership for guest service teams.",
    important: "High school diploma required; 2+ years of hospitality experience preferred.",
    skills: ["Customer service", "Multitasking", "Leadership", "Communication"],
    certifications: ["Hospitality Management Certificate (Preferred)"],
    connections: "https://www.sunnyresorts.com/jobs | hr@sunnyresorts.com",
  },
  {
    jobName: "Executive Chef",
    location: "New York, NY",
    deadline: "December 31, 2025",
    type: "On-site",
    description:
      "Lead the culinary team, design seasonal menus, oversee food quality, and maintain cost control.",
    overallDescription:
      "Executive Chefs are responsible for all kitchen operations, ensuring creative and high-quality dining experiences.",
    important: "Culinary degree and 5+ years of leadership experience required.",
    skills: ["Menu creation", "Kitchen management", "Food safety", "Creativity"],
    certifications: ["ServSafe Certification"],
    connections: "https://www.blueflamegroup.com | chefcareers@blueflamegroup.com",
  },
  {
    jobName: "Medical Receptionist",
    location: "Phoenix, AZ",
    deadline: "December 10, 2025",
    type: "On-site",
    description:
      "Greet patients, schedule appointments, manage medical records, and assist with front-desk administrative duties in a healthcare clinic.",
    overallDescription:
      "Medical Receptionists are the first point of contact in healthcare facilities, ensuring patients receive friendly and efficient service.",
    important: "High school diploma or GED required; on-the-job training provided.",
    skills: ["Organization", "Customer service", "Computer literacy", "Communication"],
    certifications: ["None"],
    connections: "https://www.phoenixfamilyclinic.com/careers | careers@phoenixfamilyclinic.com",
  },
  {
    jobName: "Hotel Housekeeper",
    location: "Las Vegas, NV",
    deadline: "November 25, 2025",
    type: "On-site",
    description:
      "Clean guest rooms, replace linens, restock supplies, and maintain overall hotel cleanliness according to hospitality standards.",
    overallDescription:
      "Housekeepers are responsible for ensuring comfortable and hygienic guest environments within hotels and resorts.",
    important: "No formal education beyond high school required; training provided on site.",
    skills: ["Attention to detail", "Time management", "Reliability", "Teamwork"],
    certifications: ["None"],
    connections: "https://www.nevadahospitalityjobs.com | hr@nevadahospitalityjobs.com",
  },
  {
    jobName: "IT Support Technician (Entry-Level)",
    location: "Denver, CO",
    deadline: "January 15, 2026",
    type: "Hybrid",
    description:
      "Provide basic technical support for computer systems, troubleshoot software/hardware issues, and assist employees with setup and connectivity.",
    overallDescription:
      "Entry-level IT Support Technicians help maintain day-to-day technical operations and resolve common computer and network problems.",
    important: "High school diploma or GED required; technical training or experience preferred but not mandatory.",
    skills: ["Troubleshooting", "Communication", "Basic networking", "Problem-solving"],
    certifications: ["CompTIA A+ (Preferred)"],
    connections: "https://www.techassistco.com/jobs | careers@techassistco.com",
  },
  {
    jobName: "Data Entry Clerk (IT Department)",
    location: "Seattle, WA",
    deadline: "December 22, 2025",
    type: "Remote",
    description:
      "Enter and update data in digital systems, ensure database accuracy, and assist IT teams with maintaining organized digital records.",
    overallDescription:
      "Data Entry Clerks support IT and administrative teams by keeping systems accurate and up to date through efficient data management.",
    important: "High school diploma or GED required; basic computer literacy essential.",
    skills: ["Typing", "Accuracy", "Attention to detail", "Microsoft Office", "Database familiarity"],
    certifications: ["None"],
    connections: "https://www.infologicsolutions.com/careers | hr@infologicsolutions.com",
  },
];

export default jobDatabase;
