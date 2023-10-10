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
                <strong>James Mcvog</strong>
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

        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate suscipit aspernatur alias, hic at aliquid rem odio eligendi dolores! Enim dolore unde quasi aliquid itaque laudantium explicabo alias fuga.</p>
    </div>
    <div className="client-box">
        
        <div className="client-profile">
            <img src="https://grocery-zeta.vercel.app/images/client-2.jpg" alt="client"/>
            
            <div className="clientprofile-text">
                <strong>Edward Coolen</strong>
                <span>Marketer</span>

            </div>
        </div>

        
        <div className="clientrating">
        <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
        </div>

        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate suscipit aspernatur alias, hic at aliquid rem odio eligendi dolores! Enim dolore unde quasi aliquid itaque laudantium explicabo alias fuga.</p>
    </div><div className="client-box">
        
        <div className="client-profile">
            <img src="https://grocery-zeta.vercel.app/images/client-3.jpg" alt="client"/>
            
            <div className="clientprofile-text">
                <strong>Ava Max</strong>
                <span>Software Developer</span>

            </div>
        </div>
        <div className="clientrating">
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
            <BsStarFill class="bs"/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptate suscipit aspernatur alias, hic at aliquid rem odio eligendi dolores! Enim dolore unde quasi aliquid itaque laudantium explicabo alias fuga.</p>
    </div>
</div>
</section>
    </div>
  )
}

export default Client