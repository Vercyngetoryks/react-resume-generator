import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import InfoForm from "./InfoForm";
import "../styles/card-common.css";

export default function CardInfo({ formData, onChange, onSubmit }) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faUser}
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
          <h2>Personal Information</h2>
          <p>Add your personal information here</p>
        </div>
      </div>
      <div className="card-content">
        <InfoForm formData={formData} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
