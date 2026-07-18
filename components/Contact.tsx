"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

const fieldClass =
  "mt-1 w-full border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none transition-colors duration-200 focus:border-light-sage";

type ContactProps = {
  contact: SiteContent["contact"];
};

export default function Contact({ contact }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bot trap
    const firstName = data.get("firstName")?.toString() ?? "";
    const lastName = data.get("lastName")?.toString() ?? "";

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email: data.get("email")?.toString() ?? "",
          phone: data.get("phone")?.toString() ?? "",
          message: data.get("message")?.toString() ?? "",
          _subject: `New enquiry from ${firstName} ${lastName}`.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/15 bg-sage">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />

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
            <p className="text-white/85">{contact.address}</p>
            <p className="text-white/85">{contact.phone}</p>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-block font-medium text-white transition-colors hover:text-white/80"
            >
              {contact.email}
              <span className="block h-px max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
              disabled={status === "sending"}
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-dark-sage transition-all duration-300 hover:scale-[1.02] hover:bg-light-sage hover:shadow-lg disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-white">
                Thank you — your message has been sent. We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-200">
                Sorry, something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
