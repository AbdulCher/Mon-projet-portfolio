import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      {/* --- HERO SECTION --- */}
      <div className="hero">
        <div className="hero-image-text">
          <div className="hero-text">
            <h1 className="myName">N DIAYE<br></br> CHEIKH<br></br>ABDUL</h1>
            <h2>Développeur Web Front-End</h2>
            <p>
              Passionné par la création d’expériences web modernes et intuitives,
              je conçois des interfaces claires, performantes et accessibles.
            </p>
          </div>
          <div className="hero-image">
            <img src="/assets/profile.jpg" alt="Portrait de développeur" />
          </div>
        </div>
        <div className="mesLiens">
          <Link to="/projects" className="btn-primary">
            Voir mes projets
          </Link>
          <Link to="/projects" className="btn-primary">
            GitHub profile
          </Link>
        </div>
      </div>
        
    </section>
  );
}
