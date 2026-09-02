import type { Unit } from "./types";

// Deep dive after the intro Agents unit: real definitions, anatomy, tools, memory, when to ship.

export const agentsDeepUnit: Unit = {
  id: "ua",
  title: "Agents, Deep Dive",
  emoji: "🔬",
  color: "#e879f9",
  tagline: "Definitions, tools, memory, and when to actually build one",
  lessons: [
    {
      id: "ual1",
      title: "Five definitions, one word",
      emoji: "📖",
      cards: [
        {
          title: "There is no official definition",
          emoji: "🌫️",
          hook: "Everyone says 'agent' and means something slightly different. Wikipedia even says there's no universally agreed definition. That's why the word feels slippery. Your job is to know the main versions and say which one you're using.",
          analogy:
            "Like 'cloud' in 2010: some people meant Dropbox, some meant AWS. Same word, different products.",
          example:
            "A thermostat, Siri, ChatGPT, and a coding agent that edits your repo for 20 minutes have ALL been called agents at some point.",
          pm: "In any meeting, spend ten seconds aligning: 'When I say agent, I mean a model that picks its own tools and steps toward a goal.' Don't assume they mean the same thing.",
        },
        {
          title: "The textbook: see and act",
          emoji: "👀",
          hook: "Russell & Norvig (the standard AI textbook): an agent is anything that perceives its environment through sensors and acts on it through actuators. A human uses eyes and hands. Software uses files, clicks, and network calls. A 'rational' agent picks the action it expects will score best.",
          analogy:
            "A vacuum robot: sensors (dirt, walls) + actuators (wheels, suck). That's an agent even with zero ChatGPT.",
          example:
            "Under this definition a thermostat counts. So does a self-driving stack. LLM agents are just one modern species of a very old idea.",
          pm: "This version is BROADER than Silicon Valley's. Don't mix it up with 'LLM that uses tools' or you'll talk past people who studied classic AI.",
        },
        {
          title: "The labs: Anthropic vs. OpenAI",
          emoji: "🏢",
          hook: "Anthropic: an agent is a model that directs its OWN process and tool use, not a fixed script. They call the whole family 'agentic systems,' then split workflows (you hardcoded the path) vs agents (the model chooses). OpenAI: agents independently accomplish tasks on your behalf. A one-turn chatbot is not an agent. Three parts: model + tools + instructions.",
          analogy:
            "Workflow = a GPS route you drew. Agent = you said 'get me there' and the driver picks turns, reroutes around traffic, and tells you when they're stuck.",
          example:
            "Fixed path: classify ticket → search docs → draft reply. Agent: the model decides whether to search, ask a clarifying question, or escalate, based on this ticket.",
          pm: "These two lab definitions are the ones that matter in product conversations in 2025–26. Memorize them.",
        },
        {
          title: "Andrew Ng: it's a slider",
          emoji: "📶",
          hook: "Ng's move: stop arguing yes/no. Systems are agentic to different DEGREES, like self-driving levels. More agentic = the model has more control, can iterate, use tools, reflect, plan. A one-shot ChatGPT reply is barely agentic. A system that researches, retries, and files the expense is more agentic.",
          analogy:
            "Cruise control vs. full self-driving. Both 'drive,' wildly different autonomy.",
          example:
            "Level-ish scale: (1) one prompt, one answer. (2) model routes to a canned workflow. (3) model loops until a stop condition. (4) model invents steps and tools in an open environment.",
          pm: "This is the most useful PM framing. Don't ship 'an agent.' Ship a specific autonomy level with a reason.",
        },
      ],
      quiz: [
        {
          q: "Russell & Norvig's textbook agent is...",
          choices: [
            "Only ChatGPT with plugins",
            "Anything that perceives an environment and acts on it",
            "A human pretending to be AI",
          ],
          answer: 1,
          explain:
            "See + act. A thermostat qualifies. LLM-with-tools is a narrower, newer use of the same word.",
        },
        {
          q: "Anthropic's split is...",
          choices: [
            "Chatbots vs. voice bots",
            "Workflows (fixed code path) vs. agents (the model chooses steps and tools)",
            "Open source vs. closed source",
          ],
          answer: 1,
          explain:
            "If you hardcoded the sequence, it's a workflow. If the LLM dynamically directs the process, it's an agent.",
        },
        {
          q: "Andrew Ng would say...",
          choices: [
            "Either something is an agent or it isn't",
            "Call things agentic to different degrees, like levels of autonomy",
            "Agents don't exist yet",
          ],
          answer: 1,
          explain:
            "Treat autonomy as a slider. That's more useful than a binary label.",
        },
      ],
    },
    {
      id: "ual2",
      title: "Chatbot, assistant, workflow, agent",
      emoji: "🧩",
      cards: [
        {
          title: "Chatbot: talks",
          emoji: "💬",
          hook: "A chatbot's job is conversation. You message, it replies, it waits. Even a very smart LLM chat (ChatGPT with no tools) is still this: reactive, one turn at a time, no hands.",
          analogy:
            "A brilliant person who can only sit in a chair and answer questions. They never stand up and do the thing.",
          example:
            "'What's our refund policy?' → a paragraph. That's a chatbot, even if the paragraph is excellent.",
          pm: "Most 'AI features' should stay chatbots. Talking is cheaper, safer, and often enough.",
        },
        {
          title: "Assistant: talks + a few buttons",
          emoji: "🛎️",
          hook: "People say 'assistant' for a chatbot that can do a handful of named actions you asked for just now: set a timer, open a doc, send this email after you confirm. Still mostly reactive. Less than a full agent, more than FAQ-bot.",
          analogy:
            "A receptionist who can also book the conference room if you explicitly ask, but won't reorganize your week unprompted.",
          example:
            "Siri / Alexa-style: 'Remind me at 6.' One shot, one tool, you initiated it.",
          pm: "If marketing wants to say 'agent' and engineering built 'assistant,' name the gap. Overclaiming burns trust.",
        },
        {
          title: "Workflow: you drew the map",
          emoji: "🗺️",
          hook: "Anthropic's 'workflow': LLM + tools, but YOUR code owns the path. Step 1 always happens, then step 2, maybe a branch you wrote. The model fills in pieces. It does not get to invent a new plan.",
          analogy:
            "An assembly line. Each station is smart, but nobody rearranges the factory tonight.",
          example:
            "Invoice in → extract fields (LLM) → if total > $500 ping a human (code) → else post to the ledger (API). The graph is yours.",
          pm: "Start here more often than with a free-roaming agent. Predictable, testable, cheaper. OpenAI: if the LLM isn't controlling execution, it's not an agent.",
        },
        {
          title: "Agent: the model holds the steering wheel",
          emoji: "🛞",
          hook: "Now the LLM decides what to do next: which tool, whether to retry, when to ask you, when to stop. You gave a GOAL and a toolbox, not a flowchart. That's the production definition from Anthropic and OpenAI.",
          analogy:
            "You hired a contractor: 'Make the kitchen usable.' They choose dump vs. keep, order of work, when to call you about the leak.",
          example:
            "Claude Code / Cursor agent: you say 'fix the flaky test.' It reads files, edits, runs tests, reads the failure, edits again, until green or it asks.",
          pm: "Use an agent when you cannot hardcode the path. Use a workflow when you can. That's the whole decision.",
        },
      ],
      quiz: [
        {
          q: "A system always does: classify → search docs → draft reply. That's...",
          choices: [
            "A fully autonomous agent",
            "A workflow — you predefined the path",
            "Not AI",
          ],
          answer: 1,
          explain:
            "Fixed orchestration = workflow. Agent = the model chooses the path.",
        },
        {
          q: "OpenAI would say a simple one-turn chatbot is...",
          choices: [
            "An agent, because it uses an LLM",
            "Not an agent — the LLM isn't managing a multi-step workflow on your behalf",
            "A multi-agent system",
          ],
          answer: 1,
          explain:
            "Their bar: independently accomplish tasks, with tools and a notion of 'done.'",
        },
        {
          q: "When should you prefer a workflow over an agent?",
          choices: [
            "Never — agents are always better",
            "When you CAN predict the steps and want reliability, cost control, and easier evals",
            "Only for voice products",
          ],
          answer: 1,
          explain:
            "Anthropic: agents for open-ended problems where you can't hardcode the path. Otherwise keep the graph yourself.",
        },
      ],
    },
    {
      id: "ual3",
      title: "The four parts of an agent",
      emoji: "🧱",
      cards: [
        {
          title: "Model: the brain",
          emoji: "🧠",
          hook: "The LLM is the intelligence: it plans, picks tools, reads results, decides if it's done. Smarter models handle messier goals. Smaller/cheaper models are fine if the toolbox is tight and the task is narrow.",
          analogy:
            "The contractor's judgment. A junior and a senior can use the same hammer. The senior improvises better when the wall is weird.",
          example:
            "A 'reset my password' flow might use a small model. 'Untangle this billing dispute across 3 systems' wants a frontier model.",
          pm: "Match model to how open-ended the job is. Don't pay frontier prices for a three-step workflow.",
        },
        {
          title: "Tools: the hands",
          emoji: "🙌",
          hook: "Without tools, an agent can only talk. Tools are functions you expose: search, SQL, send email, edit a file, refund. The model outputs a structured call; YOUR software runs it and returns the result. The model never actually 'touches' Stripe.",
          analogy:
            "You don't let the intern into the bank vault. You let them fill out a withdrawal form you will process, with a limit.",
          example:
            "Tool: getWeather(city). Model writes getWeather('Tokyo'). Your server hits the weather API. Model reads 72°F and answers the user.",
          pm: "Capability and blast radius arrive together. The product spec IS the tool list plus which ones need approval.",
        },
        {
          title: "Instructions / harness: the rules",
          emoji: "📋",
          hook: "Anthropic calls this the harness: system prompt, policies, stop conditions (max steps), and 'never do X.' OpenAI calls it instructions. This is how you program behavior without retraining. It's also where you put 'flag anything over $100' and 'don't submit expenses without confirmation.'",
          analogy:
            "Employee handbook + spending policy + 'if you're stuck after 3 tries, come get me.'",
          example:
            "A support agent: 'You may search and draft. You may not issue refunds over $50. After two failed searches, escalate with a summary.'",
          pm: "Treat the harness like production code. Version it. Eval it. It's as load-bearing as the model.",
        },
        {
          title: "Environment: where it runs",
          emoji: "🌍",
          hook: "Same brain, different room: a coding agent on a laptop with your repo vs. a cloud agent with a browser vs. a work agent inside a VPC. Access, stakes, and failure modes change with the environment — files it can see, networks it can reach, whether mistakes are reversible.",
          analogy:
            "The same person in a sandbox vs. on a live trading floor. Training is identical. Consequences are not.",
          example:
            "Claude Code in your project folder can edit local files. Operator-style computer use can click production admin panels if you let it.",
          pm: "When you write the spec, name the environment: what can it see, what can it change, what's the blast radius if it's wrong for 10 minutes.",
        },
      ],
      quiz: [
        {
          q: "OpenAI's three core pieces of an agent are...",
          choices: [
            "GPU, dataset, and a website",
            "Model, tools, and instructions",
            "Chat, voice, and video",
          ],
          answer: 1,
          explain:
            "Brain, hands, rules. Anthropic adds environment (where it runs) as a fourth practical piece.",
        },
        {
          q: "When the model 'calls a tool,' who actually executes it?",
          choices: [
            "The model, inside the GPU",
            "Your software — the model only requested it in structured text",
            "The user, always",
          ],
          answer: 1,
          explain:
            "That's why permissions live in YOUR code, not in the model's vibes.",
        },
        {
          q: "A 'harness' is...",
          choices: [
            "The GPU cluster",
            "Instructions, guardrails, and stop conditions the model operates under",
            "A type of embedding",
          ],
          answer: 1,
          explain:
            "Anthropic's word for the policy layer around the model. Same idea as OpenAI's 'instructions.'",
        },
      ],
    },
    {
      id: "ual4",
      title: "Tools, for real",
      emoji: "🛠️",
      cards: [
        {
          title: "A tool is a menu item with a form",
          emoji: "🧾",
          hook: "You describe each tool to the model like a menu: name, what it does, and a schema (which fields, which types, what's required). The model fills the form. Invalid JSON should fail in YOUR code, not silently 'kind of work.'",
          analogy:
            "DoorDash: the restaurant publishes a menu with required options. The customer (model) picks 'pad thai, no peanuts.' The kitchen (your API) cooks it or rejects a nonsense order.",
          example:
            "refund(order_id: string, amount_cents: number, reason: string). If amount is missing, you return an error the model can fix on the next loop.",
          pm: "Good tool design is API design: few tools, clear names, tight schemas, obvious errors. A junk drawer of 80 tools makes the model worse.",
        },
        {
          title: "Read vs. write is the whole game",
          emoji: "🔐",
          hook: "Split tools into LOOK (search, fetch, list) and CHANGE (send, delete, pay, deploy). Looking is cheap to grant. Changing needs limits, logs, and often a human checkpoint. Most good agents get lots of read tools and very few write tools at v1.",
          analogy:
            "A new hire gets the shared drive on day one. The company credit card comes later, with a cap.",
          example:
            "Research agent: web search + read PDF (look). Booking agent: those PLUS create_reservation (change), with a confirm step.",
          pm: "If you remember one tool rule: default to read-only. Every write tool is a product and security review.",
        },
        {
          title: "MCP: one plug for every tool",
          emoji: "🔌",
          hook: "Model Context Protocol is the USB-C of this stack: a standard way for an app (Claude, Cursor, your product) to discover and call tools/data servers. Build a GitHub MCP server once; many clients can use it. Wikipedia notes MCP accelerated real agent deployment by standardizing 'how I act on the world.'",
          analogy:
            "Before USB, every printer had a weird cable. After, one port.",
          example:
            "Your company's 'CRM MCP server' can show up inside Claude Desktop AND an internal agent without rewriting integrations twice.",
          pm: "MCP is platform strategy: shrink M×N integrations to M+N. Still need auth, least privilege, and logging on every server.",
        },
        {
          title: "APIs vs. computer use",
          emoji: "🖱️",
          hook: "Two ways to give hands. (1) Clean tools/APIs: reliable, loggable, fast. (2) Computer use: the model looks at a screen and clicks like a person — works on software with no API, brittle, slower, scarier in production admin UIs. Use APIs when they exist; computer use as a last mile.",
          analogy:
            "A special kitchen door for the robot vs. teaching it to use the regular doorknob. Doorknob works everywhere and also walks into traffic.",
          example:
            "Stripe API to refund $20: tool call. Ancient hospital portal with no API: computer use, with a human watching.",
          pm: "Computer use is a demo magnet. Production still prefers typed tools. Name the fallback explicitly.",
        },
      ],
      quiz: [
        {
          q: "Why do tool schemas matter?",
          choices: [
            "They're just documentation",
            "They tell the model exactly how to request an action — and let your code reject bad calls",
            "They make the model generate images",
          ],
          answer: 1,
          explain:
            "Name + parameters + types = the contract. The model fills it; you enforce it.",
        },
        {
          q: "Best v1 toolbox for a research agent?",
          choices: [
            "Search + read, no send-email or delete",
            "Every API your company has, including payroll",
            "No tools, only vibes",
          ],
          answer: 0,
          explain:
            "Lots of look, almost no change. Write tools wait until the look loop is trustworthy.",
        },
        {
          q: "Prefer computer use when...",
          choices: [
            "Always — APIs are outdated",
            "There's no decent API and a human is still in the loop for high-stakes clicks",
            "You want maximum speed",
          ],
          answer: 1,
          explain:
            "APIs are the default. Screen-clicking is the compatibility layer, not the happy path.",
        },
      ],
    },
    {
      id: "ual5",
      title: "Memory, loops, and 'done'",
      emoji: "🔁",
      cards: [
        {
          title: "Working memory vs. a notepad",
          emoji: "🧳",
          hook: "The context window is working memory: the prompt, the conversation, tool results, all stuffed in one whiteboard. When it's full, old stuff falls off. A scratchpad (file, doc, database) is extra memory the agent writes and rereads. RAG is a library it can fetch from. ChatGPT 'memory' is notes your product injects later.",
          analogy:
            "Brain vs. notebook vs. library. You don't keep the whole library in your head during a meeting.",
          example:
            "A research agent writes sources.md as it goes, then summarizes from that file instead of hoping 40 pages still fit in context.",
          pm: "Context engineering = packing the whiteboard on purpose. Memory features are product, not magic inside the model.",
        },
        {
          title: "The loop needs an off switch",
          emoji: "🛑",
          hook: "Think → act → observe can run forever (retry loops, rabbit holes). Production agents always have stop conditions: max steps, max time, max dollars, 'ask a human if stuck twice,' task complete signal. Anthropic is explicit: include stopping conditions to stay in control.",
          analogy:
            "A dog on a long line, not an open farm. It can run; it can't leave the county.",
          example:
            "Max 12 tool calls. If tests still fail, stop and paste the last error for the user instead of burning another $4.",
          pm: "Ship the off switch in v1. 'It looped overnight' is how agent projects die in Slack screenshots.",
        },
        {
          title: "Reflection and planning",
          emoji: "🪞",
          hook: "Ng's agentic patterns: PLAN (break the goal into steps), ACT, then REFLECT (critique the draft or read the error and try again). Reflection is often a second pass: 'review this code' with a different prompt. That's still one product, not automatically ten agents.",
          analogy:
            "Write, then read it out loud, then fix. Humans already do this. You're teaching the model the same habit.",
          example:
            "Generate SQL → run it → if it errors, feed the error back → rewrite. That's a tiny agentic loop, not a chatbot.",
          pm: "These patterns are how you add 'agentic' without boiling the ocean. One loop with tool + retry beats a multi-agent org chart.",
        },
          {
            title: "Ground truth each step",
            emoji: "✅",
            hook: "Anthropic: at every step the agent should get ground truth from the environment — tool results, test output, the actual page — not just its own previous words. That's how it notices it's wrong. Chatbots skip this; they only have the next-token dream.",
            analogy:
              "Cooking by tasting vs. cooking by imagining the taste. Agents need the taste.",
            example:
              "Coding agent runs the test suite. The fail log is ground truth. A model that only 'thinks the tests passed' will ship bugs.",
            pm: "If you can't give the agent a checkable signal (tests, schema, user confirm), it will drift. Design the check before the autonomy.",
          },
          {
            title: "Multi-agent is an org chart, not a flex",
            emoji: "👥",
            hook: "Splitting work across agents (planner, researcher, reviewer) can help when jobs are truly different — or when you want a second model to critique the first. It also multiplies cost, latency, and 'who broke it?' Debugging a committee is harder than debugging one loop.",
            analogy:
              "A newsroom with an editor is useful. Six interns in a group chat arguing about the headline is not.",
            example:
              "Deep research: two browsers in parallel, one writer, one fact-checker. Support: usually one agent with tools beats 'ticket triager talks to refund bot talks to tone bot.'",
            pm: "Don't add agents for the slide. Add a second role when a single loop keeps dropping a skill (research vs. write vs. review) and you can eval each role.",
          },
      ],
      quiz: [
        {
          q: "Why isn't a bigger context window the whole memory story?",
          choices: [
            "It is — just buy 1 million tokens",
            "It's still a whiteboard that fills up and costs money; notepads and retrieval scale better",
            "Context windows don't exist",
          ],
          answer: 1,
          explain:
            "Working memory vs. files vs. search. Agents that write things down last longer.",
        },
        {
          q: "A must-have for production agent loops:",
          choices: [
            "Unlimited retries so it can 'keep trying'",
            "Stop conditions: max steps, max cost, escalate when stuck",
            "No logs, for privacy",
          ],
          answer: 1,
          explain:
            "Without an off switch, loops become incidents.",
        },
        {
          q: "'Ground truth from the environment' means...",
          choices: [
            "The model should believe its own previous message",
            "Feed back real tool results / test output / page state so it can correct course",
            "Only humans can tell what's true",
          ],
          answer: 1,
          explain:
            "Observe isn't optional. That's the O in think-act-observe.",
        },
      ],
    },
    {
      id: "ual6",
      title: "When to build an agent",
      emoji: "🎯",
      cards: [
        {
          title: "Agents fit messy, multi-step, checkable work",
          emoji: "📐",
          hook: "Good fit: you cannot write the flowchart in advance, steps depend on what you find, and you can TELL if it worked (tests pass, ticket resolved, form submitted). Coding, research-with-citations, ops runbooks with a verify step.",
          analogy:
            "A scavenger hunt with a checklist at the end — not a true/false quiz, not 'make the company 10% better' with no metric.",
          example:
            "Deep research: browse, take notes, cite. You can inspect sources. Password reset: that's a workflow, don't use an agent.",
          pm: "If you can draw the flowchart on one slide, it's a workflow. If the next step depends on the last result in a way you can't pre-draw, consider an agent.",
        },
        {
          title: "Don't agent-wash a chatbot",
          emoji: "🚫",
          hook: "Bad fit: one question, one answer, high-stakes irreversible actions with no check, or a process that's already a clean 5-step SOP. Extra loops add cost, latency, and new failures (prompt injection, runaway tools) without extra value.",
          analogy:
            "Don't hire a general contractor to change a lightbulb. Don't refuse a contractor when you're remodeling blind.",
          example:
            "FAQ bot with an 'agent' that can email every customer in the CRM is a horror movie, not a launch.",
          pm: "The honest spec: chatbot / assistant / workflow / agent. Pick the weakest one that solves the job.",
        },
        {
          title: "Evals for agents are traces, not just final answers",
          emoji: "📊",
          hook: "Chatbot evals score the reply. Agent evals score the TRAJECTORY: did it call the right tools, in a sane order, without leaking data, and stop? You need traces (step-by-step logs). Ng's advice: even a crude eval that finds the ONE broken step beats shipping on vibes.",
          analogy:
            "Grading a math test by the work, not only the boxed answer. A lucky right answer with a dangerous method still fails.",
          example:
            "50 real tickets. For each: did it search before refunding? Did it stay under the $50 cap? Did it escalate when search missed?",
          pm: "If you can't log tool calls, you can't ship an agent. Traces are the product's nervous system.",
        },
        {
          title: "Trust ladder, same as always",
          emoji: "🪜",
          hook: "Ship: visible steps, undo, tight tools, human on writes. Earn: auto-approve the boring safe stuff. Never: full autonomy on day one in email/money/prod. Adoption is a trust problem. Capability is already ahead.",
          analogy:
            "Babysitter: afternoon with you home → evening → weekend. Not a week-long trip on meeting one.",
          example:
            "v1 drafts the refund and waits. v2 auto-refunds under $25 after 2 weeks of zero incidents.",
          pm: "Your roadmap IS the ladder. That's how you talk about agents without sounding reckless or behind.",
        },
      ],
      quiz: [
        {
          q: "Best first candidate for an agent?",
          choices: [
            "A 3-step password reset with a known path",
            "A messy investigation where the next step depends on what you find, and you can verify the outcome",
            "Sending wires with no review",
          ],
          answer: 1,
          explain:
            "Open-ended + checkable. That's the sweet spot Anthropic describes.",
        },
        {
          q: "Agent evals should look at...",
          choices: [
            "Only the final paragraph of text",
            "The trace: tools used, order, policy breaks, and whether it stopped sanely",
            "The CEO's opinion after one demo",
          ],
          answer: 1,
          explain:
            "The work is the path, not only the ending.",
        },
        {
          q: "The weakest system that solves the job is best because...",
          choices: [
            "It's less cool",
            "Chatbots/workflows are cheaper, easier to eval, and fail smaller than free-roaming agents",
            "Agents are illegal",
          ],
          answer: 1,
          explain:
            "Climb the stack only when the simpler thing can't do it. That's PM taste.",
        },
      ],
    },
  ],
};
