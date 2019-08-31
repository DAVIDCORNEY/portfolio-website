import React from "react";
import moment from "moment";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <span className="copyright">
              David Corney &copy; {moment().format("YYYY")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
