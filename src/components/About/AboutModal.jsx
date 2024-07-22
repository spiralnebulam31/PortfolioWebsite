import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modal.css";

const AboutModal = ({ isOpen, onClose }) => {
  const closeIcon = (
    <svg fill="#2B96B1" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="#2B96B1"
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
        overlay: "customOverlay",
        modal: "customModal",
      }}
      aria-labelledby="about-modal"
    >
      <div className="flex flex-col items-center justify-center mx-auto p-4">
        <h2 className="text-background1 text-2xl font-bold mb-4 font-subtitle">
          Meet Anastasia
        </h2>
        <div className="text-background1 text-lg mb-4 font-body">
          <p>
            I was twelve years old when I first used a computer - it was a
            school “Introduction to computers” class and to me it felt like the
            most natural thing in the world, like I had been using a computer my
            entire life. A highschool programming class taught me the basics of
            algorithmic logic and a few other computer classes at university
            showed me part of the power of HTML and Object Oriented Programming.
            The rest I discovered on my own through online tutorials and
            exciting plans of what will happen when I manage to connect the
            dots.
          </p>
          <br />
          <p>
            Until, one day in 2022, I decided it was time I got involved with
            web development professionally. I got accepted in the full-stack
            development bootcamp School of Code and for a few months my everyday
            routine consisted of teamwork on projects and learning by building.
            The dots were connected and once again, it felt natural, like I was
            finally doing what I was supposed to be doing all along.
          </p>
          <br />
          <p>
            My{" "}
            <a
              href="#journey"
              className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
            >
              <strong>web development journey</strong>
            </a>{" "}
            has been an exciting and rewarding one. My other experiences -
            studying mathematics, working at customer service and volunteering -
            have been equally important, shaping who I am today. My recent time
            as a caregiver for vulnerable adults has helped me acknowledge my
            innate desire to help others. The compassion I’ve learned to develop
            while engaging with people has allowed me to follow a people-centric
            approach to my web development projects.
          </p>
          <br />
          <p>
            Outside of work, I enjoy singing in a choir and going to yoga
            classes, inspired by communities gathering with a common goal.
            Hiking and gardening help me connect with nature and find balance in
            my life. Exploring local history and architecture feels exciting and
            meaningful as it helps me understand the world around me.
          </p>
          <br />
          <p>
            As a freelance web developer, I work with React.js, as well as building server
            functionalities with Node.js, Express.js and MongoDB. I appreciate
            and use the core of frontend development - HTML, CSS and JavaScript
            - and I'm curious and eager to use different technologies as well.
            Feel free to{" "}
            <a
              href="#contact"
              className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
            >
              <strong>contact</strong>
            </a>{" "}
            me if you'd like to collaborate or if you have any web ideas you
            want to bring to life!
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AboutModal;
