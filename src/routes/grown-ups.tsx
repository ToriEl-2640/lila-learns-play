import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Screen, TopBar, BigButton } from "@/components/lila-ui";
import { Toggle } from "./onboarding";
import { AGES } from "@/data/ages";
import { SHOW_ITEMS } from "@/data/showtell";
import { STORIES } from "@/data/stories";
import { resetAll, setState, useLila } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/grown-ups")({
  head: () => ({
    meta: [
      { title: "Grown-ups' Area — Lila" },
      { name: "description", content: "Settings, progress and privacy for parents and caregivers." },
      { property: "og:title", content: "Grown-ups' Area — Lila" },
      { property: "og:description", content: "Settings, progress and privacy for parents and caregivers." },
    ],
  }),
  component: GrownUps,
});

const WORDS = ["three", "seven", "four", "nine", "six", "two", "eight"];

/** Parent gate: read a number word and press-and-hold. Not for purchases/accounts. */
function Gate({ onPass }: { onPass: () => void }) {
  const target = useMemo(() => 2 + (new Date().getMinutes() % 7), []);
  const word = WORDS[target - 2] ?? "five";
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [holding, setHolding] = useState(false);
  const real = WORDS.indexOf(word) + 2;

  const start = () => {
    if (Number(input) !== real) { setMsg("Please type the number in digits first."); return; }
    setHolding(true);
    timer.current = setTimeout(onPass, 2000);
  };
  const stop = () => { setHolding(false); if (timer.current) clearTimeout(timer.current); };

  return (
    <div className="card-soft space-y-4 p-5">
      <h2 className="text-xl">For grown-ups only</h2>
      <p>Type the number <b className="uppercase">{word}</b> in digits, then press and hold the button for 2 seconds.</p>
      <input inputMode="numeric" value={input} onChange={(e) => setInput(e.target.value)} aria-label="Number in digits"
        className="h-14 w-full rounded-2xl border-2 border-input bg-card px-4 text-xl font-bold" />
      <button onPointerDown={start} onPointerUp={stop} onPointerLeave={stop}
        className={cn("min-h-14 w-full rounded-full font-bold transition", holding ? "bg-primary-deep text-primary-foreground" : "bg-primary text-primary-foreground")}>
        {holding ? "Keep holding…" : "Press and hold"}
      </button>
      {msg && <p className="text-sm text-destructive">{msg}</p>}
    </div>
  );
}

function GrownUps() {
  const s = useLila();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);

  if (!open) return <Screen><TopBar title="Grown-ups' Area" /><Gate onPass={() => setOpen(true)} /></Screen>;

  const entries = Object.entries(s.completed);
  const label = (id: string) => {
    const [kind, key] = id.split(":");
    if (kind === "show") return `Show & Tell: ${SHOW_ITEMS.find((i) => i.id === key)?.name ?? key}`;
    if (kind === "story") return `Story: ${STORIES.find((x) => x.id === key)?.title ?? key}`;
    return "Game: Color Explorer";
  };

  return (
    <Screen>
      <TopBar title="Grown-ups' Area" />
      <section className="space-y-3">
        <h2 className="text-lg">Learning world</h2>
        <div className="grid gap-2">
          {AGES.map((a) => (
            <button key={a.id} onClick={() => setState({ age: a.id, onboarded: true })}
              className={cn("flex min-h-12 items-center justify-between rounded-2xl border-2 bg-card px-4 font-bold", s.age === a.id ? "border-primary" : "border-border")}>
              {a.emoji} {a.name} <span className="text-sm text-muted-foreground">{a.range}</span>
            </button>
          ))}
        </div>
        <Toggle label="Sound" on={s.sound} onChange={(v) => setState({ sound: v })} />
        <Toggle label="Captions" on={s.captions} onChange={(v) => setState({ captions: v })} />
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg">Activities explored</h2>
        {entries.length === 0 ? <p className="text-muted-foreground">Nothing yet — start a discovery together!</p> : (
          <ul className="card-soft divide-y p-2">
            {entries.map(([id, c]) => (
              <li key={id} className="flex justify-between gap-2 p-3 text-sm">
                <span>{label(id)}</span>
                <span className="shrink-0 text-muted-foreground">{c.done ? "Completed" : "Started"} · {c.at}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-muted-foreground">This is a record of activities, not an assessment of your child.</p>
      </section>

      <section className="card-soft mt-6 space-y-2 p-4 text-sm">
        <h2 className="text-lg">Privacy & AI</h2>
        <p>Everything stays on this phone. Lila doesn't ask for names, birth dates, location, camera or microphone.</p>
        <p>No ads, no purchases, no chat. This version doesn't use AI — every question and story was written in advance.</p>
        <p>Read-aloud uses your phone's built-in voice.</p>
      </section>

      <div className="mt-6 space-y-3">
        {!confirm ? (
          <BigButton variant="soft" onClick={() => setConfirm(true)}>Delete all saved data</BigButton>
        ) : (
          <div className="card-soft space-y-3 p-4">
            <p className="font-bold">Delete all progress and settings on this phone?</p>
            <div className="flex gap-3">
              <BigButton variant="soft" onClick={() => setConfirm(false)}>Cancel</BigButton>
              <button onClick={() => { resetAll(); navigate({ to: "/" }); }} className="min-h-14 flex-1 rounded-full bg-destructive font-bold text-destructive-foreground">Delete</button>
            </div>
          </div>
        )}
        <BigButton onClick={() => navigate({ to: "/home" })}>Back to Lila's World</BigButton>
      </div>
    </Screen>
  );
}
