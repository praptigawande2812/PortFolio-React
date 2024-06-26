import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
     <div className="heading">EXPERIENCE</div>
      <section className="experience" id="experience"  
      data-aos="zoom-in"
          data-aos-duration="500">
       

        <div className="timeline-items" >
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index} >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content" >
                <h3>{exp.role}</h3>
                <h6 className="my-3">{exp.experiences[0]}</h6>
                <h6>{exp.experiences[1]}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
