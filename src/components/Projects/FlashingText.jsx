import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashingText = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1000); // Toggle visibility every 1000 milliseconds (1 second)

    return () => clearInterval(interval);
  }, []); // Run effect only once

  //testing

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center text-center mx-auto pt-16"
        >
          <h2 className="text-4xl font-bold text-secondary uppercase">coming soon...</h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashingText;
