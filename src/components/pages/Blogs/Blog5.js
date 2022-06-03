import React, { Component } from "react";
import "../../../styles/Blog.css";
import Wireframe from "../../../assets/images/ArtWireframe.png";

export default class Blog5 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 5: Internet Artwork Preparatory work</h1>
        <h2>Themes</h2>
        <p>
          <ul>
            <li>Internet imperialism</li>
            <li>Censorship via propaganda</li>
            <li>Learning alternatives in a US dominated web</li>
            <li>
              Role of public/private organisations in shaping online discourse
            </li>
          </ul>
        </p>
        <h2>Artwork Function</h2>
        <p>
          <ul>
            <li>Text modification and censorship</li>
            <li>Dynamically combine two different/opposing texts</li>
            <li>
              Parts of primary text are censored via black highlight until
              clicked on, reveals replaced text from other source
            </li>
            <li>
              Randomly determine which parts are censored/replaced via some
              algorithmic input like IP Address or random cookie, so censorship
              is different for each user but remains the same when reloaded
            </li>
          </ul>
        </p>
        <h2>Wireframe</h2>
        <img src={Wireframe} width="960" height="540"></img>
      </div>
    );
  }
}
