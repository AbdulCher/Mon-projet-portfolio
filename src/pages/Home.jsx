import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      {/* --- HERO SECTION --- */}
      <div className="hero">
        <div className="hero-text">
          <h1>N DIAYE CHEVALIER</h1>
          <h2>Développeur Web Front-End</h2>
          <p>
            Passionné par la création d’expériences web modernes et intuitives,
            je conçois des interfaces claires, performantes et accessibles.
          </p>
          <Link to="/projects" className="btn-primary">
            Voir mes projets
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/profile.jpg" alt="Portrait de développeur" />
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <div className="about">
        <h3>À propos</h3>
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
            <img src="/assets/booki.jpg" alt="Projet Booki" />
            <p>Booki — Intégration HTML/CSS responsive</p>
          </div>
          <div className="preview">
            <img src="/assets/sophiebluel.jpg" alt="Projet Sophie Bluel" />
            <p>Portfolio Sophie Bluel — JavaScript dynamique</p>
          </div>
          <div className="preview">
            <img src="/assets/kasa.jpg" alt="Projet Kasa" />
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
