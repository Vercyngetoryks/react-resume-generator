import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/card-common.css";
import "../styles/card-preview.css";

export default function CardPreview({
  info,
  exp,
  edu,
  skills,
  certificates,
  projects,
}) {
  const exportToPDF = async () => {
    const element = document.querySelector(".cv-preview");
    if (!element) return;

    try {
      // Pokaż loading
      const loadingText = document.createElement("div");
      loadingText.textContent = "Generating PDF...";
      loadingText.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--clr-primary);
        color: white;
        padding: 2rem 4rem;
        border-radius: var(--radius);
        z-index: 1000;
        font-size: 1.8rem;
        font-weight: 600;
      `;
      document.body.appendChild(loadingText);

      // Konwertuj na canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      // Usuń loading
      document.body.removeChild(loadingText);

      // Utwórz PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Dodaj pierwszą stronę
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Dodaj kolejne strony jeśli potrzeba
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Pobierz PDF
      const fileName = `${info.name || "CV"}_${
        new Date().toISOString().split("T")[0]
      }.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-icon">
          <FontAwesomeIcon
            icon={faEye}
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
          <h2>Preview</h2>
          <p>Review your CV before finalizing</p>
        </div>
      </div>
      <div className="card-content">
        <div className="preview-actions">
          <button className="export-pdf-btn" onClick={exportToPDF}>
            <FontAwesomeIcon icon={faDownload} />
            Export to PDF
          </button>
        </div>
        <div className="cv-preview">
          {/* Personal Information */}
          <section className="cv-section personal-info">
            <div className="cv-header">
              {info.profilePicture && (
                <div className="cv-photo">
                  <img src={info.profilePicture} alt="Profile" />
                </div>
              )}
              <div className="cv-header-text">
                <h1 className="cv-name">{info.name || "Your Name"}</h1>
                <div className="cv-contact">
                  {info.email && (
                    <span className="contact-item">{info.email}</span>
                  )}
                  {info.phone && (
                    <span className="contact-item">{info.phone}</span>
                  )}
                  {info.address && (
                    <span className="contact-item">{info.address}</span>
                  )}
                </div>
              </div>
            </div>
            {info.summary && (
              <div className="cv-summary">
                <h3>Professional Summary</h3>
                <p>{info.summary}</p>
              </div>
            )}
          </section>

          {/* Professional Experience */}
          {exp.length > 0 && exp.some((exp) => exp.company || exp.position) && (
            <section className="cv-section">
              <h2 className="section-title">Professional Experience</h2>
              {exp.map((experience) =>
                experience.company || experience.position ? (
                  <div key={experience.id} className="experience-item">
                    <div className="experience-header">
                      <h3 className="job-title">
                        {experience.position || "Position"}
                      </h3>
                      <span className="company-name">
                        {experience.company || "Company"}
                      </span>
                    </div>
                    <div className="experience-details">
                      <span className="location">{experience.location}</span>
                      <span className="dates">
                        {experience.startDate && (
                          <>
                            {new Date(experience.startDate).toLocaleDateString(
                              "en-US",
                              { month: "short", year: "numeric" }
                            )}
                            {experience.currentPosition
                              ? " - Present"
                              : experience.endDate
                              ? ` - ${new Date(
                                  experience.endDate
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  year: "numeric",
                                })}`
                              : ""}
                          </>
                        )}
                      </span>
                    </div>
                    {experience.description && (
                      <p className="job-description">
                        {experience.description}
                      </p>
                    )}
                  </div>
                ) : null
              )}
            </section>
          )}

          {/* Education */}
          {edu.length > 0 &&
            edu.some((edu) => edu.institution || edu.degree) && (
              <section className="cv-section">
                <h2 className="section-title">Education</h2>
                {edu.map((education) =>
                  education.institution || education.degree ? (
                    <div key={education.id} className="education-item">
                      <div className="education-header">
                        <h3 className="degree">
                          {education.degree || "Degree"}
                        </h3>
                        <span className="institution">
                          {education.institution || "Institution"}
                        </span>
                      </div>
                      <div className="education-details">
                        <span className="field">{education.field}</span>
                        <span className="location">{education.location}</span>
                        <span className="dates">
                          {education.startDate && (
                            <>
                              {new Date(education.startDate).toLocaleDateString(
                                "en-US",
                                { month: "short", year: "numeric" }
                              )}
                              {education.inProgress
                                ? " - Present"
                                : education.endDate
                                ? ` - ${new Date(
                                    education.endDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                  })}`
                                : ""}
                            </>
                          )}
                        </span>
                      </div>
                      {education.description && (
                        <p className="education-description">
                          {education.description}
                        </p>
                      )}
                    </div>
                  ) : null
                )}
              </section>
            )}

          {/* Skills */}
          {skills.length > 0 && skills.some((skill) => skill.name) && (
            <section className="cv-section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                {skills.map((skill) =>
                  skill.name ? (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        {skill.level && (
                          <span className="skill-level">({skill.level})</span>
                        )}
                      </div>
                      {skill.category && (
                        <span className="skill-category">{skill.category}</span>
                      )}
                      {skill.description && (
                        <p className="skill-description">{skill.description}</p>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </section>
          )}

          {/* Key Skills Section */}
          {skills.length > 0 &&
            skills.some(
              (skill) =>
                skill.name &&
                (skill.level === "expert" || skill.level === "advanced")
            ) && (
              <section className="cv-section">
                <h2 className="section-title">Key Skills</h2>
                <div className="key-skills-tags">
                  {skills
                    .filter(
                      (skill) =>
                        skill.name &&
                        (skill.level === "expert" || skill.level === "advanced")
                    )
                    .map((skill) => (
                      <span key={skill.id} className="skill-tag">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </section>
            )}

          {/* Certificates */}
          {certificates.length > 0 &&
            certificates.some((cert) => cert.name) && (
              <section className="cv-section">
                <h2 className="section-title">Certifications</h2>
                {certificates.map((certificate) =>
                  certificate.name ? (
                    <div key={certificate.id} className="certificate-item">
                      <div className="certificate-header">
                        <h3 className="certificate-name">{certificate.name}</h3>
                        <span className="certificate-issuer">
                          {certificate.issuer}
                        </span>
                      </div>
                      <div className="certificate-details">
                        {certificate.date && (
                          <span className="certificate-date">
                            {new Date(certificate.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        )}
                        {certificate.link && (
                          <a
                            href={certificate.link}
                            className="certificate-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Verify Certificate
                          </a>
                        )}
                      </div>
                      {certificate.description && (
                        <p className="certificate-description">
                          {certificate.description}
                        </p>
                      )}
                    </div>
                  ) : null
                )}
              </section>
            )}

          {/* Projects */}
          {projects.length > 0 && projects.some((project) => project.name) && (
            <section className="cv-section">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                {projects.map((project) =>
                  project.name ? (
                    <div key={project.id} className="project-item">
                      <div className="project-header">
                        <h3 className="project-name">{project.name}</h3>
                        <div className="project-links">
                          {project.link && (
                            <a
                              href={project.link}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                      {project.technologies && (
                        <div className="project-technologies">
                          <strong>Technologies:</strong> {project.technologies}
                        </div>
                      )}
                      {project.description && (
                        <p className="project-description">
                          {project.description}
                        </p>
                      )}
                      {project.image && (
                        <div className="project-image">
                          <img src={project.image} alt={project.name} />
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </section>
          )}

          {/* Social Links */}
          {(info.linkedin || info.github || info.portfolio) && (
            <section className="cv-section">
              <h2 className="section-title">Links</h2>
              <div className="social-links">
                {info.linkedin && (
                  <a
                    href={info.linkedin}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {info.github && (
                  <a
                    href={info.github}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {info.portfolio && (
                  <a
                    href={info.portfolio}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Empty State */}
          {!info.name &&
            exp.length === 0 &&
            edu.length === 0 &&
            skills.length === 0 && (
              <div className="preview-empty-state">
                <h3>No data to preview</h3>
                <p>
                  Fill in your information in the previous sections to see your
                  CV preview here.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
