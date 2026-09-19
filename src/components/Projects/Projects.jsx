"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../constants/projects.js';
import { floatFromRightVariant } from '../../utils/motion.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';
import "./Projects.scss";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
                  {...project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
