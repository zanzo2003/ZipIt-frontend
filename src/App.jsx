import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './componenets/LandingPage'
import AboutPage from './componenets/AboutPage'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/about' Component={AboutPage}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
      
    </>
  )
}

export default App
