import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import insta from './instagram.png'
import email from './gmail.png'
import github from './github.png'
import linkedin from './linkedin.png'


function Footer() {
  const handleMailTo = (event) => {
    // Prevent default routing behavior
    event.preventDefault();
    window.location.href = "mailto:example@example.com";
  };

 
  

  return (
   
    <div className='footer-container'>
      
         <ul type="none" className='list-container'>
         <Link to="#" onClick={handleMailTo}>
             <li className='list'>
              <img src={email} alt='email'/>
             </li>
             </Link>

             <Link to="https://github.com/Aditi-Wanjari06" target='_blank' >
             <li className='list' >
              <img src={github} alt='github'/>
              </li>
              </Link>

              <Link to="www.linkedin.com/in/aditiwnjr06" target='_blank' >
             <li className='list'>
              <img src={linkedin}  alt='linkedIn'/>
              </li>
              </Link> 

              <Link to="htps://www.instagram.com/aditi_wanjari06/" target='_blank' >
             <li className='list' >
              <img src={insta} alt='instagram'/>
              </li>
              </Link>

    
         </ul>
         
       <p className='footer-end'> ©2024, All rights reserved.</p>
        <p className='footer-end'>Designed & Developed By <br />Aditi Wanajri </p>
  
  
        </div>

 
  )
}

export default Footer