export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h1 className="font-serif text-4xl leading-[1.15] text-ink md:text-5xl">
            After-hours cover for UK businesses. Someone answers.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Nightcover staffs your phones evenings, nights and weekends in clear
            British English — inbound, appointments, and overflow — without a
            UK night-shift hire.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pilot-form"
              className="rounded-sm bg-forest px-6 py-3 text-sm font-medium text-stone transition-colors hover:bg-forest-hover"
            >
              Book a 15-minute call
            </a>
            <a
              href="#what-you-hear"
              className="text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-gold"
            >
              Hear a sample call
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-soft">
            10-hour paid pilot. Cancel after if the calls are not good enough.
          </p>
        </div>

        <PhoneMock />
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[320px] rounded-md border border-line bg-white/60 p-5 shadow-[0_1px_0_0_rgba(19,34,59,0.06)]">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <span className="text-xs font-medium text-ink-soft">Incoming call</span>
        <span className="text-xs text-ink-soft">21:42</span>
      </div>
      <div className="py-6">
        <p className="font-serif text-xl text-ink">Riverside Home Care</p>
        <p className="mt-1 text-sm text-ink-soft">Answered by your after-hours desk</p>
      </div>
      <div className="space-y-2 border-t border-line pt-4 text-sm text-ink-soft">
        <div className="flex justify-between">
          <span>Call logged</span>
          <span className="text-ink">00:03</span>
        </div>
        <div className="flex justify-between">
          <span>Booking taken</span>
          <span className="text-ink">Yes</span>
        </div>
        <div className="flex justify-between">
          <span>Notes sent to</span>
          <span className="text-ink">Duty manager</span>
        </div>
      </div>
    </div>
  );
}
