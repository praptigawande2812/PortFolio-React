import React  from "react";
import pdf from "../pdf/Resume.pdf";
import hero from "./Data/hero.json";


const Home = () => {
 

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 className="title">Hi, I'm Ada</h1>
        <p className="description">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-2"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;