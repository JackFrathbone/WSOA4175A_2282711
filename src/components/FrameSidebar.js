import React, { Component } from "react";
import "../styles/FrameSidebar.css";
import { Link } from "react-router-dom";
import Button_3 from "../assets/images/buttons/Buttons_3.png";
import Button_4 from "../assets/images/buttons/Buttons_4.png";

export default class FrameSidebar extends Component {
  render() {
    return (
      <div className="framesidebar">
          <img src={Button_3}></img>
          <img src={Button_4}></img>
      </div>
    );
  }
}
