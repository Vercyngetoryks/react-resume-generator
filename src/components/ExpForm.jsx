import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUser,
  faMap,
  faCalendarAlt,
  faFileText,
} from "@fortawesome/free-regular-svg-icons";
import "../styles/exp-form.css";

export default function ExpForm({ exp, onChange, onRemove, isFirst }) {
  function handleCheckboxChange(e) {
    const { checked } = e.target;
    onChange(exp.id, "currentPosition", checked);

    // Jeśli zaznaczono "Current position", wyczyść End Date
    if (checked) {
      onChange(exp.id, "endDate", "");
    }
  }

  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(exp.id, name, value);
  }

  return (
    <div className="exp-form-container">
      <div className="exp-form-header">
        <h3>Experience #{exp.id}</h3>
        {!isFirst && (
          <button
            type="button"
            className="remove-exp-btn"
            onClick={() => onRemove(exp.id)}
          >
            <FontAwesomeIcon icon={faUser} />
            Remove
          </button>
        )}
      </div>

      <div className="exp-form-grid">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faBuilding} className="label-icon" />
            <span>Company:</span>
          </div>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={handleFieldChange}
            placeholder="Company name"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faUser} className="label-icon" />
            <span>Position:</span>
          </div>
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={handleFieldChange}
            placeholder="Job title"
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
            value={exp.location}
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
              value={exp.startDate}
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
              value={exp.endDate}
              onChange={handleFieldChange}
              disabled={exp.currentPosition}
              required={!exp.currentPosition}
            />
          </label>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="currentPosition"
            checked={exp.currentPosition}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-text">Current position</span>
        </label>

        <label className="description-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Description of responsibilities:</span>
          </div>
          <textarea
            name="description"
            value={exp.description || ""}
            onChange={handleFieldChange}
            placeholder="Describe your key responsibilities, achievements, and contributions in this role..."
            rows="4"
            className="description-textarea"
          />
        </label>
      </div>
    </div>
  );
}
