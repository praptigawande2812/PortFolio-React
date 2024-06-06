import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </>
  );
};

export default App;
