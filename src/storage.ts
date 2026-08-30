// All progress lives in localStorage so the app works offline, no account needed.

export type FlashState = {
  box: number; // Leitner box 1..4
  due: string; // YYYY-MM-DD when next due
};

export type Progress = {
  xp: number;
  streak: number;
  bestStreak: number;
  lastActive: string; // YYYY-MM-DD of last day that counted toward streak
  completed: string[]; // lesson ids
  scores: Record<string, number>; // lesson id -> best quiz % (0-100)
  flash: Record<string, FlashState>; // card key -> spaced repetition state
  history: Record<string, number>; // YYYY-MM-DD -> xp earned that day
};

const KEY = "llm-daily-v1";

export function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(a: string, b: string): number {
  return Math.round(
    (new Date(b + "T12:00").getTime() - new Date(a + "T12:00").getTime()) /
      86400000,
  );
}

export function addDays(date: string, n: number): string {
  const d = new Date(date + "T12:00");
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Progress;
      // If a full day was missed, the streak resets (visually) on load.
      if (p.lastActive && daysBetween(p.lastActive, today()) > 1) {
        p.streak = 0;
      }
      return p;
    }
  } catch {
    // corrupted state falls through to fresh start
  }
  return {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastActive: "",
    completed: [],
    scores: {},
    flash: {},
    history: {},
  };
}

export function save(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

/** Award XP and keep the streak alive. Returns the updated progress. */
export function earnXp(p: Progress, amount: number): Progress {
  const t = today();
  let { streak, bestStreak } = p;
  if (p.lastActive !== t) {
    streak = p.lastActive && daysBetween(p.lastActive, t) === 1 ? p.streak + 1 : 1;
    bestStreak = Math.max(bestStreak, streak);
  }
  return {
    ...p,
    xp: p.xp + amount,
    streak,
    bestStreak,
    lastActive: t,
    history: { ...p.history, [t]: (p.history[t] ?? 0) + amount },
  };
}

// Leitner spaced repetition: box 1 = review now, 2 = tomorrow, 3 = in 3 days, 4 = weekly.
const BOX_INTERVAL: Record<number, number> = { 1: 0, 2: 1, 3: 3, 4: 7 };

export function reviewCard(
  p: Progress,
  cardKey: string,
  gotIt: boolean,
): Progress {
  const cur = p.flash[cardKey] ?? { box: 1, due: today() };
  const box = gotIt ? Math.min(cur.box + 1, 4) : 1;
  return {
    ...p,
    flash: {
      ...p.flash,
      [cardKey]: { box, due: addDays(today(), BOX_INTERVAL[box]) },
    },
  };
}

export const LEVELS = [
  { xp: 0, title: "Curious Human", emoji: "🐣" },
  { xp: 150, title: "Token Trainee", emoji: "🧱" },
  { xp: 400, title: "Prompt Apprentice", emoji: "🪄" },
  { xp: 800, title: "RAG Ranger", emoji: "📖" },
  { xp: 1300, title: "Eval Enforcer", emoji: "📊" },
  { xp: 1900, title: "Agent Architect", emoji: "🤖" },
  { xp: 2600, title: "Frontier PM", emoji: "🚀" },
  { xp: 3400, title: "AI PM Legend", emoji: "🏆" },
];

export function levelFor(xp: number) {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) idx = i;
  const cur = LEVELS[idx];
  const next = LEVELS[idx + 1];
  return {
    index: idx,
    title: cur.title,
    emoji: cur.emoji,
    next,
    progress: next
      ? (xp - cur.xp) / (next.xp - cur.xp)
      : 1,
  };
}

export const XP_LESSON = 40;
export const XP_QUIZ_CORRECT = 10;
export const XP_FLASH = 5;
export const DAILY_GOAL_XP = 60;
