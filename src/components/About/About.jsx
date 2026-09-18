"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profilePhotos } from "../../constants/constants.js";
import {
  fadeIn,
  floatFromRightVariant,
  floatFromLeftVariant,
} from "../../utils/motion.js";
import AboutModal from "./AboutModal.jsx";
import "./About.scss";

const About = () => {

  const [aboutState, setAboutState] = useState(false);

  const toggleAboutModal = () => {
    setAboutState(!aboutState);
  };

  return (
    <section id="about" className="about">
      <div className="about__section">
        <div className="about__container">
          <p className="about__eyebrow">
            Introduction
          </p>
          <h2 className="about__heading">About Me</h2>

          <motion.div className="about__content">
            <motion.div
              className="about__photo-wrap"
              variants={floatFromLeftVariant}
              initial="initial"
              whileInView="animate"
            >
              <motion.div
                variants={fadeIn("right", "spring", 0.5, 1.25)}
                className="about__photo-border"
              >
                <img
                  src={profilePhotos[0].src}
                  alt={profilePhotos[0].alt}
                  className="about__photo"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="about__text-wrap"
              variants={fadeIn("right", "spring", 0.5, 1.25)}
            >
              <motion.div
                className="about__text-inner"
                variants={floatFromRightVariant}
                initial="initial"
                whileInView="animate"
              >
                {/* <p>
                  As a <span className="text-primary"><strong>frontend developer</strong></span>,
                  I create{" "}
                  <span className="underline">
                    personal or business websites
                  </span>{" "}
                  to help you <span className="text-secondary"><strong>showcase your brand{" "}</strong></span> and{" "}
                  <span className="text-secondary"><strong>establish your online mark</strong></span>.
                </p>
                <br />
                <p>The websites I build are:</p>
                <br />
                <ul className="pl-0 lg:pl-4">
                  <li>✩ Functional</li>
                  <li>✩ Accessible</li>
                  <li>✩ Responsive</li>
                  <li>✩ User-friendly</li>
                  <li>✩ Visually appealing</li>
                  <li>✩ Tailored to my client's needs</li>
                </ul>
                <br />
                <p>
                  If you think I can help you with your project, feel free to{" "}
                  <Link to="/#contact" className="text-primary hover:text-secondary cursor-pointer underline"><strong>contact me</strong></Link>.
                </p> */}

                <p>
                  I'm a <span className="about__highlight--primary"><strong>web developer</strong></span> with a passion for{" "}
                  <span className="about__highlight--secondary"><strong>creating meaningful projects</strong></span> and{" "}
                  <span className="about__highlight--secondary"><strong>helping people</strong></span>. I work as a WordPress Developer at{" "}
                  <a
                    href="https://www.linkedin.com/company/pie-web-ltd/posts/?feedView=all"
                          className="about__link"
                    ><strong>PIE Code</strong></a>{" "}and I enjoy building{" "}
                  <span className="about__highlight--primary"><strong>websites</strong></span> and{" "}
                  <span className="about__highlight--primary"><strong>web applications</strong></span> that{" "}
                  <span className="about__highlight--secondary"><strong>make a difference</strong></span>.
                </p>

                <button
                  className="about__cta"
                  onClick={toggleAboutModal}
                  alt="click to read more"
                >
                  Read more about me
                </button>

                <AboutModal isOpen={aboutState} onClose={toggleAboutModal} profilePhotos={profilePhotos} />
                </motion.div>
                </motion.div>
                </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
