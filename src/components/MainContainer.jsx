import CardInfo from "./CardInfo";
import CardExp from "./CardExp";
import CardEducation from "./CardEducation";
import CardSkills from "./CardSkills";
import CardCertificates from "./CardCertificates";
import CardProjects from "./CardProjects";
import CardPreview from "./CardPreview";
import "../styles/main-container.css";

export default function Main({
  selectedId,
  info,
  onInfoChange,
  onSelect,
  onSubmit,
  exp,
  onExpChange,
  onAddExp,
  onRemoveExp,
  edu,
  onEduChange,
  onAddEdu,
  onRemoveEdu,
  skills,
  onSkillChange,
  onAddSkill,
  onRemoveSkill,
  certificates,
  onCertificateChange,
  onAddCertificate,
  onRemoveCertificate,
  projects,
  onProjectChange,
  onAddProject,
  onRemoveProject,
}) {
  return (
    <main className="main">
      <section className="card">
        {selectedId === 1 && (
          <CardInfo
            formData={info}
            onChange={onInfoChange}
            onSubmit={onSubmit}
          />
        )}
        {selectedId === 2 && (
          <CardExp
            exp={exp}
            onChange={onExpChange}
            onSubmit={onSubmit}
            onAddExp={onAddExp}
            onRemoveExp={onRemoveExp}
          />
        )}
        {selectedId === 3 && (
          <CardEducation
            edu={edu}
            onEduChange={onEduChange}
            onAddEdu={onAddEdu}
            onRemoveEdu={onRemoveEdu}
          />
        )}
        {selectedId === 4 && (
          <CardSkills
            skills={skills}
            onSkillChange={onSkillChange}
            onAddSkill={onAddSkill}
            onRemoveSkill={onRemoveSkill}
          />
        )}
        {selectedId === 5 && (
          <CardCertificates
            certificates={certificates}
            onCertificateChange={onCertificateChange}
            onAddCertificate={onAddCertificate}
            onRemoveCertificate={onRemoveCertificate}
          />
        )}
        {selectedId === 6 && (
          <CardProjects
            projects={projects}
            onProjectChange={onProjectChange}
            onAddProject={onAddProject}
            onRemoveProject={onRemoveProject}
          />
        )}
        {selectedId === 7 && (
          <CardPreview
            info={info}
            exp={exp}
            edu={edu}
            skills={skills}
            certificates={certificates}
            projects={projects}
          />
        )}

        <div className="navigation-buttons">
          <button
            className="nav-btn prev-btn"
            onClick={() => onSelect(selectedId > 1 ? selectedId - 1 : 1)}
            disabled={selectedId === 1}
          >
            Previous
          </button>
          <button
            className="nav-btn next-btn"
            onClick={() => onSelect(selectedId < 7 ? selectedId + 1 : 7)}
            disabled={selectedId === 7}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
