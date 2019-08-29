import React from "react";
import "./HomePageImage.css";

const HomePageImage = () => {
  return (
    <div>
      <header className="home-image">
        <div className="container">
          <div className="intro-text">
            <h2 className="h2-intro-text">Hi I'm David</h2>
            <h1 className="h1-intro-text">Junior Full Stack Developer</h1>
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
