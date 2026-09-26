const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-nightcover-slug/15min";

export default function CalendlyEmbed() {
  return (
    <section className="mx-auto max-w-content px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">Pick a time</h2>
      <p className="mt-3 max-w-md text-sm text-ink-soft">
        Fifteen minutes, no obligation. We will talk through your hours and what a pilot would look like.
      </p>
      <div className="mt-8 overflow-hidden rounded-sm border border-line">
        <iframe
          title="Book a 15-minute call with Nightcover"
          src={calendlyUrl}
          className="h-[700px] w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
