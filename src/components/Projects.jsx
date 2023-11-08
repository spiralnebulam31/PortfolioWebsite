import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';



const ProjectCard = ({ index, image, name }) => {
  return (
    <Tilt className="xs:w-[350px] sm:w-[350px] md:w-[450px] lg:w-[450px] xl:w-[450px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-card"
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-background rounded-2xl 
                  flex justify-evenly items-center flex-col"
      >
        <img src={image.src} alt={image.alt} className="w-full h-full rounded-2xl" />
        <div className="text-black-100 text-center text-[17px] max-w-[350px] leading-[30px]">
          {name}
        </div>
      </div>
      </motion.div>
    </Tilt>
  )
}

const Projects = () => {
  return (
    <section id="about">
    <div className='bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-10 pb-[120px]'>
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>
          A look at
        </p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>
          My Projects
        </h2>
      </motion.div>

    <div className="flex flex-wrap px-5 space-x-6 justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10">
        {projects.map((name, index, image) => (
          <ProjectCard key={index} {...image} {...name} />
        ))}
      </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Projects