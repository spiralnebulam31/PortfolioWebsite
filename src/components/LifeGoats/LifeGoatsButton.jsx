import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./LifeGoatsButton.scss";


const LifeGoatsButton = ({ onClick, className = "" }) => {
  return (
    <motion.div
      className={`life-goats-button ${className}`}
      onClick={onClick}
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: 10 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="life-goats-button__inner">
        <span className="life-goats-button__label">
          Life Goats
        </span>
      </div>
    </motion.div>
  );
};

LifeGoatsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LifeGoatsButton;
