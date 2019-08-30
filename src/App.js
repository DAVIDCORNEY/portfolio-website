import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePageImage from "./components/HomePageImage/HomePageImage";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePageImage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
