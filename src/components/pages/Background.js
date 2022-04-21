import React, { Component } from "react";
import "../../styles/Background.css";
import Wireframe from "../../assets/documents/Wireframe.pdf";
import Styleguide from "../../assets/documents/Styleguide.pdf";

export default class Background extends Component {
  render() {
    return (
      <div className="background">
        <h1>BACKGROUND</h1>
        <h2>What is Unreal War?</h2>
        <p>
          This site is an exploration of the relationship between the U.S.
          military industrial complex and our internet habits. It will be
          looking at the way in which the violence of U.S. imperialism is
          justified through the social media we consume while dissenting voices
          across the globe are ignored. The depiction of good versus bad
          violence is an important part of the online discourse around
          imperialism, and this site will primarily seek to unpack these
          perspectives.
          <br></br>
          <br></br>
          Social media like Twitter does not simply desensitise violence but
          instead creates a dichotomy between violence that is unavoidable (or
          banal) and violence that justifies the continue presence of the
          American war machine globally. Yemen is a background tragedy that is
          essentially inscrutable to the American liberal, while Ukraine is a
          series of individual tragedies inviting an increased flow of military
          aid into NATO and Eastern Europe. The particular consumption of
          trending social media informs these positions.
        </p>
        <h2>Website Design Resources</h2>
        <ul>
          <li>
            <a href={Wireframe} target="_blank">
              Website Wireframe
            </a>
          </li>
          <li>
            <a href={Styleguide} target="_blank">
              Website Styleguide
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
