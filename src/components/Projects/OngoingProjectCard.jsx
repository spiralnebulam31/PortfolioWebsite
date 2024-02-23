import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../../utils/motion.js';

const ProjectCard = ({ index, image, name, description, isOpen, toggleOpen }) => {
    return (
      <div className="xs:w-[350px] sm:w-[350px] md:w-[450px] lg:w-[450px] xl:w-[450px]">
        <motion.div
          layout
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          exit="closed"
          variants={{
            open: { width: '100%', right: '0', zIndex: 2 },
            closed: { width: '100%', right: '0', zIndex: 1 },
          }}
          className={`cursor-pointer w-full xs:w-[350px] sm:w-[350px] md:w-[450px] lg:w-[450px] xl:w-[450px] card bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-card`}
        >
          <motion.div
          className="bg-background rounded-2xl flex justify-evenly items-center flex-col"
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full rounded-2xl" />
            <br />
            <div className="text-background1 text-center text-[20px] max-w-[350px] leading-[30px] font-bold">
              {name}
            </div>
  
            {!isOpen && (
            <div className="text-background1 text-center text-[14px] underline cursor-pointer pt-1"
            onClick={toggleOpen}
            alt="click to read more about this project"
            >
            <p>read more</p>
            </div>
            )}
            
            {isOpen && (
              <div className="text-background1 text-center text-[14px] underline cursor-pointer pt-1"
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
                className="flex justify-evenly items-center flex-col"
              >
            <p className="text-background1 text-[14px] max-w-[350px] leading-[30px] pb-5 flex justify-center text-center">
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