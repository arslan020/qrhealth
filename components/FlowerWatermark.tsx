// Subtle brand flower/lotus motif used as a background watermark across sections.
// className controls position, size and color (e.g. "-right-24 -top-24 h-72 w-72 text-sage/10").

type FlowerWatermarkProps = {
  className: string;
};

export default function FlowerWatermark({ className }: FlowerWatermarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <g transform="translate(50,50)">
        {Array.from({ length: 8 }).map((_, j) => (
          <ellipse key={j} cx="0" cy="-22" rx="9" ry="20" fill="currentColor" transform={`rotate(${(360 / 8) * j})`} />
        ))}
      </g>
    </svg>
  );
}
