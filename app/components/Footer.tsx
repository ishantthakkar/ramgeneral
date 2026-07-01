import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        color: "#e5e7eb",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,16,30,0.92) 0%, rgba(10,16,30,0.86) 45%, rgba(10,16,30,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative" style={{ padding: "72px 0 32px" }}>
        <div className="row gy-4 align-items-start">
          <div className="col-lg-6">
            <Link href="/#hero" className="text-decoration-none d-inline-block">
              <span style={{ color: "#fff", fontSize: "1.75rem", fontWeight: 900, letterSpacing: "0.7px" }}>
                NEUTRON SUPPLY INC
              </span>
            </Link>
            <p style={{ marginTop: 14, color: "rgba(229,231,235,0.9)", maxWidth: 560, lineHeight: 1.8, fontSize: 16 }}>
              LED fixtures, retrofits, and lighting solutions for commercial and industrial projects.
            </p>

            <div style={{ marginTop: 18, display: "grid", gap: 12, maxWidth: 520 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <i className="bi bi-telephone" style={{ color: "#fbbf24", fontSize: 20, lineHeight: 1 }}></i>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>Please call</div>
                  <div style={{ fontSize: 16 }}>973-261-9596</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <i className="bi bi-envelope" style={{ color: "#fbbf24", fontSize: 20, lineHeight: 1 }}></i>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>For Info</div>
                  <a href="mailto:info@neutron.supply" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 16 }}>
                    info@neutron.supply
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <i className="bi bi-envelope" style={{ color: "#fbbf24", fontSize: 20, lineHeight: 1 }}></i>
                <div>
                  <div style={{ fontWeight: 800, color: "#fff", fontSize: 16 }}>For Sales</div>
                  <a href="mailto:sales@neutron.supply" style={{ color: "#e5e7eb", textDecoration: "none", fontSize: 16 }}>
                    sales@neutron.supply
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div style={{ fontWeight: 900, color: "#fff", marginBottom: 12, fontSize: 16 }}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/#hero" style={{ color: "#e5e7eb", textDecoration: "none", width: "fit-content", fontSize: 16 }}>
                Home
              </Link>
              <Link href="/#about" style={{ color: "#e5e7eb", textDecoration: "none", width: "fit-content", fontSize: 16 }}>
                About
              </Link>
              <Link href="/#contact" style={{ color: "#e5e7eb", textDecoration: "none", width: "fit-content", fontSize: 16 }}>
                Contact
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div style={{ fontWeight: 900, color: "#fff", marginBottom: 12, fontSize: 16 }}>Location</div>
            <div style={{ color: "rgba(229,231,235,0.9)", lineHeight: 1.9, fontSize: 16 }}>
              255 East 17th Street<br />
              Paterson, New Jersey<br />
              USA 07524
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.08)",
            marginTop: 36,
            marginBottom: 18,
          }}
        />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          <div style={{ color: "rgba(229,231,235,0.8)", fontSize: 14 }}>
            &copy; {new Date().getFullYear()} <strong style={{ color: "#fff" }}>Neutron Supply INC</strong>. All rights reserved.
          </div>
          <div style={{ color: "rgba(229,231,235,0.6)", fontSize: 14 }}>
            Built for fast quotes and reliable supply.
          </div>
        </div>
      </div>
    </footer>
  );
}
