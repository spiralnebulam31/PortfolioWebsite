import { BrowserRouter } from 'react-router-dom';
import { Main, Navbar, About, Skills, Projects, Journey, Contact, Footer } from './components';

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
        <Journey />
      <div className='relative z-0'>
          <Contact />
        </div>
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App;
