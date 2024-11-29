import React from 'react'
import "./Projects.css"
import projectData from '../../projectData'
import projectImg from './task-management.png'

function Projects() {
  return (
    <div className='project-page'>
      <div className='top-container'>
      <h1 className='project-heading'>Projects</h1>
      <img src={projectImg} alt='project-icon'  style={{height:'50px', margin:'3px'}}/>
      </div>
      <div className='project-container'>
        {projectData.map((projectDetails, index) => {
          return (
            <div key={index} className='project-card'>
              <img src={projectDetails.image} alt = 'overview' className='project-img' />
              <h3 className='project-title'>{projectDetails.projectName}</h3>
              <p className='project-description'>{projectDetails.description}</p>
            </div>
          )
        })}

      </div>
    </div>
  )

}

export default Projects