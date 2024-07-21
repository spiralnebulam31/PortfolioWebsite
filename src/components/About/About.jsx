import { useState, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { styles } from "../../styles.js";
import { profilePhotos } from "../../constants/constants.js";
import { fadeIn, floatFromRightVariant } from "../../utils/motion.js";

const PhotoCard = ({ index, alt, image, toggleOpen }) => {
  return (
    <Tilt
      className="w-[250px]"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1.25)}
        className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-2xl"
        style={{
          transform: "translateZ(20px)",
        }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-background rounded-2xl 
                  flex justify-evenly items-center flex-col"
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-full rounded-2xl -mt-10 lg:mt-0"
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section id="about" className="overflow-hidden">
      <div className="bg-background1 relative bg-cover w-full h-auto top-0 left-0 right-0 bottom-0 pt-5 pb-10">
        <div className="mx-auto px-5">
          <p className={styles.sectionSubText + styles.paddingX}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText + styles.paddingX}>About Me</h2>

          <div className="flex px-5 pt-10 space-x-6 justify-center w-full sm:w-full md:w-full lg:w-[70%]">
            <motion.div
              className="text-background1 text-[14px] font-bold max-w-6xl leading-[30px] bg-gradient-to-b from-cyan-500 to-purple-300 p-10 rounded-2xl"
              variants={floatFromRightVariant}
              initial="initial"
              ref={ref}
              animate={isInView ? "animate" : "initial"}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 mx-auto sm:mx-auto md:mx-auto pb-10 sm:pb-10 md:pb-10 xs:pt-10 sm:pt-10 md:pt-10 lg:pt-0 xl:pt-0">
                  {profilePhotos.map((photo, index) => (
                    <PhotoCard key={index} {...photo} toggleOpen={toggleOpen} />
                  ))}
                </div>

                <motion.div
                  className="lg:ml-10 xl:ml-10 xs:mx-auto sm:mx-auto md:mx-auto w-full sm:w-full md:w-full lg:w-[70%]"
                  variants={fadeIn("right", "spring", 0.5, 1.25)}
                >
                  <div className="flex-2 items-center justify-center w-full mx-auto">
                    {/* First Paragraph */}
                    <p>As a frontend developer, I create websites that are:</p>
                    <ul>
                      <li>Functional</li>
                      <li>Accessible</li>
                      <li>Responsive</li>
                      <li>User-friendly</li>
                      <li>Visually appealing</li>
                      <li>Tailored to each client's needs</li>
                    </ul>
                    <br />
                    <p
                      className="text-background1 underline font-light text-[14px] cursor-pointer"
                      onClick={toggleOpen}
                      alt="click to read more"
                    >
                      read more
                    </p>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        layout
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        exit="closed"
                        variants={{
                          open: { width: "100%", right: "0", zIndex: 2 },
                          closed: { width: "100%", right: "0", zIndex: 1 },
                        }}
                      >
                        <p>
                          My{" "}
                          <a
                            href="#journey"
                            className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
                          >
                            journey
                          </a>{" "}
                          has been a diverse and rewarding one, taking me
                          through various experiences such as studying
                          mathematics, working at customer service and
                          volunteering. One of my most profound experiences has
                          been my time as a caregiver for vulnerable adults. It
                          has helped me acknowledge my innate desire to help
                          others. The compassion I’ve learned to develop while
                          engaging with people has allowed me to follow a
                          people-centric approach to my web development
                          projects.
                        </p>
                        <br />
                        <p>
                          I was twelve years old when I first used a computer -
                          it was a school “Introduction to computers” class and
                          to me it felt like the most natural thing in the
                          world, like I had been using a computer my entire
                          life. A highschool programming class taught me the
                          basics of algorithmic logic and a few other computer
                          classes at university showed me part of the power of
                          HTML and Object Oriented Programming. The rest I
                          discovered on my own through online tutorials and
                          exciting plans of what will happen when I manage to
                          connect the dots.
                        </p>
                        <br />
                        <p>
                          Until, one day in 2022, I decided it was time I got
                          involved with web development professionally. I got
                          accepted in the full-stack development bootcamp School
                          of Code and for a few months my everyday routine
                          consisted of teamwork on projects and learning by
                          building. The dots were connected and once again, it
                          felt natural, like I was finally doing what I was
                          supposed to be doing all along. But it’s the journey
                          that matters, so here I am now, with experiences that
                          have shaped my personality and my way of thinking,
                          currently working on freelance projects and helping
                          people and businesses establish their online mark.
                        </p>
                        <br />
                        <p>
                          Outside of work, I enjoy singing in a choir and going
                          to yoga classes, finding the community aspect and the
                          mutual goal all the participants have inspiring.
                          Hiking and gardening help me connect with nature and
                          find balance in my life. Last but not least, exploring
                          local history and architecture, as well as the
                          universe, feels exciting and meaningful as it helps me
                          understand the world around me.
                        </p>
                        <br />
                        <p>
                          As a web developer, I work with React.js, as well as
                          building server functionalities with Node.js,
                          Express.js and MongoDB. I appreciate and use the core
                          of frontend development - HTML, CSS and JavaScript -
                          and I'm curious and eager to learn new technologies.
                          Feel free to{" "}
                          <a
                            href="#contact"
                            className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
                          >
                            contact
                          </a>{" "}
                          me if you have any web ideas that you’d like to bring
                          to life!
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
