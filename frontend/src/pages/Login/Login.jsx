import React from 'react'
import './Login.css'
import auth from '../../assets/log.jpg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
      <div className='login-image'>
        <img
          src={auth}
          alt='auth_image'
          className='login-image-abs'
        />
      </div>
      <div className='login-desc'>
        <div className='login-desc-head'>
          <span className='login-primary'>Log In To Your Account</span>
          <span className='login-secondary'>
            Let's get you into your account
          </span>
        </div>
        <div className='login-inputs'>
          <div className='login-element'>
            <label>Email</label>
            <input
              type='email'
              className='login-element-input'
            />
          </div>
          <div className='login-element'>
            <label>Password</label>
            <input
              type='password'
              className='login-element-input'
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </div>
        <div className='login-footer'>
          Don't have an account? <Link>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login