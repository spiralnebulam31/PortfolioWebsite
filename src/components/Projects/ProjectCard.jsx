"use client";

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion.js';
import "./ProjectCard.scss";

const ProjectCard = ({ image, name, description, date, onOpen }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={fadeIn('left', 'spring', 0.5, 1.25)}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${name}`}
    >
      <div className="project-card__inner">
        <div className="project-card__image-wrap">
          <img src={image.src} alt={image.alt} className="project-card__image" />
        </div>
        <div className="project-card__body">
          <h3 className="project-card__name">{name}</h3>
          {date && <p className="project-card__date">{date}</p>}
          <p className="project-card__teaser">{description.summary}</p>
          <span className="project-card__cta">View project →</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
