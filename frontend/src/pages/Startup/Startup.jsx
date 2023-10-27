import React from 'react'
import "./Startup.css"
import start from "../../assets/startup-img.jpg"
import { Link } from 'react-router-dom'

function Startup() {
  return (
    <>
    <div className="startup-container">
        <div className="startup-contain">
            <h1>Empower Your Startup Dreams with Investor's Deck - Where your Innovation Meets Investment</h1>
            <button><Link to="/register">Register your <strong>Startup</strong></Link></button>
        </div>
    </div>
    <div className="startup-features-container">
        <h1 className="startup-heading">Key Features</h1>
        <div className="features-contain">
            <div className="startup-feature1">
                <h2>Streamlined Fundraising Process</h2>
                <p>Intuitive and user-friendly platform that guides startups through the fundraising journey.</p>
            </div>
            <div className="startup-feature2">
                <h2>Investor Matchmaking</h2>
                <p>We connect startups with compatible investors based on industry, stage, and goals.</p>
            </div>
            <div className="startup-feature3">
                <h2>Community and Networking</h2>
                <p>A thriving community forum for startups to connect, share experiences, and seek advice.</p>
            </div>
            
        </div>
    </div>
</>
  )
}

export default Startup