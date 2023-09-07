import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Skills, Projects, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-pink'>
        <div className='bg-cover bg-n-repeat bg-center bg-purple-950'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
      <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
