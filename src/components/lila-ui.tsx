import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { setState, useLila } from "@/lib/store";

export function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-4", className)}>{children}</div>;
}

export function TopBar({ title, back = true }: { title?: string; back?: boolean }) {
  const router = useRouter();
  const { sound } = useLila();
  return (
    <div className="mb-4 flex items-center gap-3">
      {back && (
        <button aria-label="Go back" onClick={() => router.history.back()} className="grid size-12 place-items-center rounded-full bg-card shadow-sm">
          <ArrowLeft className="size-6 text-primary-deep" />
        </button>
      )}
      <h1 className="flex-1 truncate text-xl text-primary-deep">{title}</h1>
      <button
        aria-label={sound ? "Turn sound off" : "Turn sound on"}
        onClick={() => setState({ sound: !sound })}
        className="grid size-12 place-items-center rounded-full bg-card shadow-sm"
      >
        {sound ? <Volume2 className="size-6 text-primary" /> : <VolumeX className="size-6 text-muted-foreground" />}
      </button>
    </div>
  );
}

export function BigButton({ children, onClick, variant = "primary", className, disabled }: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "soft"; className?: string; disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "min-h-14 w-full rounded-full px-6 font-display text-lg font-semibold disabled:opacity-50",
        variant === "primary" ? "btn-pop bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Caption({ text }: { text: string }) {
  const { captions } = useLila();
  if (!captions) return null;
  return <p className="rounded-2xl bg-lavender px-4 py-3 text-center text-base font-semibold text-secondary-foreground">{text}</p>;
}

export function NavCard({ to, emoji, title, sub, tone }: { to: "/show-tell" | "/stories" | "/play" | "/grown-ups"; emoji: string; title: string; sub: string; tone: string }) {
  return (
    <Link to={to} className={cn("card-soft flex min-h-32 flex-col justify-between p-4 active:scale-[0.98] transition", tone)}>
      <span className="text-4xl" aria-hidden>{emoji}</span>
      <span>
        <span className="block font-display text-lg font-semibold text-foreground">{title}</span>
        <span className="block text-sm text-muted-foreground">{sub}</span>
      </span>
    </Link>
  );
}
