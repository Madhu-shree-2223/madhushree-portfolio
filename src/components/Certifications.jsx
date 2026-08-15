function Certifications() {
  const certifications = [
    {
      name: "Full Stack Web Development",
      provider: "Tarento Technologies Pvt. Ltd.",
      certificate: "/certificates/tarento.pdf",
    },
   {
      name: "Full Stack Web Development Bootcamp",
      provider: "Udemy",
      certificate: "/certificates/full-stack-web-development-bootcamp.pdf",
    },
    {
      name: "Full Stack Web Development",
      provider: "Varcons Technologies Pvt. Ltd.",
      certificate: "/certificates/varcons.pdf",
    },
    {
      name: "Introduction to Java",
      provider: "SoloLearn",
      certificate: "/certificates/sololearn.pdf",
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

              <div className="certificate-content">
                <h3>{certification.name}</h3>

                <p>{certification.provider}</p>

                <a
                  href={certification.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                >
                  View Certificate ↗
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;