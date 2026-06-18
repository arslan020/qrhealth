import Reveal from "@/components/Reveal";

// TODO: once the client has a real Calendly link, re-add the embed here:
// "use client"; import Script from "next/script"; import { CALENDLY_URL } from "@/lib/content";
// <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: "320px", height: "700px" }} />
// <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

export default function Booking() {
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
          <a
            href="#contact"
            className="mx-auto mt-8 block w-fit rounded-full bg-sage px-8 py-3 text-sm font-semibold text-white transition hover:bg-dark-sage"
          >
            Contact Us to Book
          </a>
        </Reveal>
      </div>
    </section>
  );
}
