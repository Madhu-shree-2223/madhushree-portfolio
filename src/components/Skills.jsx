function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Redux Toolkit",
        "React Router",
        "Bootstrap",
        "Material UI",
      ],
    },

    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },

    {
      title: "Database",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },

    {
      title: "Tools & Security",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Postman",
        "Swagger",
        "JWT",
        "OAuth 2.0",
        "Spring Security",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="section-title">
          <p>Skills</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>

              <h3>{group.title}</h3>

              <div className="skill-list">

                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;