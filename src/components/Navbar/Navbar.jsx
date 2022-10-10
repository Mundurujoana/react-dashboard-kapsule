import React from 'react'
import './Navbar.css'
import logo from "./kapsule-logo-bg.png";
import { FaRegBell, FaUserCircle, FaCog, FaSistrix } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="navbarMain">
      <div className="left">
    <img src={logo} alt='logo'className='logo' />

    <div>

    </div>

    </div>
    <div className="search-center">
      <input type="text" placeholder='seacrh....' />
      <FaSistrix className='searchIcon'/>
    </div>
      <div className="right">
        <div className="bellIconContainer">
   <FaRegBell />
   < FaCog/> 
        </div>
    <div className="profileIconContainer">
          < FaUserCircle/>
          <span className='name'>Joana</span>
        </div> 
      </div>
     </div>
      </div>
  )
}

export default Navbar