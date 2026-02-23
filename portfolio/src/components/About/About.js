import React from "react";
import "./About.css";
// import aboutImg from './about.png'
import { User } from "lucide-react";
// import myImg from './aditi.png'
import Resume from "./Resume.pdf";

function About() {
  return (
    <div className="main-container">
      <div className="top-container">
        {/* <img src={aboutImg} alt='education-icon'  style={{height:'40px', margin:'3px'}}/> */}
        <User className="user-icon" />
        <h1 className="about-heading">About</h1>
      </div>
      <div className="about-container">
        <div className="about">
          <h1>
            Hi, I am <br />
            <span className="span-name underline-anim">Aditi Wanjari!🙋‍♀️</span>
          </h1>
          <p>
            A passionate Software Developer and MCA
            postgraduate student based in Nagpur. With a strong academic
            foundation (CGPA 9.33) and hands-on experience in full-stack
            development, I specialize in building scalable web applications
            using the MERN Stack, TypeScript, and PostgreSQL.
          </p>
          <p>
            Currently, I am working as a Software Developer Intern at Perla IT,
            where I contribute to live projects including a Document Management
            System (DMS). My work involves designing responsive dashboards,
            integrating RESTful APIs, and researching advanced technologies like
            OCR and Active Directory integration for secure authentication. I
            thrive on solving complex problems and creating intuitive user
            experiences. When I'm not coding, I'm exploring new technologies to
            enhance my skill set. I'm always open to collaborating on innovative
            projects!"
          </p>
        </div>
        {/* <div>
            <img src= {myImg} alt='my_profile'
            className='profile'/>
        </div> */}
      </div>
      <a href={Resume}>
        <button type="button" className="btn-resume">
          Check Resume
        </button>
      </a>
    </div>
  );
}

export default About;

{
  /* <p>
            Recently completed Master's Degree in MCA from G.H. Raisoni University, Amravati, Nagpur. Passionate about building responsive and user-friendly web applications. Currently doing an internship as a Software Developer at Perla IT, where I am gaining hands-on experience in real-world projects.
          
          </p>

          <p>
            Seeking an entry-level developer role to acquire practical, real-world skills.I aim to pursue a challenging career path that fosters continuous professional growth while enabling to make valuable contributions to the organization's success.
           
          </p> */
}
