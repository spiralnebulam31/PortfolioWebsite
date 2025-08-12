import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { lifeGoats1, lifeGoats2, lifeGoats3 } from "../../assets/index.js";

const LifeGoatsSidebar = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [lifeGoats1, lifeGoats2, lifeGoats3];

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, images.length]);
  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[300px] lg:w-[400px] bg-background1 shadow-2xl z-50 overflow-y-auto"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-secondary hover:text-primary transition-colors text-xl font-bold"
              >
                ×
              </button>

              {/* Content */}
              <div className="mt-8">
                {/* Title */}
                <motion.h2
                  className="text-2xl font-bold text-primary mb-6 cursor-pointer hover:text-cyan-500 transition-colors"
                  onClick={() =>
                    window.open("https://www.lifegoats.com/", "_blank")
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Life Goats 🏔️🐐
                </motion.h2>

                {/* Image slideshow */}
                <motion.div
                  className="relative w-full h-48 rounded-lg mb-6 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={`Life Goats adventure ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AnimatePresence>

                  {/* Image indicators */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white shadow-lg"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="text-secondary leading-relaxed space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p>
                    A community that I co-founded, created for people who value
                    relationship building and spending quality time together in
                    the great outdoors.
                  </p>
                  <p>
                    Our mission is to create meaningful connections through
                    shared outdoor experiences. To be part of a united team,
                    welcoming and open.
                  </p>

                  {/* Call to action */}
                  <motion.button
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-300 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      window.open("https://www.lifegoats.com/", "_blank")
                    }
                  >
                    Find out more
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LifeGoatsSidebar;
