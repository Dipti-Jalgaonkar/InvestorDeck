import './App.css'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Investor from './pages/Investor/Investor'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import RegisterStart from './pages/Register/RegisterStartup'
import Startup from './pages/Startup/Startup'
import Profile from './pages/Profile/Profile'
import Schedule from './pages/Schedule/Schedule'
import ViewStartup from './pages/ViewStartup/ViewStartup'
import authContext from './context/auth'
import { useContext, useEffect } from 'react'
import CardStartup from './components/CardStartup/CardStartup'
import 'bootstrap/dist/css/bootstrap.min.css'
import InvestReg from './pages/InvestReg/InvestReg'
import Appointment from './pages/Appointment/Appointment'
import PaymentGateway from './pages/PaymentGateway/PaymentGateway'
import AppointmentRoom from './pages/AppointmentRoom/AppointmentRoom'

function App() {
  const { loggedIn, setLoggedIn } = useContext(authContext)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decodedToken = jwt_decode(token)
      const currentTime = Date.now() / 1000
      if (decodedToken.exp < currentTime) {
        setLoggedIn(false)
        console.log('notoken')
      } else {
        setLoggedIn(true)
        console.log('decodedToken')

        console.log(decodedToken.exp)
        console.log(currentTime)
      }
    } else {
      console.log('Error Decoding token')
    }
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/about'
            element={<AboutUs />}
          />
          <Route
            path='/myappointments'
            element={<Appointment />}
          />
          <Route
            path='/contact'
            element={<ContactUs />}
          />
          <Route
            path='/investor'
            element={<Investor />}
          />
          <Route
            path='/startup'
            element={<Startup />}
          />
          <Route
            path='/test'
            element={
              <CardStartup
                name='newCompany'
                desc='NEWCOMPANY DESCRIBED HERE'
                amount='2000'
              />
            }
          />
          {loggedIn && (
            <>
              <Route
                path='/profile'
                element={<Profile />}
              />

              <Route
                path='/viewstartup'
                element={<ViewStartup />}
              />
              <Route
                path='/*'
                element={<Main />}
              />
              <Route
                path='/startup'
                element={<Startup />}
              />
              <Route
                path='/schedule/:id'
                element={<Schedule />}
              />
            </>
          )}
          {!loggedIn && (
            <>
              <Route
                path='/register'
                element={<RegisterStart />}
              />
              <Route
                path='/investreg'
                element={<InvestReg />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
            </>
          )}
          <Route
            path='*'
            element={<Main />}
          />
          <Route
            path='/payment'
            element={<PaymentGateway />}
          />
          <Route
            path='/meet'
            element={<AppointmentRoom />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
