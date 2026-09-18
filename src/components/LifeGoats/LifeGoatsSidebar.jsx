"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { lifeGoats1, lifeGoats2, lifeGoats3 } from "../../assets/index.js";
import "./LifeGoatsSidebar.scss";

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
            className="life-goats-sidebar__overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar with gradient border on desktop, sliding together */}
          <motion.div
            className="life-goats-sidebar__container"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Desktop: gradient border wrapper */}
            <div className="life-goats-sidebar__desktop">
              <div className="life-goats-sidebar__desktop-inner">
                {/* Gradient border on left, top, and bottom (not right) */}
                <div className="life-goats-sidebar__desktop-track">
                  <div className="life-goats-sidebar__border">
                    {/* Sidebar content flush right, rounded left only, with border effect */}
                    <div className="life-goats-sidebar__panel">
                    {/* Close button */}
                    <button
                      onClick={onClose}
                      className="life-goats-sidebar__close"
                    >
                      ×
                    </button>
                    {/* Content */}
                    <div className="life-goats-sidebar__content">
                      {/* Title */}
                      <motion.h2
                        className="life-goats-sidebar__title"
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
                        className="life-goats-sidebar__slideshow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`Life Goats adventure ${currentImageIndex + 1}`}
                            className="life-goats-sidebar__slide"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                          />
                        </AnimatePresence>
                      </motion.div>
                      {/* Image indicators below the image */}
                      <div className="life-goats-sidebar__dots">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`life-goats-sidebar__dot ${
                              index === currentImageIndex
                                ? "life-goats-sidebar__dot--active"
                                : ""
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                      {/* Description */}
                      <motion.div
                        className="life-goats-sidebar__description"
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
                          className="life-goats-sidebar__cta"
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
            <div className="life-goats-sidebar__mobile">
              <div className="life-goats-sidebar__mobile-panel">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="life-goats-sidebar__close"
                >
                  ×
                </button>
                {/* Content */}
                <div className="life-goats-sidebar__content">
                  {/* Title */}
                  <motion.h2
                    className="life-goats-sidebar__title"
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
                    className="life-goats-sidebar__slideshow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt={`Life Goats adventure ${currentImageIndex + 1}`}
                        className="life-goats-sidebar__slide"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                  </motion.div>
                  {/* Image indicators below the image */}
                  <div className="life-goats-sidebar__dots">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`life-goats-sidebar__dot ${
                          index === currentImageIndex
                            ? "life-goats-sidebar__dot--active"
                            : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                  {/* Description */}
                  <motion.div
                    className="life-goats-sidebar__description"
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
                      className="life-goats-sidebar__cta"
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
