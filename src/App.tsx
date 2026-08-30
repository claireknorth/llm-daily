import { useEffect, useMemo, useState } from "react";
import { UNITS, ALL_LESSONS, findLesson, TOTAL_LESSONS } from "./curriculum";
import type { Lesson, Unit } from "./types";
import {
  load,
  save,
  earnXp,
  reviewCard,
  levelFor,
  today,
  XP_LESSON,
  XP_QUIZ_CORRECT,
  XP_FLASH,
  DAILY_GOAL_XP,
  type Progress,
} from "./storage";

type Tab = "home" | "learn" | "review" | "stats";

export default function App() {
  const [progress, setProgress] = useState<Progress>(load);
  const [tab, setTab] = useState<Tab>("home");
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  useEffect(() => save(progress), [progress]);

  const update = (fn: (p: Progress) => Progress) => setProgress(fn);

  const active = activeLesson ? findLesson(activeLesson) : undefined;

  return (
    <div className="app">
      {active ? (
        <LessonScreen
          unit={active.unit}
          lesson={active.lesson}
          progress={progress}
          update={update}
          onExit={() => setActiveLesson(null)}
        />
      ) : (
        <>
          <main className="screen">
            {tab === "home" && (
              <Home
                progress={progress}
                onStart={(id) => setActiveLesson(id)}
                onReview={() => setTab("review")}
              />
            )}
            {tab === "learn" && (
              <Learn progress={progress} onStart={(id) => setActiveLesson(id)} />
            )}
            {tab === "review" && <Review progress={progress} update={update} />}
            {tab === "stats" && <Stats progress={progress} />}
          </main>
          <nav className="tabbar">
            {(
              [
                ["home", "🏠", "Home"],
                ["learn", "🗺️", "Learn"],
                ["review", "🔁", "Review"],
                ["stats", "📊", "Stats"],
              ] as const
            ).map(([id, icon, label]) => (
              <button
                key={id}
                className={`tab ${tab === id ? "active" : ""}`}
                onClick={() => setTab(id)}
              >
                <span className="tab-icon">{icon}</span>
                <span className="tab-label">{label}</span>
              </button>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */

function nextLesson(progress: Progress) {
  return ALL_LESSONS.find((l) => !progress.completed.includes(l.lesson.id));
}

function dueFlashcards(progress: Progress) {
  const t = today();
  const due: { key: string; front: string; emoji: string; back: string; analogy: string }[] = [];
  for (const { lesson } of ALL_LESSONS) {
    if (!progress.completed.includes(lesson.id)) continue;
    lesson.cards.forEach((card, i) => {
      const key = `${lesson.id}:${i}`;
      const st = progress.flash[key];
      if (!st || st.due <= t) {
        due.push({
          key,
          front: card.title,
          emoji: card.emoji,
          back: card.hook,
          analogy: card.analogy,
        });
      }
    });
  }
  return due;
}

/* ---------- Home ---------- */

function Home({
  progress,
  onStart,
  onReview,
}: {
  progress: Progress;
  onStart: (id: string) => void;
  onReview: () => void;
}) {
  const lvl = levelFor(progress.xp);
  const next = nextLesson(progress);
  const due = dueFlashcards(progress);
  const todayXp = progress.history[today()] ?? 0;
  const goalPct = Math.min(100, Math.round((todayXp / DAILY_GOAL_XP) * 100));
  const done = progress.completed.length;

  return (
    <div className="stack">
      <header className="hero">
        <div className="hero-top">
          <div>
            <p className="eyebrow">LLM Daily</p>
            <h1 className="hero-title">
              {done === 0
                ? "Day one. Let's go."
                : goalPct >= 100
                  ? "Goal crushed 🎉"
                  : "Keep the flame alive"}
            </h1>
          </div>
          <div className={`flame ${progress.streak > 0 ? "lit" : ""}`}>
            <span className="flame-emoji">🔥</span>
            <span className="flame-num">{progress.streak}</span>
            <span className="flame-label">day streak</span>
          </div>
        </div>

        <div className="goal">
          <div className="goal-head">
            <span>Daily goal</span>
            <span>
              {todayXp}/{DAILY_GOAL_XP} XP
            </span>
          </div>
          <div className="bar">
            <div className="bar-fill" style={{ width: `${goalPct}%` }} />
          </div>
        </div>
      </header>

      <div className="level-card card">
        <span className="level-emoji">{lvl.emoji}</span>
        <div className="level-info">
          <p className="level-title">{lvl.title}</p>
          <div className="bar thin">
            <div className="bar-fill" style={{ width: `${Math.round(lvl.progress * 100)}%` }} />
          </div>
          <p className="level-sub">
            {lvl.next
              ? `${lvl.next.xp - progress.xp} XP to ${lvl.next.title}`
              : "Max level. Legend."}
          </p>
        </div>
        <span className="xp-pill">{progress.xp} XP</span>
      </div>

      {next ? (
        <button className="cta card" onClick={() => onStart(next.lesson.id)}>
          <span className="cta-emoji">{next.lesson.emoji}</span>
          <span className="cta-text">
            <span className="cta-kicker">
              {done === 0 ? "Start here" : "Up next"} · {next.unit.title}
            </span>
            <span className="cta-title">{next.lesson.title}</span>
          </span>
          <span className="cta-go">→</span>
        </button>
      ) : (
        <div className="card done-card">
          <p className="cta-title">All {TOTAL_LESSONS} lessons complete 🏆</p>
          <p className="muted">Keep your streak with daily flashcard reviews.</p>
        </div>
      )}

      {due.length > 0 && (
        <button className="review-nudge card" onClick={onReview}>
          <span className="cta-emoji">🔁</span>
          <span className="cta-text">
            <span className="cta-kicker">Spaced repetition</span>
            <span className="cta-title">{due.length} flashcards due</span>
          </span>
          <span className="cta-go">→</span>
        </button>
      )}

      <div className="mini-stats">
        <div className="mini card">
          <span className="mini-num">{done}</span>
          <span className="mini-label">of {TOTAL_LESSONS} lessons</span>
        </div>
        <div className="mini card">
          <span className="mini-num">{progress.bestStreak}</span>
          <span className="mini-label">best streak</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Learn (path) ---------- */

function Learn({
  progress,
  onStart,
}: {
  progress: Progress;
  onStart: (id: string) => void;
}) {
  // Lessons unlock in order — the first incomplete lesson is the frontier.
  const frontier = nextLesson(progress)?.lesson.id;
  let unlocked = true;

  return (
    <div className="stack">
      <h1 className="page-title">Your path</h1>
      {UNITS.map((unit) => (
        <section key={unit.id} className="unit" style={{ "--accent": unit.color } as React.CSSProperties}>
          <div className="unit-head">
            <span className="unit-emoji">{unit.emoji}</span>
            <div>
              <h2 className="unit-title">{unit.title}</h2>
              <p className="unit-tag">{unit.tagline}</p>
            </div>
          </div>
          <div className="lessons">
            {unit.lessons.map((lesson) => {
              const isDone = progress.completed.includes(lesson.id);
              const isFrontier = lesson.id === frontier;
              const canOpen = isDone || isFrontier;
              if (!isDone && !isFrontier) unlocked = false;
              const score = progress.scores[lesson.id];
              return (
                <button
                  key={lesson.id}
                  className={`lesson-node card ${isDone ? "done" : ""} ${isFrontier ? "frontier" : ""} ${!canOpen ? "locked" : ""}`}
                  disabled={!canOpen}
                  onClick={() => onStart(lesson.id)}
                >
                  <span className="lesson-emoji">{canOpen ? lesson.emoji : "🔒"}</span>
                  <span className="lesson-name">{lesson.title}</span>
                  {isDone && (
                    <span className="lesson-score">
                      {score !== undefined ? `${score}%` : "✓"}
                    </span>
                  )}
                  {isFrontier && <span className="lesson-go">START</span>}
                </button>
              );
            })}
          </div>
        </section>
      ))}
      {unlocked && <p className="muted center">You've unlocked everything. 🎓</p>}
    </div>
  );
}

/* ---------- Lesson (cards → quiz → result) ---------- */

function LessonScreen({
  unit,
  lesson,
  progress,
  update,
  onExit,
}: {
  unit: Unit;
  lesson: Lesson;
  progress: Progress;
  update: (fn: (p: Progress) => Progress) => void;
  onExit: () => void;
}) {
  const [step, setStep] = useState(0); // card index, then quiz
  const [phase, setPhase] = useState<"cards" | "quiz" | "result">("cards");
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [awarded, setAwarded] = useState(0);

  const card = lesson.cards[step];
  const question = lesson.quiz[qIndex];
  const totalSteps = lesson.cards.length + lesson.quiz.length;
  const doneSteps = phase === "cards" ? step : lesson.cards.length + qIndex;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === question.answer) setCorrect((c) => c + 1);
  };

  const nextQuestion = () => {
    setPicked(null);
    if (qIndex + 1 < lesson.quiz.length) {
      setQIndex(qIndex + 1);
    } else {
      const gotAll = correct;
      const firstTime = !progress.completed.includes(lesson.id);
      const xp = (firstTime ? XP_LESSON : 10) + gotAll * XP_QUIZ_CORRECT;
      const pct = Math.round((gotAll / lesson.quiz.length) * 100);
      setAwarded(xp);
      update((p) => {
        let np = earnXp(p, xp);
        np = {
          ...np,
          completed: np.completed.includes(lesson.id)
            ? np.completed
            : [...np.completed, lesson.id],
          scores: {
            ...np.scores,
            [lesson.id]: Math.max(np.scores[lesson.id] ?? 0, pct),
          },
        };
        return np;
      });
      setPhase("result");
    }
  };

  return (
    <div className="lesson-screen" style={{ "--accent": unit.color } as React.CSSProperties}>
      <div className="lesson-top">
        <button className="close" onClick={onExit}>
          ✕
        </button>
        <div className="bar thin grow">
          <div
            className="bar-fill"
            style={{ width: `${Math.round((doneSteps / totalSteps) * 100)}%` }}
          />
        </div>
      </div>

      {phase === "cards" && (
        <div className="stack lesson-body" key={step}>
          <p className="eyebrow">
            {unit.emoji} {unit.title} · {step + 1}/{lesson.cards.length}
          </p>
          <div className="concept card pop">
            <span className="concept-emoji">{card.emoji}</span>
            <h2 className="concept-title">{card.title}</h2>
            <p className="concept-hook">{card.hook}</p>
            <div className="concept-block analogy">
              <span className="block-label">🧩 Think of it like</span>
              <p>{card.analogy}</p>
            </div>
            <div className="concept-block example">
              <span className="block-label">🌍 Real example</span>
              <p>{card.example}</p>
            </div>
            <div className="concept-block pm">
              <span className="block-label">💼 PM angle</span>
              <p>{card.pm}</p>
            </div>
          </div>
          <button
            className="primary"
            onClick={() =>
              step + 1 < lesson.cards.length ? setStep(step + 1) : setPhase("quiz")
            }
          >
            {step + 1 < lesson.cards.length ? "Got it →" : "Quiz me 🎯"}
          </button>
        </div>
      )}

      {phase === "quiz" && (
        <div className="stack lesson-body" key={`q${qIndex}`}>
          <p className="eyebrow">
            🎯 Question {qIndex + 1}/{lesson.quiz.length}
          </p>
          <h2 className="quiz-q pop">{question.q}</h2>
          <div className="choices">
            {question.choices.map((choice, i) => {
              let cls = "choice card";
              if (picked !== null) {
                if (i === question.answer) cls += " right";
                else if (i === picked) cls += " wrong";
                else cls += " dim";
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)}>
                  {choice}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="pop">
              <div className={`verdict ${picked === question.answer ? "yay" : "nay"}`}>
                <strong>
                  {picked === question.answer ? "✅ Nailed it!" : "❌ Not quite."}
                </strong>
                <p>{question.explain}</p>
              </div>
              <button className="primary" onClick={nextQuestion}>
                {qIndex + 1 < lesson.quiz.length ? "Next →" : "Finish 🏁"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "result" && (
        <div className="stack lesson-body center-col pop">
          <span className="result-emoji">
            {correct === lesson.quiz.length ? "🏆" : correct > 0 ? "💪" : "🌱"}
          </span>
          <h2 className="result-title">
            {correct}/{lesson.quiz.length} correct
          </h2>
          <p className="result-xp">+{awarded} XP</p>
          <p className="muted">
            {correct === lesson.quiz.length
              ? "Perfect score. These cards join your review deck."
              : "Solid. The cards join your review deck — repetition makes it stick."}
          </p>
          <button className="primary" onClick={onExit}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- Review (flashcards) ---------- */

function Review({
  progress,
  update,
}: {
  progress: Progress;
  update: (fn: (p: Progress) => Progress) => void;
}) {
  const due = useMemo(() => dueFlashcards(progress), []); // snapshot for the session
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  if (progress.completed.length === 0) {
    return (
      <div className="stack center-col tall">
        <span className="big-emoji">🔁</span>
        <h1 className="page-title">Review</h1>
        <p className="muted center">
          Finish your first lesson and its cards become flashcards here.
          Spaced repetition = remember it forever.
        </p>
      </div>
    );
  }

  if (i >= due.length) {
    return (
      <div className="stack center-col tall pop">
        <span className="big-emoji">{doneCount > 0 ? "🧠✨" : "😌"}</span>
        <h1 className="page-title">
          {doneCount > 0 ? `${doneCount} cards reviewed!` : "All caught up"}
        </h1>
        <p className="muted center">
          {doneCount > 0
            ? `+${doneCount * XP_FLASH} XP. Cards you knew come back later; missed ones come back tomorrow.`
            : "Nothing due right now. Come back tomorrow or learn a new lesson."}
        </p>
      </div>
    );
  }

  const cardData = due[i];
  const answer = (gotIt: boolean) => {
    update((p) => earnXp(reviewCard(p, cardData.key, gotIt), XP_FLASH));
    setDoneCount((d) => d + 1);
    setFlipped(false);
    setI(i + 1);
  };

  return (
    <div className="stack">
      <h1 className="page-title">
        Review <span className="count-pill">{due.length - i} left</span>
      </h1>
      <button
        className={`flash card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        key={cardData.key}
      >
        {!flipped ? (
          <>
            <span className="concept-emoji">{cardData.emoji}</span>
            <h2 className="concept-title">{cardData.front}</h2>
            <p className="muted">Tap to reveal</p>
          </>
        ) : (
          <>
            <p className="flash-back">{cardData.back}</p>
            <p className="flash-analogy">🧩 {cardData.analogy}</p>
          </>
        )}
      </button>
      {flipped && (
        <div className="flash-actions pop">
          <button className="secondary nay-btn" onClick={() => answer(false)}>
            😅 Again
          </button>
          <button className="primary" onClick={() => answer(true)}>
            ✅ Got it
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- Stats ---------- */

function Stats({ progress }: { progress: Progress }) {
  const lvl = levelFor(progress.xp);
  const last7 = [...Array(7)].map((_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - idx));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return {
      label: ["S", "M", "T", "W", "T", "F", "S"][d.getDay()],
      xp: progress.history[key] ?? 0,
      isToday: idx === 6,
    };
  });
  const maxXp = Math.max(DAILY_GOAL_XP, ...last7.map((d) => d.xp));

  return (
    <div className="stack">
      <h1 className="page-title">Progress</h1>

      <div className="stat-grid">
        <div className="mini card">
          <span className="mini-num">{progress.xp}</span>
          <span className="mini-label">total XP</span>
        </div>
        <div className="mini card">
          <span className="mini-num">🔥 {progress.streak}</span>
          <span className="mini-label">streak</span>
        </div>
        <div className="mini card">
          <span className="mini-num">
            {lvl.emoji}
          </span>
          <span className="mini-label">{lvl.title}</span>
        </div>
        <div className="mini card">
          <span className="mini-num">
            {progress.completed.length}/{TOTAL_LESSONS}
          </span>
          <span className="mini-label">lessons</span>
        </div>
      </div>

      <div className="card chart-card">
        <p className="block-label">Last 7 days</p>
        <div className="chart">
          {last7.map((d, idx) => (
            <div key={idx} className="chart-col">
              <div className="chart-bar-wrap">
                <div
                  className={`chart-bar ${d.isToday ? "today" : ""} ${d.xp >= DAILY_GOAL_XP ? "hit" : ""}`}
                  style={{ height: `${Math.max(4, (d.xp / maxXp) * 100)}%` }}
                />
              </div>
              <span className="chart-label">{d.label}</span>
            </div>
          ))}
        </div>
        <p className="muted small">Bars turn gold when you hit your {DAILY_GOAL_XP} XP daily goal.</p>
      </div>

      {UNITS.map((unit) => {
        const done = unit.lessons.filter((l) =>
          progress.completed.includes(l.id),
        ).length;
        const pct = Math.round((done / unit.lessons.length) * 100);
        return (
          <div key={unit.id} className="card unit-progress" style={{ "--accent": unit.color } as React.CSSProperties}>
            <div className="unit-progress-head">
              <span>
                {unit.emoji} {unit.title}
              </span>
              <span className="muted">
                {done}/{unit.lessons.length}
              </span>
            </div>
            <div className="bar thin">
              <div className="bar-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
