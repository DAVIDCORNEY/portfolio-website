import React from "react";

const ProjectCard = () => {
  return (
    <div className="col-md-4 col-sm-6 project-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img
          class="img-fluid"
          src="https://res.cloudinary.com/dcs/image/upload/v1567172702/Portfolio%20Website/dc-news-thumbnail-jpg.png"
          alt="DC NEWS"
        />
      </a>
      <div class="portfolio-caption">
        <h4>Threads</h4>
        <p class="text-muted">Illustration</p>
      </div>
    </div>
  );
};

export default ProjectCard;
