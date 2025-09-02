import CertificatesForm from "./CertificatesForm";
import "../styles/certificates-form-list.css";

export default function CertificatesFormList({
  certificates,
  onChange,
  onRemoveCertificate,
}) {
  return (
    <div className="certificates-form-list">
      {certificates.map((certificate) => (
        <CertificatesForm
          key={certificate.id}
          certificate={certificate}
          onChange={onChange}
          onRemove={onRemoveCertificate}
        />
      ))}
    </div>
  );
}
