import React, { Component } from "react";
import "../styles/FrameSidebar.css";
import Button_3 from "../assets/images/buttons/Buttons_3.png";
import Button_4 from "../assets/images/buttons/Buttons_4.png";

export default class FrameSidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClickTrue.bind(this);
    this.handleClickFalse.bind(this);
  }

  handleClickTrue = () => {
    this.props.setParentButtonToggle(true);
  };

  handleClickFalse = () => {
    this.props.setParentButtonToggle(false);
  };

  render() {
    return (
      <div className="framesidebar">
        <img
          src={Button_3}
          onClick={this.handleClickTrue}
          alt="Top button"
        ></img>
        <img
          src={Button_4}
          onClick={this.handleClickFalse}
          alt="Top button"
        ></img>
      </div>
    );
  }
}
