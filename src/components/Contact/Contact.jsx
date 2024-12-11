import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../../styles.js";
import { fadeIn, textVariant, floatFromLeftVariant, floatFromRightVariant } from "../../utils/motion.js";
import emailjs from "@emailjs/browser";
import { linkedin, linkedin2, github, github2, email, email2 } from "../../assets/index.js";

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
  const form = useRef();

  const openPopup = () => {
    alert("Email Sent! I will reply to you as soon as possible.");
  };

  const templateCode = import.meta.env.VITE_EMAILJS_TEMPLATE_CODE;
  const serviceCode = import.meta.env.VITE_EMAILJS_SERVICE_CODE;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceCode,
        templateCode,
        form.current,
        userID
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

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="contact" className="overflow-hidden">
      <div className="bg-gradient-to-b from-orange-700 to-purple-800 relative bg-cover w-full left-0 right-0 bottom-0 top-0 pb-10 pt-14">
        {/* Title */}
        <div className="mx-auto px-5">
          <div>
            <p className={styles.sectionSubText + styles.paddingX}>Ways to</p>
            <h2 className={styles.sectionHeadText + styles.paddingX}>Contact Me</h2>
          </div>
        </div>
        {/* End of title */}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-1">
          {/* Contact Information */}
          <motion.div
          className="mb-6 text-center w-[95%] md:w-[75%] xl:w-[70%] mx-auto"
          variants={floatFromLeftVariant} initial="initial" ref={ref} whileInView="animate"
          >
            <div className="text-white font-body text-lg max-w-full sm:px-16 px-6 pt-8 mb-5 leading-[30px]">
              <p>Feel free to reach out to me:</p>
            </div>

            {/* Contact Info Container */}
            <div className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card text-center">
              <div className="bg-background1 w-full rounded-lg border pb-3 pt-3">

                {/* Contact Links */}
                <div className="flex flex-col gap-5 py-3">
                  <ContactLink
                    href="mailto:anastasiaadamoudi@gmail.com"
                    onMouseEnter={handleEmailMouseEnter}
                    onMouseLeave={handleEmailMouseLeave}
                    icon={emailIsHovered ? email2 : email}
                    text="anastasiaadamoudi@gmail.com"
                  />
                  <ContactLink
                    href="https://github.com/spiralnebulam31"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleGithubMouseEnter}
                    onMouseLeave={handleGithubMouseLeave}
                    icon={githubIsHovered ? github2 : github}
                    text="github.com/spiralnebulam31"
                  />
                  <ContactLink
                    href="https://www.linkedin.com/in/anastasiaadamoudi89/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleLinkedinMouseEnter}
                    onMouseLeave={handleLinkedinMouseLeave}
                    icon={linkedinIsHovered ? linkedin2 : linkedin}
                    text="linkedin.com/in/anastasiaadamoudi89"
                  />
                </div>
                {/* End of Contact Links */}

              </div>
              {/* End of Contact Info */}
            </div>
            {/* End of Contact Info Container */}
          </motion.div>
          {/* End of Contact Information */}

          {/* Contact Form */}
          <motion.div
          className="text-center w-[80%] md:w-[75%] xl:w-[70%] mx-auto pt-8 mb-5"
          variants={floatFromRightVariant} initial="initial" ref={ref} whileInView="animate"
          >
            <p className="text-white font-body text-lg max-w-lg xl:max-w-6xl pb-5 mx-auto">
              Or send me a message below:
            </p>

            <form ref={form} onSubmit={sendEmail}>
              {/* Form Inputs */}
              <ContactInput type="text" placeholder="Your name" name="from_name" />
              <ContactInput type="email" placeholder="Your email address" name="user_email" />
              <ContactInput type="textarea" placeholder="Your message" name="message" />

              {/* Submit Button */}
              <div className="mb-1 =">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-primary mt-1 font-links font-bold uppercase text-md md:text-xl text-background1 py-2 px-4 rounded-lg items-center mx-auto"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
          {/* End of Contact Form */}
        </div>
      </div>
    </section>
  );
};

// Additional components (helper components)
const ContactLink = ({ href, onMouseEnter, onMouseLeave, icon, text }) => (
  <div className="flex justify-center items-center gap-5 pb-3">
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noreferrer"
      className="text-secondary hover:text-primary flex items-center whitespace-nowrap text-md lg:text-lg"
    >
      <img src={icon} alt={`${text} icon`} className="w-[20px] h-[20px] object-contain" />
      <p className="ml-2">{text}</p>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name }) => (
  <div className="mb-4 flex items-center bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-lg shadow-card">
    {type === 'textarea' ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="border py-2 px-3 text-body bg-background1 w-full md:w-full rounded-lg text-white text-body"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border py-2 px-3 text-body bg-background1 w-full md:w-full rounded-lg text-white text-body"
      />
    )}
  </div>
);

export default Contact;
