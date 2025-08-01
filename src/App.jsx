import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalEx from "./components/ProfessionalEx";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
    
   }, [])
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <Skills/>
        <Projects/>
        <ProfessionalEx/>
        <Experience/>
        <Contact/>
      </div>
    </>
  );
};

export default App;
