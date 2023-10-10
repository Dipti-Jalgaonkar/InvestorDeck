import React from 'react';
import './Investor.css';
import invest from '../../assets/investors.webp'
import solid1 from '../../assets/1-solid.svg'
import solid2 from '../../assets/2-solid.svg'
import solid3 from '../../assets/3-solid.svg'
import solid4 from '../../assets/4-solid.svg'
import { Link } from 'react-router-dom';

export default function Investor() {
  return (
    <>
    <div className="investmain-container">
        
        <div className="investhead-div">
            <h1>Welcome to the world of opportunities and financial growth. </h1>
            <h2>Explore the possibilities, discover your path, and embark on your journey to investment success with Investor's Deck.</h2>
            <button><a href=""><Link to='/register'>Start Investing</Link></a></button>
        </div>
        
    </div>

    <div className="investworking-container">
        <h1 className="investworking-heading">How it Works</h1>
        <div className="investsteps-container">
            <div className="investsteps">
                <div ><img height="50px" width="50px" src={solid1}/></div>
                <h3>Create an Account</h3>
                <p>
                    To discover active investment opportunities, you’ll need to sign up. Once your investor profile is complete, you can access all rounds, ask entrepreneurs questions, request more information, and invest.
                </p>
            </div>
            <div className="investsteps">
                <img height="50px" width="50px" src={solid2}/>
                
                <h3>Access opportunities</h3>
                <p>
                    Review active opportunities. Each round page gives you valuable insights into the company, including its business plan and investment terms, to helping you to decide if you want to be part of its success.
                </p>
            </div>
            <div className="investsteps">
                <img height="50px" width="50px" src={solid3}/>
                <h3>Make an Investment</h3>
                <p>
                    The investment is considered completed when the funds are transferred from your account to your selected startups. After receiving the amount, all participating investors will sign the investment documents.
                </p>
            </div>
            <div className="investsteps">
                <img height="50px" width="50px" src={solid4}/>
                <h3>Grow your Portfolio</h3>
                <p>
                    Once the investment is signed off, you can access all information and documents related to your investment in the "My Portfolio" section. If the startup performs well, your investment may yield a return.
                </p>
            </div>
        </div>
    </div>
    <div id="investcontainer">
        <h2 className="investtext1">At Investors Deck,</h2>
        <h3 className="investtext2">
            we connect investors with the most promising startups,
        </h3>
        <h3 className="investtext3">
            helping you discover and partner with the industry's top founders.
        </h3>
        <button className="investbounce"><a href="">Join Now</a></button>
        <img src={invest} alt="investors-img"/>
    </div>

    </>
  )
}
