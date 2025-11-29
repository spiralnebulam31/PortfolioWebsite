import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Main, Navbar, Skills, Projects, StarsCanvas } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-purple-950'>
        <div className>
          <Navbar />
          <Main />
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
