import { SITE } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

const HIGHLIGHTS = [
  { title: "20+ Years Experience", desc: "Practising Traditional Chinese Medicine since the early 2000s." },
  { title: "UK & China Trained", desc: "Clinical training and practice across both healthcare systems." },
  { title: "Bespoke Treatment Plans", desc: "Every session is built around your symptoms and goals." },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-75px)] min-h-[calc(100dvh-75px)] items-center overflow-hidden bg-gradient-to-br from-sage to-dark-sage">
      <FlowerWatermark className="-right-24 -top-24 h-[28rem] w-[28rem] text-white/10 sm:h-[36rem] sm:w-[36rem]" />
      <FlowerWatermark className="-bottom-28 -left-28 h-[26rem] w-[26rem] text-white/10 sm:h-[32rem] sm:w-[32rem]" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {SITE.tagline}
          </h1>
        </Reveal>
        <Reveal delayMs={150}>
          <div className="mx-auto mt-6 max-w-xl space-y-4">
            {SITE.welcomeParagraphs.map((para) => (
              <p key={para} className="text-base leading-relaxed text-white/90 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={300}>
          <a
            href="#book"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-dark-sage transition hover:bg-warm-grey"
          >
            Book Your Appointment
          </a>
        </Reveal>

        <Reveal delayMs={450} className="mt-16 grid gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="border-t border-white/25 pt-5 text-left sm:text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
