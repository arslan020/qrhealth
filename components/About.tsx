import type { SiteContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

type AboutProps = {
  about: SiteContent["about"];
};

export default function About({ about }: AboutProps) {
  if (!about || about.paragraphs.length === 0) return null;

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 sm:grid-cols-[2fr_3fr]">
        <Reveal>
          {about.photoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={about.photoUrl}
              alt={about.heading}
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-sm ring-1 ring-soft-green"
            />
          ) : (
            <div className="mx-auto flex aspect-[4/5] w-full max-w-sm flex-col items-center justify-center gap-3 rounded-2xl bg-soft-green text-dark-sage/50 ring-1 ring-soft-green">
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">Photo coming soon</span>
            </div>
          )}
        </Reveal>

        <div className="text-center sm:text-left">
          <Reveal>
            <h2 className="text-2xl font-semibold text-dark-sage sm:text-3xl">{about.heading}</h2>
          </Reveal>
          <div className="mt-5 space-y-4">
            {about.paragraphs.map((para, i) => (
              <Reveal key={i} delayMs={150 + i * 100}>
                <p className="text-sm leading-relaxed text-dark-sage/80 sm:text-base">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
