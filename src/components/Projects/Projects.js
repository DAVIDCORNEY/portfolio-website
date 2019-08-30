import React from "react";

const Projects = () => {
  return (
    <section className="bg-light page-section">
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
          <div className="col-md-4 col-sm-6 project-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/portfolio/01-thumbnail.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 project-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/portfolio/01-thumbnail.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 project-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/portfolio/01-thumbnail.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
