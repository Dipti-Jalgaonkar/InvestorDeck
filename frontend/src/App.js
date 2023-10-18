import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import AboutUs from './pages/AboutUs/AboutUs'
import Investor from './pages/Investor/Investor'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import RegisterStart from './pages/Register/RegisterStartup'
import Startup from './pages/Startup/Startup'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
            path='/login'
            Component={Login}
            element={<Login />}
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
          <Route
            path='/register'
            Component={RegisterStart}
            element={<RegisterStart />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
