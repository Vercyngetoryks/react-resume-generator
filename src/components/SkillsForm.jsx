import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUser,
  faFileText,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/skills-form.css";

export default function SkillsForm({ skill, onChange, onRemove }) {
  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(skill.id, name, value);
  }

  return (
    <div className="skills-form-container">
      <div className="skills-form-header">
        <h3>Skill #{skill.id}</h3>
        <button
          type="button"
          className="remove-skill-btn"
          onClick={() => onRemove(skill.id)}
        >
          <FontAwesomeIcon icon={faUser} />
          Remove
        </button>
      </div>

      <div className="skills-form-grid">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faLightbulb} className="label-icon" />
            <span>Skill Name:</span>
          </div>
          <input
            type="text"
            name="name"
            value={skill.name}
            onChange={handleFieldChange}
            placeholder="e.g., JavaScript, Leadership, Spanish"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Category:</span>
          </div>
          <select
            name="category"
            value={skill.category}
            onChange={handleFieldChange}
            required
          >
            <option value="">Select category</option>
            <option value="technical">Technical</option>
            <option value="language">Language</option>
            <option value="soft">Soft Skill</option>
          </select>
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faUser} className="label-icon" />
            <span>Level:</span>
          </div>
          <select
            name="level"
            value={skill.level}
            onChange={handleFieldChange}
            required
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="good">Good</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </label>

        <label className="description-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Description:</span>
          </div>
          <textarea
            name="description"
            value={skill.description || ""}
            onChange={handleFieldChange}
            placeholder="Describe your proficiency, experience, or any relevant details about this skill..."
            rows="3"
            className="description-textarea"
          />
        </label>
      </div>
    </div>
  );
}
