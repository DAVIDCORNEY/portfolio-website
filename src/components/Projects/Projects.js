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
            projectTitle={"DC News"}
            description={"Article Aggregation Website"}
            fullDescription={
              "DC News is lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
            id={"projectModal1"}
            backend={"Back End: Node.js, Express.js, PostgreSQL"}
            frontend={"Front End: React, HTML, CSS, Bootstrap, Axios"}
            frontEndHosting={
              <a
                href="https://dcnews.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dcnews.netlify.com
              </a>
            }
            frontEndGit={
              <a
                href="https://github.com/DAVIDCORNEY/dcnews"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DAVIDCORNEY/dcnews
              </a>
            }
            backEndHosting={
              <a
                href="https://dc-news.herokuapp.com/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dc-news.herokuapp.com/api
              </a>
            }
            backEndGit={
              <a
                href="https://github.com/DAVIDCORNEY/ncnews"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DAVIDCORNEY/ncnews
              </a>
            }
          />
          <ProjectCard
            thumbNail={
              "https://res.cloudinary.com/dcs/image/upload/v1567174379/Portfolio%20Website/meet-up-app.png"
            }
            alt={"MeetUp"}
            projectTitle={"MeetUp"}
            description={"Meeting App"}
            fullDescription={
              "Meetup is a lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
            id={"projectModal2"}
            backend={"Backend: Firebase"}
            frontend={"Front End: React, HTML, CSS, Bootstrap, Axios"}
            frontEndGit={
              <a
                href="https://github.com/DAVIDCORNEY/meetup"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/DAVIDCORNEY/meetup
              </a>
            }
          />
          <ProjectCard
            thumbNail={
              "https://res.cloudinary.com/dcs/image/upload/v1567173979/Portfolio%20Website/rgb-color-picker-game.jpg.png"
            }
            alt={"RGB Colour Picker Game"}
            projectTitle={"Colour Picker"}
            description={"Colour Picker Game"}
            fullDescription={
              "RGB color picker is a lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
            id={"projectModal3"}
            frontend={"Javascript, HTML, CSS"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
