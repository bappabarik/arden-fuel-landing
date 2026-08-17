import { GaugeIcon, MapPinIcon, ShieldIcon } from "./icons";

const STATS = [
  { value: "", label: "Trusted Sourcing", icon: MapPinIcon },
  { value: "", label: "On-Time Delivery", icon: GaugeIcon },
  { value: "24/7", label: "Supply reliability", icon: ShieldIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,185,95,0.28),transparent),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(61,154,65,0.22),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-green-300">Arden Fuel Trading</p> */}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Delivering Reliable Energy Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/90">
          Arden Fuel delivers dependable petroleum products through trusted sourcing and efficient supply
          solutions, serving businesses across diverse industries and markets — with competitive pricing,
          uncompromising quality, and a strong commitment to safety.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-900/20 transition-colors hover:bg-brand-green-400"
          >
            Get in touch
          </a>
          <a
            href="#products"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            Explore our products
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <Icon className="h-6 w-6 text-brand-green-300" />
              {value ? (
                <>
                  <dd className="mt-3 text-2xl font-bold text-white sm:text-3xl">{value}</dd>
                  <dt className="mt-1 text-xs text-navy-100/70 sm:text-sm">{label}</dt>
                </>
              ) : (
                <dd className="mt-4 text-base font-bold text-white sm:text-lg">{label}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
