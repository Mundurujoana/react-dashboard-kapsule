import React from 'react'
import './Widget.css'
import { FaTwitter, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import ProgressBar from '../ProgressBar'

const Widget = ({color}) => {
  return (
    <div className="welcome">
        <h2 className='welcome'>Welcome To KapsuleApp Store </h2>
  
    <div className="widget">
      <div className="item">
          <FaLinkedin  className="widgetIcon"/>
        <p className="widgetSub"> Linkedin </p>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
      <button type='submit' className='button' >linkedin</button>
        </a>
      </div>
     
      <div className="item">
          <FaTwitter  className="widgetIcon"/>
          <p className="widgetSub"> Twitter </p>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
        <button type='submit' className='button' > Twitter </button>
        </a>
      </div>
      
      <div className="item">
          <FaInstagramSquare  className="widgetIcon" />
          <p className="widgetSub"> Instagram </p>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <button type='submit' className='button' > Instagram </button>
        </a>
      </div>


      <div className="progress">
        <p className="widgetSub">  Total Revenue </p>
      <ProgressBar  />
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






    {/* <FaFacebookSquare  className="widgetIcon" />
          <p className="widgetSub"> Facebook </p>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <button type='submit' className='button' > Facebook </button>
        </a>
      */}