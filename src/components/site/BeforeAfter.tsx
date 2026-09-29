import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfter({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={wrap}
        className="panel relative aspect-4/3 cursor-ew-resize overflow-hidden rounded-md select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} — depois`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={before}
          alt={`${label} — antes`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover brightness-75 saturate-50"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />

        <div
          className="absolute inset-y-0 z-10 w-px bg-primary-glow"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-glow/60 bg-background/80 backdrop-blur">
            <ChevronsLeftRight className="h-4 w-4 text-primary-glow" />
          </span>
        </div>

        <span className="absolute bottom-3 left-3 rounded-xs bg-background/70 px-2 py-1 font-display text-[9px] tracking-[0.22em] text-muted-foreground uppercase backdrop-blur">
          Antes
        </span>
        <span className="absolute bottom-3 right-3 rounded-xs bg-background/70 px-2 py-1 font-display text-[9px] tracking-[0.22em] text-primary-glow uppercase backdrop-blur">
          Depois
        </span>
      </div>
      <figcaption className="mt-3 font-display text-sm">{label}</figcaption>
    </figure>
  );
}
