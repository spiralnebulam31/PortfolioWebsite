import { useState } from "react";
import LifeGoatsButton from "../LifeGoats/LifeGoatsButton";
import LifeGoatsSidebar from "../LifeGoats/LifeGoatsSidebar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../constants/constants.js";
import { logoBracketsLight, menu, close } from "../../assets/index.js";
import {
  mobileMenuVariants,
  staggerContainer,
  mobileItemVariants,
} from "../../utils/motion.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);
  const [showGoatsSidebar, setShowGoatsSidebar] = useState(false);

  return (
    <>
      {/* Hide floating LifeGoatsButton on mobile, show on desktop */}
      {/* Floating LifeGoatsButton only on desktop */}
      <LifeGoatsButton onClick={() => setShowGoatsSidebar(true)} className="hidden lg:block fixed top-24 right-0 z-40" />
      <nav className={"fixed w-full top-0 z-50 bg-background1 shadow-xl"}>
        <div className="flex w-full mx-auto">
        {" "}
        {/* beginning of flex div */}
        <div className="mr-auto ml-5">
          {" "}
          {/* beginning of left side div */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logoBracketsLight}
              alt="logo"
              className="w-20 lg:w-[70px] h-auto"
            />
            <p className="text-primary text-[18px] font-bold cursor-pointer lg:block hidden">
              Anastasia Adamoudi{" "}
              <span className="text-secondary my-2"> | </span> Web Developer
            </p>
          </Link>
        </div>{" "}
        {/* end of left side div */}
        <div className="flex items-center ml-auto mr-5">
          {" "}
          {/* beginning of right side div */}
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id
                    ? "text-primary underline"
                    : "text-secondary"
                } hover:text-primary text-[18px] font-bold cursor-pointer`}
                onClick={() => {
                  setActive(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          {/* mobile menu button */}
          <div className="lg:hidden flex flex-1 justify-end items-center gap-2">
            <img
              src={mobile ? close : menu}
              alt="menu"
              className="w-10 h-auto cursor-pointer object-contain"
              onClick={() => setMobile(!mobile)}
            />
            {/* mobile menu - fullscreen overlay */}
            <motion.div
              className={`${!mobile ? "hidden" : "flex"}
                fixed inset-0 w-full h-full z-50 flex-col justify-center items-center bg-purple-700 bg-gradient-to-b from-cyan-500 to-purple-700 transition-all`}
              variants={mobileMenuVariants}
              initial={mobile ? "open" : "closed"}
              animate={mobile ? "open" : "closed"}
            >
              {/* Close X button for mobile menu */}
              <button
                className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
                aria-label="Close menu"
                onClick={() => setMobile(false)}
              >
                ×
              </button>
              <motion.div variants={staggerContainer} className="w-full flex flex-col items-center justify-center h-full">
                <ul className="list-none flex flex-col justify-center items-center gap-8 w-full">
                  {navLinks.map((link) => (
                    <motion.div key={link.id} variants={mobileItemVariants}>
                      <li
                        key={link.id}
                        className={`$${
                          active === link.title
                            ? "text-primary underline"
                            : "text-secondary"
                        } hover:text-purple-300 text-[24px] font-bold cursor-pointer leading-7 text-center`}
                        onClick={() => {
                          setMobile(!mobile);
                          setActive(link.title);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <a href={`#${link.id}`}>{link.title}</a>
                      </li>
                    </motion.div>
                  ))}
                  {/* LifeGoatsButton at the end of mobile menu */}
                  <div className="w-full flex justify-center mt-0">
                    <LifeGoatsButton onClick={() => setShowGoatsSidebar(true)} className="w-auto static" />
                  </div>
                </ul>
              </motion.div>
            </motion.div>
            {/* end of mobile menu */}
          </div>
          {/* end of mobile menu button */}
        </div>{" "}
        {/* end of right side */}
      </div>{" "}
      {/* end of flex div */}
      </nav>
      {/* LifeGoatsSidebar modal, always available */}
      <LifeGoatsSidebar isOpen={showGoatsSidebar} onClose={() => setShowGoatsSidebar(false)} />
    </>
  );
};

export default Navbar;
