import { useState, useRef } from "react";
import { useMediaQuery } from 'react-responsive'
import { Tilt } from "react-tilt";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { profilePhotos, aboutMeText } from "../constants/constants.js";
import { fadeIn, floatFromRightVariant } from "../utils/motion.js";

const PhotoCard = ({ index, alt, image, toggleOpen }) => {
  return (
    <Tilt
      className="w-[250px]"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5, 1.25)}
        className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-card"
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
          <img src={image} alt={alt} className="w-full h-full rounded-2xl" />
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

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <section id="about" className="overflow-hidden">
      <div className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
        <div className="mx-auto px-5">
          <p className={styles.sectionSubText + styles.paddingX}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText + styles.paddingX}>
            About Me
          </h2>

          <div className="flex flex-wrap px-5 pt-10 space-x-6 justify-center">
            <motion.div
              className="text-background1 text-[14px] font-bold max-w-6xl leading-[30px] bg-gradient-to-b from-cyan-500 to-purple-300 p-10 rounded-2xl"
              variants={floatFromRightVariant}
              initial="initial"
              ref={ref}
              animate={isInView ? "animate" : "initial"}
            >
              <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
                <div className="flex-1 xs:mx-auto sm:mx-auto md:mx-auto xs:pb-10 sm:pb-10 md:pb-10 xs:pt-10 sm:pt-10 md:pt-10 lg:pt-0 xl:pt-0">
                  {profilePhotos.map((photo, index) => (
                    <PhotoCard key={index} {...photo} toggleOpen={toggleOpen} />
                  ))}
                </div>

                <motion.div
                  className="flex-2 lg:ml-10 xl:ml-10 xs:mx-auto sm:mx-auto md:mx-auto xs:w-full sm:w-full md:w-full"
                  variants={fadeIn('right', 'spring', 0.5, 1.25)}
                >
                  <div className="flex w-full mx-auto">
                    {/* First Paragraph */}
                    {aboutMeText[0]}
                    <br />
                    <br />
                  </div>

                  {isSmallScreen && (
                    /* Read More Link */
                    <div>
                      <p className="text-background1 underline text-[14px] cursor-pointer" onClick={toggleOpen}>
                        read more
                      </p>
                    </div>
                  )}

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
                        {/* Rest of the expanded content */}
                        <motion.div className="flex w-full mx-auto"
                          variants={fadeIn('right', 'spring', 0.5, 1.25)}
                        >
                          {aboutMeText.slice(1).map((text, index) => (
                            <div key={index}>
                              {text}
                              <br />
                              <br />
                            </div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isSmallScreen && (
                    <motion.div className="flex w-full mx-auto"
                      variants={fadeIn('right', 'spring', 0.5, 1.25)}
                    >
                      {aboutMeText.slice(1).map((text, index) => (
                        <div key={index}>
                          {text}
                          <br />
                          <br />
                        </div>
                      ))}
                    </motion.div>
                  )}
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
