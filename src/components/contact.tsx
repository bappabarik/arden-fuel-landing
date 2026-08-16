"use client";

import { FormEvent, useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const CONTACT_EMAIL = "sales@ardenfuel.com";
const CONTACT_PHONE_DISPLAY = "+971589787006";
const CONTACT_PHONE_HREF = "tel:+971589787006";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_STATE: FormState = { name: "", email: "", phone: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const bodyLines = [
      form.message.trim(),
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone.trim() ? `Phone: ${form.phone}` : null,
    ].filter((line): line is string => line !== null);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(INITIAL_STATE);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-green-600">Contact us</p>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Let&apos;s fuel your operations
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-800/85">
          Get in touch with our team to discuss reliable fuel supply for your business, anywhere across the UAE.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:gap-12">
        <div className="flex flex-col gap-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-brand-green-300"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-navy-800/55">Email</p>
              <p className="mt-1 text-base font-semibold text-navy-900 group-hover:text-brand-green-600">
                {CONTACT_EMAIL}
              </p>
            </div>
          </a>

          <a
            href={CONTACT_PHONE_HREF}
            className="group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-brand-green-300"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-navy-800/55">Phone</p>
              <p className="mt-1 text-base font-semibold text-navy-900 group-hover:text-brand-green-600">
                {CONTACT_PHONE_DISPLAY}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
              <MapPinIcon className="h-5 w-5" />
            </span>
            {/* <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-navy-800/55">Office</p>
              <p className="mt-1 text-base font-semibold text-navy-900">
                First floor, Zalfa building, Al Garhoud, Dubai
              </p>
            </div> */}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,185,95,0.3),transparent)]"
          />
          <div className="relative grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="contact-name" className="text-sm font-medium text-navy-100/85">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-100/40 outline-none transition-colors focus:border-brand-green-400"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-1.5 text-xs text-brand-green-300">{errors.name}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="contact-email" className="text-sm font-medium text-navy-100/85">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-100/40 outline-none transition-colors focus:border-brand-green-400"
                placeholder="you@company.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-1.5 text-xs text-brand-green-300">{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-phone" className="text-sm font-medium text-navy-100/85">
                Phone <span className="text-navy-100/50">(optional)</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-100/40 outline-none transition-colors focus:border-brand-green-400"
                placeholder="+971 XX XXX XXXX"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-navy-100/85">
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-navy-100/40 outline-none transition-colors focus:border-brand-green-400"
                placeholder="Tell us about your fuel supply needs"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1.5 text-xs text-brand-green-300">{errors.message}</p>}
            </div>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-900/20 transition-colors hover:bg-brand-green-400"
            >
              Send message
            </button>
            {sent && <p className="text-sm text-brand-green-300">Thanks — your email app should now be open to send it.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
