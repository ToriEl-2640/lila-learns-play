import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Screen, TopBar, BigButton } from "@/components/lila-ui";
import { Quiz } from "@/components/Quiz";
import { STORIES } from "@/data/stories";
import { recordActivity, useLila } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";

export const Route = createFileRoute("/stories/$storyId")({
  loader: ({ params }) => {
    const story = STORIES.find((s) => s.id === params.storyId);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.story.title} — Lila` : "Story — Lila";
    return { meta: [{ title: t }, { name: "description", content: "An original Lila story." }, { property: "og:title", content: t }, { property: "og:description", content: "An original Lila story." }] };
  },
  notFoundComponent: () => <Screen><TopBar title="Not found" /><Link to="/stories" className="font-bold text-primary">All stories</Link></Screen>,
  component: Reader,
});

function Reader() {
  const { story } = Route.useLoaderData();
  const { captions, sound } = useLila();
  const [page, setPage] = useState(-1); // -1 = cover, pages.length = quiz
  const [readToMe, setReadToMe] = useState(true);
  const [playing, setPlaying] = useState(false);
  const total = story.pages.length;
  const current = story.pages[page]!;

  useEffect(() => {
    if (story.pages[page] && readToMe && sound) { speak(current.text); setPlaying(true); } else setPlaying(false);
  }, [page, readToMe]);
  useEffect(() => stopSpeaking, []);

  if (page === -1) {
    return (
      <Screen>
        <TopBar title="Story time" />
        <img src={story.cover} alt="Lila and Bunny look under the table for the blue crayon" className="card-soft aspect-[4/3] w-full object-cover" />
        <h1 className="mt-4 text-2xl text-primary-deep">{story.title}</h1>
        <p className="text-sm text-muted-foreground">{story.theme} · about {story.minutes} minutes</p>
        <div className="mt-6 space-y-3">
          <BigButton onClick={() => { setReadToMe(true); setPage(0); }}>Read to me</BigButton>
          <BigButton variant="soft" onClick={() => { setReadToMe(false); setPage(0); }}>Read by myself</BigButton>
        </div>
      </Screen>
    );
  }

  if (page >= total) {
    return (
      <Screen>
        <TopBar title="Story questions" />
        <Quiz {...story.quiz} explain="Lila stayed calm, asked for help, and looked carefully."
          onAttempt={() => recordActivity(`story:${story.id}`, false)}
          onCorrect={() => recordActivity(`story:${story.id}`, true)} />
        <p className="card-soft mt-4 p-4"><b>Talk about it:</b> What can you do when you can't find something?</p>
        <div className="mt-5 flex gap-3">
          <BigButton variant="soft" onClick={() => setPage(-1)}>Read again</BigButton>
          <Link to="/stories" className="flex min-h-14 flex-1 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">Done</Link>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      <TopBar title={story.title} />
      <div className="card-soft flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
        <span className="text-8xl animate-pop" key={page} aria-hidden>{current.emoji}</span>
        {(captions || !readToMe) && <p className="font-display text-2xl leading-snug">{current.text}</p>}
        <p className="text-sm font-bold text-muted-foreground">Page {page + 1} of {total}</p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button aria-label="Previous page" onClick={() => setPage((p) => p - 1)} className="grid size-16 place-items-center rounded-full bg-secondary">
          <ChevronLeft className="size-8 text-secondary-foreground" />
        </button>
        <button
          aria-label={playing ? "Pause narration" : "Play narration"}
          onClick={() => { if (playing) { stopSpeaking(); setPlaying(false); } else { setPlaying(speak(current.text)); } }}
          className="btn-pop flex min-h-16 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-bold text-primary-foreground"
        >
          {playing ? <Pause className="size-6" /> : <Play className="size-6" />} {playing ? "Pause" : sound ? "Read aloud" : "Sound is off"}
        </button>
        <button aria-label="Next page" onClick={() => setPage((p) => p + 1)} className="grid size-16 place-items-center rounded-full bg-primary">
          <ChevronRight className="size-8 text-primary-foreground" />
        </button>
      </div>
    </Screen>
  );
}
