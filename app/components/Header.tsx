"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
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
  const isHome = pathname === "/";

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center text-decoration-none">
          <span style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.5px" }}>
            NEUTRON SUPPLY INC
          </span>
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link href={isHome ? "#hero" : "/"} className={isActive("/")}>Home</Link></li>
            <li><Link href={isHome ? "#about" : "/#about"}>About Us</Link></li>
            <li><Link href={isHome ? "#contact" : "/#contact"}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
