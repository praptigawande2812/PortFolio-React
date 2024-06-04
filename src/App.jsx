import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";



const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Skills/>
      </div>
    </>
  );
};

export default App;
