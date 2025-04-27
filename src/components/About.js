import React from 'react';
import './about.css'; // Importing the CSS for styling


const aboutMe = {
    title: "About Me",
    content: [
      "I am a resourceful and seasoned Design Engineer with a strong history of delivering precise and efficient solutions, even under tight deadlines and high-pressure environments.",
      "With a sharp eye for detail and a commitment to quality, I excel both independently and within collaborative teams.",
      "Over the course of my career, I have successfully managed multiple projects simultaneously without compromising on innovation or excellence. My expertise spans designing, analyzing, and implementing creative solutions for complex automation and engineering challenges.",
      "I am passionate about pushing the boundaries of technology to create smarter, more efficient systems.",
      "Key strengths include:",
      "- Proficiency in CAD tools and advanced simulation software",
      "- Expertise in mechanical design, industrial automation, and product development",
      "- Strong problem-solving skills with a focus on cost-effective engineering",
      "- Effective communication and project management abilities",
      "- A continuous drive for learning and adapting to new technologies",
      "I thrive on transforming ambitious ideas into real-world applications and am committed to achieving engineering excellence through dedication, innovation, and strategic thinking."
    ]
  };

  
function AboutMe() {
  return (
    <div className="aboutme-container">
      <h2>{aboutMe.title}</h2>
      <div className="aboutme-content">
        {aboutMe.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
