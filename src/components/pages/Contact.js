import React from "react";
import "../../App.css";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="header">Contact</h1>
      <h2 className="contacts">
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/d-itani/" className="URL">
          {" "}
          Dany Itani
        </a>
      </h2>
      <inline className="contacts">
        Email: <inline className="email"> dyitani.17@gmail.com</inline>{" "}
        <inline className="copy_paste"> (Copy & Paste) </inline>
      </inline>
    </div>
  );
}

export default Contact;
