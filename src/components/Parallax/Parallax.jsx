import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { planet1, planet2, starrySky1, starrySky2, mountain } from "../../assets";
import "./Parallax.scss";

const Parallax = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yPlanet1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yPlanet2 = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);

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
        >Let's embark on a journey through the ever-evolving universe of technology,
          mapping a path for innovation and growth through the stars!
        </motion.p>
      </div>

      <motion.div className="parallax__starfield">
        <motion.img
          src={starrySky1}
          alt="Starry background"
          style={{ x: yBg }}
          className="parallax__starry-sky parallax__starry-sky--left"
        />

        <motion.img
          src={starrySky2}
          alt="Starry background"
          style={{ x: yBg }}
          className="parallax__starry-sky parallax__starry-sky--right"
        />
      </motion.div>

      <motion.img
        src={mountain}
        alt="mountains"
        className="parallax__mountain"
      />

      <div className="parallax__planets">
        <motion.div className="parallax__planet-slot parallax__planet-slot--left">
          <motion.img
            src={planet1}
            alt="planet1"
            style={{ y: yPlanet1 }}
            className="parallax__planet parallax__planet--1"
          />
        </motion.div>

        <motion.div className="parallax__planet-slot parallax__planet-slot--right">
          <motion.img
            src={planet2}
            alt="planet2"
            style={{ y: yPlanet2 }}
            className="parallax__planet parallax__planet--2"
          />
        </motion.div>
      </div>
    </section>  );
};

export default Parallax;
