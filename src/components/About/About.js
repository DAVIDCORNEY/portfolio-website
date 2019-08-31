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
          <div className="col-lg-12">
            <div className="about-me">
              <img
                className="mx-auto rounded-circle"
                src="https://res.cloudinary.com/dcs/image/upload/v1567261524/Portfolio%20Website/david-corney.jpg"
                alt="David Corney"
              />
              <h4>David Corney</h4>
              <p className="text-muted">Junior Developer</p>
              <p>
                I am a Junior Full Stack Developer recently graduated from the
                Northcoders coding Bootcamp in Manchester. Track record of
                working well in a team in a fast-paced environment and working
                well under my initiative.I am a Junior Full Stack Developer
                recently graduated from the Northcoders coding Bootcamp in
                Manchester. Track record of working well in a team in a
                fast-paced environment and working well under my initiative.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="skills">
            <h4 className="text-muted">Programming Languages and Tools</h4>
            <div className="skills-icons">
              <ul class="list-inline dev-icons">
                <li class="list-inline-item">
                  <i class="fab fa-html5"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-css3-alt"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-js-square"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-angular"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-react"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-node-js"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-sass"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-less"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-wordpress"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-gulp"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-grunt"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fab fa-npm"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
