"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { planet1, planet2, starrySky1, starrySky2, mountain } from "../../assets";
import "./Parallax.scss";

const Parallax = () => {

  const ref = useRef();

  // Progress runs from the moment the section's top enters the bottom of
  // the viewport (0) to when its bottom leaves the top (1) — 0.5 is the
  // point where the section fills the screen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-linked values aren't covered by MotionConfig's reducedMotion
  // (they aren't animations), so with reduced motion every layer holds a
  // single position instead of moving with the scroll.
  const shouldReduceMotion = useReducedMotion();

  // Below `md` the planets sit under the text (see &__planets), so the text
  // drifts less there — otherwise it overtakes and slides over them.
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Background layers only move once the section fills the screen (0.5 → 1),
  // as before.
  const yBg = useTransform(scrollYProgress, [0.5, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "100%"]);
  const yPlanet1 = useTransform(scrollYProgress, [0.5, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "150%"]);
  const yPlanet2 = useTransform(scrollYProgress, [0.5, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "300%"]);

  // The text starts moving as soon as the section enters, rising at ~60% of
  // the scroll speed so it stays lower on screen for longer: about a third
  // of the way down once the section fills the screen, then drifting out
  // slowly. With reduced motion it simply rests at that "third" position.
  const yText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion
      ? ["20vh", "20vh", "20vh"]
      : ["0vh", "20vh", isNarrow ? "45vh" : "80vh"]
  );

  return (
    <section
      id="parallax"
      ref={ref}
      className="parallax"
    >
      <div className="parallax__intro-wrap">
        <motion.p
          style={{ y: yText }}
          className="parallax__intro"
        >Let’s embark on a journey through the ever-evolving universe of technology,
          mapping a path for innovation and growth through the stars!
        </motion.p>
      </div>

      <motion.div className="parallax__starfield">
        <motion.img
          src={starrySky1}
          alt=""
          style={{ x: yBg }}
          className="parallax__starry-sky parallax__starry-sky--left"
        />

        <motion.img
          src={starrySky2}
          alt=""
          style={{ x: yBg }}
          className="parallax__starry-sky parallax__starry-sky--right"
        />
      </motion.div>

      <motion.img
        src={mountain}
        alt=""
        className="parallax__mountain"
      />

      <div className="parallax__planets">
        <motion.div className="parallax__planet-slot parallax__planet-slot--left">
          <motion.img
            src={planet1}
            alt=""
            style={{ y: yPlanet1 }}
            className="parallax__planet parallax__planet--1"
          />
        </motion.div>

        <motion.div className="parallax__planet-slot parallax__planet-slot--right">
          <motion.img
            src={planet2}
            alt=""
            style={{ y: yPlanet2 }}
            className="parallax__planet parallax__planet--2"
          />
        </motion.div>
      </div>
    </section>  );
};

export default Parallax;
