const cards = [
  {
    title: "The call that needed a booking went to voicemail",
    body: "By the time you call back, the customer has already rung the next name on their list.",
  },
  {
    title: "UK night cover is expensive and hard to staff",
    body: "Recruiting, rota-ing and retaining someone for the graveyard shift rarely pencils out for one queue.",
  },
  {
    title: "A sloppy accent or sloppy notes costs you the account",
    body: "One bad call is what a customer remembers, however good the other 364 days were.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">Missed after 5pm is not a marketing problem</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="border-t border-line pt-5">
            <p className="text-base font-medium text-ink">{card.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
