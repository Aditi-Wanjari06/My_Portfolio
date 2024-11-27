import React from 'react'
import './Navbar.css'

function Navbar() {

    const handleGit = ()=> {
        window.location.href = 'https://github.com/Aditi-Wanjari06/My_Portfolio'
    }
  return (
    <div className='navbar-container'>
       <h1>Portfolio</h1>
            <ul type="none" className='list-container'>
                <li className='list'>About</li>
                <li className='list'>Skills</li>
                <li className='list'>Projects</li>
                <li className='list'>Education</li>
                <li className='list'> 
                    <button
                     className='git-button'
                     onClick={handleGit}
                    >
                        Git Profile
                        </button>
                </li>
            </ul>
     
     


    </div>
  )
}

export default Navbar