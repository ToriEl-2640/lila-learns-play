import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Screen, TopBar } from "@/components/lila-ui";
import { SHOW_ITEMS } from "@/data/showtell";
import { useLila } from "@/lib/store";

export const Route = createFileRoute("/show-tell/")({
  head: () => ({
    meta: [
      { title: "Show & Tell with Lila" },
      { name: "description", content: "Discover fruits, animals, toys and more with Lila." },
      { property: "og:title", content: "Show & Tell with Lila" },
      { property: "og:description", content: "Discover fruits, animals, toys and more with Lila." },
    ],
  }),
  component: ShowTellList,
});

function ShowTellList() {
  const { completed } = useLila();
  return (
    <Screen>
      <TopBar title="Show & Tell" />
      <p className="mb-4 text-muted-foreground">Pick something to discover with Lila!</p>
      <div className="grid grid-cols-2 gap-3">
        {SHOW_ITEMS.map((i) => (
          <Link key={i.id} to="/show-tell/$itemId" params={{ itemId: i.id }} className="card-soft relative flex flex-col items-center gap-1 p-5 active:scale-95 transition">
            {completed[`show:${i.id}`]?.done && (
              <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-success" aria-label="Completed">
                <Check className="size-4 text-primary-foreground" />
              </span>
            )}
            <span className="text-6xl" aria-hidden>{i.emoji}</span>
            <span className="font-display text-lg font-semibold">{i.name}</span>
            <span className="text-xs font-bold text-muted-foreground">{i.category}</span>
          </Link>
        ))}
      </div>
    </Screen>
  );
}
