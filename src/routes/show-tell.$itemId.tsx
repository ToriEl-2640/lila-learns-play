import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { Screen, TopBar, Caption, BigButton } from "@/components/lila-ui";
import { Quiz } from "@/components/Quiz";
import { SHOW_ITEMS } from "@/data/showtell";
import { recordActivity, useLila } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import lilaWave from "@/assets/lila-wave.webp";

export const Route = createFileRoute("/show-tell/$itemId")({
  loader: ({ params }) => {
    const item = SHOW_ITEMS.find((i) => i.id === params.itemId);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `Show & Tell: ${loaderData.item.name} — Lila` : "Show & Tell — Lila";
    return { meta: [{ title: t }, { name: "description", content: "Discover and learn with Lila." }, { property: "og:title", content: t }, { property: "og:description", content: "Discover and learn with Lila." }] };
  },
  notFoundComponent: () => <Screen><TopBar title="Not found" /><p>Lila couldn't find that discovery.</p><Link to="/show-tell" className="mt-4 font-bold text-primary">See all discoveries</Link></Screen>,
  component: ShowTellItem,
});

function ShowTellItem() {
  const { item } = Route.useLoaderData();
  const { age } = useLila();
  const navigate = useNavigate();
  const [factIdx, setFactIdx] = useState(0);
  const [step, setStep] = useState<"learn" | "ask">("learn");
  const band = age ?? "preschool";
  const isBaby = band === "baby";
  const idx = SHOW_ITEMS.findIndex((i) => i.id === item.id);
  const nextItem = SHOW_ITEMS[(idx + 1) % SHOW_ITEMS.length]!;

  useEffect(() => { setFactIdx(0); setStep("learn"); speak(item.intro); return stopSpeaking; }, [item.id]);

  const fact = item.facts[factIdx]!;
  const line = factIdx === 0 && step === "learn" ? item.intro : fact;

  return (
    <Screen>
      <TopBar title={item.name} />
      <div className="card-soft relative flex items-end justify-between overflow-hidden bg-sky p-4">
        <img src={lilaWave} alt="Lila" className="h-36 w-auto" />
        <button
          onClick={() => { const n = (factIdx + 1) % item.facts.length; setFactIdx(n); speak(item.facts[n]!); }}
          aria-label={`Tap the ${item.name} for another fact`}
          className="mb-4 mr-2 animate-float text-[7rem] leading-none drop-shadow-lg"
        >
          {item.emoji}
        </button>
      </div>

      <div className="mt-4 flex gap-3">
        <button onClick={() => speak(item.name)} className="btn-pop flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-display text-xl font-semibold text-primary-foreground">
          <Volume2 className="size-6" /> {item.name}
        </button>
        <button onClick={() => speak(line)} className="min-h-14 rounded-full bg-secondary px-5 font-bold text-secondary-foreground" aria-label="Replay what Lila said">
          Replay
        </button>
      </div>

      <div className="mt-4 space-y-3">
        <Caption text={line} />
        {!isBaby && <p className="text-center text-sm text-muted-foreground">Tap the {item.name.toLowerCase()} to learn more!</p>}
      </div>

      {isBaby ? (
        <div className="mt-4 space-y-3">
          <p className="rounded-2xl bg-card p-4 shadow-sm"><b>Try together:</b> {item.caregiver}</p>
          <BigButton onClick={() => { recordActivity(`show:${item.id}`, true); navigate({ to: "/show-tell/$itemId", params: { itemId: nextItem.id } }); }}>
            Next Discovery {nextItem.emoji}
          </BigButton>
        </div>
      ) : step === "learn" ? (
        <BigButton className="mt-5" onClick={() => { setStep("ask"); speak(item.questions[band].q); }}>Answer Lila's question</BigButton>
      ) : (
        <div className="mt-5 space-y-4">
          <Quiz key={item.id} {...item.questions[band]}
            onAttempt={() => recordActivity(`show:${item.id}`, false)}
            onCorrect={() => recordActivity(`show:${item.id}`, true)} />
          <div className="flex gap-3">
            <BigButton variant="soft" onClick={() => { setStep("learn"); setFactIdx(0); }}>Again</BigButton>
            <BigButton onClick={() => navigate({ to: "/show-tell/$itemId", params: { itemId: nextItem.id } })}>Next {nextItem.emoji}</BigButton>
          </div>
        </div>
      )}
    </Screen>
  );
}
