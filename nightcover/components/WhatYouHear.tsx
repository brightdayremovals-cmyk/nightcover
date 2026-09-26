const coaching = [
  "Postcodes and place names",
  "Dates said the UK way",
  "Hold language",
  "Complaint handling",
  "When to escalate to you",
];

export default function WhatYouHear() {
  return (
    <section id="what-you-hear" className="bg-stone-alt py-20">
      <div className="mx-auto max-w-content px-6">
        <h2 className="font-serif text-3xl text-ink">The accent is trained. The manner is UK.</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {coaching.map((item) => (
            <li key={item} className="border-l-2 border-gold pl-4 text-sm text-ink-soft">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-md">
          <audio controls className="w-full" preload="none">
            <source src="/sample.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="mt-2 text-xs text-ink-soft">
            Sample of a trained agent on a booking call. Live pilots use your script.
          </p>
        </div>
      </div>
    </section>
  );
}
