import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1 className="header">Projects</h1>
      <p className="paragraph_format">
        Bear Maps: Back end development of Google Maps (API, routing and
        location data, route search) using Java
      </p>
      <p className="paragraph_format">
        End-to-End Encrypted File Sharing System: Built a client that allows
        users to store, load, share and revoke access to files while maintaining
        confidentiality, integrity, and authenticity using Go{" "}
      </p>

      <p className="paragraph_format">
        {" "}
        Scheme Interpreter: Developed an interpreter for a subset of Lisp using
        Python{" "}
      </p>

      <p className="paragraph_format">
        {" "}
        Reinforcement Learning: Implemented model-based and model-free
        reinforcement learning algorithms, and applied them the game Pacman, as
        well as a simulation of a crawling robot using Python{" "}
      </p>

      <p className="paragraph_format">
        {" "}
        Classification of Numbers: Implemented a perceptron algorithm and neural
        network model, and applied these models for digit classification using
        Python
      </p>
    </div>
  );
}

export default Projects;
