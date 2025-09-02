import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import SkillsFormList from "./SkillsFormList";
import "../styles/card-common.css";
import "../styles/card-skills.css";

export default function CardSkills({
  skills,
  onAddSkill,
  onSkillChange,
  onRemoveSkill,
}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{
              color: "var(--clr-primary)",
              fontSize: "3.2rem",
              backgroundColor: "var(--clr-secondary)",
              padding: "1.4rem",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          <h2>Skills</h2>
          <p>Add your technical, language, and soft skills</p>
        </div>
      </div>
      <div className="card-content">
        {skills.length === 0 ? (
          <div className="skills-empty-state">
            <h3>No skills added yet</h3>
            <p>Add your technical, language, and soft skills</p>
            <button className="add-skill-btn" onClick={onAddSkill}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Skill
            </button>
          </div>
        ) : (
          <div className="skills-list">
            <SkillsFormList
              skills={skills}
              onChange={onSkillChange}
              onRemoveSkill={onRemoveSkill}
            />
            <button className="add-skill-btn" onClick={onAddSkill}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Skill
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
