function Projects() {
  const projects = [
    {
      number: "01",
      title: "Live Data Entry Dashboard",
      description:
        "A real-time employee performance dashboard for monitoring targets, completed tasks, pending work and shift-wise productivity.",
      technologies: [
        "React.js",
        "TypeScript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
      ],
    },

    {
      number: "02",
      title: "JKC Dashboard",
      description:
        "A dashboard Proof of Concept with optimized React components and Spring Boot API endpoints, achieving a 20% improvement in dashboard load time.",
      technologies: [
        "React.js",
        "Spring Boot",
        "MySQL",
      ],
    },

    {
      number: "03",
      title: "Secure User Verification System",
      description:
        "A role-based web application with Admin, Student and Teacher access, secure authentication and student data management.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
    },

    {
      number: "04",
      title: "eTravelMate",
      description:
        "A travel management platform where I worked on frontend development, backend integration and responsive UI improvements.",
      technologies: [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
    },

    {
      number: "05",
      title: "Gates",
      description:
        "A course-based online learning system with registration, educational content, dashboards and reporting functionality.",
      technologies: [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
    },

    {
      number: "06",
      title: "Adventure Travel Website",
      description:
        "A responsive website showcasing adventure travel destinations, outdoor activities and safety guidelines.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-title">
          <p>Projects</p>
          <h2>Featured Work</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="project-technologies">

                {project.technologies.map(
                  (technology, index) => (
                    <span key={index}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;