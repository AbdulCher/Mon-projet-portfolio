import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">/////</h1>
      <ul>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
        <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projets</Link></li>
        <li><Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Compétences</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
      </ul>
    </nav>
  );
}
