"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    AOS: any;
    GLightbox: any;
  }
}

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initial initialization when component mounts or pathname changes
    const initLibraries = () => {
      // Initialize AOS
      if (typeof window.AOS !== "undefined") {
        window.AOS.init({
          duration: 800,
          easing: "slide",
          once: true,
          mirror: false,
        });
        window.AOS.refresh();
      }

      // Initialize GLightbox
      if (typeof window.GLightbox !== "undefined") {
        window.GLightbox({
          selector: '.glightbox'
        });
      }
    };

    // If Script is already loaded, init now.
    // Otherwise, we can wait a bit or let the Script's natural load order handle it.
    // In Next.js with strategy="afterInteractive", it might take a moment.
    const timer = setTimeout(initLibraries, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
