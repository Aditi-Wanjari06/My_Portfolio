import React from 'react'
import './About.css'
import aboutImg from './about.png'
import myImg from './aditi.png'

function About() {
  

  return (
    <div>
      <div className='top-container'>
      <img src={aboutImg} alt='education-icon'  style={{height:'40px', margin:'3px'}}/>
    <h1  className='about-heading'>About</h1>
   
    </div>
    <div className='about-container'>
        <div className='about'>
        <h1>Hi, I am <br/> <span className='span-name'>Aditi Wanjari</span></h1>
        <p>I' m pursuing the masters degree in MCA from G.H.Raisoni, Amravati University, Nagpur. </p>
        
          <p>To acquire practical, real-world skills in every domain engage with, I seeking a challenging career path that fosters continuous professional growth and allows me to make valuable contributions to the esteemed organization I work for.</p>
          
        </div>
        <div>
            <img src= {myImg} alt='my_profile'
            className='profile'/>
        </div>
    </div>
    </div>
  )
}

export default About