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
          {experience.map((data) => (
            <div className="timeline-item" key={data.id} >
              <div className="timeline-dot"></div>
              <div className="timeline-date">{data.date}</div>
              <div className="timeline-content" >
                <h3>{data.role}</h3>
                <h6 className="my-3">{data.experiences[0]}</h6>
                <h6>{data.experiences[1]}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
