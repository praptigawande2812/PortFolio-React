import professionalExperience from "./Data/professionalex.json";

const ProfessionalEx = () => {
  return (
    <>
      <div className="heading">PROFESSIONAL EXPERIENCE</div>
      <div className="professional-ex-container">
        {professionalExperience.map((data) => (
          <div className="professional-ex-card" key={data.id}>
            <div className="professional-ex-header">
              {data.logo && (
                <img
                  src={`/assets/${data.logo}`}
                  alt="Company Logo"
                  className="professional-ex-logo"
                  style={{ height: "60px", marginRight: "1rem" }}
                />
              )}
              <div>
                <h3>{data.role}</h3>
                <span className="professional-ex-date">{data.date} - {data.endDate}</span>
              </div>
            </div>
            <ul className="professional-ex-list">
              {data.experiences.map((exp, idx) => (
                <li key={idx}>
                  <strong>{exp.title}</strong>
                  <div>{exp.details}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalEx;