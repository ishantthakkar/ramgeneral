import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Illuminate Your World with <span>Neutron Supply INC</span>
                </h2>
                <h3 className="text-white h5 mb-4" data-aos="fade-up">
                  Leading LED Solutions & Professional Lighting Fitting Services
                </h3>
                <p data-aos="fade-up">
                  At Neutron Supply INC, we specialize in high-performance LED technology and expert installation.
                  Whether it's industrial, commercial, or residential, we bring precision and brilliance to every corner.
                </p>
                <Link data-aos="fade-up" data-aos-delay="200" href="/" className="btn-get-started">
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item active" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&w=1920&q=80)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(/assets/img/ram-bg-three.jpg)" }}></div>

          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>

      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>About Us</h2>
              <p>Trusted LED supply and lighting solutions for commercial and industrial projects.</p>
            </div>

            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="img-bg"
                  style={{
                    backgroundImage: "url(/assets/img/features-3.jpg)",
                    minHeight: "380px",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <h3 style={{ fontWeight: 800, color: "#2c3e50" }}>Neutron Supply INC</h3>
                <p style={{ color: "#4a5568" }}>
                  We help contractors, facility managers, and businesses upgrade spaces with reliable LED fixtures, retrofit solutions,
                  and lighting accessories. Our focus is simple: quality products, fast response, and practical guidance from quote to delivery.
                </p>
                <ul className="list-unstyled" style={{ color: "#4a5568" }}>
                  <li className="d-flex mb-2">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>LED retrofits and high-efficiency fixtures</span>
                  </li>
                  <li className="d-flex mb-2">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Commercial, industrial, and warehouse lighting</span>
                  </li>
                  <li className="d-flex">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Support for sizing, specs, and project requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ======= Lighting Solutions Section ======= */}
        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Featured Solutions</h2>
              <p>Explore our specialized lighting fitting services and high-performance LED systems.</p>
            </div>

            <div className="row gy-4">
              {[
                {
                  title: "LED Retrofits",
                  desc: "Upgrade your existing fixtures to high-efficiency LED systems to reduce energy costs by up to 80%."
                },
                {
                  title: "Commercial Fitting",
                  desc: "Professional installation for offices, retail spaces, and restaurants with architectural precision."
                },
                {
                  title: "Industrial High-Bay",
                  desc: "Rugged, powerful lighting solutions for warehouses, factories, and large-scale storage facilities."
                },
                {
                  title: "Smart Lighting Controls",
                  desc: "Integrated automation systems allowing you to control brightness, timing, and motion sensing via mobile."
                }
              ].map((solution, i) => {
                const heroImages = [
                  "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
                  "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&w=1200&q=80",
                  "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&w=1200&q=80",
                  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80"
                ];
                return (
                  <div key={i} className="col-lg-6" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                    <div className="card-item d-flex border" style={{ backgroundColor: '#fff', height: '100%', borderColor: '#ebebeb' }}>
                      <div
                        className="card-bg"
                        style={{
                          width: '45%',
                          backgroundImage: `url(${heroImages[i] ?? heroImages[0]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: '#f3f4f6',
                          minHeight: '250px'
                        }}
                      ></div>
                      <div className="card-body d-flex align-items-center" style={{ width: '55%', padding: '30px' }}>
                        <div>
                          <h4 className="card-title" style={{ fontSize: '22px', fontWeight: '700', color: '#364d59', marginBottom: '15px' }}>{solution.title}</h4>
                          <p style={{ color: '#4a5568', fontSize: '15px', lineHeight: '1.6', marginBottom: 0 }}>{solution.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Expertise</h2>
              <p>A comprehensive range of lighting services tailored to your specific needs.</p>
            </div>

            <div className="row gy-4">
              {[
                { title: "Residential Fitting", icon: "bi-house-heart" },
                { title: "Retail Display", icon: "bi-shop" },
                { title: "Office LED Panels", icon: "bi-building" },
                { title: "Outdoor & Safety", icon: "bi-shield-check" },
                { title: "Energy Consultancy", icon: "bi-lightning-charge" },
                { title: "Maintenance", icon: "bi-tools" },
              ].map((service, idx) => (
                <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>We provide full lifecycle support for your lighting infrastructure, from design to long-term maintenance.</p>
                    {/* <Link href="/" className="readmore stretched-link">
                      View Products <i className="bi bi-arrow-right"></i>
                    </Link> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= Industry Standards Section ======= */}
        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80)" }} data-aos="zoom-in"></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Certified Performance. Reliable Engineering.</h3>
                <p>Every fixture installed by Neutron Supply INC Supply meets international safety and efficiency standards.</p>

                {[
                  { title: "DLC Premium Certified", icon: "bi-patch-check", text: "Highest tier of efficiency for commercial rebates." },
                  { title: "UL/cUL Listed", icon: "bi-shield-shaded", text: "Verified safety standards for all residential fittings." },
                  { title: "Smart Home Ready", icon: "bi-phone", text: "Seamless integration with Alexa, Google Home, and Zigbee." },
                  { title: "Weatherproof Rated", icon: "bi-cloud-rain", text: "IP65 and above for reliable outdoor and industrial use." }
                ].map((item, idx) => (
                  <div key={idx} className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <i className={`bi ${item.icon} flex-shrink-0`}></i>
                    <div>
                      <h4><span className="stretched-link">{item.title}</span></h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>Tell us what you need and we’ll get back quickly.</p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="bi bi-map"></i>
                  <h3>Our Address</h3>
                  <p className="mb-0" style={{ textAlign: "left", display: "inline-block", lineHeight: 1.8 }}>
                    255 East 17th Street<br />
                    Paterson, New Jersey<br />
                    USA 07524
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p className="mb-0">
                    <span style={{ display: "block" }}>info@neutron.supply</span>
                    <span style={{ display: "block" }}>sales@neutron.supply</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p className="mb-0">973-261-9596</p>
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

      </main >
    </>
  );
}
