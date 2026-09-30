"use client";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../shared/Modal.scss";
import "./AboutModal.scss";

const AboutModal = ({ isOpen, onClose, profilePhotos }) => {
  const closeIcon = (
    <svg className="modal__close-icon" fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="currentColor"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: "modal__overlay",
        modal: "modal__panel",
      }}
      aria-labelledby="about-modal"
    >
      <div className="modal__body about-modal__body">
        <h2 className="about-modal__title">
          Meet Anastasia
        </h2>
        <div className="about-modal__content">
          <div className="about-modal__row">
            <div>
              <p>
                Web developer, speaker, STEM Ambassador and co-founder of the{" "}
                <a
                  href="https://www.lifegoats.com"
                  className="about-modal__link"
                >
                  <strong>Life Goats</strong>
                </a>{" "}
                community. I love creating websites and experiences that mean
                something to the people they’re made for, and that help them
                reach their goals, whether those goals are about a business or
                something closer to the heart.
              </p>
              <br />
              <p>
                My story with code started with a highschool class that taught
                me the basics of algorithmic logic, and a university course
                where I first met HTML and Object Oriented Programming. For years
                I kept learning through online tutorials, until the full-stack
                bootcamp School of Code finally helped me connect the dots. It
                felt natural, like I was doing what I was supposed to be doing
                all along.
              </p>
            </div>
            <div className="about-modal__photo-border">
              <img
                src={profilePhotos[1].src}
                alt={profilePhotos[1].alt}
                className="about-modal__photo"
              />
            </div>
          </div>
          <br />
          <p>
            Since then, my{" "}
            <a
              href="#journey"
              className="about-modal__link"
            >
              <strong>web development journey</strong>
            </a>{" "}
            has taken me to PIE Code, where I work as a WordPress Developer with
            WordPress, PHP, JavaScript, HTML, CSS and Next.js. I focus on block
            themes, including the block theme framework our team builds its
            projects on, always with accessibility and a seamless user
            experience in mind. Alongside work, I’ve helped bring other people’s
            visions to life through{" "}
            <a
              href="#projects"
              className="about-modal__link"
            >
              <strong>projects</strong>
            </a>{" "}
            like the Greek Art Map app and Light A Beacon.
          </p>
          <br />
          <p>
            Studying mathematics, working in customer service, caring for
            vulnerable adults and volunteering have shaped me just as much. They
            taught me the compassion behind the people-centred way I approach
            every project.
          </p>
          <br />
          <div className="about-modal__row">
            <div className="about-modal__photo-border">
              <img
                src={profilePhotos[2].src}
                alt={profilePhotos[2].alt}
                className="about-modal__photo"
              />
            </div>
            <div>
              <p>
                I feel deeply connected to my inner self and to nature, and I
                believe that doing the things you love is what gives life its
                meaning. For me, that’s yoga, hiking, being out in nature,
                gazing at the stars, exploring new places and singing with the
                Southend Bach Choir, whose website I also look after.
              </p>
            </div>
          </div>
          <br />
          {/* <p>
            As a freelance web developer, I work with React.js, as well as
            building server functionalities with Node.js, Express.js and
            MongoDB. I appreciate and use the core of frontend development -
            HTML, CSS and JavaScript - and I’m curious and eager to use
            different technologies as well. Feel free to{" "}
            <a
              href="#contact"
              className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
            >
              <strong>contact</strong>
            </a>{" "}
            me if you’d like to collaborate or if you have any web ideas you
            want to bring to life!
          </p> */}
          <p>
            I also believe that sharing what you know is one of the most
            meaningful ways to help people. If I can help others love what I
            love, just by doing what I love, then why not? That’s why I create
            outdoor retreats with my friend through Life Goats, volunteer as a
            STEM Ambassador, give talks, from “Building Websites with
            WordPress” at Chelmsford Tech Meetup to navigation menus in block
            themes at WordCamp Athens, and write tutorial articles, like my
            Block Theme series on LinkedIn.
          </p>
          <br />
          <figure className="about-modal__figure">
            <div className="about-modal__photo-border about-modal__photo-border--solo">
              <img
                src={profilePhotos[3].src}
                alt={profilePhotos[3].alt}
                className="about-modal__photo"
              />
            </div>
            <figcaption className="about-modal__caption">
              Give me a mountain trail and a waterfall at the end of it, and
              I’m home.
            </figcaption>
          </figure>
        </div>
      </div>
    </Modal>
  );
};

export default AboutModal;
