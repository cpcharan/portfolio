import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <p>GET IN TOUCH</p>

          <h2>Contact Me</h2>

          <span>
            Have a project or opportunity? Feel free to get in touch with me.
          </span>
        </div>

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I am currently looking for opportunities as a Java Full Stack
            Developer. If you have an opportunity or want to discuss a project,
            feel free to contact me.
          </p>

          <div className="contact-item">
            <h4>Phone</h4>
            <p>+91 9063899033</p>
          </div>

          <div className="contact-item">
            <h4>Location</h4>
            <p>Andhra Pradesh, India</p>
          </div>

          <div className="contact-form">

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
            >

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;