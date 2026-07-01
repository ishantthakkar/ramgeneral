import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Neutron Supply INC Supply",
  description: "Explore the wide range of services offered by Neutron Supply INC",
};

export default async function Services() {
  const client = createClient();
  let services: any[] = [];
  
  try {
    services = await client.getAllByType("services");
    console.log("Prismic Debug: Fetched services count:", services.length);
  } catch (error) {
    console.error("Prismic fetch error for services:", error);
  }

  // Fallback icons for services, as Prismic type might not have an icon field yet
  const fallbackIcons = [
    "fa-mountain-city",
    "fa-arrow-up-from-ground-water",
    "fa-compass-drafting",
    "fa-trowel-bricks",
    "fa-helmet-safety"
  ];

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
            
            {services.length > 0 ? (
              services.map((service, idx) => {
                const iconClass = fallbackIcons[idx % fallbackIcons.length];
                const titleStr = typeof service.data.title === "string" 
                  ? service.data.title 
                  : (service.data.title?.[0]?.text || "Untitled Service");
                
                const descriptionStr = typeof service.data.description === "string"
                  ? service.data.description
                  : (service.data.description?.[0]?.text?.substring(0, 150) + "..." || "Read more about our service...");

                return (
                  <div key={service.uid} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="service-item position-relative h-100">
                      <div className="icon">
                        <i className={`fa-solid ${iconClass}`}></i>
                      </div>
                      <h3>{titleStr}</h3>
                      <p>{descriptionStr}</p>
                      <Link href={`/services/${service.uid}`} className="readmore stretched-link">
                        Learn more <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center py-5">
                <h4>No services currently available. Please check back later.</h4>
              </div>
            )}
            
          </div>
        </div>
      </section>

      {/* ======= Servie Cards Section ======= */}
      {/* The HTML template has a Services Cards section, but we will omit it or use static placeholders as Prismic data is only for individual services */}
      
    </main>
  );
}
