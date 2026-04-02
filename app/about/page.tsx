import Link from "next/link";

export default function About() {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>About Us</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>About Us</li>
          </ol>
        </div>
      </div>

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div className="col-lg-7 about-img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1542744173-8e08d2d88b42?auto=format&fit=crop&w=1200&q=80)" }}></div>
            <div className="col-lg-7">
              <h2>Proudly Delivering Premium Lighting Services</h2>
              <div className="our-story">
                <h4>Trusted Expertise</h4>
                <h3>Our Story</h3>
                <p>
                  Trusted by companies for exceptional lighting services, RAM General Supply offers expert installations, 
                  seamless rebate management, and superior energy-saving solutions. We ensure your space shines with the latest in LED technology.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> <span>End-to-End Lighting Services</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>Affordable Pricing Plans</span></li>
                  <li><i className="bi bi-check-circle"></i> <span>100% Customer Satisfaction</span></li>
                </ul>
                <p>
                  Our commitment to quality ensures that every project, from simple retrofits to large-scale industrial layouts, 
                  is executed with precision and engineering excellence.
                </p>
                
                <div className="contact-box mt-4 p-4 shadow-sm bg-light border-start border-primary border-4">
                  <h5 className="mb-2">Call Us 24/7</h5>
                  <h3 className="text-primary font-weight-bold">+1 844-324-5726</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Stats Counter Section ======= */}
      <section id="stats-counter" className="stats-counter section-bg">
        <div className="container">
          <div className="row gy-4">
            {[
              { label: "Happy Clients", count: 120, icon: "bi-emoji-smile", color: "blue" },
              { label: "Successful Audits", count: 350, icon: "bi-journal-richtext", color: "orange" },
              { label: "LED Retrofits", count: 1000, icon: "bi-lightning-charge", color: "green" },
              { label: "Project Teams", count: 12, icon: "bi-people", color: "pink" },
            ].map((stat, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className={`bi ${stat.icon} color-${stat.color} flex-shrink-0`}></i>
                  <div>
                    <span className="purecounter d-block h4 mb-0 font-weight-bold">{stat.count}+</span>
                    <p className="mb-0">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Alt Services Section ======= */}
      <section id="alt-services" className="alt-services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80)" }} data-aos="zoom-in"></div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Precision Engineering for Modern Solutions</h3>
              <p>We provide a wide range of analytical and design services to ensure your lighting investment delivers maximum returns.</p>
              
              {[
                { title: "Lighting Audit & Insights", icon: "bi-easel", text: "Detailed energy consumption analysis and rebate identification." },
                { title: "Design & Plan", icon: "bi-patch-check", text: "Custom photometric layouts for optimal light distribution." },
                { title: "ROI Analysis", icon: "bi-brightness-high", text: "Financial forecasting for energy savings and maintenance reduction." },
                { title: "Smart Integration", icon: "bi-brightness-high", text: "Seamless connection with modern smart building systems." }
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

      {/* ======= Alt Services Section 2 ======= */}
      <section id="alt-services-2" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4 flex-row-reverse">
            <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1565814329452-e1dee7185ee8?auto=format&fit=crop&w=1200&q=80)" }} data-aos="zoom-in"></div>
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Global Distribution & Support</h3>
              <p>With our robust supply chain, we deliver premium LED components to projects worldwide on-time and on-budget.</p>
              
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-truck flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Hassle-Free Installation</a></h4>
                  <p>Certified electrical teams ready to deploy worldwide for large-scale retrofits.</p>
                </div>
              </div>
              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-box-seam flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Direct Supply Chain</a></h4>
                  <p>Cutting out middlemen to provide the most competitive pricing in the industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Our dedicated team of lighting engineers and project managers ensure your vision is illuminated with precision.</p>
          </div>
          <div className="row gy-5">
            {[
              { name: "John Simon", role: "Head of Engineering", img: "1" },
              { name: "Michel Jack", role: "Lighting Designer", img: "2" },
              { name: "Ralph Edwards", role: "Project Lead", img: "3" },
            ].map((member, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                <div className="member-img rounded overflow-hidden shadow-sm">
                  <img src={`/assets/img/team/team-${member.img}.jpg`} className="img-fluid" alt="" />
                </div>
                <div className="member-info text-center mt-3">
                  <h4>{member.name}</h4>
                  <span className="text-primary font-weight-bold">{member.role}</span>
                  <p className="small text-muted mt-2">Expert in high-efficiency LED deployments and smart control systems.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Client Feedback</h2>
            <p>Don't just take our word for it—see what our industrial and commercial partners are saying about RAM General Supply.</p>
          </div>
          
          <div className="row gy-4">
            {[
              { name: "Saul Goodman", role: "Industrial Facility Manager", text: "The LED retrofit cut our energy costs by 65%. The team was professional and the installation was seamless." },
              { name: "Sara Wilsson", role: "Commercial Developer", text: "RAM General provided the best ROI analysis we've seen. Their design plan was perfect for our new office complex." }
            ].map((t, i) => (
              <div key={i} className="col-lg-6">
                <div className="testimonial-item p-4 bg-white shadow-sm rounded">
                  <div className="stars text-warning mb-2">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p className="fst-italic font-secondary">"{t.text}"</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="ps-3">
                      <h4 className="h6 mb-0 font-weight-bold">{t.name}</h4>
                      <span className="small text-muted">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
