import type { FaqItem } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

type FaqProps = {
  faqs: FaqItem[];
};

export default function Faq({ faqs }: FaqProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-dark-sage sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={i} delayMs={i * 100}>
              <details className="group rounded-2xl bg-white shadow-sm ring-1 ring-soft-green">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-dark-sage [&::-webkit-details-marker]:hidden sm:text-base">
                  {faq.question}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 flex-shrink-0 text-sage transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-dark-sage/80">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
