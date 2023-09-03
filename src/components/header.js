import React from 'react';
import Navigation from './navigation';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Josh Deino</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
