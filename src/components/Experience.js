import React from 'react';
import './Experience.css'; // Import your CSS file

// Import the images
import MILMALogo from '../assets/milma-logo.png';
import TELogo from '../assets/te-logo.png';
import BPCLLogo from '../assets/bpcl-logo.png';

const experiences = [
  {
    logo: MILMALogo,
    company: 'MILMA ERCMPU Ltd',
    role: 'Supply Chain Intern',
    date: 'Jul 2024 – Aug 2024 | Ernakulam, India',
    description: `Conducted market research and analyzed customer feedback to identify opportunities for product improvements and enhance customer experience.
    Evaluated customer engagement and market trends, driving strategic sales initiatives that expanded market reach and identified new sales opportunities.
    Led outbound sales efforts, converting leads into sales and contributing to revenue growth while maintaining high customer satisfaction and product quality.
    Managed customer acquisition and resolved client concerns, building long-term relationships and enhancing customer retention.
    Supported marketing and operational efficiency initiatives, optimizing delivery processes and increasing market presence.`,
  },
  {
    logo: TELogo,
    company: 'TE Connectivity Pvt Ltd',
    role: 'Project Intern',
    date: 'Jun 2024 – Jul 2024 | Bengaluru, India',
    description: `Collaborated with cross-functional teams (Sales, Marketing, Lead Identification) to support project objectives, ensuring alignment across departments and driving project success.
    Conducted in-depth analysis of the challenges faced by employees regarding the implementation of new sales policies, providing actionable insights to optimize employee performance and policy adoption.
    Gained hands-on experience in sales strategies, including outbound sales, cross-selling, and upselling, to improve customer acquisition, retention, and revenue generation.
    Utilized ERP & CRM tools like Salesforce to enhance data management, customer relationship tracking, and gained industry-specific knowledge in products like sensors and connectors.`,
  },
  {
    logo: BPCLLogo,
    company: 'Bharat Petroleum Corporation Ltd',
    role: 'Financial Analyst Intern',
    date: 'Jun 2021 – Jul 2021 | Ambalamugal, Kochi, Kerala, India',
    description: `Analyzed BPCL's financial statements (balance sheet, income statement, cash flow) to assess financial health, focusing on key metrics like liquidity ratios, debt-to-equity ratio, and cash flow sufficiency.
    Performed comprehensive financial analysis using ROI, profitability ratios, and other key performance indicators (KPIs) to evaluate business performance and inform strategic decisions.
    Evaluated BPCL’s investment portfolio and capital allocation to assess wealth management effectiveness and ensure alignment with organizational financial goals.
    Benchmarked BPCL’s financial performance against industry peers, identifying growth opportunities and providing actionable insights to enhance financial strategy and operations.`,
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="experience-header">
        <h2 className="experience-main-heading">Experience</h2>
        <h3 className="experience-subheading">Here is a summary of my most recent experience:</h3>
      </div>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="experience-logo">
            <img src={exp.logo} alt={`${exp.company} Logo`} />
          </div>
          <div className="experience-description">
            <h3>{exp.company}</h3>
            <p><strong>{exp.role}</strong></p>
            <p>{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
