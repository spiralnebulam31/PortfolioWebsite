"use client";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CloseIcon from "../shared/CloseIcon.jsx";
import "../shared/Modal.scss";
import "./AccessibilityModal.scss";

// Structure follows the EU model accessibility statement (Implementing
// Decision 2018/1523): compliance status, content from other sources, how
// the statement was prepared, and feedback/contact. A personal site isn't
// legally required to publish one, so the enforcement-procedure section
// (public sector only) is left out. Update the date whenever the site is
// re-checked.
const STATEMENT_DATE = "1 October 2026";

const AccessibilityModal = ({ isOpen, onClose }) => {
  return (
    <Modal
    open={isOpen}
    onClose={onClose}
    center
    closeIcon={<CloseIcon label="Close accessibility statement" />}
    classNames={{
      overlay: 'modal__overlay',
      modal: 'modal__panel',
    }}
    ariaLabelledby="footer-dialog-heading-a11y"
    >
      <div className="modal__body accessibility-modal__body">
        <h2 id="footer-dialog-heading-a11y" className="accessibility-modal__title">Accessibility Statement</h2>

        <p className="accessibility-modal__text">
          I want anastasiaadamoudi.com to be usable by as many people as
          possible, including people who use screen readers, keyboard
          navigation, screen magnification or other assistive technologies.
        </p>

        <h3 className="accessibility-modal__heading">Compliance status</h3>
        <p className="accessibility-modal__text">
          Based on my self-assessment, this website meets the{" "}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            target="_blank"
            rel="noopener noreferrer"
            className="accessibility-modal__link"
          >
            Web Content Accessibility Guidelines (WCAG) 2.2
          </a>{" "}
          at level AA.
        </p>

        <h3 className="accessibility-modal__heading">What this means</h3>
        <ul className="accessibility-modal__list">
          <li>Every link and button works with a keyboard, with a visible focus outline, and a “Skip to main content” link comes first.</li>
          <li>Pop-ups and the Life Goats panel keep keyboard focus inside them while open, and close with the Escape key.</li>
          <li>Headings, landmarks, labels and descriptive image text help screen reader users find their way around.</li>
          <li>Text meets the WCAG AA contrast ratio of at least 4.5:1, including over gradients, in both the light and dark themes.</li>
          <li>Buttons and controls are at least 24 by 24 pixels, so they’re easy to tap.</li>
          <li>If your device is set to reduce motion, animations, parallax effects and the auto-playing slideshow are turned off.</li>
          <li>The layout adapts to small screens and to zoomed text.</li>
          <li>My CV is a tagged PDF, so screen readers can follow its structure.</li>
        </ul>

        <h3 className="accessibility-modal__heading">Content from other sources</h3>
        <p className="accessibility-modal__text">
          The Picture of the Month section shows images and descriptions from
          ESA/Webb, using the image descriptions ESA provides. Links to other
          websites, such as GitHub, LinkedIn and project sites, are outside my
          control and may not meet the same standard.
        </p>

        <h3 className="accessibility-modal__heading">How this was assessed</h3>
        <p className="accessibility-modal__text">
          I carried out the assessment on {STATEMENT_DATE}, at desktop and
          mobile sizes and in both themes. It combined automated testing with
          axe-core against the WCAG 2.2 AA rules, contrast measurements of text
          over gradients and images, and manual testing with a keyboard and
          with reduced-motion settings.
        </p>

        <h3 className="accessibility-modal__heading">Feedback and contact</h3>
        <p className="accessibility-modal__text">
          If something on this site doesn’t work for you, or you need any
          content in a different format, please email me at{" "}
          <a
            href="mailto:anastasiaadamoudi@gmail.com?subject=Accessibility%20feedback"
            className="accessibility-modal__link"
          >
            anastasiaadamoudi@gmail.com
          </a>
          . I aim to reply within 5 working days.
        </p>

        <p className="accessibility-modal__meta">
          Prepared on {STATEMENT_DATE}. Last reviewed on {STATEMENT_DATE}.
        </p>
      </div>
    </Modal>
  );
};

export default AccessibilityModal;
