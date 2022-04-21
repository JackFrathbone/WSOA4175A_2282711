import React, { Component } from "react";
import "../../styles/Video.css";
import TankGif from "../../assets/images/tankExplode.gif";

export default class Video extends Component {
  render() {
    return (
      <div className="video">
        <img src={TankGif}></img>
      </div>
    );
  }
}
