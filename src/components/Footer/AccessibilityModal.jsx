import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "../shared/Modal.scss";
import "./AccessibilityModal.scss";

const PrivacyModal = ({ isOpen, onClose }) => {

  const closeIcon = (
    <svg fill="#2B96B1" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4" stroke="#2B96B1" strokeWidth="3"
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
      overlay: 'modal__overlay',
      modal: 'modal__panel',
    }}
    aria-labelledby="web-accessibility-modal"
    >
      <div className="accessibility-modal__body">
        <h2 className="accessibility-modal__title">Privacy Policy</h2>
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
