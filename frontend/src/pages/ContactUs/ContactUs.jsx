import React from 'react'
import './ContactUs.css'
import call from '../../assets/phone-solid.svg'
import envelope from '../../assets/envelope-solid.svg'

function ContactUs() {
  return (
    <div className='contact-con'>
    <div className="contact-container">
        <div className="contact-main">
            <h1>Contact Us</h1>
            <ul>
                <li>
                    <img height="30px" width="30px" src={call}/>
                    <p>9324477971</p>
                </li>
                <li>
                    <img height="30px" width="30px" src={envelope}/>
                    <p>investorsdeck@gmail.com</p>
                </li>
            </ul>
        </div>
        <div className="contact-form">
            
            <h1>Get in Touch</h1>
            <p>Whether your're an investor looking for exciting opportunities or a startup seeking support,we're here to connect and collaborate.</p>
            <p>Feel free to reach out to us with any questions, inquiries, or partnership ideas.</p>
            <h3>Feel free to drop us a line below!</h3>
            <form>
                <input type="text" placeholder="Enter your Name"/><br/>
                <input type="text" placeholder="Enter your Email"/><br/>
                <textarea rows="5" placeholder="Enter your comments here"></textarea>
            </form>
            <button>SEND</button>
        </div>
    </div>
    </div>
  )
}

export default ContactUs