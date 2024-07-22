import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../../styles.js";
import { profilePhotos } from "../../constants/constants.js";
import {
  fadeIn,
  floatFromRightVariant,
  floatFromLeftVariant,
  floatFromRightDelayedVariant,
} from "../../utils/motion.js";
import AboutModal from "./AboutModal.jsx";
import { Link } from "react-router-dom";

const About = ({ image, alt }) => {
  const [aboutState, setAboutState] = useState(false);

  const toggleAboutModal = () => {
    setAboutState(!aboutState);
  };

  return (
    <section id="about" className="overflow-hidden">
      <div className="bg-background1 relative bg-cover w-full h-auto top-0 left-0 right-0 bottom-0 pt-5 pb-10">
        <div className="mx-auto px-5">
          <p className={styles.sectionSubText + styles.paddingX}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText + styles.paddingX}>About Me</h2>

          <motion.div className="flex flex-col lg:flex-row px-5 pt-2 lg:pt-14 gap-2 lg:gap-10 justify-center mx-auto w-full sm:w-full md:w-full lg:w-[70%]">
            <motion.div
              className="mx-auto pb-10 pt-10 sm:pt-2 lg:pt-0"
              variants={floatFromLeftVariant}
              initial="initial"
              whileInView="animate"
            >
              <motion.div
                variants={fadeIn("right", "spring", 0.5, 1.25)}
                className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-2xl w-auto h-auto"
              >
                <img
                  src={profilePhotos[0].src}
                  alt={profilePhotos[0].alt}
                  className="w-[250px] md:w-[350px] h-auto rounded-2xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex text-center lg:text-start lg:ml-10 mx-auto w-full lg:w-[70%]"
              variants={fadeIn("right", "spring", 0.5, 1.25)}
            >
              <motion.div
                className="items-center justify-center w-full mx-auto font-medium text-lg lg:text-2xl"
                variants={floatFromRightVariant}
                initial="initial"
                whileInView="animate"
              >
                <p>
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
                </p>
                <button
                  className="bg-secondary hover:bg-primary text-background1 p-2 w-auto h-auto rounded-lg no-underline font-bold text-[18px] cursor-pointer mt-8"
                  onClick={toggleAboutModal}
                  alt="click to read more"
                >
                  Read more about me
                </button>

                <AboutModal isOpen={aboutState} onClose={toggleAboutModal} />
                </motion.div>
                </motion.div>
                </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
