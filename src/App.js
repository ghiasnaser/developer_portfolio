import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  const [activeSection, setActiveSection] = useState('aboutMe');

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    localStorage.setItem('activeSection', section);
    return false;
  };

 

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header onNavItemClick={handleNavClick} activeSection={activeSection} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Body activeSection={activeSection} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
