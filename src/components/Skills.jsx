import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion.js';
import { techStack } from '../constants/constants.js';

const SkillCard = ({ index, name, icon, alt }) => {
  return (
    <Tilt className="w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] m-3 w-[100px] rounded-2xl shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-background1 rounded-2xl flex justify-evenly items-center flex-col p-3"
        >
          <img
            src={icon}
            alt={alt}
            className="w-full object-contain rounded-2xl max-h-20"
          />
          <p className="text-primary text-center text-[14px] font-bold max-w-6xl pt-2">{name}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
        <div className="mx-auto px-5">
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText + styles.paddingX}>
              These are
            </p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              My Tech Skills
            </h2>
          </motion.div>

          <motion.div variants={fadeIn('', '', 0.1, 1)}>
          <div className="flex flex-wrap px-9 space-x-6 justify-center w-full lg:w-[90%] mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-2 mt-10 mb-10">
              {techStack.map((tech, index) => (
                <SkillCard key={index} {...tech} />
              ))}
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
