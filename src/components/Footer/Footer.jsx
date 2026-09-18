import PrivacyModal from "./PrivacyModal";
import AccessibilityModal from "./AccessibilityModal";
import "./Footer.scss";

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
    <footer className="footer">

      <div className="footer__body">

      <div className="footer__note">
      <span className="footer__brace">
      &#123;
          </span>
      <p className="footer__note-text">Created with Vite, React.js, TailwindCSS, Framer Motion and love.</p>
      <span className="footer__brace">
      &#125;
          </span>
      </div>
      <div className="footer__note footer__note--spaced">
        <span className="footer__brace">
      &#123;
          </span>
          <p className="footer__note-text">Why the space theme? Someone once said I should be called Ana-star-sia! Since global astronomy year 2009, amateur observational astronomy has been one of my favourite hobbies.</p>
          <span className="footer__brace">
      &#125;
          </span>
      </div>

        <hr className="footer__divider" />

        {/*Copyright & Developer*/}
        <div className="footer__row">
          <p className="footer__copyright">
            <span className="footer__copyright-mark">
            ©
          </span>
          2026 Anastasia Adamoudi
          </p>
        </div>

        <div className="footer__row">
          <p className="footer__credit">
            Designed & developed by
            <a
              href="https://anastasiaadamoudi.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__credit-link"
            >
            Anastasia Adamoudi
            </a>
          </p>
        </div>

      {/*Privacy & Accessibility Modals*/}
        <div className="footer__legal">

          <button
            type="button"
            onClick={togglePrivacyModal}
            className="footer__legal-link"
          >
            Privacy Policy
          </button>

          <PrivacyModal isOpen={privacyOpen} onClose={togglePrivacyModal} />

          <span className="footer__legal-divider">|</span>

          <button
            type="button"
            onClick={toggleAccessibilityModal}
            className="footer__legal-link"
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
