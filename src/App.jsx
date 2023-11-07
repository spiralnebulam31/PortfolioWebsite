import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Main, Navbar, Skills, Projects } from './components';

const App = () => {

  return (
    <BrowserRouter>
      {/* <div className='relative z-0 bg-background1'> */}
        <div className='bg-cover bg-n-repeat bg-center'>
          <Navbar />
          <Main />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
      <div className='relative z-0'>
          <Contact />
        </div>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
