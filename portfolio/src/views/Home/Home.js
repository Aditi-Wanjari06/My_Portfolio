import React from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import Skill from '../../components/Skills/Skill'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home