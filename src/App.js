import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePageImage from "./components/HomePageImage/HomePageImage";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePageImage />
      <Projects />
      <About />
    </div>
  );
}

export default App;
