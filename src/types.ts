export type Card = {
  title: string;
  emoji: string;
  hook: string; // plain-English definition, 1–2 sentences
  analogy: string; // "think of it like..."
  example: string; // concrete real-world example
  pm: string; // why it matters for a product manager
};

export type QuizQ = {
  q: string;
  choices: string[];
  answer: number;
  explain: string;
};

export type Lesson = {
  id: string;
  title: string;
  emoji: string;
  cards: Card[];
  quiz: QuizQ[];
};

export type Unit = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  tagline: string;
  lessons: Lesson[];
};
