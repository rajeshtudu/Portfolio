import Section from "./Section";
import { workExperience } from "../data/content";

export default function WorkExperience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="grid gap-3">
        {workExperience.map((w) => {
          const Wrapper = w.link ? "a" : "div";
          return (
            <Wrapper
              key={`${w.company}-${w.role}-${w.start}`}
              href={w.link || undefined}
              target={w.link ? "_blank" : undefined}
              rel={w.link ? "noreferrer" : undefined}
              className="group rounded-2xl border border-(--border) bg-(--card) backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="font-semibold text-(--text) group-hover:text-(--accent) transition">
                    {w.role}
                  </div>
                  <div className="text-sm text-(--muted)">
                    {w.company}
                    {w.location ? ` • ${w.location}` : ""}
                  </div>
                </div>

                <div className="text-sm text-(--muted) whitespace-nowrap">
                  {w.start} — {w.end}
                </div>
              </div>

              {w.bullets?.length ? (
                <ul className="mt-3 list-disc pl-5 text-sm text-(--muted)">
                  {w.bullets.map((b, i) => (
                    <li key={i} className="mt-1">
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}