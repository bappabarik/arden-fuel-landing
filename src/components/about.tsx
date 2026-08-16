import { CheckIcon } from "./icons";

const PILLARS = [
  "Competitive, trusted sourcing",
  "Uncompromising product quality",
  "Efficient, on-time logistics",
  "Safety-first, responsible operations",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-600">Who we are</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Dependable fuel supply, built on trust
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-800/85">
            Arden Fuel delivers dependable petroleum products through trusted sourcing and efficient supply
            solutions, serving businesses across diverse industries and markets.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-800/85">
            Our mission is to deliver reliable energy solutions through competitive sourcing, uncompromising
            quality, efficient logistics, and a strong commitment to safety and responsible operations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-800/85">
            As fuel distributors, we deliver across all the Emirates and ports such as JAFZA, Khalid Port,
            Hamriyah Port and Khorfakkan Port.
          </p>
        </div>

        <div className="rounded-3xl bg-navy-900 p-8 sm:p-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-300">Our commitment</h3>
          <ul className="mt-6 flex flex-col gap-5">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-500/20 text-brand-green-300">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base font-medium text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
