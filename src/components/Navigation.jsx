import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css"; 
import LogoMenu from "../assets/excal-logo-gold.png"; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="navigation-bar" style={{ width: "100%" }}>
      <a href="/">
        <img className="logo" src={LogoMenu} alt="Excalibur Logo" />
      </a>
      {/* <img className="logo" src={LogoMenu} alt="Excalibur Logo" /> */}

      {/* Burger Menu Button */}
      <button
        className="burger-menu"
        onClick={toggleMenu}
        style={{ fontSize: "1.5rem", transition: "color 0.3s ease" }}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between the icons */}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/arrangementer">Arrangementer</Link>
        </li>
        <li>
          <Link to="/blivMedlem">Bliv Medlem</Link>
        </li>
        <li>
          <Link to="/nyheder">Nyheder</Link>
        </li>
        <li>
          <Link to="/foraeldre-info">Forældre Info</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/galleri">Galleri</Link>
        </li>
        <li>
          <Link to="/log-in">Log In</Link>
        </li>
        <li>
          <Link to="/administration">Administration</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
