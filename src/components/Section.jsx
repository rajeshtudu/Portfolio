export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-14">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-(--text)">
          <span className="text-(--accent)">#</span> {title}
        </h2>
      </div>

      {/* subtle divider/glow */}
      <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-(--accent)/40 to-transparent" />

      <div className="mt-6">{children}</div>
    </section>
  );
}
