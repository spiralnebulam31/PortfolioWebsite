import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { styles } from '../../styles.js';
import { textVariant, floatFromLeftVariant } from '../../utils/motion.js';
import { techStack } from '../../constants/constants.js';
import SkillCard from './SkillCard.jsx';

const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden">
      <motion.div
        className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10"
      >
        <div className="mx-auto px-5">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText + styles.paddingX}>
              These are
            </p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              My Tech Skills
            </h2>
          </motion.div>

          <div className="flex flex-wrap px-9 justify-center w-full lg:w-[80%] mx-auto">
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mt-10 mb-10">
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
