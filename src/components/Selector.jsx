import "../styles/selector.css";

export default function Selector({ id, label, onClick, isActive }) {
  return (
    <button
      className={`selector ${isActive ? "active" : ""}`}
      onClick={() => onClick?.(id)}
    >
      <span className="selector-id">{id}</span>
      <span className="selector-description">{label}</span>
    </button>
  );
}
