import type { Therapy } from "@/lib/content";

type TherapyIconProps = {
  icon: Therapy["icon"];
  className?: string;
};

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function TherapyIcon({ icon, className = "h-8 w-8 text-dark-sage" }: TherapyIconProps) {
  switch (icon) {
    case "needle":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <line x1="4" y1="20" x2="18" y2="6" />
          <line x1="15" y1="3" x2="21" y2="9" />
          <circle cx="4" cy="20" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "point":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "cup":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <path d="M7 3c-2 2-2 5 0 7s2 5 0 7" />
          <path d="M17 3c2 2 2 5 0 7s-2 5 0 7" />
          <ellipse cx="12" cy="10" rx="5" ry="2.2" />
        </svg>
      );
    case "hand":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <path d="M7 13V6a1.5 1.5 0 0 1 3 0v6" />
          <path d="M10 12V4.5a1.5 1.5 0 0 1 3 0V12" />
          <path d="M13 12V5.5a1.5 1.5 0 0 1 3 0V13" />
          <path d="M16 13.5V8a1.5 1.5 0 0 1 3 0v6.5a5.5 5.5 0 0 1-5.5 5.5h-2A6 6 0 0 1 6 14l-1.6-2.8a1.3 1.3 0 0 1 2.2-1.3L7 11" />
        </svg>
      );
    case "energy":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" />
          <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.6" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" className={className} {...commonProps}>
          <path d="M12 3c2 3-1 4-1 7a3 3 0 0 0 6 0c1.5 2 1 5-1 7a6 6 0 1 1-10-7c1-2 2-3 1-5 1.5.5 3 1 5-2Z" />
        </svg>
      );
    default:
      return null;
  }
}
