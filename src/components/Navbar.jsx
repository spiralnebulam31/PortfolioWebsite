import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants/constants";
import { logoBracketsNameLight, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={styles.paddingX + " sticky top-0 z-50"}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // close the menu when clicked on logo
            window.scrollTo(0, 0); // scroll to top when clicked on logo
          }}
        >
          <img
            src={logoBracketsNameLight}
            alt="logo"
            className="w-20 md:w-40 h-auto"
          />
          <p className="text-purple-200 text-[18px] font-bold cursor-pointer md:block hidden">
            Full-Stack Developer
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-purple-300 underline"
                  : "text-teal-200"
              } hover:text-purple-300
                    text-[18px]
                    font-bold
                    cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                window.scrollTo(0, 0);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center gap-2">
          <img
            src={mobile ? close : menu}
            alt="menu"
            className="w-10 h-auto cursor-pointer object-contain"
            onClick={() => setMobile(!mobile)}
          />
          <div
            className={`${!mobile ? "hidden" : "flex"}
                        absolute right-0 top-20 p-6 min-w-[140px] mx-4 my-2
                        z-10 rounded-xl flex-col justify-center
                        items-center gap-10 bg-purple-950`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-purple-300 underline"
                      : "text-teal-200"
                  } hover:text-purple-300 text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setMobile(!mobile);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;