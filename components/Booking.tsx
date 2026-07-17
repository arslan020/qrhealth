"use client";

import Script from "next/script";
import Reveal from "@/components/Reveal";
import { CALENDLY_URL } from "@/lib/content";

const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=7A8E6F`;

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

export default function Booking() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_EMBED_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  };

  return (
    <section id="book" className="bg-soft-green">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-dark-sage sm:text-3xl">
            Book Your Appointment
          </h2>
        </Reveal>
        <Reveal delayMs={150}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-dark-sage/90 sm:text-base">
            Choose your clinic location, select your treatment, and book online in minutes. As
            part of booking, you&apos;ll be asked to complete a short medical history and outline
            your primary symptoms or reason for visiting — this allows your treatment plan to be
            tailored specifically to you before you even arrive.
          </p>
        </Reveal>

        <Reveal delayMs={300}>
          <button
            type="button"
            onClick={openCalendly}
            className="mx-auto mt-8 block w-fit rounded-full bg-sage px-8 py-3 text-sm font-semibold text-white transition hover:bg-dark-sage"
          >
            Book Now
          </button>
        </Reveal>

        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}
