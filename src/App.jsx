import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  Main,
  About,
  Skills,
  Projects,
  Journey,
  Contact,
  Footer,
} from "./components";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
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
    <BrowserRouter>
      {/* <div className='relative z-0 bg-background1'> */}
      <div className="bg-cover bg-n-repeat bg-center">
        <Navbar />
        <Main
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
