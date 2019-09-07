import React from "react";
import "../../App.css";
import Navigation from "../Navigation/Navigation";
import HomePageImage from "../HomePageImage/HomePageImage";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Home() {
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

export default Home;
