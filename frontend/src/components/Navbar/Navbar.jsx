import React, { useState } from 'react'
import './Navbar.css'
import {
  FaUserCircle
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from '@chakra-ui/react'

const Navbar = () => {
  const logOut = () => {
    window.localStorage.removeItem('user')
  }
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>I</span>nvestor
            <span>D</span>eck
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <Link to='/main'>Home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/main'>services</Link>
            </li>
            <li>
              <Link to='/main'>contact</Link>
            </li>
          </ul>
        </div>
      
  
  
        <div className='social-media'>
        <div className='nav-user'> 
        <Popover>
  <PopoverTrigger>
    <FaUserCircle size={70} />
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <div className='nav-logout'>
        <p>Do You want to Logout</p>
        <Button colorScheme='blue' onClick={logOut}>Logout</Button>
        </div>
      </PopoverBody>
    </PopoverContent>
  </Portal>
</Popover>
</div>
          <div className='hamburger-menu'>
            <a
              href='#'
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
