import React from 'react'
import './Home.css'


// import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About.js'
import Education from '../../components/Education/Education.js'
import Skill from '../../components/Skills/Skill.js'
import Projects from '../../components/Projects/Projects.js'
import Contact from '../../components/Contact/Contact.js'
import Footer from '../../components/Footer/Footer.js'

function Home() {
 
  return (


    <div>
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home