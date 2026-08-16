import { Logo } from "./logo";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#products", label: "Products" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-800/70">
              First floor,Zalfa building, Algarhoud, Dubai
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-navy-800/75 hover:text-brand-green-600">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-1 sm:items-end">
            <a href="mailto:info@ardenfuel.com" className="text-sm font-semibold text-navy-900 hover:text-brand-green-600">
              sales@ardenfuel.com
            </a>
            <a href="tel:+971589787006" className="text-sm font-semibold text-navy-800/75 hover:text-brand-green-600">
              +971589787006
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-navy-100 pt-6 text-xs text-navy-800/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Arden Fuel Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
