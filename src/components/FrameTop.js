import React, { Component } from "react";
import "../styles/FrameTop.css";
import { Link } from "react-router-dom";
import Button_8 from "../assets/images/buttons/Buttons_8.png";
import Button_1 from "../assets/images/buttons/Buttons_1.png";
import Button_2 from "../assets/images/buttons/Buttons_2.png";
import Button_22 from "../assets/images/buttons/Buttons_22.png";
import Button_17 from "../assets/images/buttons/Buttons_17.png";
import Button_18 from "../assets/images/buttons/Buttons_18.png";

export default class FrameTop extends Component {
  render() {
    if (this.props.topToggle) {
      return (
        <div className="frametop">
          <Link to="/">
            <img src={Button_8} alt="Homepage button"></img>
          </Link>
          <Link to="/video">
            <img src={Button_1} alt="Video button"></img>
          </Link>
          <Link to="/art">
            <img src={Button_2} alt="Artwork button"></img>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="frametop">
          <img src={Button_22} alt="Homepage button disabled"></img>
          <img src={Button_17} alt="Video button disabled"></img>
          <img src={Button_18} alt="Artwork button disabled"></img>
        </div>
      );
    }
  }
}
