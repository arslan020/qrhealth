"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

const fieldClass =
  "mt-1 w-full border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none transition-colors duration-200 focus:border-light-sage";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = data.get("firstName")?.toString() ?? "";
    const lastName = data.get("lastName")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const phone = data.get("phone")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = `New enquiry from ${firstName} ${lastName}`.trim();
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/15 bg-dark-sage">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 text-white/10 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 text-white/10 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Contact Us
          </h2>
        </Reveal>
        <Reveal delayMs={150}>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/80 sm:text-base">
            Get in touch with us to start your holistic healing journey today. We&apos;re here to
            support you on your path to wellness.
          </p>
        </Reveal>

        <Reveal delayMs={300} className="mt-12 grid gap-12 sm:grid-cols-2">
          <div className="space-y-4 text-sm text-white">
            <p className="font-semibold uppercase tracking-wide text-white/60">Visit or reach us</p>
            <p className="text-white/85">{CONTACT.address}</p>
            <p className="text-white/85">{CONTACT.phone}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-block font-medium text-light-sage transition-colors hover:text-white"
            >
              {CONTACT.email}
              <span className="block h-px max-w-0 bg-light-sage transition-all duration-300 group-hover:max-w-full" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="text-sm font-medium text-white">
                  First name *
                </label>
                <input id="firstName" name="firstName" type="text" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-medium text-white">
                  Last name *
                </label>
                <input id="lastName" name="lastName" type="text" required className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email *
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-white">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea id="message" name="message" rows={3} className={fieldClass} />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-dark-sage transition-all duration-300 hover:scale-[1.02] hover:bg-light-sage hover:shadow-lg"
            >
              Submit
            </button>

            {sent && (
              <p className="text-sm text-white/80">
                Your email app should now open with your message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
