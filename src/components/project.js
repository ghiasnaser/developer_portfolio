import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/project.css';

const projects = [
  {
    title: 'Text Editor PWA',
    GitHubLink: 'https://secure-scrubland-30111-de98f9e33082.herokuapp.com',
    DeployingLink:'https://secure-scrubland-30111-de98f9e33082.herokuapp.com/',
    imageSrc: '../images/text editor.png',
    alt: 'Text Editor Project'
  },
  {
    title:' Tech Blog',
    GitHubLink:'https://github.com/ghiasnaser/Tech-Blog.git',
    DeployingLink:'https://glacial-inlet-74888-e40ca12a8e2b.herokuapp.com',
    imageSrc: '../images/Tech Blog.jpg',
    alt: 'Tech Blog Site'
  },
  {
    title:' Personal Finanical manager',
    GitHubLink:'https://github.com/ghiasnaser/Personal-Finance-Manager.git',
    DeployingLink:'https://secret-wave-14791-042522c892db.herokuapp.com/',
    imageSrc: '../images/financial manager.jpg',
    alt: 'Personal Finanical manager'
  },
  {
    title:' Content Management Systems (CMS)',
    GitHubLink:'https://github.com/ghiasnaser/content-management-systems-CMS.git',
    DeployingLink:'https://watch.screencastify.com/v/XHHTvpxMKik4NjzWBe8k',
    imageSrc: '../images/CMS.jpg',
    alt: 'Content Management Systems (CMS)'
  },
  {
    title:'Note Taker',
    GitHubLink:'https://github.com/ghiasnaser/Note-Taker.git',
    DeployingLink:' https://git.heroku.com/secret-falls-19925.git ',
    imageSrc: '../images/note taker.jpg',
    alt: 'Content Management Systems (CMS)'
  },
  {
    title:'Weather Dashboard',
    GitHubLink:'https://github.com/ghiasnaser/Weather-Dashboard.git',
    DeployingLink:'  https://ghiasnaser.github.io/Weather-Dashboard/ ',
    imageSrc: '../images/weather dashboard.png',
    alt: 'Content Management Systems (CMS)'
  }
];

function Project() {
  return (
    <div className='body-container'>
      <h1 className='text-capitalize'>{localStorage.getItem('activeSection')}</h1>
      <hr></hr>
      <div className='row col-md-12 justify-content-center'>
        {projects.map((project, index) => (
          <div key={index} className='col-md-3 project-wrapper'>
            
              <div className='project-container'>
                <img className='project-image' src={project.imageSrc} alt={project.alt} />
                <div className='project-title'>
                    {project.title}
                    <br></br>
                    <a href={project.GitHubLink} target="_blank">GitHub Repository</a>
                    <br></br>
                    <a href={project.DeployingLink} target="_blank">Deployed Application</a>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
