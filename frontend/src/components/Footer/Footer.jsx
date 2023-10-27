import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div id="footercontainer">
        <div id="footeraboutus">
            <div className="footerhead-div">
                <img src={logo}/>
                <h1 className="footerhead">Investors Deck</h1>
            </div>
            <p className="footerpara1">About Investors Deck:</p>
            <p className="footerpara2">
                Welcome to Investors Deck, the bridge between startups and investors.
                We're a team committed to empowering both entrepreneurs and investors with personalized guidance.
                Whether you're a startup seeking funding or an investor looking for opportunities, we're here to help you navigate the world of finance and achieve your goals.
            </p>
        </div>
        <div id="footerquicklinks">
            <p>Quick Links</p>
            <ul>
                <li><a href="">FAQs</a></li>
                <Link to='/about'><li>About Us</li></Link>
                <Link to='/investor'><li>Privacy Policy</li></Link>
                <Link to='/startup'><li>Terms & Conditions</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
        </div>
        <div id="footerfollowus">
            <p>Follow us on:</p>
            <div className="footerfollowus-div">
                <a href=""><img src={facebook} alt="facebook"/></a>
                <a href=""><img src={instagram} alt="instagram"/></a>
                <a href=""><img src={linkedin} alt="linkdin"/></a>
                <a href=""><img src={youtube} alt="linkdin"/></a>
            </div>
        </div>
        <div id="footercontactus">
            <p>Contact Us:</p>
            <ul>
                <li>Phone : 9325544679</li>
                <li>Email : investersdeck@gmail.com</li>
            </ul>
                
            
        </div>
    </div>

  )
}

export default Footer