export default function FinalCTA() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="font-serif text-3xl text-stone md:text-4xl">
          Send one typical call. We will show you how we would handle it.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pilot-form"
            className="rounded-sm bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-[#977247]"
          >
            Book a 15-minute call
          </a>
        </div>
        <p className="mt-5 text-sm text-stone/70">Or request the pilot form below.</p>
      </div>
    </section>
  );
}
