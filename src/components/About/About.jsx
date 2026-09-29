import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">

          <p className="about-small-title">
            ABOUT ME
          </p>

          <h2>
            About Me
          </h2>

          <h3>
            Java Full Stack Developer
          </h3>

          <p>
            Hello! I am c p charan, a passionate Java Full Stack Developer.
            I enjoy developing modern, responsive, and user-friendly
            web applications.
          </p>

          <p>
            I have knowledge of Core Java, Advanced Java, Spring Boot,
            React.js, JavaScript, HTML, CSS, MySQL, and REST APIs.
            I am always interested in learning new technologies and
            improving my development skills.
          </p>

          <p>
            My goal is to start my career as a Java Full Stack Developer
            and contribute to real-world projects while continuously
            growing as a software developer.
          </p>

          <a
            href="/ccharan_resume.pdf"
            className="about-btn"
            download="ccharan_resume.pdf"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;