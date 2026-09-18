"use client";

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import "./SkillCard.scss";

const SkillCard = ({ name, icon, alt, url }) => {

    return (
      <Tilt
       className="skill-card__tilt"
       style={{
            transformStyle: 'preserve-3d',
          }}
        >
        <a href={url} target="_blank" rel="noreferrer">
        <motion.div
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          className="skill-card__border"
          style={{
            transform: 'translateZ(60px)',
          }}
        >
          <motion.div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="skill-card__inner"
          >
            <img
              src={icon}
              alt={alt}
              className="skill-card__icon"
            />
            <p className="skill-card__name">{name}</p>
          </motion.div>
        </motion.div>
        </a>
      </Tilt>
    );
  };

export default SkillCard;
