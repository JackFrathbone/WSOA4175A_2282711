import React, { Component } from "react";
import Button from "./Button";

export default class FrameBottom extends Component {
  render() {
    return (
      <div>
        <Button buttonType="Blogs" />
        <Button buttonType="Background" />
        <Button buttonType="Credits" />
      </div>
    );
  }
}
