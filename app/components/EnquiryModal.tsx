"use client";

import { useState } from "react";

interface EnquiryModalProps {
  productName: string;
  variants?: string[]; // New prop for hardware/technical variations
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ productName, variants = [], isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validated, setValidated] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    
    // In a real app, you would fetch() to an /api/send-email route here
    // Payload would include: productName, variants, customer data etc.
    console.log("SENDING ENQUIRY TO ADMIN...", {
      product: productName,
      // ... gather form data here
    });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setValidated(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title">Enquiry - {productName}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            {isSuccess ? (
              <div className="alert alert-success text-center">
                <i className="bi bi-check-circle-fill d-block mb-2" style={{ fontSize: "2rem" }}></i>
                Thank you! Your enquiry has been sent to RAM General Supply admin.
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                noValidate 
                className={validated ? "was-validated" : ""}
              >
                <div className="mb-3">
                  <label className="form-label small font-weight-bold">Full Name *</label>
                  <input type="text" name="name" className="form-control form-control-sm" required placeholder="Enter your name" />
                  <div className="invalid-feedback small">Please provide your name.</div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small font-weight-bold">Email *</label>
                    <input type="email" name="email" className="form-control form-control-sm" required placeholder="email@example.com" />
                    <div className="invalid-feedback small">Valid email required.</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label small font-weight-bold">Phone *</label>
                    <input type="tel" name="phone" className="form-control form-control-sm" required placeholder="+1..." />
                    <div className="invalid-feedback small">Phone is required.</div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label small font-weight-bold">Variant</label>
                    {variants.length > 0 ? (
                      <select name="variant" className="form-select form-select-sm shadow-none">
                        <option value="">Select</option>
                        {variants.map((v, i) => (
                          <option key={i} value={v}>{v}</option>
                        ))}
                      </select>
                    ) : (
                      <input type="text" name="variant" className="form-control form-control-sm" placeholder="e.g. 4-inch" />
                    )}
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label small font-weight-bold">Qty</label>
                    <input type="number" name="qty" className="form-control form-control-sm" placeholder="10" min="1" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label small font-weight-bold">Voltage</label>
                    <input type="text" name="voltage" className="form-control form-control-sm" placeholder="120-277V" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small font-weight-bold">Location *</label>
                  <input type="text" name="location" className="form-control form-control-sm" required placeholder="City/Country" />
                  <div className="invalid-feedback small">Please specify your location.</div>
                </div>
                <div className="mb-3">
                  <label className="form-label small font-weight-bold">Message (Optional)</label>
                  <textarea name="message" className="form-control form-control-sm" rows={3} placeholder="Tell us about your requirements..."></textarea>
                </div>
                <div className="mt-4">
                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "SEND ENQUIRY"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
