import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({
  projectTitle,
  thumbNail,
  id,
  description,
  fullDescription,
  backend,
  frontend,
  frontEndHosting,
  frontEndCode,
  backEndHosting,
  backEndCode
}) => {
  return (
    <div
      className="project-modal modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">{projectTitle}</h2>
                  <p className="item-intro text-muted">{description}</p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={thumbNail}
                    alt=""
                  />
                  <p>{fullDescription}</p>
                  <ul class="list-inline">
                    <li>Technologies Used</li>
                    <li>{backend}</li>
                    <li>{frontend}</li>
                  </ul>
                  <ul class="list-inline">
                    <li>{frontEndHosting}</li>
                    <li>{frontEndCode}</li>
                    <li>{backEndHosting}</li>
                    <li>{backEndCode}</li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
