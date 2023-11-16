import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../utils/motion.js";
import { mountains, planet1, planet2, starrySky1, starrySky2 } from "../assets";

const Parallax = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);

  return (
    <section id="parallax">
      <div
        ref={ref}
      className="bg-gradient-to-b from-background1 to-orange-700 relative bg-cover w-full left-0 right-0 bottom-0 top-0 pt-10 pb-20 min-h-screen">
        <div className="flex flex-col justify-center gap-5 mb-2 text-center w-full xl:max-w-[40%] mx-auto">
          <motion.div
            style={{ y: yText }}
            className="text-white font-body text-xl max-w-lg xl:max-w-7xl sm:px-16 px-6 mb-1 mt-[10%] leading-[30px] overflow-hidden"
          >
            Let's embark on a journey through the
            ever-evolving tech landscape, charting a course for innovation and
            growth!
          </motion.div>
        </div>

            <motion.img
              src={starrySky2}
              alt="Starry background"
              style={{ x: yBg }}
              className="absolute inset-0 w-full h-full flex justify-center items-center object-cover pointer-events-none z-0 opacity-40"
            />

            <motion.img
              src={starrySky1}
              alt="Starry background"
              style={{ x: yBg }}
              className="absolute inset-0 w-full h-full flex justify-center items-center object-cover pointer-events-none z-0 opacity-40"
            />

        <motion.img
          src={mountains}
          alt="mountains"
          className="absolute w-full h-full object-cover"
        />
        <div className="grid grid-cols-2">
          <motion.div className="flex justify-center items-center">
            <motion.img
              src={planet1}
              alt="planet1"
              style={{ y: yBg }}
              className="absolute w-[180px] h-[180px] object-contain z-10 overflow-hidden"
            />
          </motion.div>

          <motion.div className="flex justify-center items-center">
            <motion.img
              src={planet2}
              alt="planet2"
              style={{ y: yBg }}
              className="absolute w-[80px] h-[80px] object-contain z-10 overflow-hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
