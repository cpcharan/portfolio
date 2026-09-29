import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-container">

        <div className="footer-about">
      <h2>c p charan</h2>
      <p>
        Java Full Stack Developer Passionate about building modern and user-friendly web applications.
      </p>
        </div>
        
        <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home"> Home </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
         </div>
         
         <div className="footer-social">
            <h3>Connect With Me</h3>
            
            <a href="https://github.com/" target="_blank" rel="noreferrer"> GitHub </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"> LinkedIn </a>
            <a href="mailto:yourmail@gmail.com"> Email </a>

         </div>
        </div> 

    </footer>

    
  )
}

export default Footer