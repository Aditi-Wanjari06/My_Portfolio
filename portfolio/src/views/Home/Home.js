import React from 'react'
import './Home.css'

import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import Education from '../../components/Education/Education'

function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
    </div>
  )
}

export default Home