import React, { Component } from "react";
import "../styles/FrameTop.css";
import { Link } from "react-router-dom";
import Button_8 from "../assets/images/buttons/Buttons_8.png";
import Button_1 from "../assets/images/buttons/Buttons_1.png";
import Button_2 from "../assets/images/buttons/Buttons_2.png";

export default class FrameTop extends Component {
  constructor(props){
    super();
    this.state = { 
      topToggle : true
    };
  }

  render() {
    if(this.state.topToggle){
      return (
        <div className="frametop">
          {this.props.topToggle }
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
    else{ return (
      <div className="frametop">
        {this.props.topToggle }
          <img src={Button_8}></img>
          <img src={Button_1}></img>
          <img src={Button_2}></img>
      </div>
    );}
  }
}
