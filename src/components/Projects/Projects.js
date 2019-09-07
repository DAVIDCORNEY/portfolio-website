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
              "DC News is a Full-stack article aggregation website. Users can preview all of the articles or select to view articles by topic, which can be sorted by date, comment count or votes. If logged in, users can vote up or down on an article or comment and are also able to add comments and delete comments they have made."
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
            frontEndCode={
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
            backEndCode={
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
              "Meetup is an application allowing registered users to add meetings and check in attendees. A logged in user can view meetings and see and filter the attendees. Users that have arranged the meeting can also email users and delete them where required. The application uses the Firebase real time database and Firebase authentication"
            }
            id={"projectModal2"}
            backend={"Backend: Firebase"}
            frontend={"Front End: React, HTML, CSS, Bootstrap"}
            frontEndCode={
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
              "Colour Picker is a game which allows users to select from a series of colour blocks, until they select the winning colour. A user can select to play either the easy or hard version of the game. The easy version renders 3 randomly generated colour blocks, while the hard version renders 6."
            }
            id={"projectModal3"}
            frontend={"Javascript, HTML, CSS"}
            frontEndHosting={
              <a
                href="https://codepen.io/dcs/full/JvmKVZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://codepen.io/dcs/full/JvmKVZ
              </a>
            }
            backEndCode={
              <a
                href="https://codepen.io/dcs/pen/JvmKVZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://codepen.io/dcs/pen/JvmKVZ
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
