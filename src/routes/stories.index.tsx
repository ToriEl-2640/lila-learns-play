import { createFileRoute, Link } from "@tanstack/react-router";
import { Screen, TopBar } from "@/components/lila-ui";
import { STORIES } from "@/data/stories";
import { ageInfo } from "@/data/ages";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Lila's Little Stories" },
      { name: "description", content: "Original stories about kindness, patience and problem-solving." },
      { property: "og:title", content: "Lila's Little Stories" },
      { property: "og:description", content: "Original stories about kindness, patience and problem-solving." },
    ],
  }),
  component: StoryList,
});

function StoryList() {
  return (
    <Screen>
      <TopBar title="Little Stories" />
      <div className="space-y-4">
        {STORIES.map((s) => (
          <Link key={s.id} to="/stories/$storyId" params={{ storyId: s.id }} className="card-soft block overflow-hidden">
            <img src={s.cover} alt="" className="aspect-[4/3] w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl">{s.title}</h2>
              <p className="text-sm text-muted-foreground">{s.theme} · {s.minutes} min · {ageInfo(s.ages[0]).range.split("–")[0]}+ years</p>
            </div>
          </Link>
        ))}
        <p className="text-center text-sm text-muted-foreground">More stories are coming soon.</p>
      </div>
    </Screen>
  );
}
