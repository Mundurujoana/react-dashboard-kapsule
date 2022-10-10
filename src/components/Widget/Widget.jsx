import React from 'react'
import './Widget.css'
import { FaTwitter, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


const Widget = ({color}) => {
  return (
    <div className="welcome">
        <h2 className='welcome'>Welcome To KapsuleApp Store </h2>
  
    <div className="widget">
      <div className="item">
          <FaLinkedin  className="widgetIcon"/>
          <p className="widgetRate">Ksh 2415</p>
        <p className="widgetSub"> Linkedin </p>
        {/* <a className='linkedin' href="">linkedin</a> */}
      </div>

      <div className="item">
          <FaTwitter  className="widgetIcon"/>
          <p className="widgetRate">Ksh 2415</p>
        <span className="widgetSub"> Twitter </span>
      </div>
      
      <div className="item">
          <FaInstagramSquare  className="widgetIcon" />
          <p className="widgetRate">Ksh 2415</p>
        <span className="widgetSub"> Instagram </span>
      </div>

      <div className="item">
          <FaFacebookSquare  className="widgetIcon" />
          <p className="widgetRate">Ksh 2415</p>
        <span className="widgetSub"> Facebook </span>
      </div>

</div>
<hr style={{
            color: 'red',
            backgroundColor: 'black',
            marginTop: 20
        }}
    />
    </div>
    
  );
}

export default Widget