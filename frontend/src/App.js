import './App.css'
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import AboutUs from './pages/AboutUs/AboutUs'
import Investor from './pages/Investor/Investor'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import RegisterStart from './pages/Register/RegisterStartup'
import Startup from './pages/Startup/Startup'
import ViewStartup from './pages/ViewStartup/ViewStartup'
import authContext from './context/auth'
import { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

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
            Component={Main}
            element={<Main />}
          />
          <Route
            path='/about'
            Component={AboutUs}
            element={<AboutUs />}
          />
          <Route
            path='/viewstartup'
            Component={ViewStartup}
            element={<ViewStartup />}
          />
          <Route
            path='/about'
            Component={AboutUs}
            element={<AboutUs />}
          />
          {loggedIn && (
            <>
              <Route
                path='/*'
                Component={Main}
                element={<Main />}
              />

              <Route
                path='/investor'
                Component={Investor}
                element={<Investor />}
              />
              <Route
                path='/startup'
                Component={Startup}
                element={<Startup />}
              />
            </>
          )}
          {!loggedIn && (
            <>
              <Route
                path='/register'
                Component={RegisterStart}
                element={<RegisterStart />}
              />
              <Route
                path='/login'
                Component={Login}
                element={<Login />}
              />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
