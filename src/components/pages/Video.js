import React, { Component } from "react";
import "../../styles/Video.css";
import TankGif from "../../assets/images/tankExplode.gif";

export default class Video extends Component {
  render() {
    return (
      <div className="video">
        <img
          src={TankGif}
          alt="A GIF of a tank being destroyed by a javelin missile"
        ></img>
      </div>
    );
  }
}
