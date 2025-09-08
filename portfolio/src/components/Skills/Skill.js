import React from 'react'
import './Skill.css'
import skillData from '../../sillsData.js'
// import skillImg from './skill.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiVisualstudiocode, SiNetlify, SiVercel } from 'react-icons/si';
import { Lightbulb} from 'lucide-react';

const techIcons = {
  HTML: <FaHtml5 className="skill-icon" style={{ color: '#e34d24ff' }} />,
  CSS: <FaCss3Alt className="skill-icon" style={{ color: '#1c86d2ff' }} />,
  JavaScript: <FaJsSquare className="skill-icon" style={{ color: '#f6db13ff' }} />,
  React: <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />,
  'Express Js'  : <SiExpress className="skill-icon" style={{ color: '#000000' }} />,
  'Node Js': <FaNodeJs className="skill-icon" style={{ color: '#23e323ff' }} />,
  MongoDB: <SiMongodb className="skill-icon" style={{ color: '#1ae61dff' }} />,
  'VS Code': <SiVisualstudiocode className="skill-icon" style={{ color: '#007ACC' }} />,
  GitHub: <FaGithub className="skill-icon" style={{ color: '#181717' }} />,
  Netlify: <SiNetlify className="skill-icon" style={{ color: '#26c8d6ff' }} />,
  Vercal : <SiVercel className='skill-icon'/>
};

function Skill() {

  return (
    <div className='main-container'>
      <div className='top-container'>
      {/* <img src={skillImg} alt='skill-icon' style={{height:'45px', margin:'3px'}}/> */}
        <Lightbulb className="lightbulb-icon" />

    <h1 className='skill-heading'>Skills</h1>
   
    </div>
    <div className='skill-container' >
     
      {skillData.map((skillDetails, index)=>{
        return(
          <div key={index} className="skill-card">
         
          <h3 className='skill-name'>{skillDetails.name}</h3>
          
          <div className="skill-lang">
              {skillDetails.lang.split(',').map((tech, idx) => (
                <div key={idx} className="tech-item">
                  {techIcons[tech.trim()] || null}
                  <span className="tech-name">{tech.trim()}</span>
                </div>
              ))}
            </div>
        
          </div>
        )
       
      })}
      
   </div>
   </div>
  )
}

export default Skill