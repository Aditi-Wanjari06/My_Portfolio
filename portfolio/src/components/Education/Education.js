// import React from 'react'
// // import './Education.css' // Commented out
// // import './Education-dark.css' // Commented out
// import './Education.css' // New CSS file
// import educationData from '../../educationData.js'
// import { GraduationCap } from 'lucide-react'

// function Education() {
//     return (
//         <div className='education'>
//             <div className='top-container'>
//                 <GraduationCap className="educap-icon" />
//                 <h1 className='edu-heading'>Education</h1>
//             </div>

//             <div className='education-container'>
//                 {educationData.map((eduDetails, index) => {
//                     return (
//                         <div key={index} className="education-card">
//                             <h2 className='edu-date'>{eduDetails.date}</h2>
//                             <h2>{eduDetails.title}</h2>
//                             <p className='edu-content'>➤ {eduDetails.content}</p>
//                             <p className='edu-marks'>➤ {eduDetails.marks}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Education

import React from 'react'
import './Education.css'
import educationData from '../../educationData.js'
import { GraduationCap } from 'lucide-react'
// import eduImg from './education.png'

function Education() {
    return (
        <div className='education'>
            <div className='top-container'>
            {/* <img src={eduImg} alt='education-icon'  style={{height:'40px', margin:'3px'}}/> */}
        <GraduationCap className="educap-icon" />

            <h1 className='edu-heading'>Education</h1>
           
            </div>
            
            <div className='education-container'>
                {educationData.map((eduDetails, index) => {
                    return (  
                        <div key={index} className="education-card">
                            <h2 className='edu-date'>{eduDetails.date}</h2>
                            <h2>{eduDetails.title}</h2>
                            <p className='edu-content'>➤ {eduDetails.content}</p>
                           <p className='edu-marks'>➤ {eduDetails.marks}</p>
                        </div>
                       
                    )
                })}
            </div>
        </div>
    )
}

export default Education