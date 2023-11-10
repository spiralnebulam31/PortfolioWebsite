import { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion.js";
import emailjs from "@emailjs/browser";
import { linkedin, linkedin2, github, github2, email, email2 } from "../assets";
import mountains from "../assets/space-mountains.png";
import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";

const Contact = ({
  linkedinIsHovered,
  handleLinkedinMouseEnter,
  handleLinkedinMouseLeave,
  githubIsHovered,
  handleGithubMouseEnter,
  handleGithubMouseLeave,
  emailIsHovered,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
}) => {
  // For emailjs
  const form = useRef();

  const openPopup = () => {
    alert("Email Sent!");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dokf8mn",
        "template_f443ai4",
        form.current,
        "eLRFDbpH-SkWvxaZ3"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          openPopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<section id="contact">
      {/* Title */}
      <div className="bg-gradient-to-b from-background1 to-orange-400 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
        <div className="mx-auto px-5">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText + styles.paddingX}>Ways to</p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              Contact Me
            </h2>
          </motion.div>

          {/* Content text */}
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="mb-2 text-center max-w-full xl:max-w-[70%] mx-auto">
              <motion.div
                variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
                className={
                  styles.padding +
                  "text-primary font-body text-lg max-w-lg xl:max-w-6xl leading-[30px]"
                }
              >
                <p>
                  Let's connect and embark on a collective journey through the
                  ever-evolving tech landscape, charting a course for innovation
                  and growth!
                </p>
                <p className="mt-4">Feel free to reach out to me:</p>

                {/* Contact info */}
                <div
                  className="flex flex-col justify-center items-center gap-5
                   bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card text-center mt-4 w-full xl:w-[80%] mx-auto"
                >
                  <div className="bg-background1 w-full rounded-lg border pb-3 pt-3 mx-auto">
                    <div className="flex justify-center items-center gap-5 pb-3">
                      <a
                        href="mailto:anastasiaadamoudi@gmail.com"
                        onMouseEnter={handleEmailMouseEnter}
                        onMouseLeave={handleEmailMouseLeave}
                        alt="email address"
                        className="text-secondary hover:text-primary flex items-center whitespace-nowrap
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl max-w-lg xl:max-w-6xl"
                      >
                        <img
                          src={emailIsHovered ? email2 : email}
                          alt="email icon"
                          className="w-[20px] h-[20px] object-contain"
                        />
                        <p className="ml-2">anastasiaadamoudi@gmail.com</p>
                      </a>
                    </div>

                    <div className="flex justify-center items-center gap-5 pb-3">
                      <a
                        href="https://github.com/AnastasiaAdamoudi"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={handleGithubMouseEnter}
                        onMouseLeave={handleGithubMouseLeave}
                        alt="GitHub profile"
                        className="text-secondary hover:text-primary flex items-center whitespace-nowrap
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl max-w-lg xl:max-w-6xl"
                      >
                        <img
                          src={githubIsHovered ? github2 : github}
                          alt="GitHub icon"
                          className="w-[20px] h-[20px] object-contain"
                        />
                        <p className="ml-2">github.com/AnastasiaAdamoudi</p>
                      </a>
                    </div>

                    <div className="flex justify-center items-center gap-5 pb-1">
                      <a
                        href="https://www.linkedin.com/in/anastasiaadamoudi89/"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={handleLinkedinMouseEnter}
                        onMouseLeave={handleLinkedinMouseLeave}
                        alt="LinkedIn profile"
                        className="text-secondary hover:text-primary flex items-center whitespace-nowrap
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl max-w-lg xl:max-w-6xl"
                      >
                        <img
                          src={linkedinIsHovered ? linkedin2 : linkedin}
                          alt="LinkedIn icon"
                          className="w-[20px] h-[20px] object-contain"
                        />
                        <p className="ml-2">
                          linkedin.com/in/anastasiaadamoudi89
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className="text-center w-[60%] md:w-[40%] mx-auto"
            >
              <p
                className={
                  "text-white font-body text-lg max-w-lg xl:max-w-6xl pb-5"
                }
              >
                Or send me a message below:
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <div
                  className="mb-4 flex items-center
                   bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card"
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    name="from_name"
                    className="border py-2 px-3 text-body bg-background1 w-full md:w-full rounded-lg text-white text-body"
                  />
                </div>

                <div
                  className="mb-4 flex items-center
                   bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    name="user_email"
                    className="border py-2 px-3 text-body bg-background1 w-full md:w-full rounded-lg text-white text-body"
                  />
                </div>

                <div
                  className="mb-4 flex items-center
                   bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card"
                >
                  <textarea
                    name="message"
                    placeholder="Your message"
                    className="border py-2 px-3 text-body bg-background1 w-full md:w-full rounded-lg text-white text-body"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-primary mt-1 font-links font-bold uppercase
                            text-sm sm:text-md md:text-l lg:text-xl text-background1 py-2 px-4 rounded-md items-center mx-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
          <div className="align-top text-center mx-auto"></div>
        </div>


        {/* Parallax images */}
        {/* <div className="absolute bottom-0 left-0 right-0">
            <img src={mountains} alt="mountains" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <img src={planet1} alt="planet1" className="w-[300px] h-[300px] object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <img src={planet2} alt="planet2" className="w-[300px] h-[300px] object-contain" />
        </div> */}

      </div>
      
    </section>
  );
};

export default Contact;
