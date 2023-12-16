import { useState } from "react";
import Popup from "reactjs-popup";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const closePrivacyModal = () => setPrivacyOpen(false);

  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const closeAccessibilityModal = () => setAccessibilityOpen(false);

  return (
    <footer className="bg-background1 items-center justify-center bottom-0 w-full">
    
    <footer className="mx-auto mb-2 flex flex-col lg:flex-row lg:gap-20 justify-center items-center w-[95%] text-center" >
      <div className="mx-auto mb-2 mt-6 flex flex-row items-center md:[50%] lg:w-[60%]">
      <span className="text-primary font-links font-bold text-lg mx-2">
      &#123;
          </span>
      <p className="text-white font-body text-sm">Created with React.js, TailwindCSS, Framer Motion and love.</p>
      <span className="text-primary font-links font-bold text-lg mx-2">
      &#125;
          </span>
      </div>
      <div className="mx-auto mb-4 mt-5 flex flex-row items-center md:[50%] lg:w-[60%]">
        <span className="text-primary font-links font-bold text-lg mx-2">
      &#123;
          </span>
          <p className="text-white font-body text-sm">Why the space theme? Someone once said I should be called Ana-star-sia! Since global astonomy year 2009, amateur observational astronomy has been one of my passions.</p>
          <span className="text-primary font-links font-bold text-lg mx-2">
      &#125;
          </span>
      </div>
      <div className="mx-auto mb-2 mt-5 flex flex-row items-center md:[50%] lg:w-[60%]">
      <span className="text-primary font-links font-bold text-lg mx-2">
      &#123;
          </span>
        <p className="text-white font-body text-sm">I'm truly aiming to promote sustainability and I'm planning to transform this website into a green one. I'm currently researching the best ways to do that.</p>
        <span className="text-primary font-links font-bold text-lg mx-2">
      &#125;
          </span>
      </div>
      </footer>

        <div className="flex flex-row justify-center items-center">
        <hr className="border-secondary border-2 w-2/3 lg:w-[97%] my-2" />
        </div>

        <footer className="flex flex-col lg:flex-row lg:items-center mt-4 pb-2 lg:full items-center">
        <p className="text-white font-body font-bold text-sm mb-1 lg:mr-auto lg:ml-5">
          Copyright
          <span className="text-secondary font-links font-bold text-sm mx-2">
            ©
          </span>
          2023 Anastasia Adamoudi
        </p>

        <div className="flex flex-row gap-2 lg:ml-auto lg:mr-5">
          <button
            type="button"
            onClick={() => setPrivacyOpen((o) => !o)}
            className="pb-3 pt-2 text-primary hover:text-secondary font-links font-bold text-sm no-underline"
          >
            Privacy Policy
          </button>
          <Popup
            open={privacyOpen}
            closeOnDocumentClick
            onClose={closePrivacyModal}
          >
            <div className="fixed bottom-0 right-2 left-3">
              <div className="flex flex-col justify-center items-center mx-auto rounded-lg bg-gradient-to-b from-primary to-secondary p-8 text-background1 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <div className="grid grid-cols-10 gap-4">
                  <p className="col-span-9">
                    In case you contact me via the contact form, I will only use
                    your email address to reply to your message. I will not
                    share your name or email address with any third parties.
                  </p>
                  <a
                    className="col-span-1 cursor-pointer text-6xl my-auto"
                    onClick={closePrivacyModal}
                  >
                    &times;
                  </a>
                </div>
              </div>
            </div>
          </Popup>
          <span className="text-secondary font-links font-bold text-md mx-2 pb-3 pt-2">
            |
          </span>
          <button
            type="button"
            onClick={() => setAccessibilityOpen((o) => !o)}
            className="pb-3 pt-2 text-primary hover:text-secondary font-links font-bold text-sm no-underline"
          >
            Web Accessibility Statement
          </button>
          <Popup
            open={accessibilityOpen}
            closeOnDocumentClick
            onClose={closeAccessibilityModal}
          >
            <div className="fixed bottom-0 right-2 left-3">
              <div className="flex flex-col justify-center items-center mx-auto rounded-lg bg-gradient-to-b from-primary to-secondary p-8 text-background1 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <div className="grid grid-cols-10 gap-4">
                  <p className="col-span-9">
                    This website is built to be accessible to as many people as
                    possible. If you have any accessibility requirements, please
                    contact me and I will do my best to accommodate them.
                  </p>
                  <a
                    className="col-span-1 cursor-pointer text-6xl my-auto"
                    onClick={closeAccessibilityModal}
                  >
                    &times;
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
