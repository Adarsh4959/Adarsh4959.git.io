import React from 'react';
import profileImage from '../assets/profile.jpg'; // Your profile image path
import WavingHand from '../assets/Wavinghand.png'; // Importing the Wavinghand image
import './About.css';

function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div className="about-container">
        <div className="about-text">
          <h1 className="greeting">
            Hi, I'm AnandhaKrishnan, <img src={WavingHand} alt="Waving Hand" style={wavingStyle} /> {/* Waving hand image */}
          </h1>
          <p className="about-description">
            An MBA professional with expertise in business management, finance, marketing, logistics, process optimization, and retail merchandising. Skilled in financial analysis, strategy development, and operational improvement, with hands-on experience as a Financial Analyst, Project Intern, and Supply Chain Intern. Proven ability to drive customer acquisition, enhance client relationships, and identify new business opportunities. Adept at optimizing workflows, improving efficiency, and delivering results across diverse functions and industries.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="AnandhaKrishnan M Nair" />
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '40px',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const wavingStyle = {
  width: '70px',  // Adjust the size of the waving hand image if necessary
  height: '70px',
  marginLeft: '10px',  // Adds some space between the name and the image
};

export default About;
