import React from 'react';
import './Skills.css'; // Import your CSS file

// Import the logos of each skill
import ExcelLogo from '../assets/excel-logo.png';
import PowerBILog from '../assets/powerbi-logo.png';
import SalesforceLogo from '../assets/salesforce-logo.png';
import OracleLogo from '../assets/oracle-logo.png';
import ERPLogo from '../assets/erp-logo.png';
import FigmaLogo from '../assets/figma-logo.png';
import CanvaLogo from '../assets/canva-logo.png';
import Microsoft from '../assets/microoffice-logo.png';

const skills = [
  { logo: ExcelLogo, name: 'Microsoft Excel' },
  { logo: PowerBILog, name: 'Power BI' },
  { logo: SalesforceLogo, name: 'Salesforce' },
  { logo: OracleLogo, name: 'Oracle' },
  { logo: ERPLogo, name: 'Enterprise Resource Planning (ERP) Software' },
  { logo: FigmaLogo, name: 'Figma' },
  { logo: CanvaLogo, name: 'Canva' },
  { logo: Microsoft, name: 'Microsoft Office' },
];

function Skills() {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2 className="skills-main-heading">Skills</h2>
        <h3 className="skills-subheading">The skills and tools I am really good at:</h3>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
