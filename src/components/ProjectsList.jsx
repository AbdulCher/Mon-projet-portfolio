import React from "react";
import Booki from "./projects/Booki";
import SophieBluel from "./projects/SophieBluel";
import Kasa from "./projects/Kasa";
import "./projects/Projects.css";

const ProjectsList = () => {
  return (
    <section className="projects-container">
      <h1 className="projects-heading">Mes Projets</h1>
      <div className="projects-grid">
        <Booki />
        <SophieBluel />
        <Kasa />
      </div>
    </section>
  );
};

export default ProjectsList;
