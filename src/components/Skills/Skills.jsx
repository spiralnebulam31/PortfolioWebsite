"use client";

import { textVariant } from '../../utils/motion.js';
import { techStack } from '../../constants/constants.js';
import SkillCard from './SkillCard.jsx';
import "./Skills.scss";
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills__section"
      >
        <div className="skills__container">
          <motion.div variants={textVariant()}>
            <p className="skills__eyebrow">
              These are
            </p>
            <h2 className="skills__heading">
              My Tech Skills
            </h2>
          </motion.div>

          <div className="skills__grid-wrap">
            <motion.div className="skills__grid">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    translateX: index % 2 === 0 ? -100 : 100,
                    translateY: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2,
                    },
                  }}
                >
                  <SkillCard
                    key={index}
                    index={index}
                    name={tech.name}
                    icon={tech.icon}
                    alt={tech.alt}
                    url={tech.url}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
