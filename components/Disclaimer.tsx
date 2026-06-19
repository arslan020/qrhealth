import Reveal from "@/components/Reveal";

type DisclaimerProps = {
  disclaimer: string;
};

export default function Disclaimer({ disclaimer }: DisclaimerProps) {
  return (
    <section className="bg-warm-grey">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Reveal className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-soft-green sm:p-8">
          <svg
            viewBox="0 0 24 24"
            className="mt-0.5 h-6 w-6 flex-shrink-0 text-sage"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="11" x2="12" y2="16" />
            <circle cx="12" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-dark-sage">
              Disclaimer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-dark-sage/80">{disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
