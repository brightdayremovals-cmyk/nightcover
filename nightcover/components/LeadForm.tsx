"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: if this hidden field has a value, silently drop the submission.
    if (data.get("company_website")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-white/60 p-6">
        <p className="text-base font-medium text-ink">Received.</p>
        <p className="mt-1 text-sm text-ink-soft">
          We will reply within one working day with times for a 15-minute call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="full_name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Mobile" name="mobile" type="tel" required />
        <Field label="Company name" name="company_name" required />
        <Field label="Website" name="website" className="sm:col-span-2" />
      </div>

      <div>
        <label htmlFor="need" className="block text-sm font-medium text-ink">
          What do you need?
        </label>
        <select
          id="need"
          name="need"
          required
          className="mt-1.5 w-full rounded-sm border border-line bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-forest"
        >
          <option value="">Select one</option>
          <option value="after_hours">After-hours cover</option>
          <option value="daytime_overflow">Daytime overflow</option>
          <option value="appointment_setting">Appointment setting</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>

      <Field label="Typical hours you need covered" name="hours_needed" placeholder="e.g. Mon-Fri, 6pm to 9am" />

      <div>
        <label htmlFor="calls_per_day" className="block text-sm font-medium text-ink">
          Approx. calls per day
        </label>
        <select
          id="calls_per_day"
          name="calls_per_day"
          required
          className="mt-1.5 w-full rounded-sm border border-line bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-forest"
        >
          <option value="">Select one</option>
          <option value="under_10">Under 10</option>
          <option value="10_30">10-30</option>
          <option value="30_plus">30+</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-ink">
          Anything we should hear on the first call?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="mt-1.5 w-full rounded-sm border border-line bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-forest"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-sm bg-forest px-6 py-3 text-sm font-medium text-stone transition-colors hover:bg-forest-hover disabled:opacity-60"
      >
        {status === "submitting" ? "Sending\u2026" : "Request pilot"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending this. Please try again, or email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-sm border border-line bg-white/70 px-3 py-2.5 text-sm text-ink focus:border-forest"
      />
    </div>
  );
}
