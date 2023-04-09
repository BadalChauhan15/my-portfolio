import React from 'react';
import logo from './logo.png';

function Header() {

  return (
    <header className="App-header" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} className="App-logo" alt="WebForge logo" width="120px" style={{ marginLeft: "20px", marginRight: "auto"}}/>
    </header>
  );
}

export default Header;