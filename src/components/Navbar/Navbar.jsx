"use client";

import { useEffect, useState } from "react";
import LifeGoatsButton from "../LifeGoats/LifeGoatsButton";
import LifeGoatsSidebar from "../LifeGoats/LifeGoatsSidebar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../constants/constants.js";
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

  // While the mobile menu is open, the page behind it can't scroll, and
  // Escape closes it.
  useEffect(() => {
    if (!mobile) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if ("Escape" === event.key) {
        setMobile(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobile]);

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
            aria-label="Anastasia Adamoudi, back to top"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="/logo.svg"
              alt=""
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
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${
                    active === link.id ? "navbar__link--active" : ""
                  }`}
                  onClick={() => {
                    setActive(link.id);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.title}
                </a>
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
            {/* Three CSS bars that animate into an X while the menu is open —
                it stays above the overlay, so it doubles as the close button. */}
            <button
              type="button"
              className={`navbar__mobile-toggle ${mobile ? "navbar__mobile-toggle--open" : ""}`}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              aria-controls="mobile-menu"
              onClick={() => setMobile(!mobile)}
            >
              <span className="navbar__mobile-bar" aria-hidden="true" />
              <span className="navbar__mobile-bar" aria-hidden="true" />
              <span className="navbar__mobile-bar" aria-hidden="true" />
            </button>
            {/* mobile menu - fullscreen overlay. Mounted only while open, so
                AnimatePresence can play the "closed" variant on the way out. */}
            <AnimatePresence>
            {mobile && (
            <motion.div
              id="mobile-menu"
              className="navbar__mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div variants={staggerContainer} className="navbar__mobile-inner">
                <ul className="navbar__mobile-links">
                  {navLinks.map((link) => (
                    <motion.li key={link.id} variants={mobileItemVariants}>
                        <a
                          href={`#${link.id}`}
                          className={`navbar__mobile-link ${
                            active === link.title ? "navbar__mobile-link--active" : ""
                          }`}
                          onClick={() => {
                            setMobile(!mobile);
                            setActive(link.title);
                            window.scrollTo(0, 0);
                          }}
                        >
                          {link.title}
                        </a>
                    </motion.li>
                  ))}
                  {/* LifeGoatsButton at the end of mobile menu */}
                  <li className="navbar__mobile-cta">
                    <LifeGoatsButton onClick={() => setShowGoatsSidebar(true)} className="life-goats-button--inline" />
                  </li>
                  <li className="navbar__mobile-theme-toggle">
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
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            )}
            </AnimatePresence>
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
