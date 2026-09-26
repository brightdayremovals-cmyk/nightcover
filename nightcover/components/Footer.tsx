export default function Footer() {
  return (
    <footer className="border-t border-line bg-stone py-10">
      <div className="mx-auto max-w-content px-6">
        <p className="text-sm text-ink">Nightcover — after-hours and overflow support for UK firms</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-ink-soft">
          <a href="/privacy" className="underline decoration-line underline-offset-4 hover:decoration-gold">
            Privacy
          </a>
          <a href="/data-processing" className="underline decoration-line underline-offset-4 hover:decoration-gold">
            Data processing
          </a>
          <a href="/contact" className="underline decoration-line underline-offset-4 hover:decoration-gold">
            Contact
          </a>
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          Nightcover provides outsourced telephone support. Not a UK emergency service.
        </p>
        <p className="mt-2 text-xs text-ink-soft">&copy; 2026 Nightcover.</p>
      </div>
    </footer>
  );
}
