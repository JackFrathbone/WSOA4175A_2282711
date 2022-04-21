import React, { Component } from "react";
import "../styles/FrameBottom.css";
import { Link } from "react-router-dom";

export default class FrameBottom extends Component {
  render() {
    return (
      <div className="framebottom">
        <Link to="/blogs">
          <img src="../images/buttons/Buttons_5.png"></img>
        </Link>
        <Link to="/background">
          <img src="../images/buttons/Buttons_6.png"></img>
        </Link>
        <Link to="/credits">
          <img src="../images/buttons/Buttons_7.png"></img>
        </Link>
      </div>
    );
  }
}
