export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-stone/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-ink">
          Nightcover
        </a>
        <a
          href="#pilot-form"
          className="rounded-sm bg-forest px-5 py-2.5 text-sm font-medium text-stone transition-colors hover:bg-forest-hover"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
