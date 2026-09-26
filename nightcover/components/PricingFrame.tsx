export default function PricingFrame() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">Quoted in GBP, all-in</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
        You pay a billed hourly or per-seat rate that includes supervision, QA
        and reporting. No hidden extras once your pilot is agreed.
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-3 pr-6 font-medium">Option</th>
              <th className="py-3 font-medium">What it costs you</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="py-4 pr-6 text-ink">UK night-shift hire</td>
              <td className="py-4 text-ink-soft">Salary + NI + cover for gaps and holidays</td>
            </tr>
            <tr>
              <td className="py-4 pr-6 text-ink">Nightcover</td>
              <td className="py-4 text-ink-soft">Billed hours, 24/7 available, pilot first</td>
            </tr>
          </tbody>
        </table>
      </div>

      <a
        href="#pilot-form"
        className="mt-8 inline-block rounded-sm bg-forest px-6 py-3 text-sm font-medium text-stone transition-colors hover:bg-forest-hover"
      >
        Get a rate for your hours
      </a>
    </section>
  );
}
