import type { AgeBand } from "./ages";
import crayonImg from "@/assets/story-crayon.jpg";

/** Original, reviewed stories only. AI drafts must never be added here unreviewed. */
export type Story = {
  id: string;
  title: string;
  ages: AgeBand[];
  minutes: number;
  theme: string;
  cover: string;
  pages: { text: string; emoji: string }[];
  quiz: { q: string; choices: string[]; answer: string };
  status: "published";
};

export const STORIES: Story[] = [
  {
    id: "missing-blue-crayon",
    title: "Lila and the Missing Blue Crayon",
    ages: ["toddler", "preschool", "explorer", "thinker"],
    minutes: 3,
    theme: "Patience & problem-solving",
    cover: crayonImg,
    status: "published",
    pages: [
      { emoji: "🖍️", text: "Lila and Bunny wanted to draw a big, bright picture of the sky." },
      { emoji: "🌈", text: "They used red, yellow and green. \"Now we need blue for the sky!\" said Lila." },
      { emoji: "🤔", text: "But the blue crayon was gone! Bunny's ears drooped. Who took it?" },
      { emoji: "😌", text: "Lila took a deep breath. \"Nobody needs to be blamed. Let's look carefully.\"" },
      { emoji: "🙋🏾‍♀️", text: "They looked in the box and on the chair. Then Lila asked, \"Can you help me look?\"" },
      { emoji: "🔎", text: "Together they peeked under the little table. There it was! The blue crayon had rolled away." },
      { emoji: "💜", text: "Lila and Bunny finished the sky. \"When we stay calm and ask for help, we can solve problems!\"" },
    ],
    quiz: {
      q: "Where was the blue crayon?",
      choices: ["Under the table", "In Bunny's pocket", "Outside"],
      answer: "Under the table",
    },
  },
];
