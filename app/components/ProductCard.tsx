"use client";

import { useState } from "react";
import { PrismicText } from "@prismicio/react";
import EnquiryModal from "./EnquiryModal";

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  // Extract variants from the dedicated "variant" group field in Prismic
  const variants = product.data?.variant
    ? product.data.variant
        .map((v: any) => v.name) // Assuming the field inside the group is "name" based on the screenshot
        .filter((name: string) => !!name)
    : [];

  return (
    <>
      <div className="product-card d-md-flex p-3 mb-3 bg-white rounded" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.04)" }}>
        {/* Left Side: Image */}
        <div className="product-image-wrap d-flex align-items-center justify-content-center mb-3 mb-md-0 bg-light rounded" style={{ minWidth: "160px", maxWidth: "160px", padding: "10px" }}>
          {product.data?.img?.url ? (
            <img src={product.data.img.url} alt={product.data.img.alt || product.data.name} className="img-fluid" style={{ maxHeight: "140px", objectFit: "contain" }} />
          ) : (
            <div className="d-flex align-items-center justify-content-center" style={{ height: "140px" }}>
              <i className="bi bi-image text-muted" style={{ fontSize: "2rem" }}></i>
            </div>
          )}
        </div>

        {/* Middle: Content */}
        <div className="product-info flex-grow-1 px-md-4" style={{ borderRight: "1px solid #eaeaea" }}>
          <div className="d-flex flex-column mb-2">
            <h3 className="product-title font-weight-bold mb-1" style={{ fontSize: "20px", color: "#2c3e50" }}>{product.data?.name}</h3>
            {product.data?.sku && (
              <small className="text-muted" style={{ letterSpacing: "0.5px", fontSize: "12px" }}>
                <strong className="text-dark">SKU:</strong> {product.data.sku}
              </small>
            )}
          </div>

          <div className="features-grid row small mt-3">
            {product.data?.feature?.map((item: any, index: number) => (
              <div key={index} className="col-md-6 mb-2 d-flex">
                <div style={{ minWidth: "125px", fontWeight: "700", color: "#2c3e50" }}>
                  {item.title?.replace?.(/:\s*$/, '')}:
                </div>
                <div className="text-muted flex-grow-1 text-break">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Certification Icons from Prismic */}
          <div className="certification-icons d-flex flex-wrap mt-4 gap-3">
            {product.data?.feature_img?.map((item: any, index: number) => (
              item.img?.url && (
                <div key={index} className="cert-box-small shadow-sm" style={{ padding: "5px", borderRadius: "4px", backgroundColor: "#f8f9fa", border: "1px solid #ebebeb" }}>
                  <img
                    src={item.img.url}
                    alt={item.img.alt || "Certification"}
                    style={{ width: "35px", height: "35px", objectFit: "contain" }}
                  />
                </div>
              )
            ))}
          </div>
        </div>

        {/* Right Side: Price & Action */}
        <div className="product-price-action text-right pl-md-4 d-flex flex-column justify-content-center align-items-end" style={{ minWidth: "160px" }}>
          <button
            className="btn btn-primary font-weight-bold shadow-sm"
            style={{ borderRadius: "50px", padding: "10px 30px", letterSpacing: "1px", border: "none", backgroundColor: "var(--color-primary)", color: "#fff" }}
            onClick={() => setShowModal(true)}
          >
            ENQUIRE
          </button>
        </div>
      </div>

      <EnquiryModal
        productName={product.data?.name || "Product"}
        variants={variants}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
