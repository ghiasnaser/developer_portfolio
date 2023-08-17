import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/resume.css';

function Resume() {
  const downloadResume = () => {
    alert('Downloading the Resume is coming soon!');
  };

  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Redux'];
  const certificates = ['React Developer Certification', 'JavaScript Fundamentals'];
  return (
    <div className="resume-container">
      <div className="d-flex align-items-center ">
        <h1 className='text-capitalize'>{localStorage.getItem('activeSection')}</h1>
        <button className="btn btn-link text-primary " onClick={downloadResume}>
          Download <span className='resume-button'>&#9660;</span> {/* Unicode downward arrow character */}
        </button>
      </div>
      <hr></hr>
      
      <p>This is a summary of my qualifications and experience.</p>

      <div className="row">
        <div className="col-md-6">
          <h2>Skills</h2>
          <ul className="list-group list-group-flush">
            {skills.map((skill, index) => (
              <li key={index} className="list-group-item bg-transparent border-0">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="col-md-6">
          <h2>Certificates</h2>
          <ul className="list-group list-group-flush">
            {certificates.map((certificate, index) => (
              <li key={index} className="list-group-item bg-transparent border-0">{certificate}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );


  }

export default Resume;
