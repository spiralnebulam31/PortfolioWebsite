"use client";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../shared/Modal.scss";
import "./ProjectModal.scss";

// A single shared modal, reused for whichever project is currently selected
// (see Projects.jsx) — only renders the sections a given project actually
// has data for, since lighter entries (e.g. Golden Keys) don't have a full
// challenge/solution/learnings/techStack breakdown.
const ProjectModal = ({ project, onClose }) => {
  const closeIcon = (
    <svg className="modal__close-icon" fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="currentColor"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const description = project?.description ?? {};
  const hasLinks = project && (project.repoLink || project.repoLink2 || project.websiteLink);

  return (
    <Modal
      open={!!project}
      onClose={onClose}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: "modal__overlay",
        modal: "modal__panel",
      }}
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="modal__body project-modal">
          <div className="project-modal__image-border">
            <img
              src={project.image.src}
              alt={project.image.alt}
              className="project-modal__image"
            />
          </div>

          <h2 id="project-modal-title" className="project-modal__name">
            {project.name}
          </h2>

          {project.date && <p className="project-modal__date">{project.date}</p>}

          <p className="project-modal__summary">{description.summary}</p>

          {description.challenge && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">The challenge</h3>
              <p>{description.challenge}</p>
            </div>
          )}

          {description.solution && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">The solution</h3>
              <p>{description.solution}</p>
            </div>
          )}

          {description.learnings && description.learnings.length > 0 && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">Key takeaways</h3>
              <ul className="project-modal__list">
                {description.learnings.map((learning, idx) => (
                  <li key={idx}>★ {learning}</li>
                ))}
              </ul>
            </div>
          )}

          {description.roadmap && description.roadmap.length > 0 && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">Roadmap</h3>
              <ul className="project-modal__list">
                {description.roadmap.map((item, idx) => (
                  <li key={idx}>★ {item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div className="project-modal__section">
              <h3 className="project-modal__section-title">Technologies used</h3>
              <ul className="project-modal__list project-modal__list--inline">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>★ {tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.status && (
            <p className="project-modal__status">
              <strong>Status:</strong> {project.status}
            </p>
          )}

          {hasLinks && (
            <div className="project-modal__links">
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                  Code
                </a>
              )}
              {project.repoLink2 && (
                <a href={project.repoLink2} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                  More Code
                </a>
              )}
              {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-modal__link">
                  Website
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
