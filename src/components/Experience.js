import React from 'react';
import './Experience.css'; // Importing CSS for styling


const experience = [
  {
    company: "Brakes India Pvt. Limited, Padi",
    role: "Senior Design Engineer",
    duration: "2019 - Present",
    responsibilities: [
      "Lead the design and development of high-precision equipment using 3D CAD tools like SolidWorks and AutoCAD.",
      "Collaborated closely with cross-functional teams to ensure timely delivery of designs and product requirements.",
      "Played a key role in improving existing product designs and optimizing manufacturing processes."
    ],
    achievements: [
      "Led projects focused on performance testing, ensuring compliance with client specifications and operational standards.",
      "Worked closely with various teams (electrical, controls, and manufacturing) to validate designs and ensure proper execution.",
      "Consistently delivered accurate Bill of Materials (BOM) and detailed production drawings for smooth manufacturing.",
      "Innovatively improved the performance of Fishing Net Machines with the help of 3D models and design simulations."
    ]
  },
  {
    company: "AMITA Technical Company Pvt. Ltd., Aichi, Japan",
    role: "Design Engineer",
    duration: "2018 - 2019",
    responsibilities: [
      "Led the design and implementation of specialized equipment like Test Rigs and End-of-Line (EOL) machines.",
      "Worked with the Business Development team to interpret client requirements, prepare technical proposals, and generate accurate quotations.",
      "Coordinated cross-functional design reviews with electrical, controls, and manufacturing teams."
    ],
    achievements: [
      "Successfully developed high-performance Test Rigs ensuring compliance with stringent quality standards.",
      "Collaborated with the client teams to deliver customized EOL machines that exceeded client expectations."
    ]
  },
  {
    company: "Vector Engineers, Padi",
    role: "Design Engineer",
    duration: "2013 - 2018",
    responsibilities: [
      "Designed and developed Fishing Net Machines, focusing on improving performance and functionality through 3D modeling.",
      "Led the design and development of SPM Machines and Assembly Lines, including creating 3D models and simulations.",
      "Responsible for BOM preparation and releasing detailed technical drawings for production.",
      "Acted as a liaison between the assembly team and the shop floor, troubleshooting design issues and ensuring seamless build processes."
    ],
    achievements: [
      "Led the design and development of specialized **SPM Machines** and **Assembly Lines**.",
      "Improved the performance of **Fishing Net Machines** with the help of 3D models, boosting overall operational efficiency."
    ]
  }
];


function Experience() {
  return (
    <section id="experience" className="section">

    <div className="experience-container">
    <h2>Experience</h2>
    {experience.map((job, index) => (
      <div key={index} className="experience-item">
        <h3>{job.company}</h3>
        <p><strong>{job.role}</strong> | {job.duration}</p>
        
        <div className="experience-details">
          <h4>Responsibilities:</h4>
          <ul className="responsibilities">
            {job.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
          <h4>Key Achievements:</h4>
          <ul className="achievements">
            {job.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
  </section>
  );
}

export default Experience;
