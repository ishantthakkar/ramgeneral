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
      title: `${title} - RAM General Supply`,
      description: "Service details for RAM General Supply",
    };
  } catch (e) {
    return {
      title: "Service Not Found - RAM General Supply",
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
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('/assets/img/breadcrumbs-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Service Details</h2>
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>{titleStr}</li>
          </ol>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* ======= Service Details Section ======= */}
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">

            <div className="col-lg-4">
              <div className="services-list">
                {allServices.map((srv) => {
                  const isActive = srv.uid === service.uid;
                  const srvTitle = typeof srv.data.title === "string" 
                    ? srv.data.title 
                    : (srv.data.title?.[0]?.text || "Service");
                  
                  return (
                    <Link 
                      key={srv.uid}
                      href={`/services/${srv.uid}`} 
                      className={isActive ? "active" : ""}
                    >
                      {srvTitle}
                    </Link>
                  );
                })}
              </div>

              <h4>Explore our specialized offerings</h4>
              <p>Discover how our comprehensive solutions can help you achieve your goals with quality and precision.</p>
            </div>

            <div className="col-lg-8">
              {mainImage && (
                <img src={mainImage} alt={titleStr} className="img-fluid services-img mb-4" />
              )}
              
              <h3>{titleStr}</h3>
              
              <div className="mt-4">
                {/* Render Prismic Rich Text for Description */}
                {typeof service.data.description === "string" ? (
                  <p>{service.data.description}</p>
                ) : (
                  service.data.description && <PrismicRichText field={service.data.description} />
                )}
              </div>

              {/* Render FAQs if they exist */}
              {service.data.faq && service.data.faq.length > 0 && (
                <div className="mt-5">
                  <h4>Frequently Asked Questions</h4>
                  <div className="accordion accordion-flush mt-3" id="faqlist">
                    {service.data.faq.map((item: any, index: number) => {
                      const qId = `faq-content-${index}`;
                      const hId = `faq-heading-${index}`;
                      const questionStr = typeof item.question === "string" ? item.question : (item.question?.[0]?.text || "Question");
                      
                      return (
                        <div className="accordion-item" key={index}>
                          <h3 className="accordion-header" id={hId}>
                            <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${qId}`}>
                              <i className="bi bi-question-circle question-icon me-2"></i>
                              {questionStr}
                            </button>
                          </h3>
                          <div id={qId} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqlist">
                            <div className="accordion-body">
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

              {/* Render Additional Images if they exist in the gallery (excluding the first one) */}
              {service.data.img_gallery && service.data.img_gallery.length > 1 && (
                <div className="mt-5">
                  <h4>Gallery</h4>
                  <div className="row mt-3 gy-4">
                    {service.data.img_gallery.slice(1).map((imgItem: any, index: number) => {
                      if (!imgItem.img?.url) return null;
                      return (
                        <div className="col-md-6" key={index}>
                          <img src={imgItem.img.url} alt={`Gallery Image ${index + 1}`} className="img-fluid rounded shadow-sm" />
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
