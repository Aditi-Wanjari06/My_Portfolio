import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import insta from './instagram.png'
import email from './gmail.png'
import github from './github.png'
import linkedin from './linkedin.png'


function Footer() {
  return (
   
    <div className='footer-container'>
      
         <ul type="none" className='list-container'>
          <Link to = 'aditiwan2003@gmail.com'>
             <li className='list'>
              <img src={email} alt='email'/>
             </li>
             </Link>

             <Link to = ''>
             <li className='list' >
              <img src={github} alt='github'/>
              </li>
              </Link>

              <Link to = ''>
             <li className='list'>
              <img src={linkedin}  alt='linkedIn'/>
              </li>
              </Link>

              <Link to = ''>
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