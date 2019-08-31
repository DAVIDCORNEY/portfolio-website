import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">About Me</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="about-me">
              <img
                class="mx-auto rounded-circle"
                src="https://res.cloudinary.com/dcs/image/upload/v1567261524/Portfolio%20Website/david-corney.jpg"
                alt="David Corney"
              />
              <h4>David Corney</h4>
              <p class="text-muted">Junior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
