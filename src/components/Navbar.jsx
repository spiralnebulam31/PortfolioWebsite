import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles.js'
import { navLinks } from '../constants/constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={styles.paddingX + ' sticky top-0 z-50'}>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // close the menu when clicked on logo
            window.scrollTo(0, 0); // scroll to top when clicked on logo
          }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer sm:block hidden'>Full-Stack Dev</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar