
import './index.css'
import Navbar from './Componenets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Carts/Cart'
import Footer from './Componenets/Footer/Footer'
import { useState } from 'react'
import Loginpopup from './Componenets/Loginpopup/Loginpopup'

function App() {
 
  const [showLogin ,setShowLogin] =useState(false)

  return (
    <>

      {showLogin? <Loginpopup setShowLogin={setShowLogin}/>:<></>}

     <div className="app">
      <Navbar setShowLogin={setShowLogin} /> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
     </div>
     <Footer/>
    </>
     
  )
}

export default App
