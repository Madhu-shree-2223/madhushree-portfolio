function Experience() {
  const experiences = [
    {
      period: "April 2026 – Present",
      role: "Java Full Stack Developer",
      company: "Skill Check Hub IT Services Pvt. Ltd.",
      location: "Bangalore, India",
      description:
        "Developing a real-time employee performance dashboard for monitoring targets, completed tasks, pending work and shift-wise productivity.",
      achievements: [
        "Built frontend and backend modules using React.js, TypeScript, Java, Spring Boot and PostgreSQL.",
        "Integrated REST APIs for communication between frontend and backend services.",
        "Implemented OCR-based screenshot processing, automated scheduling and performance analytics.",
      ],
      technologies:
        "React.js • TypeScript • Java • Spring Boot • Spring Data JPA • PostgreSQL • REST APIs",
    },

    {
      period: "September 2025 – March 2026",
      role: "Full Stack Developer Intern",
      company: "Tarento Technologies Pvt. Ltd.",
      location: "Bangalore, India",
      description:
        "Contributed to the full-stack applications including JKC Dashboard, eTravelMate and Gates.",
      achievements: [
        "Developed a Proof of Concept for the JKC Dashboard.",
        "Improved dashboard load time by 20% by optimizing React components and Spring Boot API endpoints.",
        "Integrated RESTful services for communication between the frontend and backend systems.",
        "Resolved UI issues and improved dashboard responsiveness across applications.",
      ],
      technologies:
        "HTML • CSS • JavaScript • React.js • Java • Spring Boot • MySQL",
    },

    {
      period: "May 2023 – June 2023",
      role: "Computer Vision Intern",
      company: "Seed Lab (Samsung)",
      location: "Bangalore, India",
      description:
        "Worked on image annotation and labeling for computer vision and machine learning datasets.",
      achievements: [
        "Annotated and labeled 500+ images using CVAT.",
        "Maintained over 95% data accuracy during the annotation process.",
      ],
      technologies:
        "Computer Vision • CVAT • Image Annotation",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="section-title">
          <p>Experience</p>
          <h2>My Professional Journey</h2>
        </div>

        <div className="timeline">

          {experiences.map((experience, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="experience-card">

                <span className="experience-period">
                  {experience.period}
                </span>

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p className="experience-location">
                  {experience.location}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul>
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
                      <li key={achievementIndex}>
                        {achievement}
                      </li>
                    )
                  )}
                </ul>

                <div className="experience-technologies">
                  {experience.technologies}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;