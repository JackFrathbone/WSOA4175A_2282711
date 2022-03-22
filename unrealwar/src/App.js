import logo from "./logo.svg";
import "./App.css";
import FrameTop from "./Components/FrameTop";
import Title from "./Components/Title";
import Content from "./Components/Content";
import FrameSidebar from "./Components/FrameSidebar";
import FrameBottom from "./Components/FrameBottom";

function App() {
  return (
    <div className="App">
      <Title />
      <FrameTop />
      <Content />
      <FrameSidebar />
      <FrameBottom />
    </div>
  );
}

export default App;
