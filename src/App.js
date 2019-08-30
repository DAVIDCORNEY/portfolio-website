import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePageImage from "./components/HomePageImage/HomePageImage";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePageImage />
      <Projects />
    </div>
  );
}

export default App;
