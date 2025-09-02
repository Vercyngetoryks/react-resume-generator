import ProjectsForm from "./ProjectsForm";
import "../styles/projects-form-list.css";

export default function ProjectsFormList({
  projects,
  onChange,
  onRemoveProject,
}) {
  return (
    <div className="projects-form-list">
      {projects.map((project) => (
        <ProjectsForm
          key={project.id}
          project={project}
          onChange={onChange}
          onRemove={onRemoveProject}
        />
      ))}
    </div>
  );
}
