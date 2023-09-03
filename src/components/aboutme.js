import React from 'react';
import './aboutme.css';
import myImage from './images/me.jpeg'; 

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={myImage} alt="My Image" />
        </div>
        <div className="about-me-bio">
          <p>
          Hello, I'm Josh, and in recent years I found coding to be quite interesting. I think that interest turned into a real motivation once I saw how powerful it can be when you know what you're doing. Especially seeing it all around us and the many things it does to make our lives easier. I truly enjoy building things physically, and wanted to take it to the next level to now implement building something technologically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
