import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './componenets/LandingPage'
import AboutPage from './componenets/AboutPage'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import RegisterPage from './componenets/RegisterPage'
import LoginPage from './componenets/LoginPage'
import DashboardLayout from './componenets/dashboard/DashboardLayout'
import AuthGuard from './auth/AuthGuard'
function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={ <AuthGuard publicPage={true}> <LandingPage/> </AuthGuard>}/>
        <Route path='/about' element={ <AuthGuard publicPage={true}> <AboutPage/> </AuthGuard>}/>
        <Route path='/register' element={ <AuthGuard publicPage={true}> <RegisterPage/> </AuthGuard>}/>
        <Route path='/login' element={<AuthGuard publicPage={true}> <LoginPage/> </AuthGuard>}/>
        <Route path='/dashboard' element={<AuthGuard publicPage={false}> <DashboardLayout/> </AuthGuard>}></Route>
      </Routes>
      <Footer/>
      </Router> 
      
    </>
  )
}

export default App
