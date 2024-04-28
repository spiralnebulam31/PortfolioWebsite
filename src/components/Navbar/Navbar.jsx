import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { navLinks } from "../../constants/constants.js";
import { logoBracketsLight, menu, close } from "../../assets/index.js";
import { mobileMenuVariants, staggerContainer, mobileItemVariants } from "../../utils/motion.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={"fixed w-full top-0 z-50 bg-background1 shadow-xl"}>
    <div className="flex w-full mx-auto"> {/* beginning of flex div */}
      <div className="mr-auto ml-5"> {/* beginning of left side div */}
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
            Anastasia Adamoudi  <span className="text-secondary my-2"> | </span> Frontend Developer
          </p>
        </Link>
      </div>  {/* end of left side div */}

      <div className="flex items-center ml-auto mr-5"> {/* beginning of right side div */}
      <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-primary underline" : "text-secondary"
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
          
          {/* mobile menu */}
          <motion.div
  className={`${!mobile ? "hidden" : "flex"}
              absolute right-0 top-20 p-2 w-[260px] mx-0 my-0
              z-10 rounded-xl flex-col justify-center
              items-center gap-10 bg-gradient-to-b from-cyan-500 to-purple-300 shadow-lg`}
  variants={mobileMenuVariants}
  initial={mobile ? "open" : "closed"}
  animate={mobile ? "open" : "closed"}
>
 
 <motion.div variants={staggerContainer}> 
            <ul className="list-none flex flex-col justify-end items-start gap-4 bg-background1 px-16 py-12 mx-1 my-2 rounded-xl">
            {navLinks.map((link) => (
  <motion.div key={link.id} variants={mobileItemVariants}>
    <li
      key={link.id}
      className={`${
        active === link.title
          ? "text-primary underline"
          : "text-secondary"
      } hover:text-purple-300 text-[20px] hover:text-[24px] font-medium cursor-pointer leading-7 w-[100px]`}
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
            </ul>
            </motion.div> 
          </motion.div> {/* end of mobile menu */}

        </div> {/* end of mobile menu button */}
      </div> {/* end of right side */}

    </div> {/* end of flex div */}

    </nav>
  );
};

export default Navbar;