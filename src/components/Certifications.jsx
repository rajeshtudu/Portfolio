import Section from "./Section";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-3">
        {certifications.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-(--border) bg-(--card) backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="font-semibold text-(--text) group-hover:text-(--accent) transition">
                {c.name}
              </div>
              <span className="text-xs text-(--muted) whitespace-nowrap">
                {c.year}
              </span>
            </div>

            <div className="mt-1 text-sm text-(--muted)">
              {c.issuer}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}