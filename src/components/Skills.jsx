import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <article
            key={s.title}
            className="group rounded-2xl border border-(--border) bg-(--card) backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <h3 className="text-lg font-semibold text-(--text) group-hover:text-(--accent) transition">
              {s.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-(--border) bg-(--card2) px-2 py-1 text-xs text-(--muted) transition group-hover:border-(--accent) group-hover:text-(--text)"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}