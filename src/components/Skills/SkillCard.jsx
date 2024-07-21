import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const SkillCard = ({ name, icon, alt, url }) => {

    return (
      <Tilt
       className="w-[250px]"
       style={{
            transformStyle: 'preserve-3d',
          }}
        >
        <a href={url} target="_blank" rel="noreferrer">
        <motion.div
          variants={fadeIn('left', 'spring', 0.5, 1.25)}
          className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] m-3 w-[100px] rounded-2xl shadow-card"
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
            className="bg-background1 rounded-2xl flex justify-evenly items-center flex-col p-3"
          >
            <img
              src={icon}
              alt={alt}
              className="w-full object-contain rounded-2xl max-h-20"
            />
            <p className="text-primary text-center text-[14px] font-bold max-w-6xl pt-2">{name}</p>
          </motion.div>
        </motion.div>
        </a>
      </Tilt>
    );
  };

export default SkillCard;