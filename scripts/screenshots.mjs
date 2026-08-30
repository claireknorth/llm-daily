// Captures README screenshots from the running dev server using system Chrome.
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const URL = "http://localhost:5173";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const pad = (n) => String(n).padStart(2, "0");
const day = (offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

// A believable mid-journey progress state for the demo user.
const completed = ["u1l1", "u1l2", "u1l3", "u1l4", "u2l1", "u2l2", "u2l3", "u2l4"];
const seed = {
  xp: 640,
  streak: 6,
  bestStreak: 9,
  lastActive: day(0),
  completed,
  scores: {
    u1l1: 100, u1l2: 67, u1l3: 100, u1l4: 100,
    u2l1: 67, u2l2: 100, u2l3: 100, u2l4: 67,
  },
  flash: {},
  history: {
    [day(-6)]: 70, [day(-5)]: 90, [day(-4)]: 40, [day(-3)]: 60,
    [day(-2)]: 0, [day(-1)]: 80, [day(0)]: 40,
  },
};

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  userDataDir: ".chrome-profile",
  args: ["--no-first-run", "--disable-crash-reporter", "--no-default-browser-check"],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 780, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: "networkidle0" });
await page.evaluate((s) => {
  localStorage.setItem("llm-daily-v1", JSON.stringify(s));
}, seed);
await page.reload({ waitUntil: "networkidle0" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(800);

const shot = (name) => page.screenshot({ path: `${OUT}/${name}.png` });

// helper: click the element containing given text
const clickText = async (selector, text) => {
  await page.evaluate(
    (sel, t) => {
      const el = [...document.querySelectorAll(sel)].find((e) =>
        e.textContent.includes(t),
      );
      if (el) el.click();
    },
    selector,
    text,
  );
  await sleep(500);
};

// 1. Home
await shot("home");

// 2. Learn path
await clickText(".tab", "Learn");
await shot("learn");

// 3. A concept card (RAG lesson)
await clickText(".lesson-node", "RAG: open-book exams");
await sleep(600);
await shot("lesson");

// 4. Quiz with a picked answer: advance through 4 cards, then answer
for (let i = 0; i < 4; i++) await clickText(".primary", i < 3 ? "Got it" : "Quiz me");
await sleep(500);
await clickText(".choice", "Searches your documents");
await sleep(400);
await shot("quiz");

// 5. Review flashcard (flipped)
await page.evaluate(() => document.querySelector(".close").click());
await sleep(400);
await clickText(".tab", "Review");
await sleep(400);
await page.evaluate(() => document.querySelector(".flash")?.click());
await sleep(400);
await shot("review");

// 6. Stats
await clickText(".tab", "Stats");
await shot("stats");

await browser.close();
console.log("screenshots done");
