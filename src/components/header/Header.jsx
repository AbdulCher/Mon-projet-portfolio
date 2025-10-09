import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h2>Abdul Dev</h2>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/presentation">Présentation</Link></li>
          <li><Link to="/realisations">Réalisation</Link></li>
          <li><Link to="/activites">Activité</Link></li>
          <li><Link to="/competences">Compétences</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
