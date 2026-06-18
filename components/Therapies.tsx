import { THERAPIES } from "@/lib/content";
import TherapyIcon from "@/components/icons/TherapyIcon";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

export default function Therapies() {
  return (
    <section id="therapies" className="relative overflow-hidden bg-warm-grey">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-dark-sage sm:text-3xl">
            Therapies
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPIES.map((therapy, i) => (
            <Reveal
              key={therapy.name}
              delayMs={(i % 3) * 100}
              className={i === THERAPIES.length - 1 ? "lg:col-start-2" : ""}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-soft-green transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-xl hover:ring-sage/40">
                <div className="absolute inset-0 scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/therapies/${therapy.icon}.jpg`}
                    alt={therapy.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-sage/90 via-dark-sage/40 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-6 text-lg font-semibold text-white">
                    {therapy.name}
                  </h3>
                </div>

                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-center gap-3">
                    <TherapyIcon icon={therapy.icon} className="h-8 w-8 flex-shrink-0 text-sage" />
                    <h3 className="text-lg font-semibold text-dark-sage">
                      {therapy.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-dark-sage/80">
                    {therapy.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
