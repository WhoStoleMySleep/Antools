import Logo from '../Logo/Logo';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <div className="footer__brand">
          <Logo />
          <p className="footer__brand-headed">Copyright 2021. Antools</p>
          <p className="footer__brand-additional">
            Antool is a web collection of information on paid or free Design and Development tools
          </p>
        </div>
        <div className="footer__contact-us">
          <h3 className="footer__col-headed">Contact Us</h3>
          <p className="footer__contact-us-number">
            <a href="tel:+621987463">+621987463</a>
          </p>
          <address className="footer__contact-us-address">M Building, No.10 A</address>
          <p className="footer__contact-us-email">
            <a href="mailto:antools@awesome.com">antools@awesome.com</a>
          </p>
        </div>
        <div className="footer__categories">
          <h3 className="footer__col-headed">Categories</h3>
          <a href="/mock-address/Design" className="footer__col-link">Design</a>
          <a href="/mock-address/Development" className="footer__col-link">Development</a>
        </div>
        <div className="footer__company-info">
          <h3 className="footer__col-headed">Company Info</h3>
          <a href="/mock-address/About-Us" className="footer__col-link">About Us</a>
          <a href="/mock-address/Our-Partners" className="footer__col-link">Our Partners</a>
          <a href="/mock-address/Blog" className="footer__col-link">Blog</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
