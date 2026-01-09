import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-(--border) bg-(--card2) p-5"
          >
            <h3 className="mb-3 text-lg font-semibold text-(--text)">
              {group.category}
            </h3>

            <ul className="list-disc space-y-1 pl-5 text-(--muted)">
              {group.items.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}