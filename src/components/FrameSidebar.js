import React, { Component } from "react";
import "../styles/FrameSidebar.css";
import { Link } from "react-router-dom";
import Button_3 from "../assets/images/buttons/Buttons_3.png";
import Button_4 from "../assets/images/buttons/Buttons_4.png";

export default class FrameSidebar extends Component {
  render() {
    return (
      <div className="framesidebar">
        <Link to="/">
          <img src={Button_3}></img>
        </Link>
        <Link to="/blogs">
          <img src={Button_4}></img>
        </Link>
      </div>
    );
  }
}
