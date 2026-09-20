"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../constants/projects.js';
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

          <div className="projects__grid-wrap">
            <div className="projects__grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="projects__grid-item"
                  initial={{
                    opacity: 0,
                    translateX: index % 2 === 0 ? -100 : 100,
                    translateY: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <ProjectCard
                    {...project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
