import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import ExpFormList from "./ExpFormList";
import "../styles/card-common.css";
import "../styles/exp-form-list.css";

export default function CardExp({ exp, onChange, onAddExp, onRemoveExp }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faBuilding}
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
          <h2>Professional Experience</h2>
          <p>Add your professional experience here</p>
        </div>
      </div>
      <div className="card-content">
        <ExpFormList exp={exp} onChange={onChange} onRemoveExp={onRemoveExp} />
        <button type="button" className="add-exp-btn" onClick={onAddExp}>
          <FontAwesomeIcon icon={faPlusSquare} />
          Add Experience
        </button>
      </div>
    </div>
  );
}
