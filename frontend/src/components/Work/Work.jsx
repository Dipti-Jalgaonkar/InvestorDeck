import React from 'react'
import './Work.css'

function Work() {
  return (
    <>
    <div className="workwork-container">
        <div className="workwork-text">
            <h1 >How it Works</h1>
            <p>
                Welcome to Investor's Deck, where visionary investors and ambitious startups come together, fostering innovation, growth, and opportunities for a brighter future. Here's how it works:
            </p>
            <button className="workstartup-btn">Register your <strong>Startup</strong></button>
            <button className="workinvest-btn">Start <strong>Investing</strong></button>
        </div>
        <div className="workwork-option1">
            <div className="workwork-join">
                <img className="workwork-icon" width="40px" height="40px" src="./images/user.png"/>
                <h2 className="workwork-heads">1. Join</h2>
                <p className="workwork-para">
                    Join the process by singing up Today.
                </p>
            </div>
            <div className="workwork-choose">
                <img className="workwork-icon" width="40px" height="40px" src="./images/search-interface-symbol.png"/>
                <h2 className="workwork-heads">2. Choose</h2>
                <p className="workwork-para">
                    According to your necessity create an account as an investor or a startup.
                </p>
            </div>
        </div>
        <div className="workwork-option2">
            <div className="workwork-startup">
                <img className="workwork-icon" width="50px" height="50px" src="./images/growth.png"/>
                <h2 className="workwork-heads">3.Startup</h2>
                <p className="workwork-para">
                    Register your startup so that investors can approach you.
                </p>
            </div>
            <div className="workwork-invest">
                <img className="workwork-icon" width="50px" height="50px" src="./images/piggy-bank.png"/>
                <h2 className="workwork-heads">4.Invest</h2>
                <p className="workwork-para">
                    Invest and receive quarterly updates on your portfolio's progress.
                </p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Work