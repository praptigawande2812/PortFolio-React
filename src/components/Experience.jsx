import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <section className="experience" id="experience">
        <div className='heading'>EXPERIENCE</div>

        <div className="timeline-items">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <p>{exp.experiences}</p>
                </div>
              </div>
          
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
