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

  const [githubIsHovered, setGithubIsHovered] = useState(false);
  const [linkedinIsHovered, setLinkedinIsHovered] = useState(false);
  const [resumeIsHovered, setResumeIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);

  const handleGithubMouseEnter = () => {
    setGithubIsHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setGithubIsHovered(false);
  };

  const handleLinkedinMouseEnter = () => {
    setLinkedinIsHovered(true);
  };

  const handleLinkedinMouseLeave = () => {
    setLinkedinIsHovered(false);
  };

  const handleResumeMouseEnter = () => {
    setResumeIsHovered(true);
  };

  const handleResumeMouseLeave = () => {
    setResumeIsHovered(false);
  };

  const handleEmailMouseEnter = () => {
    setEmailIsHovered(true);
  };

  const handleEmailMouseLeave = () => {
    setEmailIsHovered(false);
  };

  return (
    <>
      <div className="app__hero-wrap">
        <Navbar />

        {/* Life Goats Components */}
        <LifeGoatsButton onClick={() => setLifeGoatsSidebarOpen(true)} />
        <LifeGoatsSidebar
          isOpen={lifeGoatsSidebarOpen}
          onClose={() => setLifeGoatsSidebarOpen(false)}
        />

        <Hero
          githubIsHovered={githubIsHovered}
          handleGithubMouseEnter={handleGithubMouseEnter}
          handleGithubMouseLeave={handleGithubMouseLeave}
          linkedinIsHovered={linkedinIsHovered}
          handleLinkedinMouseEnter={handleLinkedinMouseEnter}
          handleLinkedinMouseLeave={handleLinkedinMouseLeave}
          resumeIsHovered={resumeIsHovered}
          handleResumeMouseEnter={handleResumeMouseEnter}
          handleResumeMouseLeave={handleResumeMouseLeave}
        />
      </div>
      <About />
      <Skills />
      <Projects />
      <Journey />
      {astroPic}
      <Parallax />
      <Contact
        githubIsHovered={githubIsHovered}
        handleGithubMouseEnter={handleGithubMouseEnter}
        handleGithubMouseLeave={handleGithubMouseLeave}
        linkedinIsHovered={linkedinIsHovered}
        handleLinkedinMouseEnter={handleLinkedinMouseEnter}
        handleLinkedinMouseLeave={handleLinkedinMouseLeave}
        emailIsHovered={emailIsHovered}
        handleEmailMouseEnter={handleEmailMouseEnter}
        handleEmailMouseLeave={handleEmailMouseLeave}
      />
      <Footer
        modalState={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
      />
    </>
  );
};

export default App;
