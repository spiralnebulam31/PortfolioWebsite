"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, textVariant, floatFromLeftVariant, floatFromRightVariant } from "../../utils/motion.js";
import emailjs from "@emailjs/browser";
import { linkedin, linkedin2, github, github2, email, email2 } from "../../assets/index.js";
import "./Contact.scss";

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

  const templateCode = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CODE;
  const serviceCode = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_CODE;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;


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
    <section id="contact" className="contact">
      <div className="contact__section">
        {/* Title */}
        <div className="contact__title-row">
          <div>
            <p className="contact__eyebrow">Ways to</p>
            <h2 className="contact__heading">Contact Me</h2>
          </div>
        </div>
        {/* End of title */}

        <div className="contact__grid">
          {/* Contact Information */}
          <motion.div
          className="contact__info-column"
          variants={floatFromLeftVariant} initial="initial" ref={ref} whileInView="animate"
          >
            <div className="contact__intro">
              <p>Feel free to reach out to me:</p>
            </div>

            {/* Contact Info Container */}
            <div className="contact__info-border">
              <div className="contact__info-panel">

                {/* Contact Links */}
                <div className="contact__links">
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
                    href="https://www.linkedin.com/in/anastasiaadamoudi-webdev/"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handleLinkedinMouseEnter}
                    onMouseLeave={handleLinkedinMouseLeave}
                    icon={linkedinIsHovered ? linkedin2 : linkedin}
                    text="linkedin.com/in/anastasiaadamoudi-webdev"
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
          className="contact__form-column"
          variants={floatFromRightVariant} initial="initial" ref={ref} whileInView="animate"
          >
            <p className="contact__form-intro">
              Or send me a message below:
            </p>

            <form ref={form} onSubmit={sendEmail}>
              {/* Form Inputs */}
              <ContactInput type="text" placeholder="Your name" name="from_name" />
              <ContactInput type="email" placeholder="Your email address" name="user_email" />
              <ContactInput type="textarea" placeholder="Your message" name="message" />

              {/* Submit Button */}
              <div className="contact__submit-row">
                <button
                  type="submit"
                  className="contact__submit"
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
  <div className="contact-link">
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noreferrer"
      className="contact-link__anchor"
    >
      <img src={icon} alt={`${text} icon`} className="contact-link__icon" />
      <p className="contact-link__text">{text}</p>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name }) => (
  <div className="contact-input">
    {type === 'textarea' ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="contact-input__field"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="contact-input__field"
      />
    )}
  </div>
);

export default Contact;
