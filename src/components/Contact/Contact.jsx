"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { floatFromLeftVariant, floatFromRightVariant } from "../../utils/motion.js";
import { astronautMoon } from "../../assets/index.js";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

// GitHub/LinkedIn already live in the Hero, and the form covers email — so
// this section is just the form now, not a second copy of those links.
const Contact = () => {
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

  return (
    <section id="contact" className="contact">
      <div className="contact__section">
        <div className="contact__container">
          {/* Title */}
          <div className="contact__title-row">
            <div>
              <h2 className="contact__heading">Contact Me</h2>
            </div>
          </div>
          {/* End of title */}

          <div className="contact__grid">
            {/* Contact Form */}
            <motion.div
            className="contact__form-column"
            variants={floatFromLeftVariant} initial="initial" whileInView="animate"
            viewport={{ once: true }}
            >
              <form ref={form} onSubmit={sendEmail}>
                {/* Form Inputs */}
                <ContactInput type="text" label="Your name" name="from_name" autoComplete="name" />
                <ContactInput type="email" label="Your email address" name="user_email" autoComplete="email" />
                <ContactInput type="textarea" label="Your message" name="message" />

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

            {/* Decorative astronaut illustration — looks like it's standing on the Footer below */}
            <motion.div
            className="contact__image-column"
            variants={floatFromRightVariant} initial="initial" whileInView="animate"
            viewport={{ once: true }}
            >
              <img src={astronautMoon} alt="" className="contact__image" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// The label is visually hidden (the placeholder shows the same text), but
// stays available to screen readers after the placeholder disappears on
// typing.
const ContactInput = ({ type, label, name, autoComplete }) => {
  const id = `contact-${name}`;

  return (
    <div className="contact-input">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {'textarea' === type ? (
        <textarea
          id={id}
          name={name}
          placeholder={label}
          required
          className="contact-input__field"
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          name={name}
          autoComplete={autoComplete}
          required
          className="contact-input__field"
        />
      )}
    </div>
  );
};

export default Contact;
