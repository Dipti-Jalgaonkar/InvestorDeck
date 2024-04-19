import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
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
import logo2 from '../../assets/logo.png'
import authContext from '../../context/auth.js'
import { useContext } from 'react'

const Navbar = () => {
  useEffect(() => {
    const startup = window.localStorage.getItem('startup')
    if (startup) {
      setIsStartup(true)
    } else {
      setIsStartup(false)
    }
    console.log(startup)
  }, [])
  const logOut = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user_id')
    window.localStorage.removeItem('startup')
    setLoggedIn(false)
    setIsStartup(false)
  }
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  const { loggedIn, setLoggedIn } = useContext(authContext)
  const { isStartup, setIsStartup } = useContext(authContext)
  return (
    <>
      <nav className='main-nav'>
        <img
          className='logo2'
          src={logo2}
          alt='logo'
        />
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            {loggedIn && !isStartup && (
              <li>
                <Link to='/viewstartup'>Invest</Link>
              </li>
            )}
            {isStartup && (
              <li>
                <Link to='/viewstartup'>Activity</Link>
              </li>
            )}
            {!loggedIn && !isStartup && (
              <li>
                <Link to='/investor'>How?</Link>
              </li>
            )}
            <li>
              <Link to='/contact'>contact</Link>
            </li>
          </ul>
        </div>

        {(loggedIn || isStartup) && (
          <Popover value={{ className: 'nav-icons' }}>
            <PopoverTrigger>
              <div className='nav-user'>
                <FaUserCircle size={60} />
              </div>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <div className='nav-logout'>
                    <Link to='/profile'>
                      <Button colorScheme='blue'>Profile</Button>
                    </Link>
                    <p>Do You want to Logout</p>
                    <Button
                      colorScheme='blue'
                      onClick={logOut}
                    >
                      <Link to='/'>Logout</Link>
                    </Button>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        )}

        {!loggedIn && !isStartup && (
          <div className='nav-logbutton'>
            <Link to='/login'>Login</Link>
          </div>
        )}

        <div className='social-media'>
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
