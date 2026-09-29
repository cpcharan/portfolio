import "./Home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT SIDE */}
        <div className="home-content">

          <p className="home-intro">Hello, I'm</p>

          <h1>c p charan</h1>

          <h2>Java Full Stack Developer</h2>

          <p className="home-description">
            I build responsive and user-friendly web applications
            using Java, Spring Boot, React.js, JavaScript, and MySQL.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="tel:+919063899033"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - YOUR PHOTO */}
        <div className="home-image">

          <div className="home-photo-wrapper">

            <img
              src="/profile.jpeg"
              alt="Charan"
              className="home-photo"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;