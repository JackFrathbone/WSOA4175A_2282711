import logo from "./logo.svg";
import "./App.css";
import FrameTop from "./components/FrameTop";
import Content from "./components/Content";
import FrameSidebar from "./components/FrameSidebar";
import FrameBottom from "./components/FrameBottom";

function App() {
  return (
    <div className="App">
      <FrameTop />
      <Content />
      <FrameBottom />
    </div>
  );
}

export default App;
