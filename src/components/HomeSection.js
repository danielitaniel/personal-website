import React from "react";
import "../App.css";
import "./HomeSection.css";
import "../Home.css";
import fun_image from "../images/fun_image.png";

function HomeSection() {
  return (
    <div className="background">
      <div className="centered_cursive">
        <h1>Dany Itani</h1>
      </div>
      <div className="centered_cambria">
        <h2>Passionate Software Engineer</h2>
      </div>
      <div className="centered_cursive">
        <img src={fun_image} alt="" width="550" height="300" />
      </div>
    </div>
  );
}

export default HomeSection;
