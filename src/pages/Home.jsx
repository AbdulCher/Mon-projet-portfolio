import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      {/* --- HERO SECTION --- */}
      <div className="hero">
        <div className="hero-image-text">
          <div className="hero-text">
            <h1 className="myName">NNNNNN<br></br>NNNNNNN<br></br>NNNNNNNPM</h1>
            <h2>Intégrateur web</h2>
            <p>
              Passionné par la création d’expériences web modernes et intuitives,
              je conçois des interfaces claires, performantes et accessibles.
            </p>
          </div>
          <div className="hero-image">
            <img src="/assets/profile.jpg" alt="Portrait de développeur" />
          </div>
        </div>
        <div className="btns">
          <Link to="/projects" className="btn-primary">
            Voir mes projets
        </Link>
        <a
          href="https://github.com/ton-profil"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          GitHub profile
        </a>
      </div>

      </div>
        
    </section>
  );
}
