import Selector from "./Selector";
import "../styles/section-select.css";

const position = [
  { id: 1, description: "Info" },
  { id: 2, description: "Experience" },
  { id: 3, description: "Education" },
  { id: 4, description: "Skills" },
  { id: 5, description: "Certificates" },
  { id: 6, description: "Projects" },
  { id: 7, description: "Preview" },
];

export default function SectionSelect({ selectedId, onSelect }) {
  return (
    <div className="section-select">
      {position.map((p) => (
        <Selector
          key={p.id}
          id={p.id}
          label={p.description}
          isActive={p.id === selectedId}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
