import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion.js';
import emailjs from "@emailjs/browser"
import linkedin from '../assets/linkedin.svg';
import linkedin2 from '../assets/linkedin2.svg';
import github from '../assets/github.svg';
import github2 from '../assets/github2.svg';
import spaceship from '../assets/spaceship.png';

const Contact = () => {

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

  // For LinkedIn logo hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="contact">
  <div className="bg-background1 relative bg-cover w-full top-0 left-0 right-0 bottom-0 pt-5 pb-10">
    <div className="mx-auto px-5">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText + styles.paddingX}>Ways to</p>
        <h2 className={styles.sectionHeadText + styles.paddingX}>Contact Me</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="mb-2 text-center max-w-[80%] xl:max-w-[60%] mx-auto">
      <motion.div
            variants={fadeIn("", "", 0.1, 1)} //direction, type, delay, duration
            className={styles.padding + "text-white text-[14px] max-w-6xl leading-[30px]"}
          >
          Let's connect and embark on a collective journey through the ever-evolving tech landscape, charting a course for innovation and growth! 🚀
          </motion.div>
        </div>

        <div className="text-center mt-10">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Name
                </label> */}
                <input
                  type="text"
                  placeholder="Your name"
                  name="from_name"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Email
                </label> */}
                <input
                  type="email"
                  placeholder="Your email address"
                  name="user_email"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4 flex items-center">
                {/* <label className="text-background2 font-bold text-sm uppercase m-2">
                  Message
                </label> */}
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full md:w-full border rounded-md py-2 px-3 text-body"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-secondaryT hover:bg-tertiaryT mt-2 mr-5 font-links font-bold uppercase
                            text-sm sm:text-md md:text-l lg:text-xl text-background2 py-2 px-4 rounded-md items-center mx-auto"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="align-top text-center mx-auto">
          <img src={spaceship} alt="spaceshi[" className="w-[200px] mx-auto" />
          <p className="text-primary font-body font-bold text-lg max-w-[80%] xl:max-w-[60%] mx-auto mt-5">
            If you’ve had a positive and smooth experience using the app, I
            would greatly appreciate it if you could consider leaving a
            recommendation on my LinkedIn profile below.
          </p>
          <div className="text-center mt-3 mx-auto w-[50px] mb-5">
            <a
              href="https://www.linkedin.com/in/anastasiaadamoudi89/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? linkedin2 : linkedin}
                alt="clickable LinkedIn logo"
                className="mt-4"
              />
            </a>
          </div>
          <div className="text-center mt-3 mx-auto w-[50px] mb-5">
            <a
              href="https://www.linkedin.com/in/anastasiaadamoudi89/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={isHovered ? github2 : github}
                alt="clickable GitHub logo"
                className="mt-4"
              />
            </a>
          </div>
          </div>
        </div>

    </div>
</section>

  )
}

export default Contact;