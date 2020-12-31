import React, { Component } from "react";
import "./home.css";
import fun_image from "./images/fun_image.png";
import tahoe from "./images/tahoe.jpg";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
});

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="centered">
          <h1>Dany Itani</h1>
        </div>
        <div className="centered">
          <img src={fun_image} alt="" width="550" height="300" />;
        </div>
        <img source={tahoe} alt="" style={styles.backgroundImage}></img>
      </React.Fragment>
    );
  }
}

export default Home;
