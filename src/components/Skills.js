import React from "react";
import './Skills.css'; // Importing the CSS for styling

const skills = [
  { skill: "Autocad (2D)", rating: 5 },
  { skill: "Autocad Inventor (3D)", rating: 5 },
  { skill: "Solidworks (3D)", rating: 4 },
  { skill: "Time Management", rating: 5 },
  { skill: "Leadership", rating: 4 },
  { skill: "Effective Communication", rating: 5 },
  { skill: "Critical Thinking", rating: 5 }
];

function Skills() {
  return (
    <section id="skills" className="section">

    <div className="skills-container">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-name">{skill.skill}</div>
            <div className="skill-rating">
              <div className="stars">
                {"★".repeat(skill.rating)}{"☆".repeat(5 - skill.rating)}
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(skill.rating / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default Skills;
