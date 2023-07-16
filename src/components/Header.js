import React from 'react';
import logo from './images/logo.png';
import './css/Header.css';

function Header() {

  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="WebForge logo"/>
    </header>
  );
}

export default Header;