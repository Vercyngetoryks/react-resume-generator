import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import CertificatesFormList from "./CertificatesFormList";
import "../styles/card-common.css";
import "../styles/card-certificates.css";

export default function CardCertificates({
  certificates,
  onAddCertificate,
  onCertificateChange,
  onRemoveCertificate,
}) {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faCertificate}
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
          <h2>Certificates</h2>
          <p>Add your professional certifications and achievements</p>
        </div>
      </div>
      <div className="card-content">
        {certificates.length === 0 ? (
          <div className="certificates-empty-state">
            <h3>No certificates added yet</h3>
            <p>Add your professional certifications and achievements</p>
            <button className="add-certificate-btn" onClick={onAddCertificate}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Certificate
            </button>
          </div>
        ) : (
          <div className="certificates-list">
            <CertificatesFormList
              certificates={certificates}
              onChange={onCertificateChange}
              onRemoveCertificate={onRemoveCertificate}
            />
            <button className="add-certificate-btn" onClick={onAddCertificate}>
              <FontAwesomeIcon icon={faPlusSquare} />
              Add Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
