// Brand mandala motif (from the QR Health logo) used as a background watermark across sections.
// className controls position and size (e.g. "-right-24 -top-24 h-72 w-72").

type FlowerWatermarkProps = {
  className: string;
};

export default function FlowerWatermark({ className }: FlowerWatermarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/mandala-watermark.svg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute select-none opacity-[0.14] ${className}`}
    />
  );
}
