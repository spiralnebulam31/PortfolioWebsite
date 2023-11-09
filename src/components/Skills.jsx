import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion.js';

const Skills = () => {

  return (
    <section id="skills">
  <div className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>These are</p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>My Tech Skills</h2>
      </motion.div>

      <motion.div
            variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
            className={styles.padding + "text-white text-[14px] max-w-6xl leading-[30px]"}
          >

     
          </motion.div>
        </div>
        
    </div>
</section>

  )
}

export default Skills;