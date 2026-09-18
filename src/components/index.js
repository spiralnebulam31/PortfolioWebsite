import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Journey from './Journey/Journey';
import Projects from './Projects/Projects';
import Parallax from './Parallax/Parallax';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

// NOTE: AstroPic is deliberately NOT re-exported here. It's a Server
// Component (see AstroPic.jsx) and must be imported directly by a Server
// Component ancestor (app/page.jsx) and passed down as a prop/children —
// bundling it into this barrel would pull it into App.jsx's Client
// Component module graph, which can't render a server-only async component.
export {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Journey,
  Parallax,
  Contact,
  Footer
};