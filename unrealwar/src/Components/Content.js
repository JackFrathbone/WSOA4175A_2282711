import React, { Component } from "react";
import Title from "./content/Title";
import "../styles/Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Title />
      </div>
    );
  }
}
