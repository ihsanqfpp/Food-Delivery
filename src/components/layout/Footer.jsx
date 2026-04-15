
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link to="/" className="footer-logo">
                FoodFlow
              </Link>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className="footer_social">
                <a href="#facebook">
                  <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#twitter">
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#linkedin">
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#instagram">
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#pinterest">
                  <i className="fa-brands fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 Am - 10.00 Pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
