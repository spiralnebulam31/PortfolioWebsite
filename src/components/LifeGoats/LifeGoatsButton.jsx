import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LifeGoatsButton = ({ onClick }) => {
  return (
    <motion.div
      className="fixed top-24 right-0 z-40 bg-gradient-to-l from-cyan-500 to-purple-300 rounded-l-lg shadow-lg cursor-pointer"
      onClick={onClick}
      whileHover={{ x: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: 10 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="px-4 py-2 bg-background1 m-1 rounded-l-lg">
        <span className="text-primary font-bold text-sm whitespace-nowrap">
          Life Goats
        </span>
      </div>
    </motion.div>
  );
};

LifeGoatsButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LifeGoatsButton;
