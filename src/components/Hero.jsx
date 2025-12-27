import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="about" className="py-14">
      {/* Tagline */}
      <p className="text-sm font-semibold text-(--muted)">
        {profile.tagline}
      </p>

      {/* Name */}
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I’m{" "}
        <span className="text-(--text)">{profile.name}</span>
        <span className="text-(--accent)">.</span>
      </h1>

      {/* Intro */}
      <p className="mt-4 max-w-2xl text-(--muted)">
        {profile.intro}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">
        {/* Primary */}
        <a
          className="rounded-xl bg-(--accent) px-4 py-2 text-black font-semibold transition hover:bg-(--accentHover)"
          href="#projects"
        >
          View Projects
        </a>

        {/* Secondary */}
        <a
          className="rounded-xl border border-(--border) bg-(--card2) px-4 py-2 font-semibold text-(--text) transition hover:border-(--accent)"
          href={`mailto:${profile.email}`}
        >
          Contact
        </a>

        <a
          className="rounded-xl border border-(--border) bg-(--card2) px-4 py-2 font-semibold text-(--text) transition hover:border-(--accent)"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-4 text-sm font-semibold">
        <a
          className="text-(--accent) hover:underline"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-(--accent) hover:underline"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}