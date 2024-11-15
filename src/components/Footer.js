import React from 'react';
import './Footer.css'; // Import the CSS file for styling

// Importing social media icons
import LinkedInLogo from '../assets/linkedin-logo.png';
import InstagramLogo from '../assets/instagram-logo.png';
import WhatsAppLogo from '../assets/whatsapp-logo.png'; // Added WhatsApp logo
import EmailLogo from '../assets/email-logo.png'; // Add an email logo

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-social-icons">
          <a href="http://www.linkedin.com/in/anandhakrishnan-m-nair" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/anandhakrishnan_m_/profilecard/?igsh=MWIxNXp5anJ6eDZ1" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="mailto:anandhakrishnanmnair@gmail.com">
  <img src={EmailLogo} alt="Email" className="social-icon" />
</a>

          <a href="https://wa.me/7902856710" target="_blank" rel="noopener noreferrer"> 
            <img src={WhatsAppLogo} alt="WhatsApp" className="social-icon" />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
