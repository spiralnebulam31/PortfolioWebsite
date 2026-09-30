"use client";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CloseIcon from "../shared/CloseIcon.jsx";
import "../shared/Modal.scss";
import "./PrivacyModal.scss";

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
    open={isOpen}
    onClose={onClose}
    center
    closeIcon={<CloseIcon label="Close privacy policy" />}
    classNames={{
      overlay: 'modal__overlay',
      modal: 'modal__panel',
    }}
    // Deliberately neutral ID: ad blockers' cookie-banner filters hide
    // elements with IDs like "privacy-policy-modal", which hid this heading.
    ariaLabelledby="footer-dialog-heading-data"
    >
      <div className="modal__body privacy-modal__body">
        <h2 id="footer-dialog-heading-data" className="privacy-modal__title">Privacy Policy</h2>
        <p className="privacy-modal__text">
        If you contact me via the contact form, I will only use
                    your email address to reply to your message. I will not
                    share your name or email address with any third parties.
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
