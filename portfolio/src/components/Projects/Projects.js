import React from 'react'
import "./Projects.css"
import projectData from '../../projectData.js'
// import projectImg from './task-management.png'
import { Box } from 'lucide-react'
  

function Projects() {
  return (
    <div className='main-container'>
    <div className='project-page'>
      <div className='top-container'>
        {/* <img src={projectImg} alt='project-icon' style={{ height: '45px', margin: '3px' }} /> */}
        <Box className="project-icon" />

        <h1 className='project-heading'>Projects</h1>

      </div>
      <div className='project-container'>
        {projectData.map((projectDetails, index) => {
          return (

            <div key={index} className='project-card'>
              <img src={projectDetails.image} alt='overview' className='project-img' />
              <h3 className='project-title'>{projectDetails.projectName}</h3>
              <p className='project-description'>{projectDetails.description}</p>
              <a  href="https://github.com/Aditi-Wanjari06" target='_blank' rel="noopener noreferrer"> 
              <img src={projectDetails.link} alt='github-link' className='github-link' />
              </a>
            </div>

          )
        })}

      </div>
    </div>
    </div>
  )

}

export default Projects