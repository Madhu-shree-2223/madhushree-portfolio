function Contact() {
  return (
  <section id="contact" className="contact-section">
  <div className="container">
    <div className="section-title">
      <p>Contact</p>
      <h2>Let's Connect</h2>
      </div>
      <p className="contact-description">
        I'm always open to discussing new opportunities, projects, and collaborations. </p>
        <div className="contact-info-grid">
          {/* EMAIL */}
          <a href="mailto:madhushreeh60@gmail.com" className="contact-info-card" >
            <div className="contact-info-icon"> ✉ </div>
            <span className="contact-label"> Email </span>
            <strong> madhushreeh60@gmail.com </strong>
            </a> {/* PHONE */} <a href="tel:+918277067813" className="contact-info-card" >
              <div className="contact-info-icon"> ☎ </div>
              <span className="contact-label"> Phone </span>
              <strong> +91 8277067813 </strong>
              </a>
              {/* LOCATION */}
              <a href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20India" target="_blank" rel="noopener noreferrer" className="contact-info-card" >
              <div className="contact-info-icon"> ⌖ </div>
              <span className="contact-label"> Location </span>
             <strong> Bengaluru, India </strong>
             </a>
             </div>
             {/* SOCIAL ICONS */}
             <div className="social-links">
              {/* GITHUB */}
              <a href="https://github.com/Madhu-shree-2223" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub" >
              <span>GitHub</span>
              </a>
              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/madhushree-h-2878b8257" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" >
              <span>in</span>
              </a>
              {/* CODE / PROJECTS */}
              <a href="https://github.com/Madhu-shree-2223" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Projects" >
              <span>&lt;/&gt;</span>
              </a>
              </div>
              {/* EMAIL BUTTON */}
              <a href="mailto:madhushreeh60@gmail.com" className="email-button" >
                <span>✉</span>
                Send Me An Email
                </a>
                </div>
                </section>
                 );
                }

                export default Contact;