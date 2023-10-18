import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo.png"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>I</span>nvestor
            <span>D</span>eck
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/investor">Investor</Link>
            </li>
            <li>
              <Link to="/main">contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <img className='logo1' src={logo1}/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
