import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUser,
  faMap,
  faCalendarAlt,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/edu-form.css";

export default function EduForm({ edu, onChange, onRemove }) {
  function handleCheckboxChange(e) {
    const { checked } = e.target;
    onChange(edu.id, "inProgress", checked);

    // Jeśli zaznaczono "In Progress", wyczyść End Date
    if (checked) {
      onChange(edu.id, "endDate", "");
    }
  }

  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(edu.id, name, value);
  }

  return (
    <div className="edu-form-container">
      <div className="edu-form-header">
        <h3>Education #{edu.id}</h3>

        <button
          type="button"
          className="remove-edu-btn"
          onClick={() => onRemove(edu.id)}
        >
          <FontAwesomeIcon icon={faUser} />
          Remove
        </button>
      </div>

      <div className="edu-form-grid">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faGraduationCap} className="label-icon" />
            <span>Institution:</span>
          </div>
          <input
            type="text"
            name="institution"
            value={edu.institution}
            onChange={handleFieldChange}
            placeholder="University/College name"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faUser} className="label-icon" />
            <span>Degree:</span>
          </div>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={handleFieldChange}
            placeholder="e.g., Bachelor's, Master's, PhD"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Field of Study:</span>
          </div>
          <input
            type="text"
            name="field"
            value={edu.field}
            onChange={handleFieldChange}
            placeholder="e.g., Computer Science, Business Administration"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faMap} className="label-icon" />
            <span>Location:</span>
          </div>
          <input
            type="text"
            name="location"
            value={edu.location}
            onChange={handleFieldChange}
            placeholder="City, Country"
            required
          />
        </label>

        <div className="date-row">
          <label>
            <div className="label-with-icon">
              <FontAwesomeIcon icon={faCalendarAlt} className="label-icon" />
              <span>Start Date:</span>
            </div>
            <input
              type="month"
              name="startDate"
              value={edu.startDate}
              onChange={handleFieldChange}
              required
            />
          </label>

          <label>
            <div className="label-with-icon">
              <FontAwesomeIcon icon={faCalendarAlt} className="label-icon" />
              <span>End Date:</span>
            </div>
            <input
              type="month"
              name="endDate"
              value={edu.endDate}
              onChange={handleFieldChange}
              disabled={edu.inProgress}
              required={!edu.inProgress}
            />
          </label>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="inProgress"
            checked={edu.inProgress}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-text">Currently studying</span>
        </label>

        <label className="description-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Description:</span>
          </div>
          <textarea
            name="description"
            value={edu.description || ""}
            onChange={handleFieldChange}
            placeholder="Describe your academic achievements, relevant coursework, projects, or any other notable aspects of your education..."
            rows="4"
            className="description-textarea"
          />
        </label>
      </div>
    </div>
  );
}
