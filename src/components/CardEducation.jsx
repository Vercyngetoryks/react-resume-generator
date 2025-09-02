import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import EduFormList from "./EduFormList";
import "../styles/card-common.css";
import "../styles/card-education.css";

export default function CardEducation({
  edu,
  onAddEdu,
  onEduChange,
  onRemoveEdu,
}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faGraduationCap}
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
          <h2>Trainings & Education</h2>
          <p>Add your academic qualifications and trainings</p>
        </div>
      </div>
      <div className="card-content">
        {edu.length === 0 ? (
          <div className="education-empty-state">
            <h3>No education added yet</h3>
            <p>Add your academic qualifications and trainings</p>
          </div>
        ) : (
          <div className="education-list">
            <div>
              <EduFormList
                edu={edu}
                onChange={onEduChange}
                onRemoveEdu={onRemoveEdu}
              />
            </div>
          </div>
        )}
        <button className="add-education-btn" onClick={onAddEdu}>
          <FontAwesomeIcon icon={faPlusSquare} />
          Add Education
        </button>
      </div>
    </div>
  );
}
