import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-(--border) bg-(--card2) px-3 py-1 text-sm text-(--muted) transition hover:border-(--accent) hover:text-(--text)"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}