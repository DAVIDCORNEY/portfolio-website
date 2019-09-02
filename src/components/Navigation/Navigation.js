import React from "react";
import "./Navigation.css";
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        id="navMain"
      >
        <a className="navbar-brand" href="#">
          David Corney
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar-email">cdavidmill@aol.com</div>
          <div className="navbar-phone">07525 814776</div>
          <a
            className="navbar-linkedin"
            href="https://www.linkedin.com/in/david-corney/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="navbar-github"
            href="https://github.com/DAVIDCORNEY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
