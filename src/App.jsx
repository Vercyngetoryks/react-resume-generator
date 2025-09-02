import { useState } from "react";
import Header from "./components/Header";
import SectionSelect from "./components/SectionSelect";
import Main from "./components/MainContainer";

import "./styles/app.css";

export default function App() {
  const [selectedId, setSelectedId] = useState(1);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    profilePicture: "",
    linkedin: "",
    github: "",
    portfolio: "",
  });

  const [exp, setExp] = useState([
    {
      id: 1,
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      currentPosition: false,
      description: "",
    },
  ]);

  const [edu, setEdu] = useState([]);

  const [skills, setSkills] = useState([]);

  const [certificates, setCertificates] = useState([]);

  const [projects, setProjects] = useState([]);

  function handleExpChange(expId, field, value) {
    setExp((prev) =>
      prev.map((experience) =>
        experience.id === expId ? { ...experience, [field]: value } : experience
      )
    );
  }

  function handleAddExperience() {
    const newId = Math.max(...exp.map((e) => e.id)) + 1;
    const newExperience = {
      id: newId,
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      currentPosition: false,
      description: "",
    };
    setExp((prev) => [...prev, newExperience]);
  }

  function handleRemoveExperience(expId) {
    setExp((prev) => prev.filter((exp) => exp.id !== expId));
  }

  function handleSelect(id) {
    setSelectedId(id === selectedId ? 1 : id);
  }

  function handleInfoChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddEdu() {
    const newId = edu.length === 0 ? 1 : Math.max(...edu.map((e) => e.id)) + 1;
    const newEducation = {
      id: newId,
      institution: "",
      degree: "",
      field: "",
      location: "",
      startDate: "",
      endDate: "",
      inProgress: false,
      description: "",
    };
    setEdu((prev) => [...prev, newEducation]);
  }

  function handleEduChange(eduId, field, value) {
    setEdu((prev) =>
      prev.map((education) =>
        education.id === eduId ? { ...education, [field]: value } : education
      )
    );
  }

  function handleRemoveEducation(eduId) {
    setEdu((prev) => prev.filter((education) => education.id !== eduId));
  }

  function handleAddSkill() {
    const newId =
      skills.length === 0 ? 1 : Math.max(...skills.map((s) => s.id)) + 1;
    const newSkill = {
      id: newId,
      name: "",
      category: "",
      level: "",
      description: "",
    };
    setSkills((prev) => [...prev, newSkill]);
    console.log("Nowa umiejętność dodana:", newSkill);
  }

  function handleSkillChange(skillId, field, value) {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === skillId ? { ...skill, [field]: value } : skill
      )
    );
  }

  function handleRemoveSkill(skillId) {
    setSkills((prev) => prev.filter((skill) => skill.id !== skillId));
  }

  function handleAddCertificate() {
    const newId =
      certificates.length === 0
        ? 1
        : Math.max(...certificates.map((c) => c.id)) + 1;
    const newCertificate = {
      id: newId,
      name: "",
      issuer: "",
      date: "",
      link: "",
      description: "",
    };
    setCertificates((prev) => [...prev, newCertificate]);
  }

  function handleCertificateChange(certId, field, value) {
    setCertificates((prev) =>
      prev.map((cert) =>
        cert.id === certId ? { ...cert, [field]: value } : cert
      )
    );
  }

  function handleRemoveCertificate(certId) {
    setCertificates((prev) => prev.filter((cert) => cert.id !== certId));
  }

  function handleAddProject() {
    const newId =
      projects.length === 0 ? 1 : Math.max(...projects.map((p) => p.id)) + 1;
    const newProject = {
      id: newId,
      name: "",
      description: "",
      technologies: "",
      link: "",
      github: "",
      image: "",
    };
    setProjects((prev) => [...prev, newProject]);
  }

  function handleProjectChange(projectId, field, value) {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, [field]: value } : project
      )
    );
  }

  function handleRemoveProject(projectId) {
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="app">
      <Header />
      <SectionSelect selectedId={selectedId} onSelect={handleSelect} />
      <Main
        selectedId={selectedId}
        info={info}
        onInfoChange={handleInfoChange}
        onSelect={handleSelect}
        onSubmit={handleSubmit}
        exp={exp}
        onExpChange={handleExpChange}
        onAddExp={handleAddExperience}
        onRemoveExp={handleRemoveExperience}
        edu={edu}
        onEduChange={handleEduChange}
        onAddEdu={handleAddEdu}
        onRemoveEdu={handleRemoveEducation}
        skills={skills}
        onSkillChange={handleSkillChange}
        onAddSkill={handleAddSkill}
        onRemoveSkill={handleRemoveSkill}
        certificates={certificates}
        onCertificateChange={handleCertificateChange}
        onAddCertificate={handleAddCertificate}
        onRemoveCertificate={handleRemoveCertificate}
        projects={projects}
        onProjectChange={handleProjectChange}
        onAddProject={handleAddProject}
        onRemoveProject={handleRemoveProject}
      />
    </div>
  );
}
