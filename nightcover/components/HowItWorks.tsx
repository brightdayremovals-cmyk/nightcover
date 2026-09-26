const steps = [
  {
    title: "You send the script, hours, and what \u201cgood\u201d sounds like",
    body: "A short brief on your business, your tone, and the calls you want handled.",
  },
  {
    title: "We put trained British-English agents on the line",
    body: "Coached specifically on your script, your product names, and your escalation points.",
  },
  {
    title: "Every call is logged and, where agreed, recorded",
    body: "So you can hear exactly how your customers were treated, not just take our word for it.",
  },
  {
    title: "You get a weekly scorecard: answered, booked, issues",
    body: "A short report, not a dashboard you have to learn.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-stone-alt py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-serif text-3xl text-ink">Your number. Our desk. Your notes.</h2>
        <ol className="mt-10 space-y-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-serif text-2xl text-gold">{i + 1}</span>
              <div>
                <p className="text-base font-medium text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-ink-soft">
          Start with evenings only if you want. 24/7 when you are ready.
        </p>
      </div>
    </section>
  );
}
