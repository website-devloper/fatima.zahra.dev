import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background shapes for visual flair */}
      <div className="background-shape shape-1"></div>
      <div className="background-shape shape-2"></div>
      <div className="background-shape shape-3"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="hero-intro-text">WELCOME TO MY WORLD</span>
            <h1 className="hero-title mb-3">
              All Your Digital Needs <span className="text-primary">One Expert.</span>
            </h1>
            <h2 className="hero-subtitle mb-4">
              <TypeAnimation
                sequence={[
                  'Full Stack Development', 2000,
                  'IT Services', 2000,
                  'Process Automation', 2000,
                  'WordPress Developer', 2000,
                  'Clean & Modern UI/UX', 2000,

                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="hero-description lead mb-4">
              Business-first websites, optimized for conversions and scale.            </p>
            <div className="mt-5">
              <Link href="#projects" className="btn btn-primary btn-lg me-3 mb-3">
                My Portfolio <i className="bi bi-arrow-right-short"></i>
              </Link>
              <Link href="#contact" className="btn btn-outline-primary btn-lg mb-3">
                Contact Me <i className="bi bi-envelope"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <Image src="https://images.unsplash.com/photo-1661437502054-f43cd3a6d852?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Woman in IT" width={500} height={500} className="img-fluid futuristic-shape" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;