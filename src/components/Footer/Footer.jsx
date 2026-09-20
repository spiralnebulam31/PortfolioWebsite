"use client";

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
            Created with Next.js, Framer Motion and Sass
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
