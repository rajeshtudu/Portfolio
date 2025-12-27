import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-(--border) bg-(--card) backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold text-(--text) group-hover:text-(--accent) transition">
              {p.title}
            </h3>

            <p className="mt-2 text-sm text-(--muted)">{p.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-(--border) bg-(--card2) px-2 py-1 text-xs text-(--muted)"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm font-semibold">
              <a
                className="text-(--accent) hover:underline"
                href={p.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                className="text-(--accent) hover:underline"
                href={p.code}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}