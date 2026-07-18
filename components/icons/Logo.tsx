type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
};

export default function Logo({
  withWordmark = true,
  className = "",
  markClassName = "",
  wordmarkClassName = "text-dark-sage",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.png"
        alt="QR Health"
        className={`h-14 w-14 object-contain ${markClassName}`}
      />
      {withWordmark && (
        <span className={`whitespace-nowrap font-sans text-2xl leading-none ${wordmarkClassName}`}>
          <span className="font-semibold">QR</span>{" "}
          <span className="font-medium">Health</span>
        </span>
      )}
    </span>
  );
}
