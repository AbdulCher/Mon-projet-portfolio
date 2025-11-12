import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about">

      {/* --- ABOUT SECTION --- */}
      <div className="about">
        <h2>À propos</h2>
        <p>
          Après une formation complète chez <strong>OpenClassrooms</strong>, j’ai appris à transformer
          des maquettes Figma en sites web modernes et responsive.
          Curieux et rigoureux, j’aime relever des défis techniques et concevoir
          des interfaces élégantes et fonctionnelles.
        </p>
      </div>

      {/* --- PROJECTS TEASER --- */}
      <div className="home-projects">
        <h3>Quelques projets récents</h3>
        <div className="project-previews">
          <div className="preview">
            <img src="/assets/booki.png" alt="Projet Booki" />
            <p>Booki — Intégration HTML/CSS responsive</p>
          </div>
          <div className="preview">
            <img src="/assets/sophiebluel.png" alt="Projet Sophie Bluel" />
            <p>Portfolio Sophie Bluel — JavaScript dynamique</p>
          </div>
          <div className="preview">
            <img src="/assets/Kasa.png" alt="Projet Kasa" />
            <p>Kasa — Application React complète</p>
          </div>
        </div>
        <Link to="/projects" className="btn-secondary">
          Voir tous les projets →
        </Link>
      </div>
    </section>
  );
}