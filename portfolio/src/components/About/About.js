import React from 'react'
import './About.css'

function About() {
  return (
    <div>
    <h1 className='about-heading'>About</h1>
    <div className='about-container'>
        <div className='about'>
        <h1>Hi, I am <br/> <span className='span-name'>Aditi Wanjari</span></h1>
        <p>I' m pursuing the masters degree in MCA from G.H.Raisoni, Amravati University, Nagpur. </p>
          <p>To acquire practical, real-world skills in every domain engage with,  I seeking a challenging career path that fosters continuous professional growth and allows me to make valuable contributions to the esteemed organization I work for.</p>
        {/* <p>I develop web applications using MERN Stack, <br />but I mostly love working on the front-end using CSS and React.</p> */}
        </div>
        <div>
            <img src='https://miro.medium.com/v2/resize:fit:659/1*nbcsPxU6PP0Hj8JEESzLJg.png' alt='my_profile'
            className='profile'/>
        </div>
    </div>
    </div>
  )
}

export default About