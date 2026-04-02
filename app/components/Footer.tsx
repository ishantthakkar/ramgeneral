import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content position-relative" style={{ paddingTop: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <img src="/assets/img/logo.png" alt="RAM General Supply" className="img-fluid mb-4" style={{ maxHeight: "60px", filter: "brightness(0) invert(1)" }} />
                <p>
                  Professional Lighting Solutions <br />
                  & LED Fitting Expertise<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@ramgeneral.com<br />
                </p>
                <div className="social-links d-flex mt-3">
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/collections">Products</Link></li>
                <li><Link href="/blog">Blogs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Our Solutions</h4>
              <ul>
                <li><a href="#">Commercial Lighting</a></li>
                <li><a href="#">Industrial LED</a></li>
                <li><a href="#">Residential Fitting</a></li>
                <li><a href="#">Smart Controls</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Warranty Info</a></li>
                <li><a href="#">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal text-center position-relative">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>RAM General Supply</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Powered by Raze Lightning LED Solutions
          </div>
        </div>
      </div>
    </footer>
  );
}
