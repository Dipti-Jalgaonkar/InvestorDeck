import React, { useState } from 'react'
import './Navbar.css'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

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
          <ul className='social-media-desktop'>
            <li>
              <a
                href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA'
                target='_thapa'
              >
                <FaFacebookSquare className='facebook' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/thapatechnical/'
                target='_thapa'
              >
                <FaInstagramSquare className='instagram' />
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA'
                target='_thapa'
              >
                <FaYoutubeSquare className='youtube' />
              </a>
            </li>
          </ul>
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
