import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer position-relative overflow-hidden py-5">
      {/* Background Glow Effects */}
      <div className="hero-bg-glow" style={{ bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', opacity: '0.1' }}></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">

            {/* Brand Logo */}
            <div className="mb-4">
              <a href="#" className="footer-brand text-gradient display-5 text-decoration-none fw-bold d-inline-block mb-2">WevTex</a>
              <div className="d-flex justify-content-center align-items-center gap-3 opacity-50">
                <div style={{ height: '1px', width: '50px', background: 'var(--text-muted)' }}></div>
                <span className="text-white-100 small text-uppercase tracking-wider">Digital Solutions</span>
                <div style={{ height: '1px', width: '50px', background: 'var(--text-muted)' }}></div>
              </div>
            </div>

            {/* Main Navigation - Centered & Clean */}
            <div className="mb-5">
              <ul className="list-inline mb-0">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <li className="list-inline-item mx-3" key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-white text-decoration-none fw-medium hover-primary transition-all position-relative footer-nav-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons - Minimalist */}
            <div className="mb-5 d-flex justify-content-center gap-4">
              {[
                { icon: 'bi-github', url: '#' },
                { icon: 'bi-linkedin', url: '#' },
                { icon: 'bi-twitter', url: '#' },
                { icon: 'bi-envelope', url: 'mailto:fatimazahra20033@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-white-100 text-decoration-none transition-all hover-scale"
                  style={{ fontSize: '1.5rem' }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>

            {/* Copyright & Legal */}
            <div className="border-top border-white border-opacity-10 pt-4 mt-4">
              <p className="mb-2 text-white-100 small opacity-75">
                &copy; {new Date().getFullYear()} WevTex. All Rights Reserved.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-white-100 text-decoration-none small opacity-50 hover-white">Privacy Policy</a>
                <span className="text-white-100 opacity-25">|</span>
                <a href="#" className="text-white-100 text-decoration-none small opacity-50 hover-white">Terms of Service</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
