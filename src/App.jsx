import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './componenets/LandingPage'
import AboutPage from './componenets/AboutPage'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import RegisterPage from './componenets/RegisterPage'
import LoginPage from './componenets/LoginPage'
function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/login' Component={LoginPage}/>
      </Routes>
      <Footer/>
      </Router> 
      
    </>
  )
}

export default App
