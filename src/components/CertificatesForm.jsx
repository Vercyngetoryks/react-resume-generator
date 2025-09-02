import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUser,
  faFileText,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/certificates-form.css";

export default function CertificatesForm({ certificate, onChange, onRemove }) {
  function handleFieldChange(e) {
    const { name, value } = e.target;
    onChange(certificate.id, name, value);
  }

  return (
    <div className="certificates-form-container">
      <div className="certificates-form-header">
        <h3>Certificate #{certificate.id}</h3>
        <button
          type="button"
          className="remove-certificate-btn"
          onClick={() => onRemove(certificate.id)}
        >
          <FontAwesomeIcon icon={faUser} />
          Remove
        </button>
      </div>

      <div className="certificates-form-grid">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faCertificate} className="label-icon" />
            <span>Certificate Name:</span>
          </div>
          <input
            type="text"
            name="name"
            value={certificate.name}
            onChange={handleFieldChange}
            placeholder="e.g., AWS Certified Solutions Architect"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faUser} className="label-icon" />
            <span>Issuing Organization:</span>
          </div>
          <input
            type="text"
            name="issuer"
            value={certificate.issuer}
            onChange={handleFieldChange}
            placeholder="e.g., Amazon Web Services"
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Date Obtained:</span>
          </div>
          <input
            type="month"
            name="date"
            value={certificate.date}
            onChange={handleFieldChange}
            required
          />
        </label>

        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faLink} className="label-icon" />
            <span>Verification Link:</span>
          </div>
          <input
            type="url"
            name="link"
            value={certificate.link}
            onChange={handleFieldChange}
            placeholder="URL to verify the certificate"
          />
        </label>

        <label className="description-label">
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faFileText} className="label-icon" />
            <span>Description:</span>
          </div>
          <textarea
            name="description"
            value={certificate.description || ""}
            onChange={handleFieldChange}
            placeholder="Describe the skills and knowledge covered by this certification..."
            rows="3"
            className="description-textarea"
          />
        </label>
      </div>
    </div>
  );
}
