"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface HeaderProps {
  categories?: any[];
  subCategories?: any[];
}

export default function Header({ categories = [], subCategories = [] }: HeaderProps) {
  const pathname = usePathname();

  useEffect(() => {
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    if (mobileNavShow && mobileNavHide) {
      const mobileNavToogle = () => {
        document.querySelector('body')?.classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
      }

      mobileNavShow.addEventListener('click', mobileNavToogle);
      mobileNavHide.addEventListener('click', mobileNavToogle);

      return () => {
        mobileNavShow.removeEventListener('click', mobileNavToogle);
        mobileNavHide.removeEventListener('click', mobileNavToogle);
      };
    }
  }, []);

  const isActive = (path: string) => pathname === path ? "active" : "";

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="RAM General Supply Logo" style={{ maxHeight: "55px", width: "auto", filter: "brightness(0) invert(1)" }} />
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link href="/" className={isActive("/")}>Home</Link></li>
            <li><Link href="/about" className={isActive("/about")}>About Us</Link></li>
            <li className="dropdown megamenu">
              <a href="#">
                <span>Products</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li>
                  <div className="container">
                    <div className="row">
                      {categories.length > 0 ? (
                        categories.map((cat) => (
                          <div key={cat.id} className="col-lg-4 megamenu-column">
                            {/* Uses 'title' from Category JSON */}
                            <h4>{cat.data?.title || "Category"}</h4>
                            <ul>
                              {subCategories
                                .filter(sub => sub.data?.category?.id === cat.id)
                                .map(sub => (
                                  <li key={sub.id}>
                                    {/* Matches new route /collections/:uid */}
                                    <Link href={`/collections/${sub.uid}`}>
                                      {sub.data?.name || "Sub Category"}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <div className="col-lg-12">
                          <p className="text-center p-3 text-muted">No products found. Please check Prismic content.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li><Link href="/services" className={isActive("/services")}>Our Services</Link></li>
            <li><Link href="#" className={isActive("/rebates")}>Rebates & Incentives</Link></li>
            <li><Link href="/blog" className={isActive("/blog")}>Blogs</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
