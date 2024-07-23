import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modal.css";

const AboutModal = ({ isOpen, onClose, profilePhotos }) => {
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
        <h2 className="text-background1 text-xl md:text-2xl font-bold mb-4 font-subtitle">
          Meet Anastasia
        </h2>
        <div className="text-background1 text-sm md:text-lg mb-4 font-body">
          <div className="flex flex-col-reverse md:flex-row px-5 pt-2 md:pt-8 gap-2 md:gap-6 justify-center mx-auto w-full">
            <div>
              <p>
                Enthusiastic traveler, STEM ambassador, co-founder of the{" "}
                <a
                  href="https://www.lifegoats.com"
                  className="text-cyan-800 hover:text-purple-800 underline cursor-pointer"
                >
                  <strong>Life Goats</strong>
                </a>{" "}
                community. Passionate about helping people and creating
                meaningful projects.
              </p>
              <br />
              <p>
                My web development story starts with a highschool class that
                taught me the basics of algorithmic logic through interesting
                problem-solving tasks.
              </p>
            </div>
            <div className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-2xl w-auto h-auto mb-4 md:mb-0">
              <img
                src={profilePhotos[3].src}
                alt={profilePhotos[3].alt}
                className="max-w-full h-auto rounded-2xl"
                style={{ width: '300px', maxWidth: '850px' }}
              />
            </div>
          </div>
          <br />
          <p>
            "Introduction to computers" and "Introduction to programming" at
            university showed me the power of HTML and Object Oriented
            Programming. So much else - styling with CSS, interactivity with
            JavaScript - I discovered through online tutorials and exciting
            plans of what would happen when I managed to connect the dots.
          </p>
          <br />
          <p>
            Until I decided it was time I got involved with web development
            professionally. I got accepted in the full-stack development
            bootcamp School of Code and for a few months my everyday routine
            consisted of teamwork on projects and learning by building. The dots
            were connected and it felt natural, like I was finally doing what I
            was supposed to be doing all along.
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
            approach on my web development projects.
          </p>
          <br />
          <div className="flex flex-col md:flex-row px-5 gap-2 md:gap-6 justify-center mx-auto w-full">
            <div className="bg-gradient-to-b from-cyan-500 to-purple-300 p-[2px] rounded-2xl shadow-2xl w-auto h-auto mb-4 md:mb-0">
              <img
                src={profilePhotos[5].src}
                alt={profilePhotos[5].alt}
                className="max-w-full h-auto rounded-2xl"
                style={{ width: '300px', maxWidth: '850px' }}
              />
            </div>
            <div>
              <p>
                Outside of work, I enjoy singing in a choir and going to yoga
                classes, inspired by people participating in communities with a common goal.
                Hiking in the great outdoors and gardening help me connect with nature and find
                balance in my life. Exploring local history and architecture
                feels exciting and meaningful as it helps me understand the
                world around me.
              </p>
            </div>
          </div>
          <br />
          <p>
            As a freelance web developer, I work with React.js, as well as
            building server functionalities with Node.js, Express.js and
            MongoDB. I appreciate and use the core of frontend development -
            HTML, CSS and JavaScript - and I'm curious and eager to use
            different technologies as well. Feel free to{" "}
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
