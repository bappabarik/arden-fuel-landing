type IconProps = { className?: string };

const base = "h-7 w-7";
const shared = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function ShipIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M3 16.5l1.8 3.6a2 2 0 0 0 1.8 1.1h10.8a2 2 0 0 0 1.8-1.1L21 16.5" />
      <path d="M5 16.5l1-7h12l1 7" />
      <path d="M9 9.5V4h3l2 2.5" />
      <path d="M12 22v-2" />
    </svg>
  );
}

export function CraneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M4 21h9" />
      <path d="M6 21V8l9-4v6" />
      <path d="M15 10h5" />
      <path d="M18 10v4" />
      <path d="M18 14l2 3" />
      <path d="M18 14l-2 3" />
    </svg>
  );
}

export function BoltIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
    </svg>
  );
}

export function TruckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

export function BuildingIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M4 21V6l8-3 8 3v15" />
      <path d="M4 21h16" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h.01M9 14h.01M15 10h.01M15 14h.01" />
    </svg>
  );
}

export function FactoryIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M3 21V11l5 3v-3l5 3V8l5 3v10z" />
      <path d="M3 21h18" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </svg>
  );
}

export function HotelIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M3 21V6l9-3 9 3v15" />
      <path d="M3 21h18" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 10h6" />
    </svg>
  );
}

export function DropIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  );
}

export function FuelPumpIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M5 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M3 21h12" />
      <path d="M15 9h2l3 3v6a1.5 1.5 0 0 1-3 0v-3h-2" />
      <path d="M7 8h4" />
    </svg>
  );
}

export function BarrelIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </svg>
  );
}

export function AnchorIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14" />
      <path d="M6 12H2a10 10 0 0 0 10 9 10 10 0 0 0 10-9h-4" />
      <path d="M8 9h8" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function MapPinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TruckRouteIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M4 17c3-6 6-6 9-12" strokeDasharray="1 3.4" />
      <circle cx="4" cy="18" r="1.6" />
      <circle cx="14" cy="4" r="1.6" />
    </svg>
  );
}

export function GaugeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...shared}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l4-5" />
      <circle cx="12" cy="15" r="1.4" />
    </svg>
  );
}
