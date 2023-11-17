import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants/constants.js';
import { fadeIn, textVariant } from '../utils/motion.js';

const ProjectCard = ({ index, image, name, description, date, techStack, repoLink, repoLink2, websiteLink, status, isOpen, toggleOpen }) => {
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
        onClick={toggleOpen}
      >
        <div className="bg-background rounded-2xl flex justify-evenly items-center flex-col">
          <img src={image.src} alt={image.alt} className="w-full h-full rounded-2xl" />
          <br />
          <div className="text-background1 text-center text-[20px] max-w-[350px] leading-[30px] font-bold">
            {name}
          </div>
        </div>
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
              <div className="text-background1 text-center text-[14px] max-w-[350px] leading-[30px] flex justify-evenly gap-2">
                <p><strong>Links:</strong></p>
                {repoLink && (
                  <div className="underline">
                    <a href={repoLink} alt="code" target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </div>
                )}
                {repoLink2 && (
                  <div className="underline">
                    <a href={repoLink2} alt="more code" target="_blank" rel="noopener noreferrer">
                      More Code
                    </a>
                  </div>
                )}
                {websiteLink && (
                  <div className="underline">
                    <a href={websiteLink} alt="website" target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  </div>
                )
                }
              </div>
              <br />
              <div className="text-background1 text-center text-[14px] max-w-[350px] leading-[30px]">
                <p><strong>Date:</strong> {date}</p>
                <br />
                <p><strong>The challenge:</strong> {description.challenge}</p>
                <br />
                <p><strong>The solution:</strong> {description.solution}</p>
                <br />
                <p><strong>Key takeaways:</strong></p>
                <ul>
                  {description.learnings.map((learning, idx) => (
                    <li key={idx}>★ {learning}</li>
                  ))}
                </ul>
                <br />
                <p><strong>Technologies used:</strong></p>
                <ul>
                  {techStack.map((tech, index) => (
                    <li key={index}>★ {tech}</li>
                  ))}
                </ul>
                <br />
                <p><strong>Status:</strong> {status}</p>
                <br />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const Projects = () => {
  const [isOpen, setIsOpen] = useState(Array(projects.length).fill(false));

  const toggleOpen = (index) => {
    setIsOpen((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <section id="projects">
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
          <div className="flex flex-col text-center mx-auto text-white font-body text-lg max-w-full sm:px-16 px-6 pt-8 mb-1 leading-[30px]">
              <p>Click on the project card to expand or collapse and discover more details:</p>
            </div>
          <div className="flex flex-wrap px-5 space-x-6 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
