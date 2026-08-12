function Certifications() {
  const certifications = [
    {
      name: "Java Introduction",
      provider: "SoloLearn",
    },
    {
      name: "Java Intermediate",
      provider: "SoloLearn",
    },
    {
      name: "Java Workshop",
      provider: "Zetpeak",
    },
    {
      name: "Life Skills (Jeevan Kaushal) 2.0",
      provider: "Wadhwani",
    },
    {
      name: "Full Stack Web Development Bootcamp",
      provider: "Udemy",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container">

        <div className="section-title">
          <p>Certifications</p>
          <h2>Courses & Certifications</h2>
        </div>

        <div className="certifications-grid">

          {certifications.map((certification, index) => (
            <div
              className="certification-card"
              key={index}
            >

              <div className="certificate-icon">
                ✓
              </div>

              <div>
                <h3>{certification.name}</h3>
                <p>{certification.provider}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;