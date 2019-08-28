import React from "react";
import "./HomePageImage.css";

const HomePageImage = () => {
  return (
    <div>
      <header className="home-image">
        <div className="container">
          <div className="intro-text">
            <div className="h2-intro-text">
              <h2>Hi I'm David</h2>
            </div>
            <div className="h1-intro-text">
              <h1>Junior Full Stack Developer</h1>
            </div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#projects">
              See My Projects
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePageImage;
