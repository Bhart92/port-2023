import React, { useEffect } from "react";
import { revealHeader } from "../js/animations";

const ContactView = () => {
  useEffect(() => {
    revealHeader();
  });
  return (
    <div className="contact section-body">
      <div className="section-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-content">
        <h1>
          Shoot me an email at&nbsp;
          <a href="mailto: hartwebdev92@gmail.com">Hartwebdev92@gmail.com</a>
        </h1>

        <h2>
          You can download my&nbsp;
          <a href="./images/resume2020.pdf" download>
            Resume Here
          </a>
        </h2>
        <h3>
          View my&nbsp;
          <a href="https://github.com/Bhart92" download>
            Github Here
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ContactView;
