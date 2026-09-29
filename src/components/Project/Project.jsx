import "./Project.scss";

const Project = () => {
  const projects = [
    {
      title: "Guess Number Game",
      description:
        "Developed a Guess Number Game using HTML, CSS, and JavaScript where users guess a randomly generated number between 1 and 100. Implemented user input validation, attempt tracking, hints for higher or lower guesses, and a high-score feature using JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/cpcharan/Guess-Number-game",
      live: "#",
    },
    {
      title: "ATM Login Project",
      description:
        "A simple ATM login application developed using HTML, CSS, and JavaScript. Users can log in securely and interact with basic ATM operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/cpcharan/ATM-Login-System",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <p className="projects-subtitle">
          Some of the projects I have developed using my technical skills.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies.map((technology, techIndex) => (
                  <span key={techIndex}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;