import type { Testimonial } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-soft-green">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-dark-sage sm:text-3xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delayMs={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-soft-green sm:p-8">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-shrink-0 text-sage"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1-1v-3H6.5a.5.5 0 0 1-.5-.5V10a1 1 0 0 1 1-1h3V7zm11 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a1 1 0 0 0 1-1v-3h-2.5a.5.5 0 0 1-.5-.5V10a1 1 0 0 1 1-1h3V7z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-dark-sage/80 sm:text-base">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-dark-sage">
                  {testimonial.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
