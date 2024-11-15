/* src/components/AboutDetails.js */
import React from 'react';
import aboutImage from '../assets/aboutImage.jpg'; // Make sure the path to your image is correct
import './AboutDetails.css'; // Import the CSS file

function AboutDetails() {
  return (
    <section id="about-details" className="about-details-section">
      <h2 className="about-details-heading">About Me</h2>
      <p className="about-subheading">Are you curious about me? Here let you know!</p>
      <div className="about-details-container">
        {/* Left Side - Image Section */}
        <div className="about-image-container">
          <img src={aboutImage} alt="About Me" className="about-image" />
        </div>

        {/* Right Side - Description Section */}
        <div className="about-text-container">
          <p>
          I am a proactive MBA candidate in my final semester at the Footwear Design & Development Institute (FDDI), specializing in Retail and Fashion Merchandising. Recognized as an Institute of National Importance under the Ministry of Commerce and Industry, Government of India, FDDI stands as a premier hub for education and innovation in retail, fashion, and business management. With a strong foundation in business management, financial analysis, and logistics optimization, I am driven by a passion for leveraging data-driven strategies to foster efficiency, innovation, and growth across diverse industries.
          </p>
          <p>
          My academic journey began with a Bachelor of Commerce in Taxation and Marketing from Chinmaya University, where I cultivated a solid understanding of finance and business fundamentals. Building on this foundation, my MBA experience has equipped me with expertise in supply chain management, CRM, operations management, and strategic analysis, further enhanced through impactful internships.
          Professional Experience

          Throughout my career, I’ve gained hands-on experience in various domains:

          Financial Analyst Intern at Bharat Petroleum Corporation Ltd (BPCL):
          Developed financial reports, conducted performance analysis, and supported strategic financial planning.
          Project Intern at TE Connectivity:
          Contributed to operational optimization by collaborating with cross-functional teams to improve efficiency.
          Supply Chain Intern at Milma:
          Enhanced distribution processes, managed customer relationships, and explored new market opportunities.
          </p>
          <p>
          Technical Skills:

          I am proficient in tools that enable data-driven decision-making and process optimization, including:

              Oracle
              Figma & Canva
              Advanced Excel
              Power BI
              Salesforce
          </p>
          <p>
          Core Strengths:

              Financial analysis and strategic planning
              Operations management and logistics
              Customer Relationship Management (CRM)
              Leadership, critical thinking, and project management
          </p>
          <p>
          Vision:

          I am ambitious, adaptable, and excited to take on challenges that allow me to make a meaningful impact. My career goal is to contribute to sectors where I can combine my analytical, creative, and operational skills, driving both business success and personal growth.

          I am actively seeking internships, part-time, full-time, and freelance opportunities where I can bring my expertise and enthusiasm to the table.
          </p>
          <p>
          Let’s connect if you’re looking for a motivated, forward-thinking professional ready to create value and exceed expectations!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
