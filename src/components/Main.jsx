import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { GalaxyCanvas } from './canvas';
import { sideStar, singleStarPurple } from '../assets';

const Main = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={styles.paddingX + " absolute inset-0 top-[100px] max-w-7xl mx-40 flex flex-row items-start gap-5"}>
        <div className="h-[300px] w-auto flex justify-center items-center">
          <img src={sideStar} alt="side star" className="h-[300px] w-auto" />
        </div>
        <div>
          <h1 className={styles.mainHeadText + "text-white"}>
            Hi, I'm <span className="text-secondary">Anastasia</span>
          </h1>
          <p className={styles.mainSubText + "text-white-100 max-w-md md:max-w-2xl"}>
          I create full-stack websites with a blend of creativity,
          compassion and an analytical mindset.
          </p>
        </div>
      </div>

      <GalaxyCanvas />

      <div className="absolute xs:bottom-10 bottom-60 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[75px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 20, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop'
                }
              }}
             >
            <img src={singleStarPurple} alt="arrow star" className="w-[60px] h-[60px] object-contain" />
          </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Main;