import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { fadeIn } from '../utils/motion.js';
import mountains from '../assets/space-mountains.png';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';

const Parallax = ({type}) => {
    return (
        <div className="relative w-full h-screen mx-auto">

            {type === "hero" && (
                <div className="absolute inset-0 top-[100px] max-w-7xl mx-40 flex flex-row items-start gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className={styles.mainHeadText + "text-white"}>
                            Hi, I'm <span className="text-secondary">Anastasia</span>
                        </h1>
                        <p className={styles.mainSubText + "text-white-100 max-w-md md:max-w-2xl"}>
                            I create full-stack websites with a blend of creativity,
                            compassion and an analytical mindset.
                        </p>
                    </div>
                </div>
            )}

            {type === "contact" && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="mb-2 text-center max-w-[80%] xl:max-w-[60%] mx-auto">
      <motion.div
            variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
            className={styles.padding + "text-white text-[14px] max-w-6xl leading-[30px]"}
          >
          Let's connect and embark on a collective journey through the ever-evolving tech landscape, charting a course for innovation and growth! 🚀
          </motion.div>
        </div>
        </div>
            )
                }

        <div className="absolute bottom-0 left-0 right-0">
            <img src={mountains} alt="mountains" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <img src={planet1} alt="planet1" className="w-[300px] h-[300px] object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <img src={planet2} alt="planet2" className="w-[300px] h-[300px] object-contain" />
        </div>

        </div>
    )
}

export default Parallax;