import React from "react";

const ProjectCard = ({ thumbNail, alt, projectTitle, description }) => {
  return (
    <div className="col-md-4 col-sm-6 project-item">
      <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={thumbNail} alt={alt} />
      </a>
      <div className="portfolio-caption">
        <h4>{projectTitle}</h4>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
