"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, ongoingProjects } from '../../constants/projects.js';
import { floatFromRightVariant } from '../../utils/motion.js';
import ProjectCard from './ProjectCard.jsx';
import "./Projects.scss";
// import OngoingProjectCard from './OngoingProjectCard.jsx';
// import FlashingText from './FlashingText.jsx';

const Projects = () => {

  const [isOpen, setIsOpen] = useState(Array(projects.length).fill(false));
  const toggleOpen = (index) => {
    setIsOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__section">
        <div className="projects__container">
            <p className="projects__eyebrow">
              A look at
            </p>
            <h2 className="projects__heading">
              My Projects
            </h2>

          <motion.div className="projects__grid-wrap"
         variants={floatFromRightVariant} initial="initial" whileInView="animate"
          >
            <div className="projects__grid">
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

          {/* <div className="h-[100px]">
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
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
