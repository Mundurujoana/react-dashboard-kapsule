// import React from 'react'
import './Sidenav.css'
import { FaMicrosoft, FaChartLine, FaUpload,FaBookReader, FaArrowLeft, FaBookOpen} from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className="sidebar">
   <div className="sidebarWrapper">
  <div className="sidebarMenu">
    <h3 className="sidebarTitle"> DASHBOARD </h3>
    <ul className="sidebarList">
      <li className="sidebarListItem active">
        <FaMicrosoft className="sidebarIcon" />
        App
      </li>
     
      <li className="sidebarListItem">
        <FaUpload  className="sidebarIcon" />
        Upload 
      </li>

      <li className="sidebarListItem">
        <FaChartLine className="sidebarIcon" />
        Reporting
      </li>

      <li className="sidebarListItem">
        <FaBookOpen className="sidebarIcon" />
        Knowledge Base
      </li>

      <li className="sidebarListItem">
        <FaBookReader className="sidebarIcon" />
        Knowledge Base
      </li>
<hr />
      <li className="sidebarListItem">
        <FaArrowLeft className="sidebarIcon" />
        Logout
      </li>
    </ul>
  </div>
  </div>
  </div>  
  )
}

export default Sidenav;





  