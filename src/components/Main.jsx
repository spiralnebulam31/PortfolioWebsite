import { motion } from "framer-motion";
import {
  heroVariant,
  heroStarVariant,
  starryHeroVariant1,
  starryHeroVariant2,
  starSliderVariant,
} from "../utils/motion.js";
import { styles } from "../styles.js";
import {
  singleStarLilac,
  threeStars,
  starrySky1,
  starrySky2,
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
    <section className="bg-gradient-to-b from-background1 via-cyan-900 to-background1 relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={
          styles.paddingX +
          " absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        }
      >
        {/* Hero text */}
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
              "text-white z-40 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] flex flex-wrap justify-center items-center gap-1 md:gap-4"
            }
          >
            Hi, I'm <span className="text-secondary">Anastasia</span>
          </motion.h1>
          <motion.p
            variants={heroVariant}
            className={
              styles.mainSubText +
              "text-white-100 max-w-md md:max-w-2xl z-40 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center"
            }
          >
            I create full-stack websites with a blend of creativity, compassion
            and an analytical mindset.
          </motion.p>

          {/* Hero links */}
          <motion.div
            variants={heroVariant}
            className="flex flex-row justify-center items-center gap-5 z-40 mt-5"
          >
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

      {/* Starry background */}
      <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <motion.img
          src={starrySky1}
          alt="Starry background"
          className="absolute left-0 w-2/4 h-full object-cover pointer-events-none z-0 opacity-40"
          variants={starryHeroVariant1}
          initial="initial"
          animate="animate"
        />

        <motion.img
          src={starrySky2}
          alt="Starry background"
          className="absolute right-0 w-2/4 h-full object-cover pointer-events-none z-1 opacity-40"
          variants={starryHeroVariant2}
          initial="initial"
          animate="animate"
        />
      </motion.div>

      {/* Star slider */}
      <motion.div
        variants={heroStarVariant}
        initial="initial"
        animate="animate"
        className="absolute bottom-5 md:bottom-70 w-full flex justify-center items-center z-40"
      >
        <a href="#about">
          <motion.div
            variants={heroStarVariant}
            className="w-[35px] h-[75px] rounded-3xl border-4 border-secondary flex justify-center items-start z-40"
          >
            <motion.div variants={starSliderVariant}>
              <img
                src={singleStarLilac}
                alt="arrow star"
                className="w-[60px] h-[60px] object-contain z-50"
              />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Main;
