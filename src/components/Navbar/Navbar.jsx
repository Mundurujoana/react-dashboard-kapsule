import React from 'react'
import './Navbar.css'
// import { NotificationsNone } from '@material-i/icons';
import { FaRegBell, FaUserCircle, FaCog } from "react-icons/fa";




const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="navbarMain">
      <div className="left">
    <img src='../public/images/kapsule-logo.jpeg'  alt='logo' />
    
    </div>
      <div className="right">
        <div className="bellIconContainer">
   <FaRegBell />
   < FaCog/> 
        </div>
    <div className="profileIconContainer">
          < FaUserCircle/>
        </div> 
      </div>
     </div>
      </div>
  )
}

export default Navbar