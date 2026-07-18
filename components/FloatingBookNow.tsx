"use client";

import Script from "next/script";
import { CALENDLY_URL } from "@/lib/content";

const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=A6AB95`;

export default function FloatingBookNow() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_EMBED_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openCalendly}
        aria-label="Book an appointment"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-dark-sage sm:bottom-6 sm:right-6 lg:hidden"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book Now
      </button>

      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
