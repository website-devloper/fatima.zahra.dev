// /app/components/About.tsx
const About = () => {
  return (
    <section className="about-section bg-light">
      <div className="container">
        <div className="text-center">
            <h3 className="section-title">About Me</h3>
            <h2 className="section-subtitle">Who I Am</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="lead">
              I am WevTex, a Full Stack Developer and IT Solutions Builder passionate about creating modern, efficient, and scalable digital solutions. My expertise lies in turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              My mission is to create modern, secure, and scalable digital solutions that help businesses grow. Whether it's developing a web application, automating a workflow with AI, or designing a user-friendly interface, I am dedicated to delivering high-quality results that exceed expectations.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="glass-card mt-4 mt-lg-0">
              <h5 className="mb-3" style={{color: 'var(--secondary-color)'}}>Core Philosophy</h5>
              <div className="mb-3">
                <strong>Years of experience:</strong> 5+
              </div>
              <div className="mb-3">
                <strong>Main specialties:</strong> Full Stack Dev, AI Automation, IT Solutions
              </div>
              <div>
                <strong>My work philosophy:</strong> "Helping businesses and individuals build modern and efficient digital solutions.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
