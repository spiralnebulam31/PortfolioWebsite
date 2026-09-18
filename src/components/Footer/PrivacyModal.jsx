import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "../shared/Modal.scss";
import "./PrivacyModal.scss";

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
    aria-labelledby="privacy-policy-modal"
    >
      <div className="privacy-modal__body">
        <h2 className="privacy-modal__title">Privacy Policy</h2>
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
