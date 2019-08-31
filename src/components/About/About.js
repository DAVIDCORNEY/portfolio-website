import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-5">
            <div className="about-me">
              <img
                className="mx-auto rounded-circle"
                src="https://res.cloudinary.com/dcs/image/upload/v1567261524/Portfolio%20Website/david-corney.jpg"
                alt="David Corney"
              />
              <h4>David Corney</h4>
              <p className="text-muted">Junior Developer</p>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="intro-text">
              <p>
                I am a Junior Full Stack Developer recently graduated from the
                Northcoders coding Bootcamp in Manchester. Track record of
                working well in a team in a fast-paced environment and working
                well under my initiative. Over 10 years of experience in a
                customer-facing retail environment and further management and
                technical sales experience in the Plastic Extrusion Industry.
                Experience in listening to and evaluating customer requirements
                and training new employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
