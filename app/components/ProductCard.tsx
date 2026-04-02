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
      <div className="product-card d-md-flex p-4 mb-4 shadow-sm bg-white rounded border-0">
        {/* Left Side: Image */}
        <div className="product-image-wrap text-center mb-4 mb-md-0" style={{ minWidth: "180px", maxWidth: "180px" }}>
          {product.data?.img?.url ? (
            <img src={product.data.img.url} alt={product.data.img.alt || product.data.name} className="img-fluid" />
          ) : (
            <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
              <i className="bi bi-image text-muted" style={{ fontSize: "2rem" }}></i>
            </div>
          )}
        </div>

        {/* Middle: Content */}
        <div className="product-info flex-grow-1 px-md-4 border-right-md">
          <div className="d-flex flex-column mb-3">
            <h2 className="product-title mb-1">{product.data?.name}</h2>
            {product.data?.sku && (
              <small className="text-muted font-weight-bold" style={{ letterSpacing: "0.5px" }}>
                SKU: {product.data.sku}
              </small>
            )}
          </div>

          <div className="features-grid row small gy-2 gx-4">
            {product.data?.feature?.map((item: any, index: number) => (
              <div key={index} className="col-md-6 d-flex">
                <span className="font-weight-bold mr-2 text-dark" style={{ whiteSpace: "nowrap" }}>{item.title} :</span><span className="font-weight-bold">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Dynamic Certification Icons from Prismic */}
          <div className="certification-icons d-flex flex-wrap mt-3 gap-2">
            {product.data?.feature_img?.map((item: any, index: number) => (
              item.img?.url && (
                <div key={index} className="cert-box-small">
                  <img
                    src={item.img.url}
                    alt={item.img.alt || "Certification"}
                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                  />
                </div>
              )
            ))}
          </div>
        </div>

        {/* Right Side: Price & Action */}
        <div className="product-price-action text-right pl-md-4 d-flex flex-column justify-content-center" style={{ minWidth: "160px" }}>
          {/* <div className="price-tag mb-3">
            <div className="current-price h3 font-weight-bold mb-0 text-dark">${product.data?.price || "00.00"}</div>
          </div> */}

          <button
            className="btn btn-danger w-100 font-weight-bold"
            style={{ borderRadius: "0", padding: "10px" }}
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
