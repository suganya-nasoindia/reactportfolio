import React from "react";

function Header() {
  return (
    <header className="header">
        <div className="container header-content">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div>
                    <h1>Sudarsan Mahendran</h1>
        <p>Senior Design Engineer | Innovator | Problem Solver</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href ="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a 
                href="/resume.pdf" 
                download 
                className="resume-button"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
