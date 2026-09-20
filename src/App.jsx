"use client";

import { useState } from "react";
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
import LifeGoatsButton from "./components/LifeGoats/LifeGoatsButton";
import LifeGoatsSidebar from "./components/LifeGoats/LifeGoatsSidebar";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./App.scss";

// `astroPic` is a Server Component element instantiated by app/page.jsx and
// passed down here — see the note there for why it can't be imported directly.
const App = ({ astroPic }) => {
  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
  });

  // Life Goats sidebar state
  const [lifeGoatsSidebarOpen, setLifeGoatsSidebarOpen] = useState(false);

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };

  return (
    <ThemeProvider>
      <div className="app__hero-wrap">
        <Navbar />

        {/* Life Goats Components */}
        <LifeGoatsButton onClick={() => setLifeGoatsSidebarOpen(true)} />
        <LifeGoatsSidebar
          isOpen={lifeGoatsSidebarOpen}
          onClose={() => setLifeGoatsSidebarOpen(false)}
        />

        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Journey />
      {astroPic}
      <Parallax />
      <Contact />
      <Footer
        modalState={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
      />
    </ThemeProvider>
  );
};

export default App;
