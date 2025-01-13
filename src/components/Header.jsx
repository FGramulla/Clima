import React from 'react';
import "../styles/Header.css";

function Header() {
  return (
    <header className="weather-header">
      <div className="logo-container">
        <h1 className="title"><a href="/">Weather Forecast</a></h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About</a></li>
          <li><a href="https://www.linkedin.com/in/franco-gramulla-bridarolli-802a20243/">Linkedin</a></li>
          <li><a href="https://github.com/FGramulla">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

