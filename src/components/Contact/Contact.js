import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-light page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact</h2>
            <h3 className="section-subheading text-muted">
              To get in touch, please feel free to email, call or send a message
              on LinkedIn
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-left contact-details">
            <p>
              <FaMapMarkerAlt /> Bradford, UK
            </p>
            <p>
              <FaMobileAlt /> 07525 814776
            </p>
            <p>
              <FaEnvelope /> cdavidmill@aol.com
            </p>
          </div>
          <div className="col-lg-6 social-links">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a
                  href="https://github.com/DAVIDCORNEY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/david-corney/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <a
              className="btn btn-primary download-cv"
              href="https://res.cloudinary.com/dcs/image/upload/v1567420059/David%20Corney%20CV/David-Corney-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
