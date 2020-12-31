import React, { Component } from "react";
import "./Home.css";
import fun_image from "./images/fun_image.png";
// import { StyleSheet, Image } from "react-native";

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     alignSelf: "stretch",
//     width: null,
//   },
// });

class Home extends Component {
  state = {};
  render() {
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
}

export default Home;
