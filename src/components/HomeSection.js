import React from "react";
import "../App.css";
import "./HomeSection.css";
import "./Home.css";
import fun_image from "../images/fun_image.png";

function HomeSection() {
  return (
    <div className="background">
      <div className="centered_cursive">
        <h1>Dany Itani</h1>
      </div>
      <div className="centered_cursive">
        <img src={fun_image} alt="" width="550" height="300" />
      </div>
      <div className="centered_cambria">
        <h2>Passionate Software Engineer</h2>
      </div>
      <div>
        <p className="paragraph_format">
          Hello! Thank you for visiting my website!
        </p>
        <p className="paragraph_format">
          A little about me! I am currently studying computer science with a
          minor in data science at the University of California, at Berkeley. I
          love all things related to APIs, data/machine structures, and writing
          efficient algorithms. I also love not only making inferences from
          data, but equally as much love deducing information by creating models
          for decision making, statistical inference, or prediction.
        </p>
      </div>
    </div>
  );
}

export default HomeSection;
