import { useMemo, useState } from "react";
import Section from "./Section";

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MiniGame() {
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState({ x: 30, y: 30 });

  const message = useMemo(() => {
    if (score >= 15) return "You win 😄 Thanks for visiting!";
    if (score >= 8) return "Nice! Keep going.";
    return "Click the star to collect points.";
  }, [score]);

  const move = () => {
    setScore((s) => s + 1);
    setPos({ x: randInt(5, 90), y: randInt(10, 80) });
  };

  return (
    <Section id="minigame" title="Mini Game">
      <p className="text-(--muted)">{message}</p>

      <div className="mt-5 relative h-64 overflow-hidden rounded-2xl border border-(--border) bg-(--card) backdrop-blur shadow-sm">
        {/* Star */}
        <button
          onClick={move}
          className="absolute select-none text-3xl transition-transform hover:scale-110"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.35))",
          }}
          aria-label="star"
          title="Click me"
        >
          ⭐
        </button>

        {/* Score badge */}
        <div className="absolute bottom-3 left-3 rounded-xl border border-(--border) bg-(--card2) px-3 py-2 text-sm font-semibold text-(--text) backdrop-blur">
          Score: <span className="text-(--accent)">{score}</span>
        </div>

        {/* Reset */}
        <button
          onClick={() => setScore(0)}
          className="absolute bottom-3 right-3 rounded-xl border border-(--border) bg-(--card2) px-3 py-2 text-sm font-semibold text-(--text) transition hover:border-(--accent) backdrop-blur"
        >
          Reset
        </button>
      </div>
    </Section>
  );
}