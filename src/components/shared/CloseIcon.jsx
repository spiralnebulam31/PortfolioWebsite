// Close "×" for react-responsive-modal's `closeIcon` prop — two CSS bars
// crossed into an X, matching the navbar's mobile menu toggle. The library
// wraps this in its own <button> without an accessible name, so the hidden
// text gives screen readers one.
const CloseIcon = ({ label = "Close" }) => (
  <span className="modal__close-icon modal__close-icon--bars">
    <span className="modal__close-bar" aria-hidden="true" />
    <span className="modal__close-bar" aria-hidden="true" />
    <span className="visually-hidden">{label}</span>
  </span>
);

export default CloseIcon;
