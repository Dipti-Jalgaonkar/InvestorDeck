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
    type:0,
  })

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const navigate = useNavigate()

  const { loginUser, investloginUser , success } = useContext(authContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.type == 1){
      investloginUser(form.email, form.password)
    }
    else if(form.type == 2){
    loginUser(form.email, form.password)
    }

    if (success) {
      navigate('/')
    } else {
      navigate('/')
    }
  }
  const handelInvest= (e) => {
    setForm((prevState) => ({
      ...prevState,
      type: 1,
    }))
  }
  const handelRegister= (e) => {
    setForm((prevState) => ({
      ...prevState,
      type: 2,
    }))
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
          <div className='login-element'>
            <label>Select Type of User: </label>
            <select
              className='login-element-input dropdown'
              name=''
            >
              <option value='1' onClick={handelInvest}>Investor</option>
              <option value='2' onClick={handelRegister}>Startup</option>
            </select>
          </div>
          <button
            className='btn2 btn-primary'
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className='login-footer'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
