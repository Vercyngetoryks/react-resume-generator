import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMap,
  faImage,
  faFileText,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/info-form.css";

export default function InfoForm({ formData, onChange, onSubmit }) {
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        // Symulujemy zmianę w formData dla zdjęcia
        const syntheticEvent = {
          target: { name: "profilePicture", value: imageData },
        };
        onChange(syntheticEvent);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <form className="info-form" onSubmit={onSubmit}>
      <div className="profile-picture-section">
        <h3>Profile Picture</h3>
        <p className="profile-picture-description">
          Add a professional photo to personalize your resume
        </p>
        <div className="image-upload-container">
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
          <label htmlFor="profilePicture" className="image-upload-label">
            <div className="image-upload-area">
              {formData.profilePicture ? (
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  className="profile-preview"
                />
              ) : (
                <div className="upload-placeholder">
                  <FontAwesomeIcon icon={faImage} className="upload-icon" />
                  <span className="upload-text">Choose Photo</span>
                </div>
              )}
            </div>
          </label>
        </div>
      </div>

      <label>
        <div className="label-with-icon">
          <FontAwesomeIcon icon={faUser} className="label-icon" />
          <span>Name:</span>
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Your full name"
          required
          minLength={2}
        ></input>
      </label>
      <div className="row-2">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faEnvelope} className="label-icon" />
            <span>Email:</span>
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Your email address"
            required
          ></input>
        </label>
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faPhone} className="label-icon" />
            <span>Phone:</span>
          </div>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Your phone number"
            required
          ></input>
        </label>
      </div>
      <label>
        <div className="label-with-icon">
          <FontAwesomeIcon icon={faMap} className="label-icon" />
          <span>Address:</span>
        </div>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Your address"
          required
          minLength={2}
        ></input>
      </label>

      <div className="row-2">
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faLinkedin} className="label-icon" />
            <span>LinkedIn:</span>
          </div>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={onChange}
            placeholder="Your LinkedIn profile URL"
          ></input>
        </label>
        <label>
          <div className="label-with-icon">
            <FontAwesomeIcon icon={faGithub} className="label-icon" />
            <span>GitHub:</span>
          </div>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={onChange}
            placeholder="Your GitHub profile URL"
          ></input>
        </label>
      </div>
      <label>
        <div className="label-with-icon">
          <FontAwesomeIcon icon={faFileText} className="label-icon" />
          <span>Portfolio:</span>
        </div>
        <input
          type="url"
          name="portfolio"
          value={formData.portfolio}
          onChange={onChange}
          placeholder="Your portfolio website URL"
        ></input>
      </label>

      <label>
        <div className="label-with-icon">
          <FontAwesomeIcon icon={faFileText} className="label-icon" />
          <span>Professional Summary:</span>
        </div>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={onChange}
          placeholder="Share your professional story, highlight your key competencies, and outline your career aspirations. This summary creates the initial impact for potential employers."
          maxLength={500}
          rows={6}
          className="summary-textarea"
        ></textarea>
        <div
          className={`char-counter ${
            formData.summary && formData.summary.length > 400 ? "warning" : ""
          } ${
            formData.summary && formData.summary.length >= 500 ? "error" : ""
          }`}
        >
          {formData.summary ? formData.summary.length : 0}/500 characters
        </div>
      </label>
    </form>
  );
}
