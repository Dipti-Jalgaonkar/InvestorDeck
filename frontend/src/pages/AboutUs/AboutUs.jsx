import React from 'react'
import './AboutUs.css';
import try1 from "../../assets/try1.jpg"
import back4 from "../../assets/about-back4.jpg"

function AboutUs() {
  return (
    <>
        <div id="aboutimage-container">
        <img src={try1} alt="aboutus-img"/>
        <div className="aboutaboutus-textdiv">
            <h1>Investor's Deck</h1>
            <h1>About Us</h1>
        </div>
    </div>
    <div className="aboutaboutus-text">
        <p>
            Welcome to Investors Deck, the bridge between startups and investors.
        </p>
        <p>We're a team committed to empowering both entrepreneurs and investors with personalized guidance.</p>
        <p>Whether you're a startup seeking funding or an investor looking for opportunities, we're here to help you navigate the world of finance and achieve your goals.</p>
    </div>
    <div className="aboutmission-container">
        <img src={back4}/>
        <div className="aboutmission-contain">
            <h1 className="aboutmission-question">Why choose Investor's Deck?</h1>
            <div className="aboutmission-div">
                <h1 className="aboutmission-heading">Our Mission</h1>
                <p className="aboutmission-text">
                    Our mission is simple yet profound: to facilitate the growth and success of startups while enabling investors to discover and support promising ventures. We believe in the transformative power of entrepreneurship and understand that behind every great idea is a dedicated team in need of support and capital. We are committed to driving innovation, job creation, and economic growth by connecting the right people with the right opportunities.
                </p>
            </div>
        </div>
        
    </div>

    <div class="aboutoffer-container">
        <div class="aboutoffer-div1">
            <div class="aboutoffers">
                <h2>Startup Discovery:</h2>
                <p>
                    Explore a diverse range of innovative startups across various industries. Our platform showcases startups at various stages of development, from early-stage disruptors to well-established ventures.
                </p>
            </div>
            <div class="aboutoffers">
                <h2>Investment Opportunities:</h2>
                <p>
                    Discover investment opportunities that align with your interests and financial goals. We provide comprehensive information about startups seeking funding, allowing you to make informed investment decisions.
                </p>
            </div>
            <div class="aboutoffers">
                <h2>Networking and Collaboration:</h2>
                <p>
                    Connect with like-minded investors, entrepreneurs, and industry experts through our networking events and forums. Collaborate with the best and brightest in the startup ecosystem.
                </p>
            </div>
            <div className="aboutoffers">
                <h2>Educational Recources:</h2>
                <p>
                    Stay informed and empowered with our educational content. We offer articles, guides, webinars, and expert insights on startup investing, industry trends, and entrepreneurial strategies.
                </p>
            </div>
        </div>
        <div className="aboutoffer-div2">
            <h1>What we Offer in </h1>
            <h1>Investor's Deck</h1>
        </div>
    </div>
    </>
  )
}

export default AboutUs