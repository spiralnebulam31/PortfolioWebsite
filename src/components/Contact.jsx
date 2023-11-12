import { useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion.js";
import emailjs from "@emailjs/browser";
import { linkedin, linkedin2, github, github2, email, email2 } from "../assets";
import { mountains, planet1, planet2, starrySky1 } from "../assets";
import Parallax from "./Parallax";

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

      <div className="bg-gradient-to-b from-orange-700 to-purple-800 relative bg-cover w-full left-0 right-0 bottom-0 top-0 py-10"> 

      {/* Title */}
        <div className="mx-auto px-5">
          <div>
            <p className={styles.sectionSubText + styles.paddingX}>Ways to</p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>
              Contact Me
            </h2>
          </div>
        </div>
      {/* End of title */}


          {/* Content text */}
              <div
                className="text-white font-body text-lg max-w-full sm:px-16 px-6 py-8 leading-[30px]"
              >
                <p className="mt-4">Feel free to reach out to me:</p>
              </div>

                {/* Contact info */}
                <div
                  className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card text-center"
                >
                  <div className="bg-background1 w-full rounded-lg border pb-3 pt-3">

                    {/* Contact links */}
                    <div className="flex justify-center items-center gap-5 pb-3">
                      <a
                        href="mailto:anastasiaadamoudi@gmail.com"
                        onMouseEnter={handleEmailMouseEnter}
                        onMouseLeave={handleEmailMouseLeave}
                        alt="email address"
                        className="text-secondary hover:text-primary flex items-center whitespace-nowrap
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl"
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
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl"
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
                        text-sm sm:text-sm md:text-md lg:text-md xl:text-xl"
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
                    </div> {/* End of contact links */}

                  </div> {/* End of contact info */}
                </div> {/* End of contact info container */}

            {/* Contact form */}
            <div
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
            </div>

          </div>
    </section>
  );
};

export default Contact;
