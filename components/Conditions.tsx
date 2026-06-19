import { CONDITIONS } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

export default function Conditions() {
  return (
    <section id="conditions" className="relative overflow-hidden border-t border-white/15 bg-dark-sage">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Conditions We Treat
          </h2>
        </Reveal>

        <Reveal
          delayMs={150}
          className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
        >
          <div className="columns-1 gap-x-10 sm:columns-2 lg:columns-3">
            {CONDITIONS.map((condition, i) => (
              <Reveal key={condition} delayMs={Math.min(i, 14) * 40}>
                <div className="group -mx-3 mb-4 flex items-start gap-3 rounded-lg px-3 py-1.5 text-sm text-white/85 transition-all duration-200 hover:translate-x-1 hover:bg-white/15 hover:text-white hover:shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-light-sage transition-transform duration-200 group-hover:scale-125"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{condition}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/80">
            Have a condition not listed? Many issues respond well to a bespoke treatment plan.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-dark-sage transition hover:bg-warm-grey"
          >
            Get in touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}
