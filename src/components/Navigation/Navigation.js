import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <span class="navbar-text">07525 814776</span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
