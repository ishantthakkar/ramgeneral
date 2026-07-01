import Link from "next/link";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ uid: string }> }): Promise<Metadata> {
  const client = createClient();
  const resolvedParams = await params;
  try {
    const service = await client.getByUID("services", resolvedParams.uid);
    const title = typeof service.data.title === "string" 
      ? service.data.title 
      : (service.data.title?.[0]?.text || "Service Details");

    return {
      title: `${title} - Neutron Supply INC Supply`,
      description: "Service details for Neutron Supply INC Supply",
    };
  } catch (e) {
    return {
      title: "Service Not Found - Neutron Supply INC Supply",
    };
  }
}

export async function generateStaticParams() {
  const client = createClient();
  try {
    const services = await client.getAllByType("services");
    return services.map((service) => ({ uid: service.uid }));
  } catch (error) {
    return [];
  }
}

export default async function ServiceDetails({ params }: { params: Promise<{ uid: string }> }) {
  const client = createClient();
  const resolvedParams = await params;
  let service: any = null;
  let allServices: any[] = [];
  
  try {
    service = await client.getByUID("services", resolvedParams.uid);
    allServices = await client.getAllByType("services");
  } catch (error) {
    console.error("Prismic fetch error for service details:", error);
    notFound();
  }

  if (!service) {
    notFound();
  }

  const titleStr = typeof service.data.title === "string" 
    ? service.data.title 
    : (service.data.title?.[0]?.text || "Untitled Service");

  // Get the main image from the gallery if available
  const mainImage = service.data.img_gallery && service.data.img_gallery.length > 0 
    ? service.data.img_gallery[0].img?.url 
    : "/assets/img/services.jpg";

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')", minHeight: '40vh', position: 'relative' }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2 style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '1px' }}>{titleStr}</h2>
          <ol className="mt-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>{titleStr}</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= Service Details Section ======= */}
      <section id="service-details" className="service-details section-bg" style={{ padding: '80px 0' }}>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">

            {/* Sidebar Navigation */}
            <div className="col-lg-4">
              <div className="services-list shadow-sm" style={{ border: 'none', borderRadius: '12px', overflow: 'hidden', padding: '25px', backgroundColor: '#fff' }}>
                <h4 className="mb-4" style={{ fontSize: '20px', fontWeight: '700', color: '#1a202c', borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px' }}>
                  Our Services
                </h4>
                {allServices.map((srv) => {
                  const isActive = srv.uid === service.uid;
                  const srvTitle = typeof srv.data.title === "string" 
                    ? srv.data.title 
                    : (srv.data.title?.[0]?.text || "Service");
                  
                  return (
                    <Link 
                      key={srv.uid}
                      href={`/services/${srv.uid}`} 
                      className={`d-flex align-items-center justify-content-between mb-2 py-3 px-3 rounded transition-all duration-300 ${isActive ? "active-service bg-light text-primary" : "text-secondary"}`}
                      style={{ 
                        textDecoration: 'none', 
                        fontSize: '15px', 
                        fontWeight: isActive ? '700' : '500',
                        backgroundColor: isActive ? '#fff7e6' : 'transparent',
                        color: isActive ? 'var(--color-primary)' : '#4a5568',
                        border: isActive ? '1px solid #ffeeba' : '1px solid transparent'
                      }}
                    >
                      <span>{srvTitle}</span>
                      <i className={`bi bi-chevron-right ${isActive ? 'opacity-100' : 'opacity-40'}`} style={{ fontSize: '12px' }}></i>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 p-4 rounded shadow-sm" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                <h4 style={{ color: '#fff', fontWeight: '700' }}>Need Expert Advice?</h4>
                <p className="mb-0 mt-3" style={{ fontSize: '14px', lineHeight: '1.6', opacity: 0.9 }}>
                  Our specialized lighting engineers are ready to assist you with a custom plan tailored to your project.
                </p>
                <Link href="/contact" className="btn btn-outline-light mt-4 w-100 py-2" style={{ fontWeight: '600', borderRadius: '50px' }}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-8">
              {mainImage && (
                <div className="mb-5 overflow-hidden rounded shadow-lg" style={{ maxHeight: '450px' }}>
                  <img 
                    src={mainImage} 
                    alt={titleStr} 
                    className="img-fluid w-100 transition-transform duration-700 hover:scale-105" 
                    style={{ objectFit: 'cover', height: '450px' }}
                  />
                </div>
              )}
              
              <div className="content-wrap bg-white p-4 p-md-5 rounded shadow-sm">
                <h2 className="mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#1a202c' }}>{titleStr}</h2>
                
                <div className="service-description" style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568' }}>
                  {/* Render Prismic Rich Text for Description */}
                  {typeof service.data.description === "string" ? (
                    <p>{service.data.description}</p>
                  ) : (
                    service.data.description && <PrismicRichText field={service.data.description} />
                  )}
                </div>

                {/* Render FAQs if they exist */}
                {service.data.faq && service.data.faq.length > 0 && (
                  <div className="mt-5 pt-4 border-top">
                    <h4 className="mb-4" style={{ fontWeight: '700', color: '#2d3748' }}>Frequently Asked Questions</h4>
                    <div className="accordion accordion-flush" id="faqlist">
                      {service.data.faq.map((item: any, index: number) => {
                        const qId = `faq-content-${index}`;
                        const hId = `faq-heading-${index}`;
                        const questionStr = typeof item.question === "string" ? item.question : (item.question?.[0]?.text || "Question");
                        
                        return (
                          <div className="accordion-item border-0 mb-3 bg-light rounded" key={index}>
                            <h3 className="accordion-header" id={hId}>
                              <button 
                                className={`accordion-button rounded ${index !== 0 ? 'collapsed' : ''}`} 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#${qId}`}
                                style={{ backgroundColor: 'transparent', fontWeight: '600', padding: '20px' }}
                              >
                                {questionStr}
                              </button>
                            </h3>
                            <div id={qId} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqlist">
                              <div className="accordion-body" style={{ color: '#4a5568', padding: '0 20px 20px 20px' }}>
                                {typeof item.answer === "string" ? (
                                  <p>{item.answer}</p>
                                ) : (
                                  item.answer && <PrismicRichText field={item.answer} />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery Section */}
              {service.data.img_gallery && service.data.img_gallery.length > 1 && (
                <div className="mt-5">
                  <h4 className="mb-4" style={{ fontWeight: '700', color: '#2d3748' }}>Project Gallery</h4>
                  <div className="row g-4 transition-all">
                    {service.data.img_gallery.slice(1).map((imgItem: any, index: number) => {
                      if (!imgItem.img?.url) return null;
                      return (
                        <div className="col-md-6" key={index}>
                          <div className="gallery-item overflow-hidden rounded shadow-sm" style={{ height: '300px' }}>
                            <img 
                              src={imgItem.img.url} 
                              alt={`Gallery Image ${index + 1}`} 
                              className="img-fluid w-100 h-100 transition-transform duration-500 hover:scale-110" 
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      {/* End Service Details Section */}
    </main>

  );
}
