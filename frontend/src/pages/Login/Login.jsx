import React from 'react'
import './Login.css'
import auth from '../../assets/log.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import authContext from '../../context/auth'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const navigate = useNavigate()

  const { loginUser, success } = useContext(authContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(form.email, form.password)
    if (success) {
      navigate('/main')
    } else {
      navigate('/main')
    }
  }

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
              id='email'
              onChange={onChange}
            />
          </div>
          <div className='login-element'>
            <label>Password</label>
            <input
              type='password'
              className='login-element-input'
              id='password'
              onChange={onChange}
            />
          </div>
          <button
            className='btn btn-primary'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className='login-footer'>
          Don't have an account? <Link>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
