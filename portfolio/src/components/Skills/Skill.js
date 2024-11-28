import React from 'react'
import './Skill.css'
import skillData from '../../sillsData'

function Skill() {
  return (
    <div>
    <h1 className='skill-heading'>Skills</h1>
    <div className='skill-container'>
     
      {skillData.map((skillDetails, index)=>{
        return(
          <div key={index} className="skill-card">
          <h3 className='skill-name'>{skillDetails.name}</h3>
          <p className='skill-lang'>{skillDetails.lang}</p>
          </div>
        )
       
      })}
      
   </div>
   </div>
  )
}

export default Skill