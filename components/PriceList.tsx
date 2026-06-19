import type { PriceRow } from "@/lib/content";
import Reveal from "@/components/Reveal";
import FlowerWatermark from "@/components/FlowerWatermark";

type PriceListProps = {
  priceList: PriceRow[];
};

export default function PriceList({ priceList }: PriceListProps) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-warm-grey">
      <FlowerWatermark className="-right-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" />
      <FlowerWatermark className="-bottom-24 -left-24 h-72 w-72 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold text-dark-sage sm:text-3xl">
            Price List
          </h2>
        </Reveal>

        <Reveal delayMs={150} className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-soft-green">
          <table className="hidden w-full text-left sm:table">
            <thead className="bg-soft-green text-dark-sage">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold">Treatment</th>
                <th className="px-6 py-4 text-sm font-semibold">Duration</th>
                <th className="px-6 py-4 text-sm font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((row, i) => (
                <tr
                  key={i}
                  className={`group cursor-default transition-colors duration-200 hover:bg-sage/10 ${
                    i % 2 === 1 ? "bg-soft-green/40" : ""
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-dark-sage transition-colors duration-200 group-hover:font-semibold group-hover:text-sage">
                    {row.treatment}
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-sage/80">{row.duration}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-sage">
                    <span className="inline-block transition-transform duration-200 group-hover:scale-125">
                      {row.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="divide-y divide-soft-green sm:hidden">
            {priceList.map((row, i) => (
              <div
                key={i}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-sage/10"
              >
                <div>
                  <p className="text-sm font-medium text-dark-sage transition-colors duration-200 group-hover:text-sage">
                    {row.treatment}
                  </p>
                  <p className="text-xs text-dark-sage/70">{row.duration}</p>
                </div>
                <p className="text-sm font-semibold text-sage">
                  <span className="inline-block transition-transform duration-200 group-hover:scale-125">
                    {row.price}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
