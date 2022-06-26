import React, { Component } from "react";
import "../../../styles/Blog.css";

export default class Blog8 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 8: Technical Reflection</h1>
        <p>
          In the end no matter what the goal or intended aesthetic of your site,
          there is a level of technical competence which is required for the
          website to meaningfully function. A website like mine that has a
          specific visual style that is counter to what would be considered
          mainstream UX design still has a key requirement which is
          accessibility. For my artwork and site to be accessible it needs to
          function on a wide range of browsers, devices and screen sizes while
          maintaining its overall look and most importantly its control scheme.
        </p>
        <p>
          Despite its look, my site is very much a standard react.js website in
          function, it uses routing to move between various pages and uses
          systems like props and states to deal with various functions. The main
          technical focus and challenge in creating the site has been the
          specific way I have used buttons and how this required some more
          complex coding to get working. As mentioned in previous blogs and the
          wireframe, the site features 8 buttons which are always visible, three
          in the header, three in the footer and two in the sidebar. The header
          and footer buttons simply select a page, while the sidebar ones do
          something different. At any time, only the buttons in the header, or
          the footer are enabled with the opposite marked in red. The buttons on
          the sidebar toggle this state, with the top button enabling the header
          etc.
        </p>
        <p>
          This was done using states and props, with the header, footer and
          sidebar all being components which would react to state changes, or in
          the case of the sidebar, toggle the overall state which set the header
          and footer to on and off. This was the biggest challenge in building
          the site as this is not a common solution in react.js or any
          mainstream websites, with my choice of control scheme specifically
          being chosen to be unusual. So there was little available information
          to go off of and required lots of troubleshooting and investigation to
          get it to a working state. But the end result worked well and react.js
          felt fast and responsive.
        </p>
        <p>
          There has definitely been difficulty adjusting to using react.js for
          this website, but I feel like overall the feel and quality are
          acceptable and the site functions without any bugs. Aside from that
          the only other technical challenge was the use of cookies for the
          internet artwork, which was also a new problem, but it turned out to
          be straightforward and worked well.
        </p>
      </div>
    );
  }
}
