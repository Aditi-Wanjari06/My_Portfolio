import React from 'react'
import './Home.css'


// import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import Skill from '../../components/Skills/Skill'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

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