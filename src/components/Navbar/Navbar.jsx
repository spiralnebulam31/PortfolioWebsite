"use client";

import { useState } from "react";
import LifeGoatsButton from "../LifeGoats/LifeGoatsButton";
import LifeGoatsSidebar from "../LifeGoats/LifeGoatsSidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "../../constants/constants.js";
import { logoBracketsLight, menu, close } from "../../assets/index.js";
import {
  mobileMenuVariants,
  staggerContainer,
  mobileItemVariants,
} from "../../utils/motion.js";
import useTheme from "../../contexts/ThemeContext.jsx";
import { SunIcon, MoonIcon } from "./ThemeIcons.jsx";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);
  const [showGoatsSidebar, setShowGoatsSidebar] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const themeToggleLabel = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <>
      {/* Hide floating LifeGoatsButton on mobile, show on desktop */}
      {/* Floating LifeGoatsButton only on desktop */}
      <LifeGoatsButton onClick={() => setShowGoatsSidebar(true)} className="life-goats-button--floating" />
      <nav className="navbar">
        <div className="navbar__row">
        {" "}
        {/* beginning of flex div */}
        <div className="navbar__brand">
          {" "}
          {/* beginning of left side div */}
          <Link
            href="/"
            className="navbar__brand-link"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logoBracketsLight}
              alt="logo"
              className="navbar__logo"
            />
            <p className="navbar__brand-text">
              Anastasia Adamoudi{" "}
              <span className="navbar__brand-divider"> | </span> Web Developer
            </p>
          </Link>
        </div>{" "}
        {/* end of left side div */}
        <div className="navbar__actions">
          {" "}
          {/* beginning of right side div */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`navbar__link ${
                  active === link.id ? "navbar__link--active" : ""
                }`}
                onClick={() => {
                  setActive(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            role="switch"
            aria-checked={theme === "light"}
            className="navbar__theme-toggle navbar__theme-toggle--desktop"
            onClick={toggleTheme}
            aria-label={themeToggleLabel}
          >
            <span className="navbar__theme-toggle-track">
              <span
                className={`navbar__theme-toggle-thumb ${
                  theme === "light" ? "navbar__theme-toggle-thumb--light" : ""
                }`}
              >
                {theme === "dark" ? (
                  <MoonIcon className="navbar__theme-icon" />
                ) : (
                  <SunIcon className="navbar__theme-icon" />
                )}
              </span>
            </span>
          </button>
          {/* mobile menu button */}
          <div className="navbar__mobile-trigger">
            <img
              src={mobile ? close : menu}
              alt="menu"
              className="navbar__mobile-icon"
              onClick={() => setMobile(!mobile)}
            />
            {/* mobile menu - fullscreen overlay */}
            <motion.div
              className={`navbar__mobile-menu ${mobile ? "navbar__mobile-menu--open" : ""}`}
              variants={mobileMenuVariants}
              initial={mobile ? "open" : "closed"}
              animate={mobile ? "open" : "closed"}
            >
              {/* Close X button for mobile menu */}
              <button
                className="navbar__mobile-close"
                aria-label="Close menu"
                onClick={() => setMobile(false)}
              >
                ×
              </button>
              <motion.div variants={staggerContainer} className="navbar__mobile-inner">
                <ul className="navbar__mobile-links">
                  {navLinks.map((link) => (
                    <motion.div key={link.id} variants={mobileItemVariants}>
                      <li
                        key={link.id}
                        className="navbar__mobile-link"
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
                  <div className="navbar__mobile-cta">
                    <LifeGoatsButton onClick={() => setShowGoatsSidebar(true)} className="life-goats-button--inline" />
                  </div>
                  <div className="navbar__mobile-theme-toggle">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={theme === "light"}
                      className="navbar__theme-toggle navbar__theme-toggle--mobile"
                      onClick={toggleTheme}
                      aria-label={themeToggleLabel}
                    >
                      <span className="navbar__theme-toggle-track">
                        <span
                          className={`navbar__theme-toggle-thumb ${
                            theme === "light" ? "navbar__theme-toggle-thumb--light" : ""
                          }`}
                        >
                          {theme === "dark" ? (
                            <MoonIcon className="navbar__theme-icon" />
                          ) : (
                            <SunIcon className="navbar__theme-icon" />
                          )}
                        </span>
                      </span>
                    </button>
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
