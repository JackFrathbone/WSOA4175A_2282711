import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrameTop from "./components/FrameTop";
import FrameBottom from "./components/FrameBottom";
import Title from "./components/pages/Title.js";
import "./fonts/VT323/VT323-Regular.ttf";
import Credits from "./components/pages/Credits";
import Video from "./components/pages/Video";
import Background from "./components/pages/Background";
import Blogs from "./components/pages/Blogs";
import Blog1 from "./components/pages/Blogs/Blog1";
import Blog2 from "./components/pages/Blogs/Blog2";
import Blog3 from "./components/pages/Blogs/Blog3";
import Blog4 from "./components/pages/Blogs/Blog4";

function App() {
  return (
    <div className="App">
      <FrameTop />
      <Routes>
        <Route exact path="/" element={<Title />} />
        <Route exact path="/WSOA4175A_2282711" element={<Title />} />
        <Route exact path="/credits" element={<Credits />} />
        <Route exact path="/video" element={<Video />} />
        <Route exact path="/background" element={<Background />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog1" element={<Blog1 />} />
        <Route exact path="/blog2" element={<Blog2 />} />
        <Route exact path="/blog3" element={<Blog3 />} />
        <Route exact path="/blog4" element={<Blog4 />} />
      </Routes>
      <FrameBottom />
    </div>
  );
}

export default App;
