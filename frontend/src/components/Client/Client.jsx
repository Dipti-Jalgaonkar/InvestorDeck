import React from 'react'
import './Client.css'
import { BsStarFill } from 'react-icons/bs';

function Client() {
  return (
    <div className='client-cont'>
    <section id="clients">
<div className="client-heading">
    <h3>
    What Our Client's Say
    </h3>
</div>

<div className="client-box-container">   
    <div className="client-box">
        
        <div className="client-profile">
            <img src="https://grocery-zeta.vercel.app/images/client-1.jpg" alt="client"/>
            
            <div className="clientprofile-text">
                <strong>Ashneer Groveri</strong>
                <span>CEO</span>

            </div>
        </div>

        <div className="clientrating">
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
        </div>

        
        <p>It is important to remember that the investor is just another vendor.” “To my mind, the concept of a related-party transaction in India is totally irrelevant. Only future founders should have that good startup</p>
    </div>
    <div className="client-box">
        
        <div className="client-profile">
            <img src="https://grocery-zeta.vercel.app/images/client-2.jpg" alt="client"/>
            
            <div className="clientprofile-text">
                <strong>Ashish Dhawan</strong>
                <span>Founder Convergence Foundation</span>

            </div>
        </div>

        
        <div className="clientrating">
        <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
        </div>

        
        <p>Take heart in the knowledge that business isn’t flawless, and the journey to success is often long and winding – most overnight successes took a lot of trial and error to get where they are today. Have a read through some of the best inspirational business quotes from world-renowned leaders like Steve Jobs.</p>
    </div><div className="client-box">
        
        <div className="client-profile">
            <img src="https://grocery-zeta.vercel.app/images/client-3.jpg" alt="client"/>
            
            <div className="clientprofile-text">
                <strong>Cathie Wood</strong>
                <span>CEO and CIO of ARK Invest</span>

            </div>
        </div>
        <div className="clientrating">
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
        </div>
        <p>If you always do what you've always done, you'll always get what you've always got.Your most unhappy customers are your greatest source of learning.If you want to grow you have to do something different from the majority of people.</p>
    </div>
</div>
</section>
    </div>
  )
}

export default Client