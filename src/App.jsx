import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
    </>
  );
};

export default App;
