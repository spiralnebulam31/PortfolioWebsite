import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles.js';
import { projects, ongoingProjects } from '../../constants/projects.js';
import { floatFromRightVariant } from '../../utils/motion.js';
import ProjectCard from './ProjectCard.jsx';
import OngoingProjectCard from './OngoingProjectCard.jsx';
import FlashingText from './FlashingText.jsx';

const Projects = () => {

  const [isOpen, setIsOpen] = useState(Array(projects.length).fill(false));
  const toggleOpen = (index) => {
    setIsOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <section id="projects" className="overflow-hidden">
      <div className='bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-10 pb-[120px]'>
        <div className="mx-auto px-5">
            <p className={styles.sectionSubText + styles.paddingX}>
              A look at
            </p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              My Projects
            </h2>

          <motion.div className="flex flex-wrap px-5 space-x-6 justify-center text-center mx-auto"
         variants={floatFromRightVariant} initial="initial" whileInView="animate"
          >
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  isOpen={isOpen[index]}
                  toggleOpen={() => toggleOpen(index)}
                  {...project}
                />
              ))}
            </div>
          </motion.div>

          <div className="h-[100px]">
          <FlashingText />
          </div>

            <motion.div className="flex flex-wrap px-5 space-x-6 justify-center"
         variants={floatFromRightVariant} initial="initial" whileInView="animate"
          >
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-10">
              {ongoingProjects.map((ongoingProject, index) => (
                <OngoingProjectCard
                  key={index}
                  index={index}
                  isOpen={isOpen[index]}
                  toggleOpen={() => toggleOpen(index)}
                  {...ongoingProject}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
