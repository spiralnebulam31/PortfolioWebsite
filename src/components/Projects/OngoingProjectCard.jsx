"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../utils/motion.js';
import "./ProjectCard.scss";

const ProjectCard = ({ index, image, name, description, isOpen, toggleOpen }) => {
    return (
      <div className="project-card">
        <motion.div
          layout
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          exit="closed"
          variants={{
            open: { width: '100%', right: '0', zIndex: 2 },
            closed: { width: '100%', right: '0', zIndex: 1 },
          }}
          className="project-card__card"
        >
          <motion.div
          className="project-card__inner"
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          >
            <img src={image.src} alt={image.alt} className="project-card__image" />
            <br />
            <div className="project-card__name">
              {name}
            </div>

            {!isOpen && (
            <div className="project-card__toggle"
            onClick={toggleOpen}
            alt="click to read more about this project"
            >
            <p>read more</p>
            </div>
            )}

            {isOpen && (
              <div className="project-card__toggle"
            onClick={toggleOpen}
            alt="click to read less about this project"
            >
            <p>read less</p>
            </div>
            )}

          </motion.div>
          <br />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 50 },
                }}
                className="project-card__details"
              >
            <p className="project-card__description">
              {description}
            </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };

export default ProjectCard;
