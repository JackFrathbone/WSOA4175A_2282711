import React, { Component } from "react";
import "../styles/FrameTop.css";
import { Link } from "react-router-dom";
import Button_8 from "../assets/images/buttons/Buttons_8.png";
import Button_1 from "../assets/images/buttons/Buttons_1.png";
import Button_2 from "../assets/images/buttons/Buttons_2.png";

export default class FrameTop extends Component {
  render() {
    return (
      <div className="frametop">
        <Link to="/">
          <img src={Button_8}></img>
        </Link>
        <Link to="/video">
          <img src={Button_1}></img>
        </Link>
        <Link to="/art">
          <img src={Button_2}></img>
        </Link>
      </div>
    );
  }
}
