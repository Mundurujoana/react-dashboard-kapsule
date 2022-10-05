import React from 'react'
import './Sidenav.css'
import { FaHome, FaJava, FaFigma, FaLeanpub} from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className='sidenav'>
       <div className="sideWrapper">
        <div className="sideMenu">
          <h3 className="sidenavTitle"> Dashbaord </h3> 
          <ul className='sidenavList'>
            <li className='sidenavListItem'>
{/* <FaPython/> Python */}
<FaHome/> Home
            </li>
            <li className='sidenavListItem'>
      {/* <FaPhp/> Php */}
      < FaLeanpub/> Learn
            </li>
            <li className='sidenavListItem'>
      <FaJava/> Java
           </li>
           <li className='sidenavListItem'>
 <FaFigma/> Figma
          </li>
          </ul>
          </div>
       </div>
    </div>
  )
}

export default Sidenav


