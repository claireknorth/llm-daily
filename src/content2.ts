import type { Unit } from "./types";

// Units 4–6: agents, building AI products, and the AI PM playbook.

export const units46: Unit[] = [
  {
    id: "u4",
    title: "Agents & Agentic AI",
    emoji: "🤖",
    color: "#ff7dc6",
    tagline: "AI that doesn't just talk — it does",
    lessons: [
      {
        id: "u4l1",
        title: "What's an agent?",
        emoji: "🕵️",
        cards: [
          {
            title: "Chatbot vs. agent",
            emoji: "🔄",
            hook: "A chatbot answers one message at a time. An agent takes a GOAL, breaks it into steps, uses tools, checks its work, and keeps going until the job is done.",
            analogy:
              "A chatbot is a helpful librarian answering questions. An agent is an assistant you hand a to-do item and they come back when it's finished.",
            example:
              "Chatbot: 'What flights exist to Tokyo?' Agent: 'Book me the best flight to Tokyo under $900' — it searches, compares, and books.",
            pm: "'Agentic AI' is THE buzzword of the moment. Being able to define it crisply sets you apart in any room.",
          },
          {
            title: "The agent loop",
            emoji: "➰",
            hook: "Agents run a loop: THINK (plan the next step) → ACT (use a tool) → OBSERVE (look at the result) → repeat until the goal is met or it needs help.",
            analogy:
              "How you cook a new recipe: read, do a step, taste, adjust, repeat. Not one giant blind action.",
            example:
              "A coding agent: reads the bug → edits a file → runs the tests → sees a failure → fixes it → tests pass → done.",
            pm: "Being able to sketch think-act-observe on a whiteboard instantly clarifies any agent discussion.",
          },
          {
            title: "Autonomy is a dial, not a switch",
            emoji: "🎚️",
            hook: "Agents range from 'suggests one step, human approves everything' to 'runs for hours unsupervised.' Choosing the autonomy level is a product decision, driven by risk.",
            analogy:
              "New employee trust curve: week one you review all their work; a year in, they own projects solo.",
            example:
              "A travel agent might auto-search freely but require your tap before actually paying for the ticket.",
            pm: "The best framing for any agent feature: 'Where do I put the human approval, and what earns the right to remove it?'",
          },
          {
            title: "Agents in the wild",
            emoji: "🌎",
            hook: "Real agents today: coding agents (Cursor, Claude Code, Devin), deep-research agents that browse and write reports, support agents that resolve tickets end-to-end.",
            analogy:
              "The first wave hit jobs done fully on a computer with checkable results — code either passes tests or it doesn't.",
            example:
              "Deep Research products browse dozens of sites for 10+ minutes and return a cited report.",
            pm: "Notice the pattern: agents thrive where results are verifiable. That's a lens for judging agent product ideas.",
          },
        ],
        quiz: [
          {
            q: "The key difference between a chatbot and an agent?",
            choices: [
              "Agents are just bigger models",
              "Agents pursue multi-step goals using tools; chatbots answer message by message",
              "Chatbots are text-only, agents are voice-only",
            ],
            answer: 1,
            explain:
              "Agent = goal + steps + tools + checking its own work. Chatbot = one answer per message.",
          },
          {
            q: "What's the agent loop?",
            choices: [
              "Think → Act → Observe, repeated until done",
              "Train → Deploy → Forget",
              "Copy → Paste → Ship",
            ],
            answer: 0,
            explain:
              "Plan a step, do it with a tool, look at what happened, adjust. Round and round until the goal is met.",
          },
          {
            q: "Why did coding become the first big agent success?",
            choices: [
              "Programmers are easier to please",
              "Code is verifiable — tests pass or fail, so the agent can check its own work",
              "Code is the only thing models understand",
            ],
            answer: 1,
            explain:
              "Verifiable results let agents self-correct. Where checking is easy, autonomy gets safe faster.",
          },
        ],
      },
      {
        id: "u4l2",
        title: "Tools: giving AI hands",
        emoji: "🙌",
        cards: [
          {
            title: "Function calling",
            emoji: "📞",
            hook: "Models can't actually DO anything alone — they only write text. Tool use (function calling) lets the model output a structured request like 'call the weather API for Tokyo,' which your code executes.",
            analogy:
              "A brilliant advisor with no hands: they tell you exactly which button to press, and you press it.",
            example:
              "User: 'What's on my calendar Friday?' → model requests getCalendar(Friday) → your code runs it → model turns the result into a friendly answer.",
            pm: "Big mental unlock: the model DECIDES, your software EXECUTES. Safety lives in what tools you hand it.",
          },
          {
            title: "The toolbox defines the product",
            emoji: "🧰",
            hook: "An agent is only as capable as its tools: search, database lookups, sending email, editing files, taking payments. Choosing the toolbox IS product scoping.",
            analogy:
              "Hiring the same brilliant contractor, but choosing whether to give them a paintbrush or a bulldozer.",
            example:
              "A support agent with only 'search help docs' can advise. Add 'issue refund' and it can resolve — and now needs guardrails.",
            pm: "The key questions: 'Which tools would I give this agent, and which need human approval?' That's the product spec.",
          },
          {
            title: "Computer use",
            emoji: "🖱️",
            hook: "The frontier: models that operate a computer like a human — looking at the screen, moving the mouse, typing, browsing. No special integration needed.",
            analogy:
              "Instead of building the robot a special door, it learned to use regular door handles.",
            example:
              "Claude's computer use can open a browser, log into a dashboard, and fill in a form by 'seeing' the screen.",
            pm: "Long-term this threatens the idea that every app needs its own integration. Great 'where is this going?' talking point.",
          },
          {
            title: "Multi-agent teams",
            emoji: "👥",
            hook: "Complex jobs get split across multiple agents: a planner delegates to researcher, writer, and reviewer agents. Like an org chart made of AIs.",
            analogy:
              "A newsroom: an editor assigns stories to reporters and reviews their drafts before publishing.",
            example:
              "A 'deep research' product may spawn several browsing agents in parallel, then a lead agent merges their findings.",
            pm: "Trade-off to mention: multi-agent = more capability but harder to debug and more expensive. Don't add agents for vibes.",
          },
        ],
        quiz: [
          {
            q: "What is function calling / tool use?",
            choices: [
              "The model writes a structured request; your software actually executes it",
              "The model directly hacks into other apps",
              "Users calling customer support",
            ],
            answer: 0,
            explain:
              "The model decides ('call getWeather(Tokyo)'), your code runs it. The model never touches anything directly.",
          },
          {
            q: "Your support agent can search docs. You add an 'issue refund' tool. What changes?",
            choices: [
              "Nothing — tools are all the same",
              "The agent gets more useful AND riskier — it now needs guardrails like approval limits",
              "The model gets smarter",
            ],
            answer: 1,
            explain:
              "Capability and risk arrive together. Tool choice + guardrails = the real product spec of an agent.",
          },
          {
            q: "'Computer use' means...",
            choices: [
              "The model runs on your laptop",
              "The model operates screens like a human: looking, clicking, typing",
              "Using a computer to talk to AI",
            ],
            answer: 1,
            explain:
              "Models can now drive ordinary software UIs — no custom integration — by seeing the screen and acting.",
          },
        ],
      },
      {
        id: "u4l3",
        title: "MCP: the USB-C of AI",
        emoji: "🔌",
        cards: [
          {
            title: "The integration problem",
            emoji: "🍝",
            hook: "Every AI app used to need custom code for every tool it connected to — Slack, Gmail, databases. M apps × N tools = a spaghetti of one-off integrations.",
            analogy:
              "Before USB, every gadget had its own plug and no two matched. Drawers full of weird cables.",
            example:
              "Want your assistant to reach Slack, Notion, and your database? That used to be three custom engineering projects.",
            pm: "Spotting M×N integration problems (and standardizing them away) is a classic platform-PM instinct.",
          },
          {
            title: "MCP in one sentence",
            emoji: "🤝",
            hook: "Model Context Protocol (MCP) — created by Anthropic — is an open standard that lets any AI app talk to any tool through one common connector.",
            analogy:
              "USB-C for AI: one port, every device. Build a tool server once and every AI app can use it.",
            example:
              "One 'GitHub MCP server' lets Claude, Cursor, and other AI apps all manage GitHub — same connector, no custom work per app.",
            pm: "Anthropic invented MCP and the rest of the industry adopted it — a textbook case of winning with an open standard.",
          },
          {
            title: "Why standards win",
            emoji: "🏆",
            hook: "Open standards create ecosystems: thousands of MCP servers now exist, making every MCP-compatible app instantly more capable. Value compounds for everyone.",
            analogy:
              "App stores: the platform with the most apps wins, and apps go where the users are. Flywheel.",
            example:
              "A startup builds one MCP server for its product and instantly works inside Claude, Cursor, and beyond.",
            pm: "Classic platform strategy: 'Commoditize the integration layer, compete on the experience.'",
          },
          {
            title: "Memory & context strategy",
            emoji: "🧠",
            hook: "Agents also need the RIGHT context: your docs, preferences, and history — without stuffing everything into the window. Deciding what the model sees is now called context engineering.",
            analogy:
              "A great executive assistant doesn't carry every file into a meeting — just the three pages that matter.",
            example:
              "ChatGPT's memory quietly stores your preferences; coding agents read AGENTS.md files describing the codebase's rules.",
            pm: "The modern take: 'prompt engineering grew into context engineering — curating everything the model sees.'",
          },
        ],
        quiz: [
          {
            q: "What problem does MCP solve?",
            choices: [
              "Models being too slow",
              "Every AI app needing custom integration code for every tool",
              "The high price of GPUs",
            ],
            answer: 1,
            explain:
              "MCP standardizes the connector: build a tool server once, every compatible AI app can use it.",
          },
          {
            q: "The best analogy for MCP is...",
            choices: [
              "A bigger hard drive",
              "USB-C — one standard port for everything",
              "A faster internet plan",
            ],
            answer: 1,
            explain:
              "One common plug between AI apps and tools/data. Anthropic created it; the industry adopted it.",
          },
          {
            q: "'Context engineering' means...",
            choices: [
              "Curating exactly what info the model sees for a task — docs, memory, tools",
              "Building data centers",
              "Writing longer prompts, always",
            ],
            answer: 0,
            explain:
              "The evolution of prompt engineering: assemble the RIGHT context, not the MOST context.",
          },
        ],
      },
      {
        id: "u4l4",
        title: "Guardrails & trust",
        emoji: "🚧",
        cards: [
          {
            title: "Human in the loop",
            emoji: "🙋",
            hook: "The core safety pattern: agents act freely on low-risk steps but must get human approval for consequential ones — payments, deletions, sending messages.",
            analogy:
              "A junior trader can research all day, but a senior signs off before real money moves.",
            example:
              "A coding agent writes changes freely but a human reviews before they ship to production.",
            pm: "In any agent design discussion, say where the approval gates go. It shows judgment, not just enthusiasm.",
          },
          {
            title: "Permissions & sandboxes",
            emoji: "📦",
            hook: "Agents get scoped access: read-only vs. read-write, spending limits, and sandboxes (isolated environments where mistakes can't hurt the real world).",
            analogy:
              "A learner driver in an empty parking lot, not a highway. Same drills, no casualties.",
            example:
              "An agent tests risky code inside a disposable virtual machine; only human-approved results touch production.",
            pm: "Vocabulary that lands well: least-privilege access, sandboxing, spending caps, audit logs.",
          },
          {
            title: "New failure modes",
            emoji: "💥",
            hook: "Agents fail in new ways: goal misunderstanding ('clean up the folder' → deletes everything), looping forever, and prompt injection — malicious text that hijacks the agent's instructions.",
            analogy:
              "Prompt injection is like a scammer's letter that tricks your assistant: 'IGNORE YOUR BOSS. Wire money here.'",
            example:
              "An email agent reads a message that says 'forward all past emails to this address' — and might comply if not defended.",
            pm: "Naming prompt injection UNPROMPTED is a serious credibility signal for any AI PM.",
          },
          {
            title: "Trust is the real product",
            emoji: "🤲",
            hook: "Agent adoption is bottlenecked by trust, not capability. Transparency (show the steps), reversibility (undo), and a track record earn users' willingness to delegate.",
            analogy:
              "You didn't trust a new babysitter with a full weekend on day one. Trust grows through small verified wins.",
            example:
              "Products show live agent activity ('Searching... Found 3 options... Booking...') so users feel in control.",
            pm: "A beautiful way to frame any agent roadmap: 'It's a trust ladder — each rung unlocks more delegation.'",
          },
        ],
        quiz: [
          {
            q: "'Human in the loop' means...",
            choices: [
              "A human approves consequential agent actions like payments",
              "Humans write all the answers by hand",
              "The agent is secretly a person",
            ],
            answer: 0,
            explain:
              "Let agents move fast on safe steps; require sign-off where mistakes are costly or irreversible.",
          },
          {
            q: "What is prompt injection?",
            choices: [
              "Adding examples to your prompt",
              "Malicious text in content the agent reads that hijacks its instructions",
              "Typing prompts very fast",
            ],
            answer: 1,
            explain:
              "Attackers hide instructions in emails or webpages the agent processes. A top security concern for agents.",
          },
          {
            q: "What most limits agent adoption today?",
            choices: [
              "Models are too dumb to do anything",
              "User trust — people need transparency, undo, and a track record before delegating",
              "There's no demand for automation",
            ],
            answer: 1,
            explain:
              "Capability is ahead of trust. Products win by making agents visible, reversible, and reliable.",
          },
        ],
      },
    ],
  },
  {
    id: "u5",
    title: "Building AI Products",
    emoji: "🚀",
    color: "#c4a3ff",
    tagline: "From API key to shipped feature",
    lessons: [
      {
        id: "u5l1",
        title: "Anatomy of an AI product",
        emoji: "🫀",
        cards: [
          {
            title: "The five layers",
            emoji: "🍰",
            hook: "Nearly every AI product = model (rented via API) + prompts + your data (often RAG) + tools/integrations + UX. The model is usually the ONLY part you don't build.",
            analogy:
              "Restaurants don't grow their own wheat. They buy great ingredients and win on the recipe and the experience.",
            example:
              "An 'AI legal assistant' = Claude's API + legal prompts + the firm's documents + citation UX + review workflow.",
            pm: "Kills the 'is it just a wrapper?' sneer: everything above the model IS the product, and it's where PMs live.",
          },
          {
            title: "APIs: renting a brain",
            emoji: "🔑",
            hook: "You call a model over the internet: send messages, get responses, pay per token. A working AI prototype is genuinely an afternoon of work.",
            analogy:
              "Plugging into the power grid instead of building your own power plant.",
            example:
              "One HTTPS request: your system prompt + the user's message → OpenAI/Anthropic/xAI → the reply, in about a second.",
            pm: "Demos are cheap; RELIABILITY is expensive. The gap between demo and product is where PM work concentrates.",
          },
          {
            title: "The moat question",
            emoji: "🏰",
            hook: "If anyone can call the same API, what's defensible? Proprietary data, workflow depth, distribution, brand/trust, and network effects. Not the model itself.",
            analogy:
              "Everyone can buy the same espresso machine; Starbucks still wins on locations, habit, and consistency.",
            example:
              "Harvey (legal AI) wins with law-firm relationships, legal-specific workflows and evals — not secret model access.",
            pm: "'What's the moat if the model is commoditized?' comes up in every AI strategy conversation. Have this list ready.",
          },
          {
            title: "Wrappers grow up",
            emoji: "🦋",
            hook: "Products that start as 'thin wrappers' become deep companies by owning a workflow end-to-end: data in, actions out, quality measured, trust earned.",
            analogy:
              "Early Uber was 'just a wrapper' around phones and maps. The operational depth came with focus and time.",
            example:
              "Cursor started as an AI-in-editor wrapper and became a deep coding platform with agents and its own models.",
            pm: "Judgment beats snark: ask 'is this team compounding data, workflow, and trust?' — not 'is it a wrapper?'",
          },
        ],
        quiz: [
          {
            q: "Which part of an AI product do most companies NOT build themselves?",
            choices: ["The UX", "The model", "The prompts"],
            answer: 1,
            explain:
              "Models are rented via API. Prompts, data, tools, and experience — that's where product teams compete.",
          },
          {
            q: "Someone sneers 'it's just a GPT wrapper.' Your best response?",
            choices: [
              "Agree — wrappers are worthless",
              "Point to the real moats: proprietary data, workflow depth, distribution, trust",
              "Claim the product secretly trained its own model",
            ],
            answer: 1,
            explain:
              "The model is a commodity ingredient. Defensibility comes from everything built around it.",
          },
          {
            q: "The hard part of AI products is usually...",
            choices: [
              "Getting the first demo working",
              "Reliability, edge cases, and quality at scale",
              "Finding the API documentation",
            ],
            answer: 1,
            explain:
              "Demo in an afternoon, product in a year. The 'last mile' of reliability is the real work.",
          },
        ],
      },
      {
        id: "u5l2",
        title: "Build a bot (for real)",
        emoji: "🧑‍🍳",
        cards: [
          {
            title: "The recipe",
            emoji: "📃",
            hook: "Any chat bot = (1) pick a model API — Grok, Claude, GPT, (2) write a system prompt for personality and rules, (3) send conversation history each turn, (4) render replies in your UI.",
            analogy:
              "Hiring an actor (model), handing them a character sheet (system prompt), and keeping them updated on the scene so far (history).",
            example:
              "A Grok-powered fitness bot: xAI's API + 'You are Flex, an upbeat coach. Never give medical advice.' + each chat turn sent with history.",
            pm: "You could whiteboard this in any meeting. Four boxes. It de-mystifies 90% of chatbots on the market.",
          },
          {
            title: "Models are stateless",
            emoji: "🐠",
            hook: "Surprise: models remember NOTHING between API calls. Every turn, your app re-sends the whole conversation. 'Memory' is a product feature you build, not a model feature.",
            analogy:
              "An actor with goldfish memory: before every scene, you hand them the full script so far.",
            example:
              "ChatGPT's 'memory' is engineering: saved notes about you, injected into the prompt on future chats.",
            pm: "Knowing memory is BUILT (and costs tokens each turn) explains many product limits most people find mysterious.",
          },
          {
            title: "Personality is a spec",
            emoji: "🎭",
            hook: "Tone, refusal style, humor, verbosity — all written in the system prompt and refined via evals. Grok is intentionally cheeky; Claude is warm and careful. Both are choices.",
            analogy:
              "Brand voice guidelines, but the 'writer' follows them on every single reply, at scale.",
            example:
              "xAI positions Grok as witty and edgy with live X data; Anthropic tunes Claude for warmth and honesty. Deliberate, documented decisions.",
            pm: "PMs literally review personality specs. 'AI personality as product surface' is a fresh, credible way to think.",
          },
          {
            title: "Ship the guardrails too",
            emoji: "🧯",
            hook: "A real bot needs: moderation on inputs/outputs, rate limits, fallback answers when the model fails, logging for review, and an escape hatch to a human.",
            analogy:
              "Opening a restaurant isn't just cooking — it's fire exits, insurance, and health inspections.",
            example:
              "Support bot rule: after two failed answers or an angry message, hand off to a human with full context attached.",
            pm: "Listing operational guardrails is what separates 'I use ChatGPT' PMs from 'I could ship this' PMs.",
          },
        ],
        quiz: [
          {
            q: "What are the 4 core pieces of any chatbot?",
            choices: [
              "Model API + system prompt + conversation history + UI",
              "A custom-trained model + data center + ML team + 2 years",
              "A domain name and a dream",
            ],
            answer: 0,
            explain:
              "Rent the model, write its character sheet, keep re-sending the conversation, render the replies. That's the skeleton.",
          },
          {
            q: "Why does your app re-send the whole conversation every turn?",
            choices: [
              "For backup purposes",
              "Models are stateless — they remember nothing between API calls",
              "To increase the bill on purpose",
            ],
            answer: 1,
            explain:
              "No memory between calls. Chat 'memory' is a product feature you engineer (and pay tokens for).",
          },
          {
            q: "Grok's cheeky personality mainly comes from...",
            choices: [
              "A funnier training dataset only xAI has",
              "Deliberate product choices in its system prompt and tuning",
              "Random chance",
            ],
            answer: 1,
            explain:
              "Personality is a spec: written, tuned, and evaluated. Different companies choose different voices on purpose.",
          },
        ],
      },
      {
        id: "u5l3",
        title: "AI product metrics",
        emoji: "📈",
        cards: [
          {
            title: "Quality metrics",
            emoji: "🎯",
            hook: "Is the AI good? Measure acceptance rate (kept suggestions), edit rate (how much users fix), thumbs up/down, and eval scores on golden test sets.",
            analogy:
              "A ghostwriter's report card: how many drafts got used, and how heavily was each one rewritten?",
            example:
              "GitHub Copilot tracks the share of suggested code that developers accept and keep.",
            pm: "Naming acceptance rate and edit rate beats vaguely saying 'engagement' in every AI metrics discussion.",
          },
          {
            title: "Outcome metrics",
            emoji: "🏁",
            hook: "Did the JOB get done? Task completion rate, time saved, deflection rate (support tickets resolved without a human), and downstream conversion.",
            analogy:
              "Don't grade the chef on how pretty the kitchen is — grade whether diners were fed and came back.",
            example:
              "A support AI's headline metric: % of conversations fully resolved with the customer satisfied — not messages sent.",
            pm: "Anchor on the user's job-to-be-done. 'Messages per user' can rise because the bot is BAD (retries!).",
          },
          {
            title: "Cost & margin metrics",
            emoji: "💰",
            hook: "AI features have real per-use costs, so track cost per conversation, cost per resolution, and margin per user. Usage growth can be bad news if unit economics are broken.",
            analogy:
              "A bakery selling cakes below flour cost — every new customer digs the hole deeper.",
            example:
              "Unlimited-AI subscriptions got burned by power users costing 10x their fee. Pricing had to evolve.",
            pm: "AI PMs uniquely own a COST metric alongside growth. Saying so shows unusual business maturity.",
          },
          {
            title: "The counter-metric",
            emoji: "🚨",
            hook: "Every AI metric needs a guardrail twin: resolution rate ↔ customer satisfaction; acceptance rate ↔ bug rate; engagement ↔ over-reliance and error escapes.",
            analogy:
              "Rewarding a factory only on speed produces fast, broken toasters. Pair speed with defect rate.",
            example:
              "A support bot 'resolves' 90% of tickets — but if CSAT tanks, it's just talking people into giving up.",
            pm: "Power move: name the metric AND its counter-metric in the same breath, every time.",
          },
        ],
        quiz: [
          {
            q: "Best QUALITY metric for an AI writing assistant?",
            choices: [
              "Number of messages sent",
              "Acceptance rate and how heavily users edit AI drafts",
              "How many GPUs it uses",
            ],
            answer: 1,
            explain:
              "Kept-and-lightly-edited drafts = genuinely useful output. Message volume can mean retries and frustration.",
          },
          {
            q: "Why can 'more messages per user' be a BAD sign for a support bot?",
            choices: [
              "It can mean users are retrying because answers keep failing",
              "It can't — engagement is always good",
              "Messages are expensive to store",
            ],
            answer: 0,
            explain:
              "For task-based AI, faster resolution often means FEWER messages. Anchor metrics to the job, not activity.",
          },
          {
            q: "A support bot resolves 90% of tickets but satisfaction is crashing. What's happening?",
            choices: [
              "Nothing — 90% is great, ship it",
              "The bot may be 'resolving' by exhausting people; the counter-metric caught it",
              "Users hate all technology",
            ],
            answer: 1,
            explain:
              "This is why every metric needs a guardrail twin. Resolution without satisfaction is theater.",
          },
        ],
      },
      {
        id: "u5l4",
        title: "Safety & responsibility",
        emoji: "🛟",
        cards: [
          {
            title: "Safety is a product feature",
            emoji: "🧱",
            hook: "Safety isn't a legal checkbox — it's core UX. One viral screenshot of your AI doing something awful can undo a year of growth. Trust is the currency of AI products.",
            analogy:
              "Brakes on a car: not the opposite of performance — the thing that makes speed usable.",
            example:
              "Air Canada's chatbot invented a refund policy; a court made them honor it. Hallucination became a legal and PR bill.",
            pm: "The best AI teams treat safety as design, not friction. The phrase to remember: 'safety enables adoption.'",
          },
          {
            title: "Red teaming",
            emoji: "😈",
            hook: "Before launch, dedicated people try to make your AI fail: jailbreaks, harmful requests, prompt injection, embarrassing outputs. Find it before the internet does.",
            analogy:
              "Hiring friendly burglars to break into your house so you can fix the locks first.",
            example:
              "Frontier labs run formal red teams pre-launch; product teams run their own on new AI features.",
            pm: "Include 'red-team the feature' in any AI launch plan you sketch. Experienced reviewers notice its absence.",
          },
          {
            title: "The moderation stack",
            emoji: "🥞",
            hook: "Layered defenses: filter harmful inputs, constrain the model via system prompt, scan outputs before display, let users report, monitor everything. No single layer is enough.",
            analogy:
              "Airport security: ID check, scanner, and gate checks. Layers, because each one leaks a little.",
            example:
              "A kids' education bot might block violent inputs, force a G-rated persona, AND scan outputs — three nets.",
            pm: "'Defense in depth' is the phrase. One-sentence definition + one example = instant credibility.",
          },
          {
            title: "Privacy & data promises",
            emoji: "🔒",
            hook: "Users and companies fear their data trains someone else's model. Know the difference: consumer chats MAY be used for training (settings vary); enterprise/API data typically is NOT.",
            analogy:
              "A therapist who publishes anonymized case studies vs. one bound by strict confidentiality — very different conversations happen.",
            example:
              "Enterprise AI deals hinge on 'your data won't train our models' commitments in writing.",
            pm: "B2B AI PMs live this daily. Knowing the consumer-vs-enterprise data split is table stakes.",
          },
        ],
        quiz: [
          {
            q: "Why is safety a PRODUCT concern, not just legal?",
            choices: [
              "Trust drives adoption — one bad AI moment can kill growth and land you in court",
              "It isn't — safety is only for lawyers",
              "Because safety makes the model faster",
            ],
            answer: 0,
            explain:
              "Air Canada's chatbot invented a policy and the court enforced it. Safety failures are product failures.",
          },
          {
            q: "What is red teaming?",
            choices: [
              "Deliberately attacking your own AI pre-launch to find failures first",
              "Painting the UI red",
              "A competitive sports league for AI",
            ],
            answer: 0,
            explain:
              "Friendly attackers hunt jailbreaks and embarrassing failures before real users (and Twitter) do.",
          },
          {
            q: "Enterprise customers usually demand that their data...",
            choices: [
              "Is used to train models — they love contributing",
              "Is NOT used for training, guaranteed in writing",
              "Is posted publicly for transparency",
            ],
            answer: 1,
            explain:
              "'Your data won't train our models' is standard in enterprise AI contracts — deals die without it.",
          },
        ],
      },
    ],
  },
  {
    id: "u6",
    title: "The AI PM Playbook",
    emoji: "🏆",
    color: "#ffd166",
    tagline: "Think and talk like an AI product manager",
    lessons: [
      {
        id: "u6l1",
        title: "Talk like an AI PM",
        emoji: "🗣️",
        cards: [
          {
            title: "The fluency signal",
            emoji: "📶",
            hook: "You don't need to sound like an engineer — you need to sound FLUENT: use terms like tokens, context window, RAG, evals, agents, and latency correctly and casually.",
            analogy:
              "Ordering in decent French at a Paris café: nobody expects poetry, but effort and accuracy change how you're treated.",
            example:
              "Say 'we'd ground answers with RAG and gate quality on evals before launch' instead of 'we'd make the AI accurate.'",
            pm: "Precision beats enthusiasm. 'AI magic' hand-waving is the #1 credibility killer in any room.",
          },
          {
            title: "Respect the non-determinism",
            emoji: "🎰",
            hook: "Classic software does the same thing every time; AI is probabilistic — same input can give different outputs. Every AI PM habit (evals, guardrails, human review) flows from this one fact.",
            analogy:
              "Managing a vending machine vs. managing a talented-but-moody artist. Different management systems.",
            example:
              "You can't 'fix a bug' in a model like normal code — you adjust prompts, add checks, and measure distributions.",
            pm: "Openers don't get better than: 'AI products are probabilistic, so my job is managing a quality DISTRIBUTION, not a spec.'",
          },
          {
            title: "The demo-to-product gap",
            emoji: "🕳️",
            hook: "Anyone can demo AI in a day. Products need reliability across millions of weird, hostile, or ambiguous inputs. Understanding this gap separates casual AI fans from real AI PMs.",
            analogy:
              "Cooking one great dinner for friends vs. running a restaurant that's excellent 10,000 nights straight.",
            example:
              "The demo answers the happy path. The product handles typos, anger, injection attacks, and 47 languages.",
            pm: "When planning AI features, spend most of your energy in the gap: evals, edge cases, fallbacks, monitoring.",
          },
          {
            title: "Your daily reps",
            emoji: "🏃",
            hook: "The strongest signal is genuine usage: build a small bot, break a chatbot on purpose, compare Claude vs. GPT vs. Grok on the same task, form real opinions.",
            analogy:
              "A food critic who cooks. Their reviews carry different weight.",
            example:
              "'I built a Grok bot for my meal planning and learned system prompts drift — so I added few-shot examples' — instantly memorable.",
            pm: "People can tell users from readers in two minutes. This app helps you learn the map; go touch the territory too.",
          },
        ],
        quiz: [
          {
            q: "The single biggest mental difference between AI products and classic software?",
            choices: [
              "AI products are always more expensive",
              "AI is probabilistic — same input can produce different outputs",
              "AI products don't need designers",
            ],
            answer: 1,
            explain:
              "Non-determinism drives everything: evals instead of specs, guardrails instead of guarantees.",
          },
          {
            q: "The 'demo-to-product gap' matters because...",
            choices: [
              "Demos are illegal to discuss",
              "Reliability across millions of messy real inputs is the actual hard work",
              "They want to see a live demo",
            ],
            answer: 1,
            explain:
              "The happy path is easy. Great AI PMs obsess over edge cases, evals, fallbacks, and monitoring.",
          },
          {
            q: "Which PM sounds strongest?",
            choices: [
              "'AI is going to change everything, I'm super passionate'",
              "'I built a small Grok bot and learned its system prompt drifts without few-shot examples'",
              "'I read a lot of AI newsletters'",
            ],
            answer: 1,
            explain:
              "Specific, hands-on, slightly scarred by reality. That's the fluency signal people trust.",
          },
        ],
      },
      {
        id: "u6l2",
        title: "Know the landscape",
        emoji: "🏢",
        cards: [
          {
            title: "Anthropic in a nutshell",
            emoji: "🅰️",
            hook: "Founded 2021 by ex-OpenAI leaders (Dario & Daniela Amodei). Mission: AI safety FIRST — build frontier AI while making it safe. Makes Claude. Created MCP. Big on enterprise + coding.",
            analogy:
              "The careful older sibling: just as ambitious, but leads every conversation with responsibility.",
            example:
              "Constitutional AI (training Claude against written principles) and a Responsible Scaling Policy for frontier risk.",
            pm: "Anthropic's bet: safety and product advance together. 'Safety as design, not friction' is the mindset to understand.",
          },
          {
            title: "OpenAI in a nutshell",
            emoji: "⭕",
            hook: "Founded 2015; mission: ensure AGI benefits all humanity. Makes ChatGPT (fastest-growing consumer product ever), GPT models, and Sora. Moves aggressively: consumer + enterprise + platform.",
            analogy:
              "The ambitious sprinter: ship fast, iterate publicly, massive consumer reach, course-correct loudly.",
            example:
              "ChatGPT hit 100M users in ~2 months. OpenAI ships consumer apps, an API platform, and hardware ambitions simultaneously.",
            pm: "OpenAI's culture rewards speed, scale instincts, and comfort with ambiguity: ship, measure, iterate.",
          },
          {
            title: "The big three, contrasted",
            emoji: "🥷",
            hook: "Contrast crisply: Anthropic = safety-forward, enterprise-strong, Claude beloved for coding and writing. OpenAI = consumer scale, fastest shipping, broadest surface. xAI/Grok = real-time X data, edgy voice, speed.",
            analogy:
              "Volvo vs. Tesla vs. a street racer: all fast cars, totally different brand promises.",
            example:
              "Same feature, different framing: Anthropic asks 'is it safe and honest?'; OpenAI asks 'can 100M people use it tomorrow?'",
            pm: "Knowing the labs' genuine product-level differences (not vibes) makes you instantly sharper in AI strategy conversations.",
          },
          {
            title: "Speak the dialects",
            emoji: "🈶",
            hook: "Anthropic words: alignment, Constitutional AI, responsible scaling, interpretability, Claude, MCP. OpenAI words: AGI, iterative deployment, ChatGPT, reasoning models, platform.",
            analogy:
              "Every company has a dialect. Recognizing it helps you decode their announcements, strategy, and priorities.",
            example:
              "Anthropic's motto is 'helpful, honest, harmless.' OpenAI talks about iterative deployment — shipping early to learn safely.",
            pm: "Following each lab's launches keeps your mental map current. One specific observation beats ten generic takes.",
          },
        ],
        quiz: [
          {
            q: "Anthropic's core differentiator is...",
            choices: [
              "The cheapest models on the market",
              "Safety-first frontier AI — Constitutional AI, alignment research, responsible scaling",
              "Being the oldest AI company",
            ],
            answer: 1,
            explain:
              "Founded by ex-OpenAI leaders to put safety at the center while still building frontier models.",
          },
          {
            q: "Which pairing is correct?",
            choices: [
              "Claude → OpenAI, ChatGPT → Anthropic",
              "Claude → Anthropic, ChatGPT → OpenAI, Grok → xAI",
              "Grok → Google, Gemini → xAI",
            ],
            answer: 1,
            explain:
              "Claude is Anthropic's model, ChatGPT is OpenAI's product, Grok is xAI's (with real-time X data).",
          },
          {
            q: "In Anthropic's worldview, safety is best framed as...",
            choices: [
              "A necessary evil that slows shipping",
              "A design principle that enables trust and adoption",
              "Something the legal team handles",
            ],
            answer: 1,
            explain:
              "Their whole thesis: safety and capability advance together. Treating safety as friction misses the point.",
          },
        ],
      },
      {
        id: "u6l3",
        title: "Product sense with AI",
        emoji: "🧭",
        cards: [
          {
            title: "Start with the problem. Always.",
            emoji: "🎣",
            hook: "The #1 AI PM failure mode: starting from 'we should use AI' instead of a user problem. Execs and stakeholders set this trap constantly. Don't take the bait.",
            analogy:
              "A hammer salesman wandering around asking what looks nail-ish. Great products start with what's broken.",
            example:
              "Weak: 'Let's add an AI chatbot to the app.' Strong: 'Users abandon returns midway; AI can cut that friction — here's how, and here's how I'd verify.'",
            pm: "Open any product discussion with the user and the pain. Bring in AI only when it genuinely beats the alternative.",
          },
          {
            title: "Where AI genuinely shines",
            emoji: "✨",
            hook: "AI's sweet spots: drafting anything, summarizing lots of text, natural-language interfaces to complex tools, personalization at scale, and processing unstructured data (emails, calls, docs).",
            analogy:
              "An intern army: each one reads, writes, and summarizes tirelessly — as long as someone senior reviews what matters.",
            example:
              "Summarizing 500 support tickets into 5 themes: perfect for AI. Deciding this quarter's roadmap from them: still you.",
            pm: "A crisp mental list of 'great fit / bad fit' use cases makes product-design conversations feel easy.",
          },
          {
            title: "The AI-native rethink",
            emoji: "🔮",
            hook: "Don't sprinkle AI on old workflows — ask what the product looks like if AI existed first. Often the form factor itself changes.",
            analogy:
              "Early TV just filmed radio hosts at their mics. It took years to invent actual television. Don't film the radio show.",
            example:
              "Instead of 'AI helps you write formulas faster,' an AI-native tool asks: should users ever see formulas at all?",
            pm: "For any redesign, offer two paths: the incremental version AND the AI-native version. Instant depth.",
          },
          {
            title: "A pocket framework",
            emoji: "🗂️",
            hook: "For any 'design an AI feature' challenge: 1) User & pain. 2) Why AI beats the alternative. 3) V1 scope + model choice + where humans stay in the loop. 4) Quality: evals + metrics + counter-metric. 5) Risks: hallucination, cost, trust — and mitigations.",
            analogy:
              "A pre-flight checklist: not for inspiration, but so nothing important gets skipped under pressure.",
            example:
              "'AI meeting notes': busy managers drown in meetings → AI summarizes with action items → humans confirm before sending → measure edit rate + adoption → risk: wrong attributions, so link to transcript.",
            pm: "Practice this five times out loud and most AI product discussions become fill-in-the-blanks.",
          },
        ],
        quiz: [
          {
            q: "A stakeholder asks 'How would you add AI to our app?' Your FIRST move:",
            choices: [
              "List every AI feature you can imagine",
              "Step back to user problems, then evaluate where AI genuinely helps",
              "Recommend the biggest available model",
            ],
            answer: 1,
            explain:
              "It's a trap: the question invites tech-first thinking. Reframe around the pain, then apply AI.",
          },
          {
            q: "Which task is AI's sweet spot TODAY?",
            choices: [
              "Summarizing 500 tickets into themes for human review",
              "Autonomously firing employees",
              "Replacing your product strategy",
            ],
            answer: 0,
            explain:
              "Reading and summarizing mountains of text with human review = ideal. High-stakes irreversible calls = not yet.",
          },
          {
            q: "'AI-native' thinking means...",
            choices: [
              "Adding a chatbot to the current design",
              "Asking what the product would look like if AI had existed first",
              "Using AI to write your code comments",
            ],
            answer: 1,
            explain:
              "Sprinkling AI on old workflows is filming the radio show. Sometimes the form factor itself should change.",
          },
        ],
      },
      {
        id: "u6l4",
        title: "Hard questions, strong answers",
        emoji: "⚔️",
        cards: [
          {
            title: "\"How would you measure a chatbot?\"",
            emoji: "📏",
            hook: "Answer shape: define the JOB (resolve issues? entertain? teach?), pick outcome metrics (resolution rate, task completion), quality metrics (thumbs, edit rate), a counter-metric (CSAT, escalation quality), and cost per conversation.",
            analogy: "Grade the ghostwriter on published pieces and how much editing they needed — not on words typed.",
            example:
              "'For a support bot: resolution rate without human handoff, paired with CSAT so we don't “resolve” by exhausting people — plus cost per resolution.'",
            pm: "Metric + counter-metric + cost, tied to the job. That trio is a complete, senior-sounding answer.",
          },
          {
            title: "\"Your AI feature is hallucinating. Go.\"",
            emoji: "🚑",
            hook: "Answer shape: measure it (eval set, error rate by category) → reduce it (RAG grounding, better prompts, lower temperature, model upgrade) → design for what remains (citations, confidence UX, human review for high stakes).",
            analogy: "Doctor's protocol: diagnose severity first, treat the cause, then manage the symptoms you can't cure.",
            example:
              "'First I'd quantify: which question types fail? Then ground with RAG + citations. For high-stakes flows, human review until error rates justify removing it.'",
            pm: "Measure → mitigate → design-around. Never promise zero hallucinations — that's a fluency fail.",
          },
          {
            title: "\"Should we build agents?\"",
            emoji: "🤔",
            hook: "Answer shape: agents fit when tasks are multi-step, verifiable, and valuable enough to justify cost and risk. Start with the trust ladder: suggestions → approved actions → supervised autonomy → full autonomy.",
            analogy: "Don't hand the new hire the company credit card on day one. Same logic, same ladder.",
            example:
              "'For expense reports: start with AI-drafted reports humans approve. As accuracy proves out, auto-file the under-$50 ones.'",
            pm: "The trust-ladder rollout turns a scary yes/no into a smart sequence. Leadership loves a de-risked path.",
          },
          {
            title: "\"Should we invest in this AI bet?\"",
            emoji: "💡",
            hook: "Answer shape: size the user pain + show a scrappy proof (prototype or eval results) + honest cost and risk picture + a staged rollout plan. Concrete evidence beats AI hype every time.",
            analogy: "Pitching a road trip: don't describe the destination photos — show the route, the gas budget, and the first stop.",
            example:
              "'Support drowns in 40% repeat questions. A prototype resolved 60% of them in testing at $0.04 each. I propose a 5% traffic pilot with CSAT as the guardrail.'",
            pm: "You now have the vocabulary, the map, and real opinions. Do the reps daily. Go build. 🏆",
          },
        ],
        quiz: [
          {
            q: "Asked to measure an AI feature, a complete answer includes...",
            choices: [
              "Just daily active users",
              "Outcome metric + quality metric + counter-metric + cost per use, tied to the user's job",
              "Whatever the engineers can log fastest",
            ],
            answer: 1,
            explain:
              "Job-anchored outcomes, quality, a guardrail twin, and unit cost. That combination sounds — and is — senior.",
          },
          {
            q: "Your AI hallucinates. The WRONG answer is...",
            choices: [
              "Quantify errors by category with evals",
              "'We'll get it to zero hallucinations before launch'",
              "Ground with RAG and add citations, keep humans on high-stakes flows",
            ],
            answer: 1,
            explain:
              "Zero hallucinations isn't achievable with today's LLMs — promising it signals you don't understand the tech.",
          },
          {
            q: "The 'trust ladder' for agent rollout means...",
            choices: [
              "Full autonomy on day one — be bold",
              "Suggestions first, then approved actions, then supervised autonomy as accuracy earns it",
              "Never letting agents act at all",
            ],
            answer: 1,
            explain:
              "Autonomy is earned in stages, gated by measured performance. A de-risked rollout is a PM superpower.",
          },
        ],
      },
      {
        id: "u6l5",
        title: "ML fundamentals, demystified",
        emoji: "🧬",
        cards: [
          {
            title: "What IS Generative AI?",
            emoji: "🎨",
            hook: "AI comes in two big flavors. Predictive (discriminative) models answer 'which one?' — is this email spam, will this customer churn, what's the fraud score. Generative AI CREATES new content — text, images, audio, code — by learning the deep patterns of its training data and sampling something new from them. LLMs, image diffusion models, and voice models are all generative.",
            analogy:
              "An art critic vs. an artist. The critic judges what exists ('this is a Monet, 87% sure'); the artist produces a painting that never existed before.",
            example:
              "A fraud model outputs a score between 0 and 1 (predictive). ChatGPT writes a brand-new apology email (generative). Midjourney paints an image from a sentence (generative).",
            pm: "A crisp definition to reuse: 'Predictive AI classifies or ranks what exists; generative AI produces new content.' The risk profiles differ too — misclassification vs. hallucinated content.",
          },
          {
            title: "Neural networks vs. LLMs",
            emoji: "🕸️",
            hook: "A neural network is the broad technique: layers of simple math units ('neurons') connected by weights, which learn patterns from data by adjusting those weights during training. NNs power vision, speech, fraud detection, recommendations. An LLM is one specific, enormous KIND of neural network — the transformer architecture (introduced in the 2017 paper 'Attention Is All You Need') — trained on massive text to predict the next token. Every LLM is a neural network; almost no neural networks are LLMs.",
            analogy:
              "Vehicle vs. cruise ship. An LLM is a neural network the way a cruise ship is a vehicle — same family, radically different scale and specialization.",
            example:
              "Spotify's recommendation network has millions of parameters and outputs a ranking score. A frontier LLM has hundreds of billions of parameters and outputs language, code, and reasoning.",
            pm: "The transformer's key trick is 'attention': for every new token, the model weighs which earlier words matter most. Attention + massive scale is what unlocked modern generative AI.",
          },
          {
            title: "Classic ML: old but gold",
            emoji: "🥇",
            hook: "Before LLMs, 'classic ML' — logistic regression, decision trees, gradient-boosted trees (XGBoost) — ran the world. It still does. Strengths: cheap, millisecond-fast, consistent (same input → same output), explainable to regulators, and excellent on structured/tabular data. Weaknesses: needs labeled training data and hand-built features, can't read open-ended language, and can't generate anything.",
            analogy:
              "A calculator vs. a consultant. The calculator is instant, nearly free, and always right within its narrow job — but it will never draft your strategy memo.",
            example:
              "Credit scoring, fraud detection, search ranking, ETA prediction, churn models — nearly all still classic ML, because it's fast, cheap, and auditable at massive scale.",
            pm: "Product implications: classic ML wins when data is structured, latency and cost budgets are tight, or regulators demand explainability. Don't use an LLM where a decision tree will do.",
          },
          {
            title: "Rules vs. ML vs. LLM: the ladder",
            emoji: "🪜",
            hook: "An escalation ladder. (1) Rule-based logic — deterministic if-then code — when the logic is simple, must be 100% predictable, or is legally mandated. (2) Classic ML / small NNs — when you have labeled data and structured inputs and need pattern recognition at scale. (3) LLMs — when inputs are unstructured language, outputs are generated content, or requirements shift too fast to retrain a model. Start at the bottom; climb only when the job demands it.",
            analogy:
              "Hiring: a checklist (rules), an analyst (ML), or a versatile generalist (LLM). You pay generalist rates only when the job truly needs judgment with words.",
            example:
              "'Block transactions over $10K from accounts under 30 days old' = rule. 'Score fraud probability from 200 signals' = classic ML. 'Read this dispute email and draft a response' = LLM.",
            pm: "Real systems mix all three: rules for compliance gates, ML for scoring, LLMs for language. The naive answer is 'LLM everything.' The senior answer is this ladder — cheapest reliable tool wins.",
          },
        ],
        quiz: [
          {
            q: "The relationship between neural networks and LLMs is...",
            choices: [
              "They're competing technologies — you pick one or the other",
              "LLMs are one specialized, giant type of neural network (a transformer trained on text)",
              "Neural networks are newer than LLMs",
            ],
            answer: 1,
            explain:
              "NN is the genus, LLM is one species: a transformer-architecture network trained on massive text for next-token prediction.",
          },
          {
            q: "Which task is classic ML (not an LLM) still the best fit for?",
            choices: [
              "Scoring fraud probability from 200 structured transaction signals",
              "Drafting a personalized apology email",
              "Summarizing a 40-page contract",
            ],
            answer: 0,
            explain:
              "Structured data + tight latency + auditability = classic ML territory. Language in, content out = LLM territory.",
          },
          {
            q: "'Block all transactions over $10K from accounts under 30 days old.' Best tool?",
            choices: [
              "A rule — deterministic, auditable, three lines of code",
              "A fine-tuned LLM",
              "A multi-agent system",
            ],
            answer: 0,
            explain:
              "Simple, legally-sensitive logic should be 100% predictable. Rules first; climb the ladder only when rules can't express the job.",
          },
        ],
      },
      {
        id: "u6l6",
        title: "Deep answers: models & prompts",
        emoji: "🎓",
        cards: [
          {
            title: "Choosing a model: real criteria",
            emoji: "🧮",
            hook: "Six filters. (1) Capability — can it do the task at all (reasoning depth, modalities, tool use)? (2) Quality on YOUR evals — run a bake-off on your own test set; public leaderboards don't reflect your data. (3) Latency — user-facing chat needs a fast first token; overnight batch jobs don't care. (4) Cost per task at projected volume — note output tokens usually cost several times more than input. (5) Context window and features — fits your documents? Supports structured output and tool calling? (6) Trust — data-privacy terms, compliance certifications, provider reliability, deprecation policy.",
            analogy:
              "Hiring: the résumé (benchmarks) earns an interview; the work-sample test (your evals) decides the offer.",
            example:
              "A real bake-off: run 300 actual support tickets through three candidate models, score with a rubric, and compare quality, latency, and cost per ticket side by side. The decision usually falls out of the spreadsheet.",
            pm: "Never 'I'd pick the best model.' Instead: 'Shortlist by constraints, bake-off on our eval set, choose per use case — possibly routing between a cheap model and a frontier model.'",
          },
          {
            title: "Evaluating a prompt properly",
            emoji: "🔬",
            hook: "Treat prompts like code. (1) Build a test set: 50–500 real, representative inputs including edge cases — typos, hostile users, off-topic asks. (2) Define a rubric: correctness, completeness, format compliance, tone, safety. (3) Score every output: exact-match checks where possible, LLM-as-judge for subjective dimensions, humans spot-checking the judge. (4) Compare variants side by side and watch for regressions — a tweak that fixes one case often silently breaks three others. (5) Version-control prompts and re-run the suite on every change.",
            analogy:
              "A/B testing ad copy — except your 'audience' is an eval suite you can re-run in minutes for pennies.",
            example:
              "Changing 'be concise' to 'answer in under 60 words' looks trivial. The eval run shows format compliance jumping from 71% to 96% with no accuracy drop. Now it's a shippable fact, not a hunch.",
            pm: "The line to remember: 'A prompt change without an eval run is a vibe, not an improvement.'",
          },
          {
            title: "RAG, one level deeper",
            emoji: "🔎",
            hook: "The RAG pipeline has stages, and each can fail. (1) Chunking: split documents into pieces — too big means noisy retrieval, too small loses context. (2) Embedding + vector store: chunks become meaning-vectors for semantic search. (3) Retrieval: fetch the top-k most similar chunks — production systems often add keyword search ('hybrid retrieval') plus a reranker model to reorder results by true relevance. (4) Generation: the model answers ONLY from the retrieved text, ideally with citations. Most 'RAG is broken' complaints trace to retrieval, not the model.",
            analogy:
              "A law firm: the paralegal pulls case files (retrieval), the associate picks the truly relevant ones (reranking), the partner writes the argument (generation). A weak paralegal sinks the case no matter how brilliant the partner.",
            example:
              "Debugging discipline: when the answer is wrong, FIRST inspect what was retrieved. If the right chunk never surfaced, fix chunking or search — don't touch the prompt.",
            pm: "Know the alternative too: giant context windows let you paste everything for small document sets — but cost, latency, and 'lost in the middle' attention problems keep RAG the standard at scale.",
          },
          {
            title: "RLHF vs. DPO",
            emoji: "🎚️",
            hook: "Both teach models human preferences — by different routes. RLHF (behind ChatGPT's 2022 breakthrough): collect human rankings of answers → train a separate 'reward model' to predict those rankings → run reinforcement learning (an algorithm called PPO) to optimize the LLM against that reward model. Powerful, but complex, unstable, and compute-hungry. DPO — Direct Preference Optimization (Stanford, 2023) — skips the reward model and the RL loop entirely: it adjusts the model directly on preference pairs ('answer A beat answer B') using a simple training objective. Simpler, cheaper, more stable — now standard across open-source models.",
            analogy:
              "RLHF trains a food critic first, then makes the chef cook to satisfy the critic. DPO hands the chef the diners' side-by-side verdicts directly.",
            example:
              "Open-model teams largely moved from RLHF-style pipelines to DPO variants because a small team can actually afford to run DPO.",
            pm: "The one-liner: 'Same goal — align the model to human preferences. DPO removed the scaffolding, which democratized alignment tuning.'",
          },
        ],
        quiz: [
          {
            q: "The right way to choose a model for your product?",
            choices: [
              "Pick whatever tops the public leaderboard",
              "Shortlist by constraints, then bake-off the candidates on your own eval set",
              "Always pick the cheapest and hope",
            ],
            answer: 1,
            explain:
              "Leaderboards are the résumé; your eval set is the work-sample test. Capability, quality-on-your-data, latency, cost, context, trust.",
          },
          {
            q: "DPO's key simplification versus RLHF is...",
            choices: [
              "It removes the separate reward model and RL loop, learning directly from preference pairs",
              "It uses no human data at all",
              "It only works for images",
            ],
            answer: 0,
            explain:
              "RLHF: preferences → reward model → PPO reinforcement learning. DPO: preferences → direct optimization. Same goal, far less machinery.",
          },
          {
            q: "Your RAG bot answered wrong. First debugging step?",
            choices: [
              "Rewrite the system prompt immediately",
              "Inspect what chunks were retrieved — retrieval fails more often than generation",
              "Switch to a bigger model",
            ],
            answer: 1,
            explain:
              "If the right passage never reached the model, no prompt or model upgrade can save the answer. Debug retrieval first.",
          },
        ],
      },
      {
        id: "u6l7",
        title: "Staying current",
        emoji: "📡",
        cards: [
          {
            title: "Go to the source",
            emoji: "📜",
            hook: "The highest-signal information comes from the labs themselves. OpenAI, Anthropic, Google DeepMind, Meta AI, and xAI publish blogs, model cards, and system cards with every release — documenting capabilities, benchmark results, pricing, and known weaknesses. Fifteen minutes with a model card beats an hour of hot takes.",
            analogy:
              "Reading the actual earnings report instead of a tweet about the earnings report.",
            example:
              "Anthropic's model cards spell out benchmark scores AND the model's known failure modes — exactly the trade-off data a PM needs for a build decision.",
            pm: "When a model launches, skim three things: what's new, what it costs, and what the provider admits it's still bad at. That's your product brief.",
          },
          {
            title: "Curate a lean feed",
            emoji: "🗞️",
            hook: "You need 3–5 recurring sources, not 50 tabs. A daily-ish newsletter for breadth (Ben's Bites, The Rundown, TLDR AI), one practitioner source for depth (the Latent Space podcast), one strategy lens (Stratechery, or Ethan Mollick's 'One Useful Thing'), plus a handful of researchers and builders you follow directly. Skip the pure-hype and pure-doom accounts — both are noise.",
            analogy:
              "A balanced diet beats grazing the whole buffet: one breadth source, one depth source, one strategy source. Done.",
            example:
              "A sustainable weekly hour: 5-minute newsletter skim daily, one podcast episode, one deep read on the weekend. Sustainable beats heroic.",
            pm: "When someone asks how you keep up, name your actual sources and cadence. Specificity IS the credibility.",
          },
          {
            title: "Learn with your hands",
            emoji: "🤲",
            hook: "Reading alone doesn't stick — the habit that compounds is testing. Keep 5–10 personal test prompts (drawn from your real work) and run every major new model through them within days of release. Build tiny things: a bot with a personality, a RAG over your own notes, a small automation. Direct experience produces the opinions no newsletter can give you.",
            analogy:
              "Test-driving cars vs. reading car reviews. Ten minutes behind the wheel reveals what no review can.",
            example:
              "Keep one note: the same 5 prompts, run on each new model, with your verdicts. Six months later you own a private eval set and genuinely informed opinions.",
            pm: "'I keep a personal eval set' is one sentence that instantly separates practitioners from spectators.",
          },
          {
            title: "Filter signal from hype",
            emoji: "🧹",
            hook: "Four sniff tests. (1) Benchmarks vs. reality — public benchmarks leak into training data and get gamed; trust hands-on evals more. (2) Demos vs. products — cherry-picked demos hide failure rates; always ask 'what's the eval?' (3) Capability vs. adoption — a model CAN do something ≠ users will adopt it (trust, cost, and workflow gaps in between). (4) Revealed preferences — watch what serious builders actually ship with, not what they retweet.",
            analogy:
              "Movie trailer, critic review, box office: hype, evidence, and adoption are three different data sources. Never confuse the trailer for the box office.",
            example:
              "'Model X beats humans on benchmark Y' usually means a narrow test set — check for training-data contamination and real-world evals before repeating the claim in a meeting.",
            pm: "The right stance is excited AND skeptical: 'Impressive demo — what's the failure rate, the cost, and the eval?' is always the correct follow-up.",
          },
        ],
        quiz: [
          {
            q: "Highest-signal source the week a new model launches?",
            choices: [
              "Viral social media threads",
              "The lab's own model/system card: capabilities, costs, and admitted weaknesses",
              "YouTube reaction videos",
            ],
            answer: 1,
            explain:
              "Model cards are the primary source: benchmarks, pricing, and known failure modes straight from the people who built it.",
          },
          {
            q: "The habit that builds genuinely informed model opinions?",
            choices: [
              "Keeping a personal set of test prompts and running every new model through them",
              "Subscribing to more newsletters",
              "Memorizing leaderboard rankings",
            ],
            answer: 0,
            explain:
              "A private eval set turns releases into evidence. Direct experience beats secondhand takes every time.",
          },
          {
            q: "Why treat public benchmark headlines with skepticism?",
            choices: [
              "Benchmarks can leak into training data and get gamed — hands-on evals beat headlines",
              "Benchmarks are illegal to publish",
              "Models can't be measured at all",
            ],
            answer: 0,
            explain:
              "Contaminated or gamed benchmarks inflate scores. Ask for real-world evals and failure rates before repeating claims.",
          },
        ],
      },
    ],
  },
];
