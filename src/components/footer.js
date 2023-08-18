import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import linkedIn from '../images/linkedin-logo.jpg'
import githubImage from '../images/github.png'

function Footer() {
    return (
        <footer className="footer-container mt-auto">
            <div className="col-12 text-center">
                <a href="https://www.linkedin.com/in/ghias-naser-b8731b73/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="LinkedIn" className="footer-icon" />
                </a>
                <a href="https://github.com/ghiasnaser" target="_blank" rel="noopener noreferrer">
                    <img src={githubImage} alt="GitHub" className="footer-icon" />
                </a>
            </div>
            <div className="col-12 text-center developer-name">
                <p>Ghias Naser</p>
            </div>
        </footer>
    );
}

export default Footer;
