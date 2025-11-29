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

          {/* Sidebar with gradient border on desktop, sliding together */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full z-50 flex justify-end"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Desktop: gradient border wrapper */}
            <div className="hidden lg:flex h-full items-stretch pr-0">
              <div className="relative h-full flex items-stretch">
                {/* Gradient border on left, top, and bottom (not right) */}
                <div className="h-full flex items-stretch">
                  <div className="h-full w-[410px] bg-gradient-to-tl from-cyan-500 to-purple-300 rounded-l-2xl p-[2px] flex items-stretch">
                    {/* Sidebar content flush right, rounded left only, with border effect */}
                    <div className="h-full w-full bg-background1 shadow-2xl overflow-y-auto rounded-tl-2xl rounded-bl-2xl flex flex-col p-6" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderTopRight: 'none', borderBottomRight: 'none' }}>
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
                        Life Goats
                      </motion.h2>
                      {/* Image slideshow */}
                      <motion.div
                        className="relative w-full h-48 rounded-lg mb-2 overflow-hidden"
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
                      </motion.div>
                      {/* Image indicators below the image */}
                      <div className="flex justify-center space-x-2 mb-6">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 mt-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "bg-cyan-400 shadow-lg"
                                : "bg-purple-300 hover:bg-purple-400"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
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
                          className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-300 text-purple-950 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
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
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile: sidebar full width, no border */}
            <div className="flex lg:hidden h-full w-full">
              <div className="h-full w-full bg-background1 shadow-2xl overflow-y-auto p-6 flex flex-col">
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
                    Life Goats
                  </motion.h2>
                  {/* Image slideshow */}
                  <motion.div
                    className="relative w-full h-48 rounded-lg mb-2 overflow-hidden"
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
                  </motion.div>
                  {/* Image indicators below the image */}
                  <div className="flex justify-center space-x-2 mb-6">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 mt-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-cyan-400 shadow-lg"
                            : "bg-purple-300 hover:bg-purple-400"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
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
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-300 text-purple-950 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LifeGoatsSidebar;
