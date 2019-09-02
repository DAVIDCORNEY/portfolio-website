import React from "react";
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

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
        </div>
      </div>
    </section>
  );
};

export default Contact;
