"use client";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CloseIcon from "../shared/CloseIcon.jsx";
import "../shared/Modal.scss";
import "./AccessibilityModal.scss";

const PrivacyModal = ({ isOpen, onClose }) => {
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
        <h2 id="footer-dialog-heading-a11y" className="accessibility-modal__title">Web Accessibility Statement</h2>
        <p className="accessibility-modal__text">
        This website is built to be accessible to as many people as
                    possible. If you have any accessibility requirements, please
                    contact me and I will do my best to accommodate them.
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
