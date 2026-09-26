const steps = [
  "Pick after-hours or overflow",
  "10 paid hours on one number",
  "You listen to recordings",
  "Continue or stop",
];

export default function Pilot() {
  return (
    <section className="bg-stone-alt py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-serif text-3xl text-ink">Ten hours. One queue. Then decide.</h2>
        <ol className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {steps.map((step, i) => (
            <li key={step} className="flex items-baseline gap-3 sm:basis-[calc(50%-1rem)]">
              <span className="font-serif text-lg text-gold">{i + 1}</span>
              <span className="text-sm text-ink-soft">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
