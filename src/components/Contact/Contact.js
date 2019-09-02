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
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-heading text-uppercase">Contact</h2>
            <h3 className="section-subheading text-muted">
              To get in touch, please feel free to email, call or send a message
              on LinkedIn
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 contact-details">
            <div className="contact-details-list">
              <p>
                <FaMapMarkerAlt /> Bradford, UK
              </p>
              <p>
                <FaMobileAlt /> <a href="tel:07525 814776">07525 814776</a>
              </p>
              <p>
                <FaEnvelope />
                <a href="mailto:cdavidmill@aol.com"> cdavidmill@aol.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 social-links">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a
                  href="https://github.com/DAVIDCORNEY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/david-corney/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <a
              className="btn btn-primary btn-lg download-cv"
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
