import EduForm from "./EduForm";
import "../styles/edu-form-list.css";

export default function EduFormList({ edu, onChange, onRemoveEdu }) {
  return (
    <div className="edu-form-list">
      {edu.map((education) => (
        <EduForm
          key={education.id}
          edu={education}
          onChange={onChange}
          onRemove={onRemoveEdu}
        />
      ))}
    </div>
  );
}
