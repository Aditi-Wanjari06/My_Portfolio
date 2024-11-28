import React from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'
import Skill from '../../components/Skills/Skill'

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Skill />
    </div>
  )
}

export default Home