const sectors = ["Home care", "Clinics", "Trades", "Brokers", "Recruitment", "Logistics"];

export default function LogoStrip() {
  return (
    <section className="border-y border-line bg-stone-alt">
      <div className="mx-auto max-w-content px-6 py-8">
        <p className="text-sm text-ink-soft">Built for firms that cannot miss the phone</p>
        <p className="mt-3 text-base text-ink">{sectors.join(" · ")}</p>
      </div>
    </section>
  );
}
