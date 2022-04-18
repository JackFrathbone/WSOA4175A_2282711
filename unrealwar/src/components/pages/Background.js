import React, { Component } from "react";
import "../../styles/Background.css";

export default class Background extends Component {
  render() {
    return (
      <div className="background">
        <h1>Background</h1>
        <h2>What is Unreal War?</h2>
        <p>
          <a>I want</a>
        </p>
        <h2>Website Design Resources</h2>
        <ul>
          <li>
            <a href="../../documents/Wireframe.pdf" target="_blank">
              Website Wireframe
            </a>
          </li>
          <li>
            <a href="../../documents/Wireframe.pdf" target="_blank">
              Website Styleguide
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
