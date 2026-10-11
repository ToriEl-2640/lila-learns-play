import type { AgeBand } from "./ages";

/** Reviewed, curated content. Do not replace with unreviewed AI output. */
export type Question = { q: string; choices: string[]; answer: string; explain: string };
export type ShowItem = {
  id: string;
  name: string;
  emoji: string;
  category: string;
  intro: string;
  facts: string[];
  caregiver: string;
  questions: Record<Exclude<AgeBand, "baby">, Question>;
};

export const SHOW_ITEMS: ShowItem[] = [
  {
    id: "apple", name: "Apple", emoji: "🍎", category: "Fruits",
    intro: "Hello! Today we're learning about an apple.",
    facts: ["An apple is a fruit. It can be red, green, or yellow.", "Apples grow on trees.", "The seeds are inside, in the middle of the apple."],
    caregiver: "Show your baby a real apple. Say \"apple\" slowly and let them touch it.",
    questions: {
      toddler: { q: "What is this?", choices: ["Apple", "Ball", "Shoe"], answer: "Apple", explain: "Yes, it's an apple!" },
      preschool: { q: "Which color can an apple be?", choices: ["Red", "Purple", "Blue"], answer: "Red", explain: "Apples can be red, green, or yellow." },
      explorer: { q: "Where do apples grow?", choices: ["On trees", "Under the ground", "In the sea"], answer: "On trees", explain: "Apples grow on apple trees, from flowers called blossoms." },
      thinker: { q: "Why is an apple called a fruit?", choices: ["It grows from a flower and holds seeds", "It is sweet", "It is round"], answer: "It grows from a flower and holds seeds", explain: "In science, a fruit is the part of a plant that grows from a flower and holds seeds." },
    },
  },
  {
    id: "cat", name: "Cat", emoji: "🐱", category: "Animals",
    intro: "Look! This is a cat.",
    facts: ["A cat says \"meow\".", "Cats have soft fur and whiskers.", "Cats use their whiskers to feel the space around them."],
    caregiver: "Say \"meow\" softly and gently stroke your baby's arm like soft fur.",
    questions: {
      toddler: { q: "What does a cat say?", choices: ["Meow", "Moo", "Quack"], answer: "Meow", explain: "Meow! Great listening." },
      preschool: { q: "What does a cat have on its face to help it feel?", choices: ["Whiskers", "Feathers", "Shells"], answer: "Whiskers", explain: "Whiskers help cats feel things near them." },
      explorer: { q: "What group of animals does a cat belong to?", choices: ["Mammals", "Birds", "Fish"], answer: "Mammals", explain: "Cats are mammals: they have fur and feed their babies milk." },
      thinker: { q: "Why might whiskers help a cat in the dark?", choices: ["They sense air movement and nearby objects", "They glow", "They make sounds"], answer: "They sense air movement and nearby objects", explain: "Whiskers are very sensitive and detect tiny changes in air around them." },
    },
  },
  {
    id: "ball", name: "Ball", emoji: "⚽", category: "Toys",
    intro: "Here is a ball. Let's learn about it!",
    facts: ["A ball is round.", "We can roll, throw, and kick a ball.", "A round shape helps a ball roll smoothly."],
    caregiver: "Roll a soft ball slowly in front of your baby and let their eyes follow it.",
    questions: {
      toddler: { q: "Find the ball!", choices: ["Ball", "Cup", "Hat"], answer: "Ball", explain: "You found the ball!" },
      preschool: { q: "What shape is a ball?", choices: ["Round", "Square", "Triangle"], answer: "Round", explain: "A ball is round, like a circle." },
      explorer: { q: "Why does a ball roll easily?", choices: ["It is round", "It is heavy", "It is colorful"], answer: "It is round", explain: "A round shape has no flat sides to stop it." },
      thinker: { q: "What makes a rolling ball slow down and stop?", choices: ["Friction with the ground", "Its color", "Gravity pushing it up"], answer: "Friction with the ground", explain: "Friction between the ball and the surface takes away its motion." },
    },
  },
  {
    id: "bus", name: "Bus", emoji: "🚌", category: "Transportation",
    intro: "Beep beep! This is a bus.",
    facts: ["A bus carries many people.", "Buses drive on roads.", "Taking a bus can mean fewer cars on the road."],
    caregiver: "Say \"beep beep\" and make a gentle driving motion with your hands.",
    questions: {
      toddler: { q: "What says beep beep?", choices: ["Bus", "Fish", "Banana"], answer: "Bus", explain: "Beep beep! The bus!" },
      preschool: { q: "Where does a bus drive?", choices: ["On the road", "In the sky", "Under water"], answer: "On the road", explain: "Buses drive on roads." },
      explorer: { q: "Why is a bus helpful for a town?", choices: ["It carries many people at once", "It is yellow", "It is small"], answer: "It carries many people at once", explain: "One bus can carry as many people as many cars." },
      thinker: { q: "How can buses help the environment?", choices: ["Fewer cars means less pollution", "Buses grow trees", "Buses use no energy"], answer: "Fewer cars means less pollution", explain: "Sharing one vehicle usually means less fuel used per person." },
    },
  },
  {
    id: "sun", name: "Sun", emoji: "☀️", category: "Nature",
    intro: "Look up! This is the sun.",
    facts: ["The sun gives us light.", "The sun keeps us warm.", "The sun is a star — the closest star to Earth."],
    caregiver: "By a bright window, say \"sun\" and \"warm\" while you cuddle.",
    questions: {
      toddler: { q: "What is bright in the sky?", choices: ["Sun", "Shoe", "Spoon"], answer: "Sun", explain: "The sun is bright!" },
      preschool: { q: "What does the sun give us?", choices: ["Light", "Rain", "Snow"], answer: "Light", explain: "The sun gives us light and warmth." },
      explorer: { q: "What is the sun?", choices: ["A star", "A planet", "A moon"], answer: "A star", explain: "The sun is a star, a giant ball of hot gas." },
      thinker: { q: "Why do plants need the sun?", choices: ["To make food with sunlight", "To stay cold", "To make noise"], answer: "To make food with sunlight", explain: "Plants use sunlight to make food. This is called photosynthesis." },
    },
  },
  {
    id: "toothbrush", name: "Toothbrush", emoji: "🪥", category: "Household",
    intro: "This is a toothbrush. Brush, brush, brush!",
    facts: ["We use a toothbrush to clean our teeth.", "We brush in the morning and at bedtime.", "Brushing removes food and germs from our teeth."],
    caregiver: "Show your baby a soft baby toothbrush and sing a little \"brush brush\" tune.",
    questions: {
      toddler: { q: "What do we brush teeth with?", choices: ["Toothbrush", "Ball", "Book"], answer: "Toothbrush", explain: "Brush, brush, brush!" },
      preschool: { q: "When do we brush our teeth?", choices: ["Morning and bedtime", "Only on birthdays", "Never"], answer: "Morning and bedtime", explain: "Twice a day keeps teeth healthy." },
      explorer: { q: "Why do we brush our teeth?", choices: ["To remove food and germs", "To make them longer", "To change their color"], answer: "To remove food and germs", explain: "Brushing helps stop holes in our teeth." },
      thinker: { q: "What can happen if food stays on teeth?", choices: ["Germs can cause tooth decay", "Teeth grow faster", "Nothing at all"], answer: "Germs can cause tooth decay", explain: "Germs turn sugar into acid that can damage teeth." },
    },
  },
];
