import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/aboutMe.css';
import myimage from '../images/ghias.jpg'
function AboutMe() {
    return (
      <div className='body-container'>
        <div className="row">
          <div className="col-md-5">
            <img
              src={myimage}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-5">
          <h1 className='text-capitalize'>{localStorage.getItem('activeSection')}</h1>
          <hr></hr>
            <p>
              Hi there! I'm Ghias Naser, a passionate web developer with a strong
              interest in creating meaningful and user-friendly web experiences.
              I love turning ideas into reality using the power of code and design.
            </p>
            <p>
              My skills include HTML, CSS, JavaScript, React, and more. I'm always
              eager to learn and explore new technologies to stay up-to-date with
              the latest trends in web development.
            </p>
          </div>
      </div>
      </div>
    );
  }

export default AboutMe;