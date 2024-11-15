import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing moon and sun icons
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Fix to properly toggle dark mode
  };

  return (
    <header>
      <div className="header-title">
        {/* <h1>AnandhaKrishnan M Nair</h1> */}
      </div>
      <nav className="header-nav">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        
        {/* Replace text button with mode icons */}
        <div onClick={toggleDarkMode} className="mode-icon">
          {isDarkMode ? <FaSun /> : <FaMoon />} {/* Show sun icon for light mode, moon for dark mode */}
        </div>

        {/* Download CV Button */}
        <a href="/cv.pdf" download>
          <button className="download-cv-btn">Download CV</button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
