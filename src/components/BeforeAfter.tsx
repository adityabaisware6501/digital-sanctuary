import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  label: string;
  caption: string;
};

/** Client-side drag/keyboard comparison slider. No server work involved. */
export function BeforeAfter({ before, after, label, caption }: Props) {
  const [pos, setPos] = useState(52);
  const frame = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box) return;
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <figure className="group">
      <div
        ref={frame}
        className="relative aspect-square w-full cursor-ew-resize overflow-hidden rounded-sm border border-border select-none"
        style={{ boxShadow: "var(--shadow-card)" }}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        <img
          src={after}
          alt={`${label} — after`}
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label} — before`}
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="absolute top-4 left-4 rounded-sm bg-onyx/70 px-3 py-1.5 text-[0.55rem] tracking-[0.24em] text-ivory/80 uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 rounded-sm bg-onyx/70 px-3 py-1.5 text-[0.55rem] tracking-[0.24em] text-gold uppercase backdrop-blur-sm">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px"
          style={{ left: `${pos}%`, background: "var(--gradient-gold)" }}
        >
          <span
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 text-[0.7rem] tracking-[0.16em] text-onyx"
            style={{ background: "var(--gradient-gold)" }}
          >
            ↔
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          aria-label={`${label} before and after comparison`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-5">
        <p className="font-display text-2xl text-ivory">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      </figcaption>
    </figure>
  );
}
