import React, { Component } from "react";
import "../styles/FrameBottom.css";
import { Link } from "react-router-dom";
import Button_5 from "../assets/images/buttons/Buttons_5.png";
import Button_6 from "../assets/images/buttons/Buttons_6.png";
import Button_7 from "../assets/images/buttons/Buttons_7.png";
import Button_20 from "../assets/images/buttons/Buttons_20.png";
import Button_19 from "../assets/images/buttons/Buttons_19.png";
import Button_21 from "../assets/images/buttons/Buttons_21.png";

export default class FrameBottom extends Component {
  render() {
    if(!this.props.bottomToggle){ return (
      <div className="framebottom">
        <Link to="/blogs">
          <img src={Button_5}></img>
        </Link>
        <Link to="/background">
          <img src={Button_6}></img>
        </Link>
        <Link to="/credits">
          <img src={Button_7}></img>
        </Link>
      </div>
    );}
    else{
      return (
        <div className="framebottom">
            <img src={Button_20}></img>
            <img src={Button_19}></img>
            <img src={Button_21}></img>
        </div>
      );
    }
   
  }
}