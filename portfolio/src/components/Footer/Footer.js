import React from 'react'
import './Footer.css'
import insta from './instagram.png'
import email from './gmail.png'
import github from './github.png'
import linkedin from './linkedin.png'


function Footer() {
  const handleMailTo = (event) => {
    event.preventDefault();
    window.location.href = "mailto:aditiwan2003@gmail.com";
  };




  return (

    <div className='footer-container'>

      <ul type="none" className='list-container'>
        <a href="mailto:aditiwan2003@gmail.com" onClick={handleMailTo} target='_blank' rel="noopener noreferrer">
          <li className='list'>
            <img src={email} alt='email' className='footer-icon' />
          </li>
        </a>

        <a href="https://github.com/Aditi-Wanjari06" target='_blank' rel="noopener noreferrer">
          <li className='list' >
            <img src={github} alt='github' className='footer-icon' />
          </li>
        </a>

        <a href="https://www.linkedin.com/in/aditiwnjr06/" target='_blank' rel="noopener noreferrer" >
          <li className='list'>
            <img src={linkedin} alt='linkedIn' className='footer-icon' />
          </li>
        </a>

        <a href="https://www.instagram.com/aditi_wanjari06/" target='_blank' rel="noopener noreferrer" >
          <li className='list' >
            <img src={insta} alt='instagram' className='footer-icon' />
          </li>
        </a>


      </ul>

      <p className='footer-end'> ©2024, All rights reserved.</p>
      <p className='footer-end'>Designed & Developed By <br />Aditi Wanjari </p>


    </div>


  )
}

export default Footer