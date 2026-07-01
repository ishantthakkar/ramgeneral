import Link from "next/link";

export default function Contact() {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Contact</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-map"></i>
                <h3>Our Address</h3>
                <p
                  className="mb-0"
                  style={{ textAlign: "left", display: "inline-block", lineHeight: 1.8 }}
                >
                  255 East 17th Street<br />
                  Paterson, New Jersey<br />
                  USA 07524
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.3629430641154!2d-74.15546012444578!3d40.92971212425966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fc5c7db217ef%3A0x40f503ea1b8b713!2s255%20E%2017th%20St%2C%20Paterson%2C%20NJ%2007524%2C%20USA!5e0!3m2!1sen!2sin!4v1782895893819!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form action="#" method="post" role="form" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-lg-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
