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
            Recently completed Master's Degree in MCA from G.H. Raisoni University, Amravati, Nagpur. Passionate about building responsive and user-friendly web applications. Currently doing an internship as a Software Developer at Perla IT, where I am gaining hands-on experience in real-world projects.
            {/* Recently completed Master's Degree in MCA from G.H.Raisoni,
            University Amravati, Nagpur . */}
          </p>

          <p>
            Seeking an entry-level developer role to acquire practical skills in every domain I engage with, while pursuing a challenging career path that fosters continuous professional growth and allows me to make valuable contributions to the esteemed organization I work for.
            {/* Passionate about building responsive and user-friendly web
            applications. Seeking an entry-level developer role to acquire
            practical, real-world skills in every domain I enagage with, seeking
            a challenging career path that fosters continuous professional
            growth and allows me to make valuable contributions to the esteemed organization I work for. */}
            {/* Dedicated to acquire practical, real-world skills in every domain
            engage with, I seeking a challenging career path that fosters
            continuous professional growth and allows me to make valuable
            contributions to the esteemed organization I work for. */}
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
