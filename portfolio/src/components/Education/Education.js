import React from 'react'
import './Education.css'
import educationData from '../../educationData'
import eduImg from './education.png'

function Education() {
    return (
        <div className='education'>
            <div className='top-container'>
            <h1 className='edu-heading'>Education</h1>
            <img src={eduImg} alt='education-icon'  style={{height:'50px', margin:'3px'}}/>
            </div>
            
            <div className='education-container'>
                {educationData.map((eduDetails, index) => {
                    return (  
                        <div key={index} className="education-card">
                            <h2 className='edu-date'>{eduDetails.date}</h2>
                            <h2>{eduDetails.title}</h2>
                            <p>➤ {eduDetails.content}</p>
                           <p className='edu-marks'>➤ {eduDetails.marks}</p>
                        </div>
                       
                    )
                })}
            </div>
        </div>
    )
}

export default Education