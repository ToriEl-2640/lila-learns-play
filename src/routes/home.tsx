import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { Screen, TopBar, NavCard, Caption } from "@/components/lila-ui";
import { useLila } from "@/lib/store";
import { speak } from "@/lib/speech";
import { ageInfo, GREETING } from "@/data/ages";
import { SHOW_ITEMS } from "@/data/showtell";
import { STORIES } from "@/data/stories";
import lilaWave from "@/assets/lila-wave.webp";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Lila's World — Home" },
      { name: "description", content: "Pick a discovery, story or game with Lila." },
      { property: "og:title", content: "Lila's World — Home" },
      { property: "og:description", content: "Pick a discovery, story or game with Lila." },
    ],
  }),
  component: Home,
});

function Home() {
  const s = useLila();
  if (s.hydrated && !s.age) return <Navigate to="/onboarding" />;
  const age = s.age ?? "preschool";
  const info = ageInfo(age);
  const next = SHOW_ITEMS.find((i) => !s.completed[`show:${i.id}`]?.done) ?? SHOW_ITEMS[0];
  const today = SHOW_ITEMS[new Date().getDate() % SHOW_ITEMS.length];
  const doneCount = Object.values(s.completed).filter((c) => c.done).length;
  const isBaby = age === "baby";
  const greeting = GREETING[age];

  return (
    <Screen>
      <TopBar title={info.name} back={false} />
      <button onClick={() => speak(greeting)} className="card-soft flex items-end gap-2 overflow-hidden bg-lavender pr-4 text-left" aria-label="Hear Lila's greeting">
        <img src={lilaWave} alt="Lila and Bunny" className="-mb-2 h-40 w-auto" />
        <p className="pb-6 font-display text-xl font-semibold text-primary-deep">{greeting}</p>
      </button>
      <div className="mt-3"><Caption text={greeting} /></div>

      <Link to="/show-tell/$itemId" params={{ itemId: next.id }} className="card-soft mt-4 flex items-center gap-4 p-4">
        <span className="text-5xl" aria-hidden>{next.emoji}</span>
        <span className="flex-1">
          <span className="block text-xs font-bold uppercase tracking-wide text-primary">Continue learning</span>
          <span className="block font-display text-lg font-semibold">Discover: {next.name}</span>
        </span>
        <span className="rounded-full bg-primary px-4 py-2 font-bold text-primary-foreground">Go</span>
      </Link>

      {!isBaby && (
        <Link to="/show-tell/$itemId" params={{ itemId: today.id }} className="card-soft mt-3 flex items-center gap-4 bg-peach p-4">
          <span className="text-4xl" aria-hidden>{today.emoji}</span>
          <span className="flex-1">
            <span className="block text-xs font-bold uppercase tracking-wide text-accent-foreground">Today's discovery</span>
            <span className="block font-display text-lg font-semibold">{today.name}</span>
          </span>
        </Link>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <NavCard to="/show-tell" emoji="🔎" title="Show & Tell" sub={isBaby ? "Look & name together" : "Discover objects"} tone="bg-sky" />
        {!isBaby && <NavCard to="/stories" emoji="📖" title="Little Stories" sub={`${STORIES.length} story`} tone="bg-mint" />}
        {!isBaby && <NavCard to="/play" emoji="🎮" title="Play & Learn" sub="Color Explorer" tone="bg-peach" />}
        <NavCard to="/grown-ups" emoji="🔒" title="Grown-ups" sub="Settings & progress" tone="bg-secondary" />
      </div>

      {isBaby && (
        <p className="mt-4 rounded-2xl bg-card p-4 text-sm text-muted-foreground shadow-sm">
          <b className="text-foreground">For caregivers:</b> Lila is for sharing together. Please stay with your baby — the app supports, and never replaces, your loving interaction.
        </p>
      )}

      <p className="mt-6 text-center text-sm font-semibold text-muted-foreground">⭐ {doneCount} discoveries completed</p>
    </Screen>
  );
}
