/**
 * Recreated in code from the supplied Arden Fuel logo artwork (navy "A" monogram, green
 * gradient accent leg, ribbon-into-droplet motif). This is a close approximation for use
 * until the real logo file (SVG/PNG) is dropped into /public — swap `LogoMark`'s contents
 * for the exact asset then, but the color tokens in globals.css already match.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Arden Fuel monogram">
      <defs>
        <linearGradient id="ardenGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#63b95f" />
          <stop offset="100%" stopColor="#1f5f24" />
        </linearGradient>
      </defs>
      <path d="M100 20 L54 182" stroke="var(--color-navy-900)" strokeWidth="30" strokeLinecap="round" fill="none" />
      <path d="M100 20 L146 150" stroke="url(#ardenGreen)" strokeWidth="30" strokeLinecap="round" fill="none" />
      <path
        d="M38 132 C72 108 104 116 138 146"
        stroke="url(#ardenGreen)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M158 138 C171 154 180 168 180 179 C180 192 169 200 157 200 C145 200 134 192 134 179 C134 165 146 149 158 138 Z"
        fill="url(#ardenGreen)"
      />
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className={markClassName ?? "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-navy-900">ARDEN</span>
        <span className="text-[10px] font-semibold tracking-[0.22em] text-brand-green-600">FUEL TRADING</span>
      </span>
    </span>
  );
}
