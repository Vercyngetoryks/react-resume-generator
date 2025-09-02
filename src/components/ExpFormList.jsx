import ExpForm from "./ExpForm";
import "../styles/exp-form-list.css";

export default function ExpFormList({ exp, onChange, onRemoveExp }) {
  return (
    <div className="exp-form-list">
      {exp.map((experience, index) => (
        <ExpForm
          key={experience.id}
          exp={experience}
          onChange={onChange}
          onRemove={onRemoveExp}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
