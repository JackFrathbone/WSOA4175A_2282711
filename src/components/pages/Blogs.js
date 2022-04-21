import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blogs.css";

export default class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <h1>BLOGS</h1>
        <ul>
          <li>
            <Link to="/blog1">Blog 1: A Critical Analysis of StarryNight</Link>
          </li>
          <li>
            <Link to="/blog2">Blog 2: Design and Aesthetics</Link>
          </li>
          <li>
            <Link to="/blog3">
              Blog 3: Internet, Society and Design Justice
            </Link>
          </li>
          <li>
            <Link to="/blog4">Blog 4: Self Reflection</Link>
          </li>
        </ul>
      </div>
    );
  }
}
