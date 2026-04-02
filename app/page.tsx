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
                  Illuminate Your World with <span>RAM General Supply</span>
                </h2>
                <h3 className="text-white h5 mb-4" data-aos="fade-up">
                  Leading LED Solutions & Professional Lighting Fitting Services
                </h3>
                <p data-aos="fade-up">
                  At RAM General Supply, we specialize in high-performance LED technology and expert installation. 
                  Whether it's industrial, commercial, or residential, we bring precision and brilliance to every corner.
                </p>
                <Link data-aos="fade-up" data-aos-delay="200" href="/collections/led-flat-panel-light" className="btn-get-started">
                  View Collections
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item active" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&w=1920&q=80)" }}></div>
          <div className="carousel-item" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1565814329452-e1dee7185ee8?auto=format&fit=crop&w=1920&q=80)" }}></div>
          
          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>

      <main id="main">
        {/* ======= Get Started Section ======= */}
        <section id="get-started" className="get-started section-bg">
          <div className="container">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                <div className="content">
                  <h3>Precision Fitting for Every Environment.</h3>
                  <p>
                    From high-output industrial bays to sleek architectural panels, RAM General Supply ensures your project is backed by 
                    durable components and expert craftsmanship. We don't just sell lights; we engineer illumination.
                  </p>
                  <p>
                    Our team provides end-to-end support, including site surveys, energy-saving calculations, and professional installation.
                  </p>
                </div>
              </div>

              <div className="col-lg-5" data-aos="fade">
                <form action="#" method="post" className="php-email-form">
                  <h3>Get a Quote</h3>
                  <p>Ready to upgrade your space? Request a custom quote and energy assessment today.</p>
                  <div className="row gy-3">
                    <div className="col-md-12">
                      <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                    </div>

                    <div className="col-md-12">
                      <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="phone" placeholder="Phone Number" required />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows={6} placeholder="Project Details (e.g. Warehouse LED upgrade)" required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Processing</div>
                      <div className="sent-message">Your request has been received. Our lighting experts will contact you shortly!</div>
                      <button type="submit">Request Assessment</button>
                    </div>
                  </div>
                </form>
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
              ].map((solution, i) => (
                <div key={i} className="col-lg-6" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                  <div className="card-item shadow-sm">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="card-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e08d2d88b42?auto=format&fit=crop&w=800&q=80)` }}></div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center">
                        <div className="card-body">
                          <h4 className="card-title">{solution.title}</h4>
                          <p>{solution.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                    <Link href="/collections" className="readmore stretched-link">
                      View Products <i className="bi bi-arrow-right"></i>
                    </Link>
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
                <p>Every fixture installed by RAM General Supply meets international safety and efficiency standards.</p>

                {[
                  { title: "DLC Premium Certified", icon: "bi-patch-check", text: "Highest tier of efficiency for commercial rebates." },
                  { title: "UL/cUL Listed", icon: "bi-shield-shaded", text: "Verified safety standards for all residential fittings." },
                  { title: "Smart Home Ready", icon: "bi-phone", text: "Seamless integration with Alexa, Google Home, and Zigbee." },
                  { title: "Weatherproof Rated", icon: "bi-cloud-rain", text: "IP65 and above for reliable outdoor and industrial use." }
                ].map((item, idx) => (
                  <div key={idx} className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <i className={`bi ${item.icon} flex-shrink-0`}></i>
                    <div>
                      <h4><a href="" className="stretched-link">{item.title}</a></h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main >
    </>
  );
}
