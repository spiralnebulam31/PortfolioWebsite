"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import {
  Hero,
  Navbar,
  About,
  Skills,
  Projects,
  Journey,
  Parallax,
  Contact,
  Footer,
} from "./components";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./App.scss";

// `astroPic` is a Server Component element instantiated by app/page.jsx and
// passed down here — see the note there for why it can't be imported directly.
const App = ({ astroPic }) => {
  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };

  return (
    <ThemeProvider>
      {/* reducedMotion="user": when the visitor's OS asks for reduced
          motion, every Framer Motion animation on the site skips its
          movement (transforms/layout) and keeps only opacity fades. */}
      <MotionConfig reducedMotion="user">
        <a href="#main" className="app__skip-link">
          Skip to main content
        </a>

        {/* Navbar also renders the Life Goats buttons (floating on desktop,
            inside the mobile menu) and their sidebar. It's position: fixed,
            so it sits outside <main> without affecting the layout. */}
        <Navbar />

        <main id="main" tabIndex={-1} className="app__main">
          <div className="app__hero-wrap">
            <Hero />
          </div>
          <About />
          <Skills />
          <Projects />
          <Journey />
          {astroPic}
          <Parallax />
          <Contact />
        </main>

        <Footer
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
