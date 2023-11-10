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
          duration: 1.25,
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
      y:500,
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

  export const heroPlanet1Variant = {
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

  export const heroPlanet2Variant = {
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
        type: "spring", 
        stiffness: 30,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5, // delay the animation for 0.5 seconds
        type: "spring", // spring animationm that will bounce back and forth when it reaches the end of its animation
        stiffness: 700, // how stiff the spring is (higher number = stiffer spring)
        damping: 40, // how much the spring will bounce back and forth (higher number = less bounce)
      },
    }
  }