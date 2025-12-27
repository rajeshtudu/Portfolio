import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-(--border) bg-(--card) backdrop-blur p-5 shadow-sm transition hover:shadow-md">
        <p className="text-(--muted)">
          Want to work together? Email me at{" "}
          <a
            className="font-semibold text-(--accent) hover:underline"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          .
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {/* Primary */}
          <a
            className="rounded-xl bg-(--accent) px-4 py-2 font-semibold text-black transition hover:bg-(--accentHover)"
            href={`mailto:${profile.email}`}
          >
            Email Me
          </a>

          {/* Secondary */}
          <a
            className="rounded-xl border border-(--border) bg-(--card2) px-4 py-2 font-semibold text-(--text) transition hover:border-(--accent)"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="rounded-xl border border-(--border) bg-(--card2) px-4 py-2 font-semibold text-(--text) transition hover:border-(--accent)"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}