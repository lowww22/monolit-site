export default function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="4" fill="#1C1C1C" />
        <path
          d="M10 36V12h6.2l3.8 14.5L23.8 12H30v24h-5.2V21.2L21.2 36h-4.4l-3.6-14.8V36H10z"
          fill="#F5F2EC"
        />
        <rect x="34" y="12" width="4" height="24" fill="#C2410C" />
      </svg>
      {showWordmark ? (
        <span className="logo-wordmark display text-lg tracking-[0.14em] sm:text-xl">
          МОНОЛИТ
        </span>
      ) : null}
    </span>
  );
}
