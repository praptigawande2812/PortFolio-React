import React from "react";
import skills from "./Data/skills.json";
const Skills = () => {
  return (
    <>
      <div id="skills">
        <div className="heading">SKILLS</div>
        <div className="container skills">
          <div className="items">
            {skills.map((data) => (
              <>
                <div className="item" key={data.id}
                 data-aos="zoom-in"
                 data-aos-duration="1000">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
