import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="bg-light page-section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Projects</h2>
            <h3 className="section-subheading text-muted">
              A selection of recent projects
            </h3>
          </div>
        </div>
        <div className="row">
          <ProjectCard
            thumbNail={
              "https://res.cloudinary.com/dcs/image/upload/v1567172702/Portfolio%20Website/dc-news-thumbnail-jpg.png"
            }
            alt={"DC News"}
            projectTitle={"Threads"}
            description={"Illustration"}
          />
          <ProjectCard
            thumbNail={
              "https://res.cloudinary.com/dcs/image/upload/v1567174379/Portfolio%20Website/meet-up-app.png"
            }
            alt={"MeetUp"}
            projectTitle={"MeetUp"}
            description={"Meeting App"}
          />
          <ProjectCard
            thumbNail={
              "https://res.cloudinary.com/dcs/image/upload/v1567173979/Portfolio%20Website/rgb-color-picker-game.jpg.png"
            }
            alt={"RGB Colour Picker Game"}
            projectTitle={"Colour Picker"}
            description={"Colour Picker Game"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
