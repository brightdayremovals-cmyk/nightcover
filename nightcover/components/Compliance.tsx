const points = [
  {
    title: "Data Processing Agreement before go-live",
    body: "Signed and in place before your first call is answered.",
  },
  {
    title: "Call recording only with agreed wording",
    body: "Recording happens only where you have agreed to it, and callers are told as required.",
  },
  {
    title: "Access limited to the account team",
    body: "Your notes and recordings are not shared beyond the people working your queue.",
  },
  {
    title: "Outbound only with a lawful basis and TPS screening where required",
    body: "We check before we dial, not after.",
  },
  {
    title: "A supervisor available in UK hours who can pull an agent the same day",
    body: "If a call is not up to standard, you are not stuck with it for a rota cycle.",
  },
];

export default function Compliance() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">How we handle UK data</h2>
      <div className="mt-8 space-y-6">
        {points.map((point) => (
          <div key={point.title} className="border-t border-line pt-5">
            <p className="text-base font-medium text-ink">{point.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
