import React from "react";
import projects from "./Data/projects.json";
const Projects = () => {
  return (
    <>
      <div id="projects">
        <div className="heading my-2">PROJECTS</div>
        <div className="container projects">
          <div className="row ">
            {projects.map((data) => (
              <>
                <div
                  key={data.id}
                  className="project my-3 col-md-4 col-sm-6 col-lg-3 mx-3"
                >
                  <div className="card" style={{ width: "18rem" }}
                  data-aos="flip-left"
                  data-aos-duration="1000">
                    <div className="img p-3">
                      <img src={data.imageSrc} className="pimg" alt="..." />
                    </div>

                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      {/* <a
                        href={data.demo}
                        className="btn btn-outline-warning mx-3"
                      >
                        Demo
                      </a> */}
                      <a href={data.source} className="btn btn-warning">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
// justify-content-center align-content-center
