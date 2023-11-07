import { motion } from 'framer-motion';
import { styles } from '../styles';
import { profilePhotos } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const Journey = () => {
  return (
    <section id="journey">
    <div className='bg-background1 relative bg-cover w-full  top-0 left-0 right-0 bottom-0'>
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>
          My coding
        </p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>
          Journey
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
        className={styles.padding + "text-white text-[17px] max-w-7xl leading-[30px]"}
        >
        
      </motion.div>
    </div>
    </div>
    </section>
  )
}

export default Journey;