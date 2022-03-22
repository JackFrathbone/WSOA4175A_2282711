import React, { Component } from "react";
import Button from "./Button";

export default class FrameTop extends Component {
  render() {
    return (
      <div>
        <Button buttonType="video" />
        <Button buttonType="slideshow" />
        <Button buttonType="interactive" />
      </div>
    );
  }
}
