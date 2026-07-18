import Logo from "@/components/icons/Logo";
import Reveal from "@/components/Reveal";
import { NAV_LINKS, type SiteContent } from "@/lib/content";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 8.97 6.65a2 2 0 0 0 2.06 0L22 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

type FooterProps = {
  site: SiteContent["site"];
  contact: SiteContent["contact"];
};

export default function Footer({ site, contact }: FooterProps) {
  return (
    <footer className="bg-sage text-warm-grey">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <Reveal className="min-w-0 text-left">
            <div className="group inline-block">
              <Logo wordmarkClassName="text-warm-grey" markClassName="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-warm-grey/80">{site.tagline}</p>
            <div className="mt-4 flex justify-start gap-3">
              <a
                href={contact.instagram}
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-grey/10 text-warm-grey/90 transition-all duration-300 hover:scale-110 hover:bg-light-sage hover:text-dark-sage"
              >
                <InstagramIcon />
              </a>
              <a
                href={contact.facebook}
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-grey/10 text-warm-grey/90 transition-all duration-300 hover:scale-110 hover:bg-light-sage hover:text-dark-sage"
              >
                <FacebookIcon />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-grey/10 text-warm-grey/90 transition-all duration-300 hover:scale-110 hover:bg-light-sage hover:text-dark-sage"
              >
                <MailIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="min-w-0 text-left lg:pl-24">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-warm-grey/70">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-warm-grey/90 transition-all duration-200 hover:translate-x-1 hover:text-light-sage"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={200} className="min-w-0 text-left lg:pl-32">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-warm-grey/70">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-warm-grey/90">
              <li className="flex items-start gap-2">
                <LocationIcon />
                <span className="break-words">{contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon />
                <span className="break-words">{contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-words transition-colors duration-200 hover:text-light-sage"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon />
                <span className="break-words">{contact.hours}</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 border-t border-warm-grey/20 pt-6 text-center">
          <p className="text-xs text-warm-grey/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
