import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-(--border) bg-(--card2)/40 backdrop-blur py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 text-sm text-(--muted) sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-(--text) font-semibold">{profile.name}</span>
        </p>

        <p className="m-0">
          Built with{" "}
          <span className="text-(--text) font-semibold">React</span> +{" "}
          <span className="text-(--text) font-semibold">Vite</span> +{" "}
          <span className="text-(--text) font-semibold">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}