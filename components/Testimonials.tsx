"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, startX: 0, startLeft: 0 });
  const [dragging, setDragging] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    el?.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el?.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("figure");
    const amount = card ? card.clientWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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

        <Reveal delayMs={150}>
          <div
            ref={trackRef}
            onPointerDown={(e) => {
              if (e.pointerType !== "mouse") return;
              const el = trackRef.current;
              if (!el) return;
              drag.current = { down: true, moved: false, startX: e.clientX, startLeft: el.scrollLeft };
              setDragging(true);
            }}
            onPointerMove={(e) => {
              if (!drag.current.down) return;
              const el = trackRef.current;
              if (!el) return;
              const dx = e.clientX - drag.current.startX;
              if (Math.abs(dx) > 3) drag.current.moved = true;
              el.scrollLeft = drag.current.startLeft - dx;
            }}
            onPointerUp={() => {
              drag.current.down = false;
              setDragging(false);
            }}
            onPointerLeave={() => {
              drag.current.down = false;
              setDragging(false);
            }}
            className={`mt-10 flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {testimonials.map((testimonial, i) => (
              <figure
                key={i}
                className="flex w-[85%] flex-shrink-0 snap-start flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-soft-green sm:w-[calc(50%-12px)] sm:p-8"
              >
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
            ))}
          </div>
        </Reveal>

        {(canPrev || canNext) && (
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white transition hover:bg-dark-sage disabled:opacity-40 disabled:hover:bg-sage"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white transition hover:bg-dark-sage disabled:opacity-40 disabled:hover:bg-sage"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
