import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { planet1, planet2, starrySky1, starrySky2, mountain } from "../assets";

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
      className="bg-gradient-to-b from-background1 to-orange-700 relative
      bg-cover max-w-screen h-screen left-0 right-0 bottom-0 top-0 py-10 min-h-screen
      overflow-hidden"
    >
      <div className="flex flex-col justify-center mb-2 text-center w-full sm:max-w-[80%]
      md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] mx-auto overflow-hiddenflow">
        <motion.p
          style={{ y: yText }}
          className="flex flex-col justify-center text-center mx-auto text-white font-body
          text-xl lg:text-2xl max-w-[50%] sm:max-w-[70%] lg:max-w-[85%] xl:max-w-full
          md:px-16 px-6 mb-1 mt-[10%] leading-[30px] overflow-hidden"
        >Let's embark on a journey through the ever-evolving universe of technology,
          mapping a path for innovation and growth through the stars!
        </motion.p>
      </div>

      <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <motion.img
          src={starrySky1}
          alt="Starry background"
          style={{ x: yBg }}
          className="absolute left-0 bottom-0 w-2/4 h-full flex justify-center items-center object-cover pointer-events-none z-0 opacity-40 overflow-hidden"
        />

        <motion.img
          src={starrySky2}
          alt="Starry background"
          style={{ x: yBg }}
          className="absolute right-0 bottom-0 w-2/4 h-full flex justify-center items-center object-cover pointer-events-none z-0 opacity-40 overflow-hidden"
        />
      </motion.div>

      <motion.img
        src={mountain}
        alt="mountains"
        className="absolute w-full h-auto object-cover z-40 top-100% left-0 bottom-0 right-0 overflow-hidden"
      />

      <div className="grid grid-cols-2">
        <motion.div className="flex justify-start items-center ml-[5%] md:ml-[20%] lg:ml-[40%]">
          <motion.img
            src={planet1}
            alt="planet1"
            style={{ y: yPlanet1 }}
            className="absolute w-[100px] h-[120px] md:w-[150px] lg:h-[170px] lg:w-[170px] lx:h-[180px] xl:w-[180px] md:h-[150px] object-contain z-10 overflow-hidden"
          />
        </motion.div>

        <motion.div className="flex justify-end items-center mr-[18%] md:mr-[30%] lg:mr-[50%]">
          <motion.img
            src={planet2}
            alt="planet2"
            style={{ y: yPlanet2 }}
            className="absolute w-[40px] h-[55px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain z-10 overflow-hidden"
          />
        </motion.div>
      </div>
    </section>  );
};

export default Parallax;
