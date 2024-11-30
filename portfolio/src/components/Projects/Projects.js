import React from 'react'
import "./Projects.css"
import projectData from '../../projectData'
import projectImg from './task-management.png'
import {Link} from 'react-router-dom'

function Projects() {
  return (
    <div className='project-page'>
      <div className='top-container'>
        <img src={projectImg} alt='project-icon' style={{ height: '40px', margin: '3px' }} />
        <h1 className='project-heading'>Projects</h1>

      </div>
      <div className='project-container'>
        {projectData.map((projectDetails, index) => {
          return (

            <div key={index} className='project-card'>
              <img src={projectDetails.image} alt='overview' className='project-img' />
              <h3 className='project-title'>{projectDetails.projectName}</h3>
              <p className='project-description'>{projectDetails.description}</p>
              <Link  to="https://github.com/Aditi-Wanjari06" target='_blank'> 
              <img src={projectDetails.link} alt='github-link' className='github-link' />
              </Link>
            </div>

          )
        })}

      </div>
    </div>
  )

}

export default Projects