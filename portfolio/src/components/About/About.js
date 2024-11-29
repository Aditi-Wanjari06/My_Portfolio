import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-container'>
        <div className='about'>
        <h1>Hi, I am <br/> Aditi Wanjari</h1>
        <p>To acquire practical, real-world skills in every domain engage with,  Iseeking a challenging career path that fosters continuous professional growth and allows me to make valuable contributions to the esteemed organization I work for.</p>
        {/* <p>I develop web applications using MERN Stack, <br />but I mostly love working on the front-end using CSS and React.</p> */}
        </div>
        <div>
            <img src='https://miro.medium.com/v2/resize:fit:659/1*nbcsPxU6PP0Hj8JEESzLJg.png' alt='my_profile'
            className='profile'/>
        </div>
    </div>
  )
}

export default About