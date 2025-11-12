import { useState, useEffect } from "react";
import "../styles/skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: "/assets/icons/html5.svg" },
    { name: "CSS", logo: "/assets/icons/css.svg" },
    { name: "JavaScript", logo: "/assets/icons/javascript.svg" },
    { name: "React", logo: "/assets/icons/react.svg" },
    { name: "Vite", logo: "/assets/icons/vite.svg" },
    { name: "Sass", logo: "/assets/icons/sass.svg" },
    { name: "Bootstrap", logo: "/assets/icons/bootstrap.svg" },
    { name: "Figma", logo: "/assets/icons/figma.svg" },
    { name: "Git", logo: "/assets/icons/git.svg" },
  ];

  const [currentSkill, setCurrentSkill] = useState("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentSkill(skills[i].name);
      setPulse(true);
      setTimeout(() => setPulse(false), 400); // Effet lumineux bref
      i = (i + 1) % skills.length;
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <h2>Compétences</h2>
    <section className="skills-container">
      

      <div className="skills-circle-wrapper">
        <div className={`needle ${pulse ? "pulse" : ""}`}></div>

        <div className="skills-circle">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{ "--i": index }}
              title={skill.name}
            >
              <img src={skill.logo} alt={skill.name} />
            </div>
          ))}

          <div className="orbit-wrapper">
            <div className="orbit-ball"></div>
            <div className="orbit-trail"></div>
          </div>

          <div className="skill-name">{currentSkill}</div>
        </div>
      </div>
    </section>
    </>
  );
}
