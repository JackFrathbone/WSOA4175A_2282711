import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import FrameTop from "./components/FrameTop";
import FrameBottom from "./components/FrameBottom";
import FrameSidebar from "./components/FrameSidebar";
import Title from "./components/pages/Title.js";
import "./fonts/VT323/VT323-Regular.ttf";
import Credits from "./components/pages/Credits";
import Video from "./components/pages/Video";
import Art from "./components/pages/Art";
import Background from "./components/pages/Background";
import Blogs from "./components/pages/Blogs";
import Blog1 from "./components/pages/Blogs/Blog1";
import Blog2 from "./components/pages/Blogs/Blog2";
import Blog3 from "./components/pages/Blogs/Blog3";
import Blog4 from "./components/pages/Blogs/Blog4";
import Blog5 from "./components/pages/Blogs/Blog5";
import Blog6 from "./components/pages/Blogs/Blog6";
import Blog7 from "./components/pages/Blogs/Blog7";
import Blog8 from "./components/pages/Blogs/Blog8";
import Blog9 from "./components/pages/Blogs/Blog9";
import Blog10 from "./components/pages/Blogs/Blog10";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      buttonToggle: true,
    };
  }

  setParentButtonToggle = (condition) => {
    this.setState({ buttonToggle: condition });
  };

  render() {
    return (
      <div className="App">
        <FrameTop topToggle={this.state.buttonToggle} />
        <Routes>
          <Route exact path="/" element={<Title />} />
          <Route exact path="/WSOA4175A_2282711" element={<Title />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/video" element={<Video />} />
          <Route exact path="/art" element={<Art />} />
          <Route exact path="/background" element={<Background />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog3" element={<Blog3 />} />
          <Route exact path="/blog4" element={<Blog4 />} />
          <Route exact path="/blog5" element={<Blog5 />} />
          <Route exact path="/blog6" element={<Blog6 />} />
          <Route exact path="/blog7" element={<Blog7 />} />
          <Route exact path="/blog8" element={<Blog8 />} />
          <Route exact path="/blog9" element={<Blog9 />} />
          <Route exact path="/blog10" element={<Blog10 />} />
        </Routes>
        <FrameSidebar setParentButtonToggle={this.setParentButtonToggle} />
        <FrameBottom bottomToggle={this.state.buttonToggle} />
      </div>
    );
  }
}

export default App;
