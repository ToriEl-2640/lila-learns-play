import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Screen, TopBar, BigButton, Caption } from "@/components/lila-ui";
import { recordActivity, useLila } from "@/lib/store";
import { speak } from "@/lib/speech";
import { PRAISE, TRY_AGAIN, pick } from "@/data/praise";
import { cn } from "@/lib/utils";
import lilaCheer from "@/assets/lila-cheer.webp";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Color Explorer — Play & Learn with Lila" },
      { name: "description", content: "Find the right color in a gentle, no-pressure game." },
      { property: "og:title", content: "Color Explorer — Play & Learn with Lila" },
      { property: "og:description", content: "Find the right color in a gentle, no-pressure game." },
    ],
  }),
  component: ColorExplorer,
});

const OBJECTS = [
  { emoji: "🍎", name: "apple", color: "red" },
  { emoji: "🫐", name: "blueberries", color: "blue" },
  { emoji: "⭐", name: "star", color: "yellow" },
  { emoji: "🐸", name: "frog", color: "green" },
  { emoji: "🍊", name: "orange", color: "orange" },
  { emoji: "🍇", name: "grapes", color: "purple" },
  { emoji: "🐳", name: "whale", color: "blue" },
  { emoji: "🍌", name: "banana", color: "yellow" },
  { emoji: "🥦", name: "broccoli", color: "green" },
  { emoji: "🍓", name: "strawberry", color: "red" },
];
const ROUNDS = 5;

/** Learning goal: identify colors in everyday objects. No timers, no scores. */
function makeRound(n: number, size: number) {
  const target = OBJECTS[(n * 3 + 1) % OBJECTS.length]!;
  const others = OBJECTS.filter((o) => o.color !== target.color);
  const picks = [target];
  for (let i = 0; picks.length < size; i++) {
    const o = others[(n * 2 + i * 3) % others.length]!;
    if (!picks.some((p) => p.color === o.color)) picks.push(o);
  }
  return { target, options: picks.sort((a, b) => (a.name + n).localeCompare(b.name + n)) };
}

function ColorExplorer() {
  const { age } = useLila();
  const size = age === "toddler" ? 2 : age === "preschool" ? 3 : 4;
  const [round, setRound] = useState(0);
  const [wrong, setWrong] = useState<string | null>(null);
  const [found, setFound] = useState(false);
  const { target, options } = useMemo(() => makeRound(round, size), [round, size]);
  const prompt = `Tap the ${target.color} ${target.name}!`;
  const finished = round >= ROUNDS;

  useEffect(() => { if (!finished) speak(prompt); }, [round, finished]);

  function tap(name: string) {
    if (found) return;
    if (name === target.name) { setFound(true); setWrong(null); speak(pick(PRAISE, round)); }
    else { setWrong(name); speak(pick(TRY_AGAIN, round)); }
  }

  function next() {
    setFound(false); setWrong(null);
    const n = round + 1;
    if (n >= ROUNDS) recordActivity("game:color-explorer", true);
    setRound(n);
  }

  if (finished) {
    return (
      <Screen className="items-center text-center">
        <TopBar title="Color Explorer" />
        <img src={lilaCheer} alt="Lila and Bunny cheering" className="h-[40dvh] w-auto animate-pop" />
        <h1 className="text-3xl text-primary-deep">You explored {ROUNDS} colors!</h1>
        <p className="mt-2 text-muted-foreground">Bunny loved playing with you.</p>
        <BigButton className="mt-6" onClick={() => setRound(0)}>Play again</BigButton>
      </Screen>
    );
  }

  return (
    <Screen>
      <TopBar title="Color Explorer" />
      <div className="mb-3 flex justify-center gap-2" aria-label={`Round ${round + 1} of ${ROUNDS}`}>
        {Array.from({ length: ROUNDS }).map((_, i) => <span key={i} className={cn("size-3 rounded-full", i <= round ? "bg-primary" : "bg-secondary")} />)}
      </div>
      <button onClick={() => speak(prompt)} className="card-soft mb-3 p-4 font-display text-2xl font-semibold text-primary-deep">🔊 {prompt}</button>
      <Caption text={found ? pick(PRAISE, round) : wrong ? `That's the ${wrong}. ${pick(TRY_AGAIN, round)}` : prompt} />
      <div className={cn("mt-4 grid flex-1 content-start gap-4", size > 2 ? "grid-cols-2" : "grid-cols-1")}>
        {options.map((o) => (
          <button key={o.name} onClick={() => tap(o.name)} aria-label={o.name}
            className={cn("card-soft grid aspect-square place-items-center border-4 text-7xl transition active:scale-95",
              found && o.name === target.name ? "border-success bg-mint" : wrong === o.name ? "border-accent" : "border-transparent")}>
            {o.emoji}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <BigButton variant="soft" onClick={() => { setRound(0); setFound(false); setWrong(null); }}>Restart</BigButton>
        <BigButton disabled={!found} onClick={next}>Next</BigButton>
      </div>
    </Screen>
  );
}
