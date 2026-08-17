"use client";

import { FormEvent, useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const CONTACT_EMAIL = "sales@ardenfuel.com";
const CONTACT_PHONE_DISPLAY = "+971589787006";
const CONTACT_PHONE_HREF = "tel:+971589787006";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  // Honeypot — kept empty and hidden from real visitors via CSS; a filled value marks the submission as spam.
  company: string;
};

const INITIAL_STATE: FormState = { name: "", email: "", phone: "", message: "", company: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          message: form.message.trim(),
          company: form.company,
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
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

          {/* <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green-100 text-brand-green-600">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-navy-800/55">Office</p>
              <p className="mt-1 text-base font-semibold text-navy-900">
                First floor, Zalfa building, Al Garhoud, Dubai
              </p>
            </div>
          </div> */}
        </div>

        <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Leave us your enquiry. we will be in touch shortly.
        </h2>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,185,95,0.3),transparent)]"
          />

          {/* Honeypot field — hidden from sighted and screen-reader users, real visitors never fill it. */}
          <div className="absolute -left-[9999px] top-0" aria-hidden="true">
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </div>

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
              disabled={status === "submitting"}
              className="rounded-full bg-brand-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green-900/20 transition-colors hover:bg-brand-green-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm text-brand-green-300">Thanks — your message has been sent. We&apos;ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong sending your message. Please try again or email us at {CONTACT_EMAIL}.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
