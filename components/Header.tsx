"use client";

import { useState } from "react";
import Logo from "@/components/icons/Logo";
import { CALENDLY_URL, NAV_LINKS } from "@/lib/content";

const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=A6AB95`;

export default function Header() {
  const [open, setOpen] = useState(false);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_EMBED_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-soft-green/70 bg-warm-grey/95 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <a href="#home" onClick={() => setOpen(false)} className="justify-self-start">
            <Logo />
          </a>

          <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group whitespace-nowrap text-sm font-medium text-dark-sage transition-colors hover:text-sage"
              >
                {link.label}
                <span className="block h-px max-w-0 bg-sage transition-all duration-300 group-hover:max-w-full" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={openCalendly}
            className="hidden justify-self-end rounded-full bg-sage px-5 py-2 text-sm font-semibold text-white transition hover:bg-dark-sage lg:block"
          >
            Book Now
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-dark-sage lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in drawer */}
      <nav
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-72 max-w-[80%] flex-col bg-warm-grey shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-dark-sage"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-medium text-dark-sage transition hover:bg-soft-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-auto px-6 pb-16 pt-6">
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-sage px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-dark-sage"
          >
            Book Now
          </a>
        </div>
      </nav>
    </>
  );
}
