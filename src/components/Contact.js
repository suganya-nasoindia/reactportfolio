import React from 'react';
import './contact.css'; // Importing CSS for styling


const contactInfo = {
    title: "Contact Information",
    content: [
      {
        label: "Email",
        value: "ssudar2803@gmail.com",
        link: "mailto:ssudar2803@gmail.com",
        icon: "fas fa-envelope"
      },
      {
        label: "Phone",
        value: "+91-9962215243",
        link: "tel:+91-9962215243",
        icon: "fas fa-phone-alt"
      },
      {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/sudarsan-m-351142179",
        link: "https://www.linkedin.com/in/sudarsan-m-351142179",
        icon: "fab fa-linkedin"
      },
    //   {
    //     label: "GitHub",
    //     value: "github.com/sugan-profile",
    //     link: "https://github.com/sugan-profile",
    //     icon: "fab fa-github"
    //   }
    ]
  };

  
function Contact() {
  return (
    <section id="contact" className="section">
    <div className="contact-container">
      <h2>{contactInfo.title}</h2>
      <div className="contact-grid">
        {contactInfo.content.map((item, index) => (
          <div key={index} className="contact-item">
            <p className="contact-label">
              <i className={item.icon}></i> {item.label}:
            </p>
            <p className="contact-value">
              <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Contact;
