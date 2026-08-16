export function CallToAction() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,185,95,0.3),transparent)]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&apos;s fuel your operations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100/85">
            Get in touch with our team to discuss reliable fuel supply for your business, anywhere across the
            UAE.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ardenfuel.com"
              className="rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-900/20 transition-colors hover:bg-brand-green-400"
            >
              info@ardenfuel.com
            </a>
            <a
              href="#products"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              View our products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
