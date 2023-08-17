import React from 'react';
import AboutMe from './aboutMe';
import ContactMe from './contactMe';
import Project from './project';
import Resume from './resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/body.css';


export default function Body({ activeSection }) {
  return (
    <div className='body'>
      <div className='row col-md-12 bg-strip'>
        <div className='col-md-1 left-strip'></div>
        <div className='col-md-10 content'>
          {activeSection === 'aboutMe' && <AboutMe activeSection />}
          {activeSection === 'contact' && <ContactMe activeSection />}
          {activeSection === 'portfolio' && <Project activeSection />}
          {activeSection === 'resume' && <Resume activeSection />}
        </div>
        <div className='col-md-1 right-strip'></div>
      </div>
    </div>
  );
}
