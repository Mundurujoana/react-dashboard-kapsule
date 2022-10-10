import React from 'react'
import './Navbar.css'
import logo from "./kapsule-logo-bg.png";
import { FaRegBell, FaUserCircle, FaCog} from "react-icons/fa";
import SearchBar from "../../components/Navbar/SearchBar";

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
      <SearchBar/>
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