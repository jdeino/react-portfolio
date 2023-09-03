import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="proficiencies">
          <div className="front-end">
            <h3>Front-End Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="back-end">
            <h3>Back-End Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB</li>
              <li>Mern</li>
            </ul>
          </div>
        </div>
        <div className="centered-button">
          <a
            href="https://docs.google.com/document/d/1oz6zMBkO7bf_t-a5aSQOx5p-TX6JhOCtaUP8xf7ofU0/edit?usp=sharing" 
            download="Your-Resume.pdf"
            target="_blank" 
            className="download-button">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
