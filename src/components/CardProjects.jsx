import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import ProjectsFormList from "./ProjectsFormList";
import "../styles/card-common.css";
import "../styles/card-projects.css";

export default function CardProjects({
  projects,
  onAddProject,
  onProjectChange,
  onRemoveProject,
}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faCode}
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
          <h2>Projects</h2>
          <p>Add your portfolio projects and achievements</p>
        </div>
      </div>
      <div className="card-content">
        {projects.length === 0 ? (
          <div className="projects-empty-state">
            <h3>No projects added yet</h3>
            <p>Add your portfolio projects and achievements</p>
            <button className="add-project-btn" onClick={onAddProject}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Project
            </button>
          </div>
        ) : (
          <div className="projects-list">
            <ProjectsFormList
              projects={projects}
              onChange={onProjectChange}
              onRemoveProject={onRemoveProject}
            />
            <button className="add-project-btn" onClick={onAddProject}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
