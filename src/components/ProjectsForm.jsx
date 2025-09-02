import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faFileText,
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/projects-form.css";

export default function ProjectsForm({ project, onChange, onRemove }) {
  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(project.id, name, value);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        onChange(project.id, "image", imageData);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="projects-form-container">
      <div className="projects-form-header">
        <h3>Project #{project.id}</h3>
        <button
          type="button"
          className="remove-project-btn"
          onClick={() => onRemove(project.id)}
        >
          <FontAwesomeIcon icon={faUser} />
          Remove
        </button>
      </div>

      <div className="projects-form-grid">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faCode} className="label-icon" />
            <span>Project Name:</span>
          </div>
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleFieldChange}
            placeholder="e.g., E-commerce Website"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Technologies:</span>
          </div>
          <input
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={handleFieldChange}
            placeholder="e.g., React, Node.js, MongoDB"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faLink} className="label-icon" />
            <span>Live Demo:</span>
          </div>
          <input
            type="url"
            name="link"
            value={project.link}
            onChange={handleFieldChange}
            placeholder="URL to live demo"
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faGithub} className="label-icon" />
            <span>GitHub Repository:</span>
          </div>
          <input
            type="url"
            name="github"
            value={project.github}
            onChange={handleFieldChange}
            placeholder="URL to GitHub repository"
          />
        </label>

        <label className="image-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faImage} className="label-icon" />
            <span>Project Screenshot:</span>
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
          {project.image && (
            <div className="image-preview">
              <img src={project.image} alt="Project preview" />
            </div>
          )}
        </label>

        <label className="description-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Description:</span>
          </div>
          <textarea
            name="description"
            value={project.description || ""}
            onChange={handleFieldChange}
            placeholder="Describe your project, its features, challenges overcome, and your role..."
            rows="4"
            className="description-textarea"
          />
        </label>
      </div>
    </div>
  );
}
