const services = [
  {
    title: "After-hours and weekends",
    body: "Evenings, nights and weekends covered on your existing number.",
  },
  {
    title: "Inbound and overflow during the day",
    body: "Extra hands when your own lines are busy or your team is stretched.",
  },
  {
    title: "Appointment setting (warm only)",
    body: "Booking calls for people who have already asked to hear from you.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col">
            <p className="font-serif text-xl text-ink">{service.title}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.body}</p>
            <a
              href="#pilot-form"
              className="mt-4 text-sm font-medium text-forest underline decoration-line underline-offset-4 hover:decoration-gold"
            >
              Get a rate for this
            </a>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-ink-soft">
        Outbound only where PECR/TPS rules are followed.
      </p>
    </section>
  );
}
