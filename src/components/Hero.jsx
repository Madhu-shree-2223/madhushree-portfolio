function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hi, I'm
        </p>

        <h1>
          Madhushree H
        </h1>

        <h2>
          Java Full Stack Developer
        </h2>

        <p className="hero-description">
          I develop full-stack web applications using React.js, Java, Spring Boot, REST APIs, and SQL,
          turning ideas into reliable, responsive, and user-friendly applications.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn btn-primary"
          >
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>

        </div>

        <div className="hero-tech">

          <span>React.js</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>PostgreSQL</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;