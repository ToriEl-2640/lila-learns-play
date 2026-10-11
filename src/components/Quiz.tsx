import { useState } from "react";
import { cn } from "@/lib/utils";
import { speak } from "@/lib/speech";
import { PRAISE, TRY_AGAIN, pick } from "@/data/praise";
import lilaCheer from "@/assets/lila-cheer.webp";

/** Gentle multiple-choice: wrong answers just invite another try. */
export function Quiz({ q, choices, answer, explain, onCorrect, onAttempt }: {
  q: string; choices: string[]; answer: string; explain?: string; onCorrect?: () => void; onAttempt?: () => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const [tries, setTries] = useState(0);
  const right = picked === answer;

  function choose(c: string) {
    if (right) return;
    setPicked(c);
    setTries((t) => t + 1);
    onAttempt?.();
    if (c === answer) {
      const msg = `${pick(PRAISE, tries)} ${explain ?? ""}`;
      speak(msg);
      onCorrect?.();
    } else speak(pick(TRY_AGAIN, tries));
  }

  return (
    <div className="card-soft space-y-3 p-5">
      <p className="font-display text-xl font-semibold">{q}</p>
      <div className="grid gap-3">
        {choices.map((c) => (
          <button
            key={c}
            onClick={() => choose(c)}
            className={cn(
              "min-h-14 rounded-2xl border-2 px-4 text-left text-lg font-bold transition",
              picked === c && c === answer && "border-success bg-mint",
              picked === c && c !== answer && "border-accent bg-peach/50",
              picked !== c && "border-border bg-card",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      {picked && (
        <div className="flex animate-pop items-center gap-3 rounded-2xl bg-lavender p-3" role="status">
          {right && <img src={lilaCheer} alt="" className="h-20 w-auto" />}
          <p className="font-semibold text-secondary-foreground">
            {right ? `${pick(PRAISE, tries)} ${explain ?? ""}` : `${pick(TRY_AGAIN, tries)} Would you like a hint? Look at each choice slowly.`}
          </p>
        </div>
      )}
    </div>
  );
}
