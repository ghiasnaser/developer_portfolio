import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import Bootstra
import '../styles/nav.css';


export default function Navigation({ onNavItemClick, activeSection }) {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="nav-container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}>
                <a className={`nav-link ${activeSection === 'portfolio' ? 'active-link' : ''}`}   onClick={() => onNavItemClick('portfolio')}>Portfolio</a>
              </li>
              <li className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`}>
                <a className={`nav-link ${activeSection === 'resume' ? 'active-link' : ''}`}   onClick={() => onNavItemClick('resume')}>Resume</a>
              </li>
              <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
                <a className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}   onClick={() => onNavItemClick('contact')}>Contact</a>
              </li>
              <li className={`nav-item ${activeSection === 'aboutMe' ? 'active' : ''}`}>
                <a className={`nav-link ${activeSection === 'aboutMe' ? 'active-link' : ''}`}   onClick={() => onNavItemClick('aboutMe')}>About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
