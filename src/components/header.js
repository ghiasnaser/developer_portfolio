import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import Navigation from './navigation';

function Header({ onNavItemClick , activeSection}) {
  return (
    <header className="header-container">
      <div className="container">
        <div className="row nmn">
          <div className="col-6 developer-name">
            <h1>Ghias Naser</h1>
          </div>
          <div className="col-6 navigation-Bar">
            <Navigation onNavItemClick={onNavItemClick} activeSection={activeSection}/> {/* Pass the function */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
