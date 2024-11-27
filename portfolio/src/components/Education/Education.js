import React from 'react'
import './Education.css'
import educationData from '../../educationData'

function Education() {
    return (
        
        <div className='education-container'>

            <h2 className='edu-heading'>Education</h2>
            <div className='timeline-items'>
            {educationData.map((edudetails) => {
                return (
                <div className='timeline-item'>
                    <div className='timeline-dot'> </div>
                        <div className='timeline-date'>
                            {edudetails.date}
                        </div>
                        <div className='timeline-content'>
                            <h3>{edudetails.title}</h3>
                            <p>{edudetails.content}
                            </p>
                        </div>
                   
                </div>
                )
})
}
            </div>

        </div>
    )
}

export default Education