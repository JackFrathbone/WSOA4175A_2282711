import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <ul>
          <li>
            <Link to="/blog1">Blog 1: A Critical Analysis of StarryNight</Link>
          </li>
          <li>
            <Link to="/blog2">Blog 2: Design and Aesthetics</Link>
          </li>
          <li>
            <Link to="/">Blog 3:</Link>
          </li>
          <li>
            <Link to="/">Blog 4:</Link>
          </li>
        </ul>
      </div>
    );
  }
}
