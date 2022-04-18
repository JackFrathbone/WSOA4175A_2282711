import React, { Component } from "react";
import "../styles/FrameTop.css";
import { Link } from "react-router-dom";

export default class FrameTop extends Component {
  render() {
    return (
      <div className="frametop">
        <Link to="/">
          <img src="../images/buttons/Buttons_8.png"></img>
        </Link>
        <Link to="/video">
          <img src="../images/buttons/Buttons_1.png"></img>
        </Link>
        <Link to="/">
          <img src="../images/buttons/Buttons_2.png"></img>
        </Link>
      </div>
    );
  }
}
