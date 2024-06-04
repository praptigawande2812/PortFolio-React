import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
      </div>
    </>
  );
};

export default App;
