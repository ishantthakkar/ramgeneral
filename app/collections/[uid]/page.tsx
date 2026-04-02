import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

interface PageProps {
  params: Promise<{ uid: string }>;
}

export default async function CollectionsPage({ params }: PageProps) {
  const { uid } = await params;
  const client = createClient();

  // Fetch current sub-category
  const subCategory = await client.getByUID("product_sub_category", uid).catch(() => notFound());

  // Fetch products in this sub-category
  const products = await client.getAllByType("products", {
    filters: [
      prismic.filter.at("my.products.sub_category", subCategory.id),
    ],
  });

  // Fetch all sub-categories for the sidebar
  const allSubCategories = await client.getAllByType("product_sub_category");

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2 className="text-uppercase text-white font-weight-bold mb-2">{subCategory.data?.name || "Collection"}</h2>
          <ol className="p-0 m-0">
            <li><Link href="/">Home</Link></li>
            <li>Collections</li>
            <li>{subCategory.data?.name}</li>
          </ol>
        </div>
      </div>

      <section className="product-listing py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Sidebar */}
            <div className="col-lg-3">
              <aside className="sidebar-sticky" style={{ position: "sticky", top: "100px" }}>
                <div className="bg-white p-4 shadow-sm border-0 rounded">
                  <h5 className="mb-4 text-uppercase font-weight-bold border-bottom pb-3" style={{ fontSize: "1rem", letterSpacing: "1px" }}>
                    Lighting Categories
                  </h5>
                  <nav className="category-nav">
                    <ul className="list-unstyled mb-0">
                      {allSubCategories.map((sub) => (
                        <li key={sub.id} className="mb-2">
                          <Link
                            href={`/collections/${sub.uid}`}
                            className={`d-flex align-items-center py-2 px-3 rounded transition ${sub.uid === uid ? "bg-light-primary border-primary-left active" : "text-dark"}`}
                            style={{
                              textDecoration: "none",
                              fontSize: "0.95rem",
                              borderLeft: sub.uid === uid ? "4px solid var(--color-primary)" : "4px solid transparent",
                              fontWeight: sub.uid === uid ? "700" : "400",
                              backgroundColor: sub.uid === uid ? "#f8f9fa" : "transparent"
                            }}
                          >
                            <i className={`bi bi-chevron-right mr-2 ${sub.uid === uid ? "text-primary" : "text-muted small op-5"}`}></i>
                            {sub.data?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

              </aside>
            </div>

            {/* Product List */}
            <div className="col-lg-9">
              <div className="collection-header d-flex justify-content-between align-items-end mb-5 border-bottom pb-3">
                <div>
                  <h6 className="text-primary text-uppercase font-weight-bold mb-1" style={{ fontSize: "0.85rem" }}>Collection Catalog</h6>
                  <h3 className="h2 font-weight-bold mb-0">{subCategory.data?.name}</h3>
                </div>
                <div className="text-muted small">
                  Showing <span className="text-dark font-weight-bold">{products.length}</span> Results
                </div>
              </div>

              <div className="product-list-wrapper">
                {products.length > 0 ? (
                  <div className="row gy-4">
                    {products.map((product) => (
                      <div key={product.id} className="col-12" data-aos="fade-up">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5 bg-white shadow-sm rounded">
                    <i className="bi bi-search text-muted mb-3 d-block" style={{ fontSize: "3rem" }}></i>
                    <h5 className="font-weight-bold">No Products Found</h5>
                    <p className="text-muted">Currently there are no products listed in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
