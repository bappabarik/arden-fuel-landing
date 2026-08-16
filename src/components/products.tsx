import { AnchorIcon, BarrelIcon, DropIcon, FuelPumpIcon } from "./icons";

const PRODUCTS = [
  {
    name: "Diesel / Gas Oil",
    icon: FuelPumpIcon,
    description: "Reliable supply solutions for transportation, construction, industrial and commercial applications.",
  },
  {
    name: "EN590",
    icon: DropIcon,
    description: "Quality diesel specifications for customers requiring compliant automotive and industrial fuel.",
  },
  {
    name: "Marine Gas Oil",
    icon: AnchorIcon,
    description: "Fuel solutions for marine and offshore operations.",
  },
  {
    name: "Fuel Oil",
    icon: BarrelIcon,
    description: "Bulk fuel oil supply for heavy industrial and marine applications.",
  },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-600">Products</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Our energy products</h2>
        <p className="mt-5 text-lg leading-relaxed text-navy-800/80">
          A focused range of petroleum products, sourced and supplied to consistent quality standards.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PRODUCTS.map(({ name, icon: Icon, description }) => (
          <div
            key={name}
            className="flex items-start gap-5 rounded-2xl border border-navy-100 bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-brand-green-300">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-navy-900">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
