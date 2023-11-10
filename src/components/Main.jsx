import { motion } from "framer-motion";
import { heroVariant, heroStarVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import {
  singleStarLilac,
  threeStars,
  github,
  github2,
  linkedin,
  linkedin2,
  resume,
  resume2,
} from "../assets";

const Main = ({
  githubIsHovered,
  handleGithubMouseEnter,
  handleGithubMouseLeave,
  linkedinIsHovered,
  handleLinkedinMouseEnter,
  handleLinkedinMouseLeave,
  resumeIsHovered,
  handleResumeMouseEnter,
  handleResumeMouseLeave,
}) => {
  return (
    <section className="bg-gradient-to-b from-background1 via-cyan-800 to-background1 relative w-full h-screen mx-auto">
      <div
        className={
          styles.paddingX +
          " absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        }
      >
        <motion.div
        className="flex flex-col justify-center items-center mx-auto"
        variants={heroVariant}
        initial="initial"
        animate="animate"
        >
          <motion.h1
          variants={heroVariant}
            className={
              styles.mainHeadText +
              "text-white [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
            }
          >
            Hi, I'm <span className="text-secondary">Anastasia</span>
          </motion.h1>
          <motion.p
          variants={heroVariant}
            className={
              styles.mainSubText +
              "text-white-100 max-w-md md:max-w-2xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
            }
          >
            I create full-stack websites with a blend of creativity, compassion
            and an analytical mindset.
          </motion.p>

          <motion.div
          variants={heroVariant}
          className="flex flex-row justify-center items-center gap-5">
            <a
              href="https://github.com/AnastasiaAdamoudi"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleGithubMouseEnter}
              onMouseLeave={handleGithubMouseLeave}
            >
              <img
                src={githubIsHovered ? github2 : github}
                alt="clickable GitHub logo"
                className="w-[40px] h-[40px] object-contain mt-4"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/anastasiaadamoudi89/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleLinkedinMouseEnter}
              onMouseLeave={handleLinkedinMouseLeave}
            >
              <img
                src={linkedinIsHovered ? linkedin2 : linkedin}
                alt="clickable LinkedIn logo"
                className="w-[40px] h-[40px] object-contain mt-4"
              />
            </a>

            <a
              href="/AnastasiaAdamoudiCV.pdf"
              download="AnastasiaAdamoudiCV.pdf"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleResumeMouseEnter}
              onMouseLeave={handleResumeMouseLeave}
            >
              <img
                src={resumeIsHovered ? resume2 : resume}
                alt="resume"
                className="w-[40px] h-[40px] object-contain shadow-lg mt-4"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
      variants={heroStarVariant}
      initial="initial"
      animate="animate"
      className="absolute xs:bottom-10 bottom-60 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
          variants={heroStarVariant}
          className="w-[35px] h-[75px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 20, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              <img
                src={singleStarLilac}
                alt="arrow star"
                className="w-[60px] h-[60px] object-contain"
              />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Main;
