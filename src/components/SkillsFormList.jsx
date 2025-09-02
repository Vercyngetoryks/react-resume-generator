import SkillsForm from "./SkillsForm";
import "../styles/skills-form-list.css";

export default function SkillsFormList({ skills, onChange, onRemoveSkill }) {
  return (
    <div className="skills-form-list">
      {skills.map((skill) => (
        <SkillsForm
          key={skill.id}
          skill={skill}
          onChange={onChange}
          onRemove={onRemoveSkill}
        />
      ))}
    </div>
  );
}
