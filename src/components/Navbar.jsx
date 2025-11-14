import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="logo-animated">
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </h1>

      {/* Burger icon */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            A Propos
          </Link>
          </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={location.pathname === "/skills" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Compétences
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
