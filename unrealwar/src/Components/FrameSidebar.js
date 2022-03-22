import React, { Component } from "react";
import Button from "./Button";

export default class FrameSidebar extends Component {
  render() {
    return (
      <div>
        <Button buttonType="Top" />
        <Button buttonType="Bottom" />
      </div>
    );
  }
}
