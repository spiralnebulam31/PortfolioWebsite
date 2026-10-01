import { delay } from "framer-motion";

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          staggerChildren: 0.1,
        },
      },
    };
  };

  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: type,
          duration: duration,
          delay: delay,
          staggerChildren: 0.1,
        },
      },
    };
  };

  export const heroVariant = {
    initial: {
      y:-500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  export const heroStarVariant = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  }

  export const starryHeroVariant1 = {
    initial: {
      opacity: 0,
    },
  animate: {
        opacity : 0.4,
    transition: {
      duration: 2.5,
      delay: 0.5,
    },
  }}

  export const starryHeroVariant2 = {
    initial: {
      opacity: 0,
    },
  animate: {
        opacity : 0.4,
    transition: {
      duration: 2.5,
      delay: 0.5,
    },
  }}

  // A soft glow bloom that drifts in from the left/right edge and converges
  // toward the center, brightening as it arrives before settling into a low,
  // ambient glow behind the hero text. `peak`/`settle` let callers dial the
  // intensity per theme (e.g. dimmer on the dark theme).
  export const heroShineVariant = (side, { peak = 0.9, settle = 0.35 } = {}) => {
    return {
      initial: {
        x: side === "left" ? -400 : 400,
        opacity: 0,
        scale: 0.6,
      },
      animate: {
        x: 0,
        opacity: [0, peak, settle],
        scale: 1,
        transition: {
          duration: 2.5,
          delay: 0.3,
          ease: "easeOut",
        },
      },
    };
  }


  export const starSliderVariant = {
    initial: {
      x: 0
    },
  animate: {
        y: [0, 20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  }}

  export const planet1Variant = {
    initial: {
      x:-500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      },
    },
  }

  export const planet2Variant = {
    initial: {
      x:500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      },
    },
  }

  
  export const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  export const mobileItemVariants = {
    open: {
      y: 0,
      opacity: 1,
   },
    closed: {
        y: 50,
        opacity: 0,
    }
  };

  export const mobileMenuVariants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    // Used as both the initial and the exit state (see Navbar.jsx's
    // AnimatePresence) — the short delay lets the links stagger out first.
    closed: {
      clipPath: "circle(0px at 50px 50px)",
      transition: {
        delay: 0.2,
        duration: 0.35,
        ease: "easeIn",
      },
    }
  }

  export const floatFromLeftVariant = {
    initial: {
      x: -200,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    }

    export const floatFromRightVariant = {
      initial: {
        x: +200,
        y: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      },
      }

      export const floatFromRightDelayedVariant = {
        initial: {
          x: +200,
          y: 100,
          opacity: 0,
        },
        animate: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        },
        }