import PrivacyModal from "./PrivacyModal";
import AccessibilityModal from "./AccessibilityModal";

const Footer = ({ modalState, setModalState, closeModal }) => {

  const { privacyOpen, accessibilityOpen } = modalState;

  const togglePrivacyModal = () => {
    setModalState({
      privacyOpen: !privacyOpen,
      accessibilityOpen,
    });
  };

  const toggleAccessibilityModal = () => {
    setModalState({
      privacyOpen,
      accessibilityOpen: !accessibilityOpen,
    });
  };

  return (
    <footer className="bg-background1 bg-contain bg-center bg-no-repeat bottom-0 left-0 right-0 w-full h-auto flex flex-col items-center justify-center overflow-hidden pb-5">
      
      <div className="flex flex-col justify-center items-center align-middle mx-auto my-auto gap-3 w-[90%]">

      <div className="mx-auto mb-2 mt-6 flex flex-row justify-center items-center text-center md:[50%] lg:w-[60%]">
      <span className="text-primary font-links text-2xl mx-2">
      &#123;
          </span>
      <p className="text-white font-body text-sm">Created with Vite, React.js, TailwindCSS, Framer Motion and love.</p>
      <span className="text-primary font-links text-2xl mx-2">
      &#125;
          </span>
      </div>
      <div className="mx-auto mb-4 mt-5 flex flex-row justify-center items-center text-center md:[50%] lg:w-[60%]">
        <span className="text-primary font-links text-2xl mx-2">
      &#123;
          </span>
          <p className="text-white font-body text-sm">Why the space theme? Someone once said I should be called Ana-star-sia! Since global astronomy year 2009, amateur observational astronomy has been one of my favourite hobbies.</p>
          <span className="text-primary font-links text-2xl mx-2">
      &#125;
          </span>
      </div>
      
        <hr className="border-secondary border-2 w-2/3 lg:w-[97%] mt-2 mb-4" />

        {/*Copyright & Developer*/}
        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-md">
            <span className="text-secondary font-links font-bold text-sm md:text-md mx-2">
            ©
          </span>
          2023-2025 Anastasia Adamoudi
          </p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body text-sm md:text-md">
            Designed & developed by
            <a
              href="https://anastasiaadamoudi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-primary font-links underline text-sm md:text-md mx-2"
            >
            Anastasia Adamoudi
            </a>
          </p>
        </div>

      {/*Privacy & Accessibility Modals*/}
        <div className="flex flex-row gap-2">

          <button
            type="button"
            onClick={togglePrivacyModal}
            className="text-primary hover:text-secondary font-links text-sm no-underline"
          >
            Privacy Policy
          </button>

          <PrivacyModal isOpen={privacyOpen} onClose={togglePrivacyModal} />

          <span className="text-secondary font-links font-bold mx-2">|</span>

          <button
            type="button"
            onClick={toggleAccessibilityModal}
            className="text-primary hover:text-secondary font-links text-sm no-underline"
          >
            Web Accessibility Statement
          </button>

          <AccessibilityModal isOpen={accessibilityOpen} onClose={toggleAccessibilityModal} />

        </div>
      </div>

    </footer>
  );
};

export default Footer;

