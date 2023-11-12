import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.js';
import { mountains, planet1, planet2, starrySky1 } from '../assets';

const Parallax = () => {
    return (
        <section id="parallax">
        <div className="bg-gradient-to-b from-background1 to-orange-700 relative z-2 bg-cover w-full left-0 right-0 bottom-0 top-0 py-10 h-full"> 
            <div className="flex flex-col justify-center gap-5 mb-2 text-center w-full xl:max-w-[40%] mx-auto">
              <motion.div
                variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
                className={
                  "text-white font-body text-lg max-w-lg xl:max-w-6xl sm:px-16 px-6 py-8 leading-[30px]"
                }
              >
          Let's connect and embark on a collective journey through the ever-evolving tech landscape, charting a course for innovation and growth! 🚀
          </motion.div>
            </div>

        <div className="bottom-0 left-0 right-0">
            <img src={mountains} alt="mountains" className="w-full h-full object-cover" />
        </div>
        {/* <div className="bottom-0 left-0 right-0">
            <img src={planet1} alt="planet1" className="w-[300px] h-[300px] object-contain" />
        </div>
        <div className="bottom-0 left-0 right-0">
            <img src={planet2} alt="planet2" className="w-[300px] h-[300px] object-contain" />
        </div> */}

        </div>
        </section>
    )
}

export default Parallax;