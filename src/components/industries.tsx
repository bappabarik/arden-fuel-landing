import { BoltIcon, BuildingIcon, CraneIcon, FactoryIcon, HotelIcon, ShipIcon, TruckIcon } from "./icons";

const INDUSTRIES = [
  { name: "Marine", icon: ShipIcon, description: "Fuel supply for shipping and offshore vessels calling at UAE ports." },
  { name: "Earth Moving", icon: CraneIcon, description: "Dependable diesel for excavators, loaders and heavy site machinery." },
  { name: "Power Generation", icon: BoltIcon, description: "Fuel supply keeping generators and backup power running reliably." },
  { name: "Fleet Transport", icon: TruckIcon, description: "Scheduled fleet fueling to keep transport operations moving." },
  { name: "Building & Construction", icon: BuildingIcon, description: "Bulk fuel delivery for construction sites across the Emirates." },
  { name: "Manufacturing", icon: FactoryIcon, description: "Consistent fuel supply for industrial and manufacturing plants." },
  { name: "Hospitality", icon: HotelIcon, description: "Reliable fuel supply for hotel boilers and backup power systems." },
];

export function Industries() {
  return (
    <section id="industries" className="bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-600">Industries we serve</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Fuel supply built around your operations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-800/80">
            From shipping lanes to construction sites, we tailor sourcing and delivery to what each industry
            actually needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ name, icon: Icon, description }) => (
            <div
              key={name}
              className="group rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-100 text-brand-green-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
