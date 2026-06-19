import Reveal from "@/components/Reveal";

type PhotoBreakProps = {
  image: string;
};

export default function PhotoBreak({ image }: PhotoBreakProps) {
  return (
    <section className="h-[calc(100vh-75px)] h-[calc(100dvh-75px)] overflow-hidden">
      <Reveal className="h-full w-full">
        <div
          className="h-full w-full bg-cover bg-center bg-scroll lg:bg-fixed"
          style={{ backgroundImage: `url('${image}')` }}
          role="img"
          aria-label="Candles on beige fabric"
        />
      </Reveal>
    </section>
  );
}
