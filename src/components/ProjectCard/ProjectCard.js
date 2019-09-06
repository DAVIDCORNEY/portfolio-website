import React from "react";
import "./ProjectCard.css";
import ProjectModal from "../ProjectModal/ProjectModal";
import { FaExpandArrowsAlt } from "react-icons/fa";

const ProjectCard = ({
  thumbNail,
  alt,
  projectTitle,
  description,
  fullDescription,
  id,
  backend,
  frontend
}) => {
  return (
    <div className="col-md-4 col-sm-6 project-item">
      <a className="project-link" data-toggle="modal" href={`#${id}`}>
        <div className="project-hover">
          <div className="project-hover-content">
            <FaExpandArrowsAlt />
          </div>
        </div>
        <img className="img-fluid" src={thumbNail} alt={alt} />
      </a>
      <div className="project-caption">
        <h4>{projectTitle}</h4>
        <p className="text-muted">{description}</p>
      </div>
      <ProjectModal
        projectTitle={projectTitle}
        thumbNail={thumbNail}
        id={id}
        description={description}
        fullDescription={fullDescription}
        backend={backend}
        frontend={frontend}
      />
    </div>
  );
};

export default ProjectCard;
