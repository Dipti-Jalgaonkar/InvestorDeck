import React from 'react'
import { createContext, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [success, setSuccess] = useState(false)
  const [startups, setStartups] = useState([])
  const [investments, setInvestments] = useState([])
  const [appointment, setAppointment] = useState({})
  const [schedules, setSchedules] = useState([])
  const [isStartup, setIsStartup] = useState([])

  useEffect(() => {}, [])

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
      setSuccess(data.data.success)
      if (data.data.success) {
        window.localStorage.setItem('token', data.data.token)
        console.log(localStorage.getItem('token'))
      }
    }
  }
  const investregUser = async (name, email, pass) => {
    if (!name || !email || !pass) {
      console.log('ERROR')
    } else {
      const body = new URLSearchParams()
      body.append('name', name)
      body.append('email', email)
      body.append('password', pass)

      const response = await fetch(
        `http://localhost:5000/api/investor/register`,
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
      setSuccess(data.data.success)
      if (data.data.sucess) {
        localStorage.setItem('token', data.data.token)
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
      setLoggedIn(true)
      setIsStartup(true)
      window.localStorage.setItem('startup', true)
      window.localStorage.setItem('token', data.data.token)
      window.localStorage.setItem('user_id', data.data.id)
      window.localStorage.setItem('user_email', data.data.email)
      window.localStorage.setItem('user_name', data.data.name)
      setStartups(data.data.startups)
    } else {
      setSuccess(false)
    }
  }
  const investloginUser = async (email, pass) => {
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', pass)

    const response = await fetch(`http://localhost:5000/api/investor/login`, {
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
      setLoggedIn(true)
      window.localStorage.setItem('token', data.data.token)
      window.localStorage.setItem('user_id', data.data.id)
      setStartups(data.data.startups)
    } else {
      setSuccess(false)
    }
  }

  const getStartups = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/startup/getStartup',
        {
          method: 'GET',
        }
      )

      const data = await response.json()
      console.log(data)
      setStartups(data.startups)
    } catch (err) {
      console.log(err)
    }
  }

  const getInvestments = async () => {
    const id = window.localStorage.getItem('user_id')
    const body = new URLSearchParams()
    body.append('id', id)
    try {
      const response = await fetch('http://localhost:5000/api/getInvestments', {
        method: 'POST',
        body: body,
      })
      const data = await response.json()
      setInvestments(data.investments)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const addInvestment = async (s_id, name, amount) => {
    const id = window.localStorage.getItem('user_id')
    const body = new URLSearchParams()
    body.append('id', id)
    body.append('name', name)
    body.append('amount', amount)
    body.append('startup_id', s_id)
    try {
      const response = await fetch('http://localhost:5000/api/addInvestment', {
        method: 'POST',
        body: body,
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const addAppointment = async (
    startup_id,
    date,
    time,
    startup_name,
    amount
  ) => {
    const id = window.localStorage.getItem('user_id')
    const body = new URLSearchParams()
    body.append('id', id)
    body.append('startup_id', startup_id)
    body.append('date', date)
    body.append('time', time)
    body.append('startup_name', startup_name)
    body.append('amount', amount)

    try {
      const response = await fetch('http://localhost:5000/api/addAppointment', {
        method: 'POST',
        body: body,
      })
      const data = await response.json()
      console.log(data)
      const email = window.localStorage.getItem('user_email')
      const name = window.localStorage.getItem('user_name')
      emailjs.send(
        'service_o3j8q6a',
        'template_a8cgw4i',
        {
          to_name: name,
          to_email: email,
          date: date,
          time: time,
          from_name: startup_name,
        },
        'uOoGIXF3UoBPsxTno'
      )
    } catch (err) {
      console.log(err)
    }
  }

  const getAppointments = async () => {
    const id = window.localStorage.getItem('user_id')
    const body = new URLSearchParams()
    body.append('id', id)
    try {
      const response = await fetch(
        'http://localhost:5000/api/getAppointments',
        {
          method: 'POST',
          body: body,
        }
      )
      const data = await response.json()
      setSchedules(data.appointments)
    } catch (err) {
      console.log(err)
    }
  }

  const filterStartups = async (type) => {
    const body = new URLSearchParams()
    body.append('type', type)
    try {
      const response = await fetch(
        'http://localhost:5000/api/startup/filterStartups',
        {
          method: 'POST',
          body,
        }
      )
      const data = await response.json()
      console.log(data)
      setStartups(data.startups)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <authContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        registerUser,
        investregUser,
        loginUser,
        investloginUser,
        success,
        getStartups,
        startups,
        getInvestments,
        investments,
        addInvestment,
        addAppointment,
        setAppointment,
        appointment,
        getAppointments,
        schedules,
        filterStartups,
        setIsStartup,
        isStartup,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default authContext
