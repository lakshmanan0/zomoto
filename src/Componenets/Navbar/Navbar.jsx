import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/Food Del Frontend Assets/assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
   const [menu,setMenu]=useState("Home")
  //  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <>
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
          <ul className="navbar-menu">
            
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a  href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile</a>
            <a  href='#footer' onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</a>
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link> 
                <div className="dot"> </div>     
                </div>

                <button onClick={()=>setShowLogin(true)}>sign in</button>

          </div>
    </div> 

    </>
  )
}

export default Navbar

