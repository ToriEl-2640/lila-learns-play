import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Screen, BigButton } from "@/components/lila-ui";
import { AGES, type AgeBand } from "@/data/ages";
import { setState, useLila } from "@/lib/store";
import { speak } from "@/lib/speech";
import { cn } from "@/lib/utils";
import lilaWave from "@/assets/lila-wave.webp";
import lilaCheer from "@/assets/lila-cheer.webp";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Set up Lila — Choose a learning world" },
      { name: "description", content: "Choose your child's learning world and preferences." },
      { property: "og:title", content: "Set up Lila" },
      { property: "og:description", content: "Choose your child's learning world and preferences." },
    ],
  }),
  component: Onboarding,
});

const INTERESTS = ["Animals", "Nature", "Letters", "Numbers", "Music", "Space", "Feelings"];

function Onboarding() {
  const navigate = useNavigate();
  const s = useLila();
  const [step, setStep] = useState(0);
  const [age, setAge] = useState<AgeBand | null>(s.age);

  const finish = () => { setState({ onboarded: true }); navigate({ to: "/home" }); };

  return (
    <Screen>
      <div className="mb-6 flex justify-center gap-2" aria-label={`Step ${step + 1} of 3`}>
        {[0, 1, 2].map((i) => <span key={i} className={cn("h-2 w-10 rounded-full", i <= step ? "bg-primary" : "bg-secondary")} />)}
      </div>

      {step === 0 && (
        <div className="flex flex-1 flex-col gap-3 animate-pop">
          <h1 className="text-2xl text-primary-deep">Choose your learning world</h1>
          <p className="text-sm text-muted-foreground">A grown-up can change this any time.</p>
          {AGES.map((a) => (
            <button key={a.id} onClick={() => setAge(a.id)}
              className={cn("card-soft flex items-center gap-4 border-4 p-4 text-left", a.tone, age === a.id ? "border-primary" : "border-transparent")}>
              <span className="text-4xl" aria-hidden>{a.emoji}</span>
              <span className="flex-1">
                <span className="block font-display text-lg font-semibold">{a.name}</span>
                <span className="block text-sm font-bold text-primary-deep">{a.range}</span>
                <span className="block text-sm text-muted-foreground">{a.blurb}</span>
              </span>
            </button>
          ))}
          <BigButton disabled={!age} className="mt-2" onClick={() => { setState({ age }); setStep(1); }}>Next</BigButton>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-1 flex-col gap-4 animate-pop">
          <h1 className="text-2xl text-primary-deep">Make it yours</h1>
          <p className="text-sm text-muted-foreground">For grown-ups. No names or personal details needed.</p>
          <div className="card-soft p-4">
            <p className="mb-3 font-bold">Learning interests</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => {
                const on = s.interests.includes(i);
                return (
                  <button key={i} aria-pressed={on}
                    onClick={() => setState({ interests: on ? s.interests.filter((x) => x !== i) : [...s.interests, i] })}
                    className={cn("min-h-11 rounded-full px-4 font-bold", on ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>
                    {i}
                  </button>
                );
              })}
            </div>
          </div>
          <Toggle label="Sound" on={s.sound} onChange={(v) => setState({ sound: v })} />
          <Toggle label="Captions (show words on screen)" on={s.captions} onChange={(v) => setState({ captions: v })} />
          <p className="text-xs text-muted-foreground">Narration is in English for now. More languages and session reminders are planned for later.</p>
          <div className="mt-auto flex gap-3">
            <BigButton variant="soft" onClick={() => setStep(0)}>Back</BigButton>
            <BigButton onClick={() => { setStep(2); speak("Hi! I'm Lila, and this is my bunny. Let's learn together!"); }}>Next</BigButton>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-1 flex-col items-center gap-4 text-center animate-pop">
          <MeetLila />
          <div className="mt-auto flex w-full gap-3">
            <BigButton variant="soft" onClick={finish}>Skip</BigButton>
            <BigButton onClick={finish}>Enter my world</BigButton>
          </div>
        </div>
      )}
    </Screen>
  );
}

function MeetLila() {
  const [waved, setWaved] = useState(false);
  return (
    <>
      <h1 className="text-2xl text-primary-deep">Meet Lila and her Bunny</h1>
      <button aria-label="Tap Lila to say hello" onClick={() => { setWaved(true); speak("Bunny says hello too! Hop hop!"); }}>
        <img src={waved ? lilaCheer : lilaWave} alt="Lila and her purple bunny" className="h-[40dvh] w-auto animate-float drop-shadow-xl" />
      </button>
      <p className="rounded-2xl bg-card px-4 py-3 font-semibold shadow-sm">
        {waved ? "🐰 Bunny says hello too! Hop hop!" : "\"Hi! I'm Lila. Tap me to meet Bunny!\""}
      </p>
    </>
  );
}

export function Toggle({ label, on, onChange }: { label: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button role="switch" aria-checked={on} onClick={() => onChange(!on)} className="card-soft flex min-h-14 items-center justify-between p-4">
      <span className="font-bold">{label}</span>
      <span className={cn("relative h-8 w-14 rounded-full transition", on ? "bg-primary" : "bg-muted-foreground/40")}>
        <span className={cn("absolute top-1 size-6 rounded-full bg-card transition-all", on ? "left-7" : "left-1")} />
      </span>
    </button>
  );
}
