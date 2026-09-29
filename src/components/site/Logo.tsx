export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary-glow)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
          <path
            d="M20 3 L35 11 L35 29 L20 37 L5 29 L5 11 Z"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="1.4"
          />
          <path
            d="M25.5 15.5a7 7 0 1 0 0 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[15px] font-semibold tracking-[0.3em] uppercase">
          Concept
        </span>
        {!compact && (
          <span className="mt-1 block font-display text-[8px] tracking-[0.42em] text-muted-foreground uppercase">
            Estética Automotiva
          </span>
        )}
      </span>
    </a>
  );
}
