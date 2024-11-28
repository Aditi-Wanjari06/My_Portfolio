import React from 'react'
import "./Projects.css"
import projectData from '../../projectData'

function Projects() {
  return (
    <div className='project-page'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
        {projectData.map((projectDetails,index)=>{
            return(
               <div key = {index} className='project-card'>
       
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