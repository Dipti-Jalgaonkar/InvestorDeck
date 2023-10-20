import React from 'react'
import { createContext, useState } from 'react'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [success, setSuccess] = useState(false)

  const registerUser = async (name, email, pass, org_size, valuation) => {
    if (!name || !email || !pass || !org_size || !valuation) {
      console.log('ERROR')
    } else {
      const body = new URLSearchParams()
      body.append('name', name)
      body.append('email', email)
      body.append('password', pass)
      body.append('org_size', org_size)
      body.append('valuation', valuation)

      const response = await fetch(
        `http://localhost:5000/api/startup/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body,
        }
      )

      const data = await response.json()
      console.log(data)
      setSuccess(data.success)
      if (data.sucess) {
        localStorage.setItem('token', data.token)
        console.log(localStorage.getItem('token'))
      }

    }
  }

  const loginUser = async (email, pass) => {
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', pass)

    const response = await fetch(`http://localhost:5000/api/startup/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })

    const data = await response.json()
    console.log(data)
    if (data.success) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  return (
    <authContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        registerUser,
        loginUser,
        success,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default authContext
