const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Experience", "#experience"],
  ["Mini Game", "#minigame"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--card)/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a
          href="#top"
          className="font-bold tracking-tight text-(--text) hover:text-(--accent) transition"
        >
          Rajesh Tudu
        </a>

        <nav className="hidden gap-4 text-sm font-medium sm:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-(--muted) hover:text-(--accent) transition"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile (simple): show only contact */}
        <a
          href="#contact"
          className="rounded-xl bg-(--accent) px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-(--accentHover) sm:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}