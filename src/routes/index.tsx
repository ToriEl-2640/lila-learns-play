import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Screen, BigButton } from "@/components/lila-ui";
import { useLila } from "@/lib/store";
import lilaWave from "@/assets/lila-wave.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lila — Big discoveries start with little questions" },
      { name: "description", content: "Explore, play, listen, and learn with Lila and her purple bunny." },
      { property: "og:title", content: "Lila — Learning World for Children" },
      { property: "og:description", content: "Explore, play, listen, and learn with Lila and her purple bunny." },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  const navigate = useNavigate();
  const { onboarded, hydrated } = useLila();
  return (
    <Screen className="justify-between text-center">
      <div className="pt-6">
        <p className="font-display text-5xl font-bold text-primary">Lila</p>
        <p className="text-sm font-semibold text-muted-foreground">Your little learning buddy</p>
      </div>
      <img src={lilaWave} alt="Lila waving hello while holding her purple bunny" className="mx-auto h-[44dvh] w-auto animate-float drop-shadow-xl" />
      <div className="space-y-3">
        <h1 className="text-3xl text-primary-deep">Big discoveries start with little questions!</h1>
        <p className="text-muted-foreground">Explore, play, listen, and learn with Lila.</p>
        <BigButton onClick={() => navigate({ to: hydrated && onboarded ? "/home" : "/onboarding" })}>
          {hydrated && onboarded ? "Let's Play!" : "Let's Begin"}
        </BigButton>
        <Link to="/grown-ups" className="block py-3 font-bold text-primary-deep underline-offset-4 hover:underline">Grown-ups' Area</Link>
      </div>
    </Screen>
  );
}
