import { motion } from "framer-motion";
import {
  heroVariant,
  heroStarVariant,
  starryHeroVariant1,
  starryHeroVariant2,
  starSliderVariant,
} from "../../utils/motion.js";
import {
  singleStarLilac,
  starrySky1,
  starrySky2,
  github,
  github2,
  linkedin,
  linkedin2,
  resume,
  resume2,
} from "../../assets/index.js";
import "./Hero.scss";

const Hero = ({
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
    <section className="hero">
      <div className="hero__content">
        {/* Hero text */}
        <motion.div
          className="hero__intro"
          variants={heroVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={heroVariant}
            className="hero__heading"
          >
            Hi, I'm <span className="hero__name">Anastasia</span>
          </motion.h1>
          <motion.p
            variants={heroVariant}
            className="hero__subheading"
          >
            I create websites with a blend of creativity, compassion
            and an analytical mindset.
          </motion.p>

          {/* Hero links */}
          <motion.div
            variants={heroVariant}
            className="hero__links"
          >
            <a
              href="https://github.com/spiralnebulam31"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleGithubMouseEnter}
              onMouseLeave={handleGithubMouseLeave}
            >
              <img
                src={githubIsHovered ? github2 : github}
                alt="clickable GitHub logo"
                className="hero__link-icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/anastasiaadamoudi-webdev/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleLinkedinMouseEnter}
              onMouseLeave={handleLinkedinMouseLeave}
            >
              <img
                src={linkedinIsHovered ? linkedin2 : linkedin}
                alt="clickable LinkedIn logo"
                className="hero__link-icon"
              />
            </a>

            <a
              href="/Anastasia_Adamoudi_Resume_2026-04-29.pdf"
              download="Anastasia_Adamoudi_Resume_2026-04-29.pdf"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleResumeMouseEnter}
              onMouseLeave={handleResumeMouseLeave}
            >
              <img
                src={resumeIsHovered ? resume2 : resume}
                alt="resume"
                className="hero__link-icon hero__link-icon--resume"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Starry background */}
      <motion.div className="hero__starfield">
        <motion.img
          src={starrySky1}
          alt="Starry background"
          className="hero__starry-sky hero__starry-sky--left"
          variants={starryHeroVariant1}
          initial="initial"
          animate="animate"
        />

        <motion.img
          src={starrySky2}
          alt="Starry background"
          className="hero__starry-sky hero__starry-sky--right"
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
        className="hero__star-slider"
      >
        <a href="#about">
          <motion.div
            variants={heroStarVariant}
            className="hero__star-track"
          >
            <motion.div variants={starSliderVariant}>
              <img
                src={singleStarLilac}
                alt="arrow star"
                className="hero__star-icon"
              />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
