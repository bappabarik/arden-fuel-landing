import { MapPinIcon, TruckRouteIcon } from "./icons";

const EMIRATES = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];
const PORTS = ["JAFZA", "Khalid Port", "Hamriyah Port", "Khorfakkan Port"];

export function Coverage() {
  return (
    <section id="coverage" className="bg-navy-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-300">Coverage</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">UAE-wide delivery</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100/85">
            As fuel distributors, we deliver across all the Emirates and major ports — keeping your operations
            supplied wherever you are.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-500/20 text-brand-green-300">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">All seven Emirates</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {EMIRATES.map((emirate) => (
                <li key={emirate} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-navy-100/90">
                  {emirate}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-500/20 text-brand-green-300">
                <TruckRouteIcon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">Major ports served</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {PORTS.map((port) => (
                <li key={port} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-navy-100/90">
                  {port}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
