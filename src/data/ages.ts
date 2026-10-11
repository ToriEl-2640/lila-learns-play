export type AgeBand = "baby" | "toddler" | "preschool" | "explorer" | "thinker";

export const AGES: { id: AgeBand; name: string; range: string; blurb: string; emoji: string; tone: string }[] = [
  { id: "baby", name: "Baby World", range: "0–12 months", blurb: "Calm, caregiver-guided looking and listening.", emoji: "🍼", tone: "bg-sky" },
  { id: "toddler", name: "Toddler World", range: "1–3 years", blurb: "Colors, animals and first words.", emoji: "🧸", tone: "bg-peach" },
  { id: "preschool", name: "Preschool World", range: "3–5 years", blurb: "Letters, counting and feelings.", emoji: "🎨", tone: "bg-mint" },
  { id: "explorer", name: "Explorer World", range: "6–8 years", blurb: "Reading, science and puzzles.", emoji: "🔭", tone: "bg-lavender" },
  { id: "thinker", name: "Big Thinkers World", range: "9–12 years", blurb: "Deeper reasoning and real-world challenges.", emoji: "🧠", tone: "bg-secondary" },
];

export const ageInfo = (id: AgeBand | null) => AGES.find((a) => a.id === id) ?? AGES[2]!;

export const GREETING: Record<AgeBand, string> = {
  baby: "Hello, little one! Let's look together.",
  toddler: "Hi friend! Let's play!",
  preschool: "Hello! Let's discover something new!",
  explorer: "Hey explorer! What will we find out today?",
  thinker: "Welcome back, big thinker. Ready for a challenge?",
};
