import Link from "next/link";

export default function Services() {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Services</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li>Services</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= Services Section ======= */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {[
              { title: "Nesciunt Mete", icon: "fa-mountain-city" },
              { title: "Eosle Commodi", icon: "fa-arrow-up-from-ground-water" },
              { title: "Ledo Markt", icon: "fa-compass-drafting" },
              { title: "Asperiores Commodit", icon: "fa-trowel-bricks" },
              { title: "Velit Doloremque", icon: "fa-helmet-safety" },
              { title: "Dolori Architecto", icon: "fa-arrow-up-from-ground-water" },
            ].map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <Link href="/service-details" className="readmore stretched-link">
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Service Cards Section ======= */}
      <section id="services-cards" className="services-cards">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {[
              { title: "Quasi eaque omnis", items: ["Ullamco laboris nisi ut aliquip", "Duis aute irure dolor in reprehenderit", "Ullamco laboris nisi ut aliquip ex ea"] },
              { title: "Et nemo dolores consectetur", items: ["Enim temporibus maiores eligendi", "Ut maxime ut quibusdam quam qui", "Officiis aspernatur in officiis"] },
              { title: "Staque laboriosam modi", items: ["Quis voluptates laboriosam numquam", "Treva libero sunt quis veniam ut", "Debitis eos est est corrupti"] },
              { title: "Dignissimos suscipit iste", items: ["Veritatis qui reprehenderit quis", "Accusantium vel numquam sunt minus", "Voluptatem pariatur est sationem"] },
            ].map((card, idx) => (
              <div key={idx} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={(idx + 1) * 100}>
                <h3>{card.title}</h3>
                <p>Eius non minus autem soluta ut ui labore omnis quisquam corrupti autem odit voluptas quos commodi magnam occaecati.</p>
                <ul className="list-unstyled">
                  {card.items.map((item, iidx) => (
                    <li key={iidx}><i className="bi bi-check2"></i> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= Alt Services Section 2 ======= */}
      <section id="alt-services-2" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
              <p>Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus maxime minima iste magni sit praesentium assumenda minus. Amet rerum saepe tempora vero.</p>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={i * 100}>
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4><a href="" className="stretched-link">Lorem Ipsum {i}</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 img-bg" style={{ backgroundImage: "url(/assets/img/alt-services-2.jpg)" }} data-aos="zoom-in" data-aos-delay="100"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
