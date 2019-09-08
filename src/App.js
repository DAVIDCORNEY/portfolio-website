import React from "react";
import { Router } from "@reach/router";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/portfolio-website/" />
    </Router>
  );
}

export default App;
