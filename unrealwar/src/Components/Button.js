import React, { Component } from "react";

export default class Button extends Component {
  static defaultProps = { buttonType: "none" };

  render() {
    return <div> {this.props.buttonType}</div>;
  }
}
