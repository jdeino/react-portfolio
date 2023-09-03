import React from 'react';
import './portfolio.css';
import image1 from './images/javaScript-quiz.jpg';
import image2 from './images/ecommerce.jpg';
import image3 from './images/note-taker.jpg';
import image4 from './images/pw-generator.jpg';
import image5 from './images/svg-logo-maker.jpg';
import image6 from './images/employee-tracker.jpg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/code-quiz"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image1} alt="Project 1" />
            <h3>JavaScript Quiz</h3>
          </a>
        </div>
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/e-commerce"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image2} alt="Project 2" />
            <h3>Ecommerce</h3>
          </a>
        </div>
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/note-taker"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image3} alt="Project 3" />
            <h3>Note Taker</h3>
          </a>
        </div>
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/password-generator"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image4} alt="Project 4" />
            <h3>Password Generator</h3>
          </a>
        </div>
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/svg-logo-maker"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image5} alt="Project 4" />
            <h3>SVG Logo Maker</h3>
          </a>
        </div>
        <div className="portfolio-item">
          <a
            href="https://github.com/jdeino/employee-tracker"
            target="_blank"
            rel="noopener noreferrer">
            <img src={image6} alt="Project 4" />
            <h3>Employee Tracker</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
