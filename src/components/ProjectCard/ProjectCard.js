import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ thumbNail, alt, projectTitle, description }) => {
  return (
    <div className="col-md-4 col-sm-6 project-item">
      <a className="project-link" data-toggle="modal" href="#projectModal1">
        <div className="project-hover">
          <div className="project-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={thumbNail} alt={alt} />
      </a>
      <div className="project-caption">
        <h4>{projectTitle}</h4>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
