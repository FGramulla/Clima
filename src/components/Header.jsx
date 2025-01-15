import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importar íconos
import "../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="weather-header">
      <div className="header-content">
        {/* Botón del menú hamburguesa */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Cambia entre FaBars y FaTimes */}
        </button>

        {/* Título */}
        <h1 className="title">
          <a href="/">Weather Forecast</a>
        </h1>
      </div>

      {/* Navegación */}
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
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




