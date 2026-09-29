import "./Education.scss";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Header */}
        <div className="education-header">
          <p>MY EDUCATION</p>
          <h2>Education</h2>
          <span>
            My academic background and educational journey.
          </span>
        </div>

        {/* Education Cards */}
        <div className="education-list">

          {/* B.Tech */}
          <div className="education-card">
            <div className="education-year">
              2023 - 2026
            </div>

            <div className="education-content">
              <h3> (B.Tech)</h3>

              <h4>Bachelor of Technology.</h4>

              <p>
                Completed B.Tech in Computer Science and Engineering with a focus on software development, Java programming, web technologies, databases, and application development.
              </p>

              <div className="education-tags">
                <span>Java</span>
                <span>SQL</span>
                <span>Web Development</span>
              </div>
            </div>
          </div>
          {/* Diploma */}
          <div className="education-card">
            <div className="education-year">
              2020 - 2023
            </div>

            <div className="education-content">
              <h3>Diploma</h3>

              <h4>State Board of Technical Education and Training.</h4>

              <p>
                Completed Diploma in Electrical and Electronics Engineering (EEE) with a focus on electrical systems, electronics, circuit design, electrical machines, and engineering fundamentals.
              </p>
            </div>
          </div>

          {/* SSC */}
          <div className="education-card">
            <div className="education-year">
              2020
            </div>

            <div className="education-content">
              <h3>Secondary School Certificate (SSC)</h3>

              <h4>10th Standard</h4>

              <p>
                Completed secondary school education with a strong academic
                foundation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;