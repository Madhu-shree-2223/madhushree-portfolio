function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Cambridge Institute of Technology (VTU)",
      period: "2021 – 2025",
      result: "CGPA: 8.67 / 10",
      specialization: "Information Science & Engineering",
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "Prarthana Science PU College, Bagalkot",
      period: "2019 – 2021",
      result: "Percentage: 82.16%",
      specialization: "PCMCs",
    },
    {
      degree: "SSLCertificate",
      institution: "St Anne's Convent High School, Bagalkot",
      period: "2018 – 2019",
      result: "Percentage: 77.28%",
      specialization: "General",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">

        <div className="section-title">
          <p>Education</p>
          <h2>Academic Background</h2>
        </div>

        <div className="education-grid">

          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <span className="education-period">
                {item.period}
              </span>

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.specialization}</p>

              <div className="education-result">
                {item.result}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;