import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import { navLinks } from "../constants/constants";
import { logoBracketsLight, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={styles.paddingX + " sticky top-0 z-50 bg-background1 shadow-xl"}>
    <div className="flex w-full mx-auto justify-between gap-20"> {/* beginning of flex div */}
      <div className="flex items-center justify-start"> {/* beginning of left side div */}
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
            className="w-20 md:w-[70px] h-auto"
          />
          <p className="text-primary text-[18px] font-bold cursor-pointer md:block hidden">
            Anastasia | Full-Stack Developer
          </p>
        </Link>
      </div>  {/* end of left side div */}

      <div className="flex items-center justify-end"> {/* beginning of right side div */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-primary underline"
                  : "text-secondary"
              } hover:text-primary
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
          /> {/* mobile menu button */}
          <div
            className={`${!mobile ? "hidden" : "flex"}
                        absolute right-0 top-20 p-6 min-w-[140px] mx-4 my-2
                        z-10 rounded-xl flex-col justify-center
                        items-center gap-10 bg-background`}
          > {/* mobile menu */}
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-primary underline"
                      : "text-secondary"
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
          </div> {/* end of mobile menu */}

        </div> {/* end of mobile menu button */}
      </div> {/* end of right side */}

    </div> {/* end of flex div */}

    </nav>
  );
};

export default Navbar;