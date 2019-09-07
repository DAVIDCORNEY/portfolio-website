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
      class="project-modal modal fade"
      id={id}
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <h2 class="text-uppercase">{projectTitle}</h2>
                  <p class="item-intro text-muted">{description}</p>
                  <img
                    class="img-fluid d-block mx-auto"
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
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times"></i>
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
