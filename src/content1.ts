import type { Unit } from "./types";

// Units 1–3: LLM basics, how models get smart, the AI engineering toolkit.

export const units13: Unit[] = [
  {
    id: "u1",
    title: "LLM Basics",
    emoji: "🧠",
    color: "#d8ff3e",
    tagline: "What even is ChatGPT?",
    lessons: [
      {
        id: "u1l1",
        title: "What's an LLM?",
        emoji: "✨",
        cards: [
          {
            title: "LLM = autocomplete on steroids",
            emoji: "⌨️",
            hook: "A Large Language Model (LLM) is a computer program that predicts the next word, over and over, really well. That's it. ChatGPT, Claude, Grok and Gemini are all LLMs.",
            analogy:
              "It's like your phone's keyboard autocomplete, but trained on so much text that it can finish essays, not just sentences.",
            example:
              "You type 'Write a birthday poem for my mom' — the model predicts the best next word again and again until a whole poem comes out.",
            pm: "Great PMs can explain AI simply to any room. 'It predicts the next word really well' is a perfect opener.",
          },
          {
            title: "Tokens: the LEGO bricks of text",
            emoji: "🧱",
            hook: "Models don't read whole words — they read tokens, small chunks of text (roughly ¾ of a word each). Everything in AI is measured and priced in tokens.",
            analogy:
              "Tokens are like LEGO bricks: the model snaps them together one at a time to build sentences.",
            example:
              "'unbelievable' might be 3 tokens: 'un' + 'believ' + 'able'. A page of text is roughly 500 tokens.",
            pm: "AI pricing is per token. If a PM says 'this feature costs $0.02 per conversation,' they counted tokens.",
          },
          {
            title: "It predicts, it doesn't 'know'",
            emoji: "🎲",
            hook: "An LLM has no database of facts it looks up. It generates answers from patterns it learned. Usually right, sometimes confidently wrong.",
            analogy:
              "Like a super well-read friend answering from memory at a dinner party — brilliant, but never checking sources mid-sentence.",
            example:
              "Ask it for a court case citation and it may invent one that sounds real. It's pattern-matching, not looking things up.",
            pm: "This is WHY hallucinations happen. Knowing the root cause (prediction, not lookup) makes you sound fluent.",
          },
          {
            title: "Why it feels so smart",
            emoji: "🤯",
            hook: "Predicting the next word REALLY well forces the model to learn grammar, facts, reasoning and style — because you need all of that to guess what comes next.",
            analogy:
              "To finish the sentence 'The capital of France is ___' you must actually know Paris. Great prediction requires real understanding-like skill.",
            example:
              "That's how one skill (next-word prediction) turned into coding, translating, summarizing and tutoring.",
            pm: "Great sound bite: 'One simple objective — predict the next token — unlocked hundreds of product use cases.'",
          },
        ],
        quiz: [
          {
            q: "In one sentence, what does an LLM actually do?",
            choices: [
              "Looks up answers in a giant database",
              "Predicts the next word (token) over and over",
              "Searches the internet in real time",
            ],
            answer: 1,
            explain:
              "LLMs generate text by predicting the next token repeatedly. No database lookup, no built-in web search.",
          },
          {
            q: "What's a token?",
            choices: [
              "A small chunk of text, about ¾ of a word",
              "A password for the AI",
              "One full sentence",
            ],
            answer: 0,
            explain:
              "Tokens are the LEGO bricks of text — models read, write, and charge money by the token.",
          },
          {
            q: "Why do LLMs sometimes state wrong facts confidently?",
            choices: [
              "They're programmed to lie sometimes",
              "Their internet connection drops",
              "They predict plausible-sounding text instead of looking up facts",
            ],
            answer: 2,
            explain:
              "Hallucinations happen because the model generates what SOUNDS right from patterns — it isn't checking a source.",
          },
        ],
      },
      {
        id: "u1l2",
        title: "How it learned",
        emoji: "📚",
        cards: [
          {
            title: "Trained on a mountain of text",
            emoji: "⛰️",
            hook: "LLMs learn by reading a huge slice of the internet — books, articles, code, websites — and practicing next-word prediction trillions of times.",
            analogy:
              "Imagine reading every book in every library, then playing 'guess the next word' a trillion times until you're eerily good at it.",
            example:
              "That's why one model can write Python, sonnets, and legal memos — it saw all of them during training.",
            pm: "Training data quality = model quality. 'Garbage in, garbage out' applies to AI products too.",
          },
          {
            title: "Parameters: billions of tiny knobs",
            emoji: "🎛️",
            hook: "A model's 'brain' is billions of numbers called parameters. Training slowly adjusts these knobs until predictions get good.",
            analogy:
              "Like a sound mixing board with billions of sliders — training nudges each slider until the music sounds right.",
            example:
              "When you hear 'a 70B model', that means 70 billion parameters. More knobs usually = smarter, slower, pricier.",
            pm: "Model size drives the classic PM trade-off: quality vs. cost vs. speed.",
          },
          {
            title: "Training vs. using (inference)",
            emoji: "🔁",
            hook: "Training happens once and costs millions. Inference is every time someone uses the model — it's the per-use cost your product pays.",
            analogy:
              "Training = 4 years of med school. Inference = each individual patient visit afterward.",
            example:
              "GPT-4 reportedly cost $100M+ to train. Then each chat message costs fractions of a cent to run.",
            pm: "Your product's unit economics live in inference costs. PMs obsess over cost per user action.",
          },
          {
            title: "The knowledge cutoff",
            emoji: "📅",
            hook: "A model only knows what existed in its training data, which ends at a 'cutoff date'. Anything after that, it simply hasn't seen.",
            analogy:
              "Like a friend who came back from a year on a desert island — brilliant, but they missed all the recent news.",
            example:
              "Ask about yesterday's game and the model can't know — unless the product adds web search on top.",
            pm: "That's why products bolt on search or retrieval — a great example of product design fixing a model limitation.",
          },
        ],
        quiz: [
          {
            q: "What are 'parameters' in a model?",
            choices: [
              "Billions of adjustable numbers that store what the model learned",
              "The rules a company writes for the AI",
              "The user's settings menu",
            ],
            answer: 0,
            explain:
              "Parameters are the tiny knobs training adjusts. 'A 70B model' = 70 billion of them.",
          },
          {
            q: "Which cost hits your product EVERY time a user sends a message?",
            choices: ["Training", "Inference", "The knowledge cutoff"],
            answer: 1,
            explain:
              "Training is one-time (and huge). Inference is the pay-per-use cost — that's what shapes your margins.",
          },
          {
            q: "Why can't a plain LLM tell you today's news?",
            choices: [
              "News is blocked for legal reasons",
              "Its knowledge stops at a training cutoff date",
              "It can, always",
            ],
            answer: 1,
            explain:
              "Models only know their training data. Products add web search or retrieval to cover recent events.",
          },
        ],
      },
      {
        id: "u1l3",
        title: "Talking to it",
        emoji: "💬",
        cards: [
          {
            title: "The prompt is the product",
            emoji: "📝",
            hook: "A prompt is everything you send the model: the question, instructions, and any background info. Better input = dramatically better output.",
            analogy:
              "Like briefing a freelancer: 'make it pop' gets you junk; a clear brief with examples gets you gold.",
            example:
              "'Summarize this for a 10-year-old in 3 bullet points' beats 'summarize this' every time.",
            pm: "Many AI 'features' are literally a well-crafted prompt behind a button. Prompts are product decisions.",
          },
          {
            title: "System prompt: the job description",
            emoji: "📋",
            hook: "A hidden instruction the product team writes that tells the model who to be and what rules to follow — before the user says anything.",
            analogy:
              "It's the employee handbook the AI reads before starting its shift.",
            example:
              "'You are a friendly banking assistant. Never give investment advice. Keep answers under 100 words.'",
            pm: "PMs literally help write these. It's where product voice, safety rules, and scope live.",
          },
          {
            title: "Context window: its short-term memory",
            emoji: "🧳",
            hook: "The context window is how much text the model can 'hold in mind' at once — the whole conversation plus any documents you paste in.",
            analogy:
              "A whiteboard of fixed size: once it's full, the oldest notes get erased to make room.",
            example:
              "A 200K-token window fits a whole novel. Small windows are why old chats 'forget' early details.",
            pm: "Context size shapes features: 'chat with your PDF' only works if the PDF fits (or you get clever — see RAG).",
          },
          {
            title: "Temperature: the creativity dial",
            emoji: "🌡️",
            hook: "A setting from ~0 to 1 that controls randomness. Low = predictable and consistent. High = creative and varied.",
            analogy:
              "Low temperature is a barista following the recipe exactly; high temperature is one improvising a new drink.",
            example:
              "Customer-support bots run near 0 (consistency). Brainstorming tools run higher (variety).",
            pm: "A tiny knob with big product implications: do you want reliable or surprising?",
          },
        ],
        quiz: [
          {
            q: "What's a system prompt?",
            choices: [
              "The user's first message",
              "Hidden instructions from the product team that set the AI's role and rules",
              "An error message from the system",
            ],
            answer: 1,
            explain:
              "The system prompt is the AI's job description — written by the product team, invisible to users.",
          },
          {
            q: "The context window is like...",
            choices: [
              "A whiteboard with limited space — old stuff gets erased when it fills",
              "A permanent hard drive that stores everything forever",
              "A camera watching the user",
            ],
            answer: 0,
            explain:
              "It's the model's short-term memory. When the conversation exceeds it, earlier details fall out.",
          },
          {
            q: "You're building a customer support bot. What temperature makes sense?",
            choices: [
              "High — keep the answers spicy",
              "Low — consistent, predictable answers",
              "Temperature doesn't affect anything",
            ],
            answer: 1,
            explain:
              "Support needs consistency, so you keep temperature near 0. Creative tools dial it up.",
          },
        ],
      },
      {
        id: "u1l4",
        title: "When it lies",
        emoji: "🤥",
        cards: [
          {
            title: "Hallucinations",
            emoji: "👻",
            hook: "When a model confidently makes something up — a fake fact, citation, or number — that's a hallucination. It's the #1 trust problem in AI products.",
            analogy:
              "Like a student who never says 'I don't know' on a test — they write SOMETHING plausible and move on.",
            example:
              "A lawyer famously filed a brief with court cases ChatGPT invented. The judge was not amused.",
            pm: "Every AI PM deals with this weekly. Have your mitigation list ready (next card).",
          },
          {
            title: "How products fight hallucinations",
            emoji: "🛡️",
            hook: "You can't fully eliminate them, but you can reduce them: ground the model in real documents (RAG), let it cite sources, lower temperature, and add human review for high-stakes actions.",
            analogy:
              "Turn the closed-book exam into an open-book exam, and have a TA double-check the important answers.",
            example:
              "Perplexity shows citations for every claim, so users can verify instead of blindly trusting.",
            pm: "The go-to PM playbook: 'Ground answers in trusted data, show sources, and design the UI to set expectations.'",
          },
          {
            title: "Design for imperfection",
            emoji: "🎨",
            hook: "Since the model WILL sometimes be wrong, great AI products design for it: confidence cues, easy edit/undo, feedback buttons, and humans in the loop for big decisions.",
            analogy:
              "Like spellcheck: it underlines suggestions instead of silently rewriting your email. The user stays in control.",
            example:
              "GitHub Copilot suggests code in gray — the developer must accept it. Errors become suggestions, not disasters.",
            pm: "This is pure PM territory: the model is probabilistic, so the UX must absorb the misses.",
          },
          {
            title: "The right use cases",
            emoji: "🎯",
            hook: "AI shines where drafts are cheap to verify and errors are low-stakes. Be careful where errors are costly, invisible, or irreversible.",
            analogy:
              "Great intern rule: let them draft the deck, don't let them wire money.",
            example:
              "Drafting emails: perfect. Auto-sending medical dosages: absolutely not without human review.",
            pm: "This is where PM judgment shows: WHERE you deploy AI matters more than how fancy the model is.",
          },
        ],
        quiz: [
          {
            q: "What's a hallucination?",
            choices: [
              "When the model refuses to answer",
              "When the model confidently makes up false information",
              "When the app crashes",
            ],
            answer: 1,
            explain:
              "Hallucination = confident fabrication. It happens because models generate plausible text rather than verified facts.",
          },
          {
            q: "Which is NOT a real hallucination mitigation?",
            choices: [
              "Grounding answers in trusted documents (RAG)",
              "Showing sources users can verify",
              "Asking the model to pinky-promise to be honest",
            ],
            answer: 2,
            explain:
              "Real levers: grounding in data, citations, lower temperature, human review. Promises aren't one of them.",
          },
          {
            q: "Which use case is SAFEST for today's AI?",
            choices: [
              "Auto-approving bank loans with no review",
              "Drafting a marketing email a human will read and edit",
              "Sending medication doses directly to patients",
            ],
            answer: 1,
            explain:
              "AI is best where a human cheaply verifies output and mistakes are low-stakes. Drafts are the sweet spot.",
          },
        ],
      },
    ],
  },
  {
    id: "u2",
    title: "How Models Get Smart",
    emoji: "🏋️",
    color: "#ff9e64",
    tagline: "From random noise to genius intern",
    lessons: [
      {
        id: "u2l1",
        title: "Pretraining",
        emoji: "🌍",
        cards: [
          {
            title: "Step 1: read (almost) everything",
            emoji: "📖",
            hook: "Pretraining is the massive first phase: the model reads huge amounts of text and learns to predict the next token. This builds its raw knowledge and language skill.",
            analogy:
              "Like a kid who reads the whole library — no goals yet, just absorbing everything.",
            example:
              "Months of training on thousands of specialized chips, costing tens of millions of dollars.",
            pm: "Only a handful of companies can afford pretraining — that's why most AI products BUILD ON existing models.",
          },
          {
            title: "The base model is weird",
            emoji: "🥴",
            hook: "After pretraining you get a 'base model' — great at continuing text, terrible at being helpful. Ask it a question and it might respond with three more questions.",
            analogy:
              "A parrot that read the whole internet: brilliant mimicry, zero sense of what you actually want.",
            example:
              "Prompt a base model with 'What's the capital of France?' and it might continue: 'What's the capital of Spain? What's the capital of...' — it's just extending patterns.",
            pm: "Key insight: raw intelligence isn't a product. The 'assistant' behavior is added later, on purpose.",
          },
          {
            title: "Scale is the secret sauce",
            emoji: "📈",
            hook: "The wild discovery of the last decade: make the model bigger + feed it more data + use more compute, and it predictably gets smarter. These are called scaling laws.",
            analogy:
              "Like a recipe that reliably improves as you use a bigger oven and more ingredients — surprisingly, it just keeps working.",
            example:
              "GPT-2 (2019) wrote decent paragraphs. GPT-4 (2023) passed the bar exam. Mostly: scale.",
            pm: "Explains the industry: the race for chips (NVIDIA), giant data centers, and billion-dollar training runs.",
          },
          {
            title: "Data is the battleground",
            emoji: "⚔️",
            hook: "Models are only as good as what they read. Companies now fight over high-quality data: licensing news archives, using synthetic data, and filtering out junk.",
            analogy:
              "An athlete's diet: train on junk food, perform like junk. Elite performance needs elite fuel.",
            example:
              "OpenAI licenses content from publishers; labs generate 'synthetic' practice data with AI to train the next AI.",
            pm: "Data strategy is a product moat. 'What unique data do we have?' is a classic AI PM question.",
          },
        ],
        quiz: [
          {
            q: "What does pretraining teach a model?",
            choices: [
              "To follow instructions politely",
              "Raw language skill and knowledge via next-token prediction on huge text",
              "To browse the web",
            ],
            answer: 1,
            explain:
              "Pretraining builds raw capability by reading massive text. Politeness and helpfulness come later.",
          },
          {
            q: "Why don't most companies train their own LLM from scratch?",
            choices: [
              "It's illegal",
              "It costs tens of millions and needs rare talent and chips",
              "Existing models can't be built on",
            ],
            answer: 1,
            explain:
              "Pretraining is brutally expensive. Most products rent frontier models through an API instead.",
          },
          {
            q: "'Scaling laws' say...",
            choices: [
              "Bigger model + more data + more compute = predictably smarter",
              "Models stop improving after 1 billion parameters",
              "Smaller models are always better",
            ],
            answer: 0,
            explain:
              "The reliable recipe of the AI era — and the reason for the chip and data-center gold rush.",
          },
        ],
      },
      {
        id: "u2l2",
        title: "Fine-tuning & RLHF",
        emoji: "🎓",
        cards: [
          {
            title: "Step 2: finishing school",
            emoji: "🏫",
            hook: "Fine-tuning takes the weird base model and trains it on examples of great question-answer conversations, teaching it to actually be a helpful assistant.",
            analogy:
              "The brilliant-but-awkward genius goes to finishing school and learns how to hold a conversation.",
            example:
              "Thousands of example dialogues written by humans show it: when asked a question, give a helpful answer.",
            pm: "This is why ChatGPT (2022) exploded when GPT-3 (2020) didn't — same brains, new manners.",
          },
          {
            title: "RLHF: humans vote on answers",
            emoji: "🗳️",
            hook: "Reinforcement Learning from Human Feedback: humans compare pairs of model answers and pick the better one. The model learns to produce answers people prefer.",
            analogy:
              "A comedian testing jokes on live audiences night after night, keeping what lands and cutting what bombs.",
            example:
              "Human raters see two answers to the same question, choose the better one — repeated millions of times.",
            pm: "RLHF is why models feel polite and helpful. It's also where their 'personality' gets shaped.",
          },
          {
            title: "Alignment: doing what we mean",
            emoji: "🧭",
            hook: "Alignment is the effort to make AI helpful, honest, and harmless — following human intent, refusing harmful requests, and not deceiving users.",
            analogy:
              "Training a brilliant new hire on company values, not just job skills.",
            example:
              "Anthropic trains Claude against a written constitution of principles — literally called Constitutional AI.",
            pm: "Alignment is THE word in AI safety conversations — labs like Anthropic build their whole mission around it.",
          },
          {
            title: "The helpful-harmless tension",
            emoji: "⚖️",
            hook: "Make a model too cautious and it refuses harmless requests (annoying). Too eager and it helps with harmful ones (dangerous). Tuning this balance is a core product decision.",
            analogy:
              "A bouncer: too strict turns away regulars; too lax lets in troublemakers. You tune for the venue.",
            example:
              "Early models refused to 'kill a Python process' — over-caution misreading tech slang for violence.",
            pm: "A sharp PM take: refusal behavior IS product design — safety and UX in constant negotiation.",
          },
        ],
        quiz: [
          {
            q: "What does RLHF do?",
            choices: [
              "Teaches the model new facts about the world",
              "Uses human preferences between answers to make the model more helpful",
              "Speeds up the model's responses",
            ],
            answer: 1,
            explain:
              "Humans vote between answer pairs; the model learns to produce what people prefer. Manners, not facts.",
          },
          {
            q: "'Alignment' means...",
            choices: [
              "Making the AI helpful, honest, and harmless — following human intent",
              "Centering text on the screen",
              "Making all models give identical answers",
            ],
            answer: 0,
            explain:
              "Alignment = AI that does what we actually mean, safely. Anthropic's entire mission centers on this.",
          },
          {
            q: "Why did ChatGPT succeed where the earlier GPT-3 didn't catch on?",
            choices: [
              "It had 100x more parameters",
              "Fine-tuning + RLHF made it conversational and helpful",
              "It was the first model to use the internet",
            ],
            answer: 1,
            explain:
              "Similar raw brains — but the assistant training (fine-tuning + RLHF) made it usable by everyone.",
          },
        ],
      },
      {
        id: "u2l3",
        title: "Picking a model",
        emoji: "🛒",
        cards: [
          {
            title: "Frontier vs. small models",
            emoji: "🏔️",
            hook: "Frontier models (GPT-5, Claude, Gemini) are the smartest and priciest. Small models are dumber but fast and cheap. Most products mix both.",
            analogy:
              "Senior surgeon vs. capable nurse: you don't book the surgeon to take blood pressure.",
            example:
              "A support bot might use a small model to sort tickets, and a frontier model only for the hard conversations.",
            pm: "'Which model and why?' comes up in every AI product discussion. Answer: match the model to the task's value.",
          },
          {
            title: "Open vs. closed models",
            emoji: "🔓",
            hook: "Closed models (OpenAI, Anthropic) are rented via API — best quality, less control. Open-weight models (Llama, Mistral) can run on your own servers — more control, more work.",
            analogy:
              "Renting a serviced office vs. buying a building: convenience vs. control.",
            example:
              "A hospital might run an open model on its own servers so patient data never leaves the building.",
            pm: "Know the trade-off cold: privacy/control/cost-at-scale vs. quality/speed-to-market.",
          },
          {
            title: "The quality-cost-speed triangle",
            emoji: "📐",
            hook: "Every model choice trades off quality, cost, and latency (speed). Smarter usually means slower and pricier. Pick per feature, not per company.",
            analogy:
              "Shipping: fast, cheap, or careful — pick two.",
            example:
              "Autocomplete needs answers in ~100ms (small model). A legal-summary feature can take 10 seconds (frontier model).",
            pm: "Strong PM answer format: 'For THIS feature, users need X, so I'd trade Y for Z.'",
          },
          {
            title: "Reasoning models",
            emoji: "🧩",
            hook: "Newer models can 'think' before answering — generating hidden reasoning steps. Slower and pricier, but much better at math, code, and multi-step problems.",
            analogy:
              "Answering instantly vs. asking for a moment with scratch paper. The pause improves hard answers.",
            example:
              "OpenAI's o-series and Claude's extended thinking chew on a problem for seconds-to-minutes before replying.",
            pm: "New lever in the triangle: spend more 'thinking time' for better answers. When is that worth it? A great product debate.",
          },
        ],
        quiz: [
          {
            q: "Your feature needs instant responses for a simple task. Which model?",
            choices: [
              "The biggest frontier model — always use the best",
              "A small, fast, cheap model that's good enough",
              "No model — AI can't do simple tasks",
            ],
            answer: 1,
            explain:
              "Match the model to the job. Simple + speed-critical = small model. Save frontier models for hard, high-value tasks.",
          },
          {
            q: "Why might a hospital pick an open-weight model?",
            choices: [
              "Open models are always smarter",
              "To run it on their own servers so sensitive data never leaves",
              "Because it's required by law",
            ],
            answer: 1,
            explain:
              "Self-hosting gives control and privacy — often decisive in healthcare, finance, and government.",
          },
          {
            q: "What makes 'reasoning models' different?",
            choices: [
              "They think through hidden steps before answering — better at hard problems, but slower",
              "They're just regular models with a new name",
              "They only work for math",
            ],
            answer: 0,
            explain:
              "They trade time and cost for quality on multi-step problems — a new dial for PMs to reason about.",
          },
        ],
      },
      {
        id: "u2l4",
        title: "Beyond text",
        emoji: "🎨",
        cards: [
          {
            title: "Multimodal: eyes and ears",
            emoji: "👁️",
            hook: "Modern models handle more than text — they can see images, hear audio, and generate pictures and voice. 'Multimodal' just means multiple types of input/output.",
            analogy:
              "The intern learned to read; now they can also look at charts, listen to calls, and sketch diagrams.",
            example:
              "Snap a photo of your fridge and ask 'what can I cook?' — the model reads the image like text.",
            pm: "Each new modality unlocks product categories: visual search, voice agents, video understanding.",
          },
          {
            title: "Voice changes everything",
            emoji: "🎤",
            hook: "Real-time voice models can hold natural spoken conversations with interruptions and emotion. This turns AI from a typing tool into something you talk to.",
            analogy:
              "The difference between texting a friend and calling them — same brain, way more natural.",
            example:
              "ChatGPT's voice mode and AI customer-service phone agents that sound eerily human.",
            pm: "Voice UX has brutal latency requirements — pauses over ~500ms feel broken. Great example of AI constraints shaping product.",
          },
          {
            title: "Where the puck is going",
            emoji: "🏒",
            hook: "The direction: longer memory, more autonomy (agents), deeper personalization, and models that use computers like humans do — clicking, typing, browsing.",
            analogy:
              "From a smart encyclopedia → to a coworker who remembers you, uses your tools, and finishes tasks alone.",
            example:
              "Claude and other models can already operate a computer: open tabs, fill forms, complete workflows.",
            pm: "Forward thinking is a PM superpower: 'Here's what today's models can't do, and how I'd design for what's next.'",
          },
          {
            title: "The capability overhang",
            emoji: "🌊",
            hook: "Today's models can already do far more than today's products expose. The bottleneck isn't intelligence — it's product design, trust, and distribution.",
            analogy:
              "We have jet engines, but most products are still strapping them onto bicycles.",
            example:
              "Models could summarize every meeting you attend — but which products actually make that seamless and trustworthy?",
            pm: "This is the PM's whole job in AI: the gap between what models CAN do and what products LET them do is your opportunity.",
          },
        ],
        quiz: [
          {
            q: "'Multimodal' means...",
            choices: [
              "The model handles multiple types of input/output: text, images, audio",
              "The model has multiple personalities",
              "The app works on multiple phones",
            ],
            answer: 0,
            explain:
              "Multi-modal = multiple modes: seeing images, hearing audio, generating voice — not just text.",
          },
          {
            q: "Why is latency such a big deal for voice AI?",
            choices: [
              "Voice files are large to download",
              "Pauses over about half a second make conversation feel broken",
              "It isn't — users don't notice delays",
            ],
            answer: 1,
            explain:
              "Human conversation has tight timing. Slow responses destroy the magic — a real constraint PMs design around.",
          },
          {
            q: "What is the 'capability overhang'?",
            choices: [
              "Models can do more than current products expose — product design is the bottleneck",
              "Models are running out of capabilities",
              "A type of server error",
            ],
            answer: 0,
            explain:
              "The gap between model ability and product reality — which is exactly where AI PMs create value.",
          },
        ],
      },
    ],
  },
  {
    id: "u3",
    title: "AI Engineering Toolkit",
    emoji: "🛠️",
    color: "#7de0ff",
    tagline: "Build smart products without training a model",
    lessons: [
      {
        id: "u3l1",
        title: "Prompt engineering",
        emoji: "🪄",
        cards: [
          {
            title: "Prompting is a real skill",
            emoji: "🎯",
            hook: "Prompt engineering is writing instructions that reliably get great output. Clear role, clear task, clear format, and rules for edge cases.",
            analogy:
              "Writing a great creative brief: the clearer the brief, the better the freelancer's work.",
            example:
              "'You are a friendly support agent. Answer in under 100 words. If unsure, say so and offer to connect a human.'",
            pm: "PMs write and review prompts constantly. It's the cheapest, fastest lever to improve an AI feature.",
          },
          {
            title: "Few-shot: show, don't tell",
            emoji: "🎬",
            hook: "Including 2–3 examples of ideal input → output in your prompt massively improves consistency. The GPT-3 paper showed this as in-context learning: the model picks up the pattern from the prompt WITHOUT changing its saved weights.",
            analogy:
              "Training a new barista: instead of describing latte art, you make three and say 'like this.'",
            example:
              "Show 3 examples of perfectly-formatted meeting summaries, and the model copies the format for every future summary.",
            pm: "Few-shot examples are often the difference between a demo and a shippable feature.",
          },
          {
            title: "Chain of thought",
            emoji: "🪜",
            hook: "Asking the model to 'think step by step' before answering improves accuracy on hard problems. Karpathy's reason: the model cannot do a lot of thinking on any ONE token. Extra tokens = extra time to work. On a GSM8K-style math set, a naive prompt sat at 17%; 'let's think step by step' jumped to ~79%; adding 'to be sure we have the right answer' hit ~82%.",
            analogy:
              "Math class rule: show your work. Students who show work make fewer mistakes — they get more paper, not a bigger brain in one second.",
            example:
              "Juggler puzzle: 16 balls, half golf balls, half of those blue. A blunt prompt answers 8 (wrong). Step-by-step: 16 → 8 golf → 4 blue.",
            pm: "This idea grew into reasoning models that spend tokens on a hidden scratchpad. Prompting history is model-strategy fluency.",
          },
          {
            title: "Iterate like a scientist",
            emoji: "🧪",
            hook: "Nobody writes the perfect prompt first try. Real teams test prompts against many example inputs, find failures, tweak, and re-test.",
            analogy:
              "Like A/B testing landing pages — but for instructions to your AI.",
            example:
              "Change one line of a support-bot prompt, re-run 200 saved test conversations, compare quality scores.",
            pm: "This discipline is called evals (coming next lesson) — the AI PM's #1 quality tool.",
          },
        ],
        quiz: [
          {
            q: "What's 'few-shot prompting'?",
            choices: [
              "Asking the same question a few times",
              "Including example input→output pairs so the model imitates the pattern",
              "Using very short prompts",
            ],
            answer: 1,
            explain:
              "Show, don't tell: 2–3 great examples in the prompt dramatically improve consistency.",
          },
          {
            q: "Why does 'think step by step' improve answers?",
            choices: [
              "It makes the model type slower",
              "The model works through the problem instead of blurting the first plausible answer",
              "It doesn't — it's a myth",
            ],
            answer: 1,
            explain:
              "Chain-of-thought = more tokens to work. Karpathy: the model can't think very hard per token, so you give it a trail of tokens.",
          },
          {
            q: "How do serious teams improve prompts?",
            choices: [
              "Test against many saved examples, find failures, tweak, re-test",
              "Write once and never touch it",
              "Make the prompt as long as possible",
            ],
            answer: 0,
            explain:
              "Prompt iteration is empirical, like A/B testing. Gut feel doesn't scale; evals do.",
          },
        ],
      },
      {
        id: "u3l2",
        title: "RAG: open-book exams",
        emoji: "📖",
        cards: [
          {
            title: "RAG in one sentence",
            emoji: "🔍",
            hook: "Retrieval-Augmented Generation: before answering, the system SEARCHES your documents for relevant info and hands it to the model to answer from.",
            analogy:
              "Turning a closed-book exam into an open-book exam. The student is the same; the answers get way more accurate.",
            example:
              "Ask 'what's our refund policy?' → system finds the policy doc → model answers using that exact text.",
            pm: "RAG is how you make AI know YOUR company's stuff without retraining anything. Most enterprise AI = RAG.",
          },
          {
            title: "Embeddings: meaning as numbers",
            emoji: "🗺️",
            hook: "Embeddings convert text into lists of numbers where similar meanings land close together. This lets you search by MEANING, not keywords.",
            analogy:
              "A map where 'refund', 'money back', and 'return policy' are neighbors — even though they share no words.",
            example:
              "A user asks 'can I get my money back?' and the system finds the refund policy — no keyword match needed.",
            pm: "Embeddings power semantic search, recommendations, and duplicate detection. Huge, quiet workhorse of AI products.",
          },
          {
            title: "Vector database",
            emoji: "🗄️",
            hook: "A special database that stores embeddings and finds 'nearest neighbors' fast. It's the filing cabinet that makes RAG search instant.",
            analogy:
              "A magical library where books about similar topics physically sit next to each other, whatever their titles.",
            example:
              "Pinecone, Weaviate, pgvector — you'll hear these names. They all do 'find me the most similar chunks.'",
            pm: "You don't need to configure one — just know: docs get chunked, embedded, stored, and retrieved at question time.",
          },
          {
            title: "RAG vs. fine-tuning",
            emoji: "🥊",
            hook: "Need the model to KNOW your data? Use RAG (fresh, cheap, auditable). Need it to BEHAVE differently — style, format, domain manner? Consider fine-tuning. Most teams start with prompts + RAG.",
            analogy:
              "RAG hands the intern the right binder. Fine-tuning sends them to a training seminar. Different problems.",
            example:
              "Company knowledge changes daily → RAG (update docs, done). Medical-report writing style → maybe fine-tune.",
            pm: "Classic PM decision: 'RAG or fine-tune?' Answer: knowledge → RAG; behavior → fine-tune; start simple.",
          },
        ],
        quiz: [
          {
            q: "What does RAG do?",
            choices: [
              "Retrains the model on your documents every night",
              "Searches your documents and gives the model relevant text to answer from",
              "Makes the model respond faster",
            ],
            answer: 1,
            explain:
              "RAG = open-book exam. Retrieve relevant docs, then generate the answer from them.",
          },
          {
            q: "Embeddings let you search by...",
            choices: ["Exact keywords only", "Meaning — similar ideas land close together", "Date"],
            answer: 1,
            explain:
              "Text becomes numbers where similar meaning = nearby points. 'Money back' finds 'refund policy.'",
          },
          {
            q: "Your company's docs change every week. Teach the AI about them via...",
            choices: [
              "RAG — retrieval stays fresh as docs update",
              "Retraining the whole model weekly",
              "Asking users to paste docs manually every time",
            ],
            answer: 0,
            explain:
              "RAG wins for changing knowledge: update the documents and answers update instantly. Retraining is slow and expensive.",
          },
        ],
      },
      {
        id: "u3l3",
        title: "Evals: measuring quality",
        emoji: "📊",
        cards: [
          {
            title: "Evals = tests for AI",
            emoji: "✅",
            hook: "Evals are systematic tests of AI quality: a set of example inputs with expected good outputs, scored automatically or by humans. They tell you if your AI is actually good.",
            analogy:
              "Unit tests for software, but for 'is this answer good?' instead of 'does this code run?'",
            example:
              "500 real customer questions + ideal answers. Every prompt or model change gets scored against them before shipping.",
            pm: "Remember this line: 'Evals are the PRD of AI products — they define what good means.' PMs often own them.",
          },
          {
            title: "Why vibes don't scale",
            emoji: "🌫️",
            hook: "Trying 5 questions and feeling good ('vibe checking') misses rare failures. Real quality needs hundreds of test cases covering edge cases and typical use.",
            analogy:
              "Taste-testing one spoonful from one pot, then claiming the whole restaurant chain's food is great.",
            example:
              "A bot aces 10 demo questions but fails on typos, anger, or non-English — evals catch this before users do.",
            pm: "The most common AI product failure: shipping on vibes. Bringing eval discipline is how a PM adds instant value.",
          },
          {
            title: "LLM-as-judge",
            emoji: "⚖️",
            hook: "You can use a strong model to GRADE another model's answers against a rubric. Not perfect, but it makes evaluating thousands of outputs cheap and fast.",
            analogy:
              "A head chef tasting every dish before it leaves the kitchen — automated.",
            example:
              "Claude scores 1,000 support-bot replies for accuracy, tone, and policy compliance in minutes.",
            pm: "Mention spot-checking the judge with humans — knowing its limits makes you sound experienced, not just buzzwordy.",
          },
          {
            title: "Quality in production",
            emoji: "📡",
            hook: "After launch, you keep measuring: thumbs up/down, edit rates, task completion, escalations to humans. Live feedback becomes new eval cases.",
            analogy:
              "A restaurant watching which dishes come back half-eaten — real behavior beats survey answers.",
            example:
              "If users rewrite 40% of AI-drafted emails, your 'time saved' story is broken — the edit rate exposed it.",
            pm: "Pro move: name concrete AI metrics — acceptance rate, edit distance, deflection rate, thumbs-up ratio.",
          },
        ],
        quiz: [
          {
            q: "What are evals?",
            choices: [
              "Systematic test sets that measure AI answer quality",
              "User interviews",
              "The model's internal settings",
            ],
            answer: 0,
            explain:
              "Evals = test cases + scoring. They turn 'seems good' into measurable quality.",
          },
          {
            q: "What's wrong with 'vibe checking' quality?",
            choices: [
              "It takes too long",
              "A handful of tries misses rare failures and edge cases",
              "Nothing — it's industry standard",
            ],
            answer: 1,
            explain:
              "Small samples hide the typos, anger, and edge cases where AI breaks. Hundreds of cases > five demos.",
          },
          {
            q: "'LLM-as-judge' means...",
            choices: [
              "A model grades another model's answers against a rubric",
              "AI testifying in court",
              "The model that decides which users to ban",
            ],
            answer: 0,
            explain:
              "Using a strong model to score outputs at scale — cheap, fast, and good enough with human spot-checks.",
          },
        ],
      },
      {
        id: "u3l4",
        title: "Cost, speed & scale",
        emoji: "💸",
        cards: [
          {
            title: "Tokens are money",
            emoji: "🪙",
            hook: "APIs charge per token, in and out. Long prompts, long answers, and chatty features multiply costs fast at scale.",
            analogy:
              "An international call billed by the second — a rambling caller costs real money.",
            example:
              "1M users × 10 messages/day × a few cents each = a burn rate that can quietly eat your margins.",
            pm: "Know your feature's cost per user action. 'This feature costs $0.03 per use and saves 5 minutes' is a winning sentence.",
          },
          {
            title: "Latency is UX",
            emoji: "⏱️",
            hook: "Model responses take seconds. Products hide this with streaming (words appear as they're generated), progress states, and doing work before the user asks.",
            analogy:
              "A good restaurant brings bread while you wait — perceived speed matters as much as actual speed.",
            example:
              "ChatGPT streams word-by-word. Waiting 8 seconds for a blank screen would feel broken; streaming feels alive.",
            pm: "Streaming, skeleton states, and precomputation are AI-era UX patterns every PM should name-drop.",
          },
          {
            title: "Caching & routing",
            emoji: "🚦",
            hook: "Two big cost levers: cache repeated stuff (don't pay twice for the same context), and route easy queries to cheap models, hard ones to frontier models.",
            analogy:
              "A hospital triage desk: sniffles go to the nurse, chest pain goes to the cardiologist.",
            example:
              "'What time do you open?' → tiny model or canned answer. 'Dispute this charge across 3 accounts' → frontier model.",
            pm: "Model routing can cut costs 10x with little quality loss on easy traffic — a very PM-flavored optimization.",
          },
          {
            title: "Build vs. buy",
            emoji: "🏗️",
            hook: "Rent frontier models via API (fast, best quality, ongoing cost) or self-host open models (control, privacy, more engineering). Most startups rent; some scale-ups mix.",
            analogy:
              "Taxis vs. buying a car: depends how often you ride, where you go, and what you're carrying.",
            example:
              "A startup validates with the best API model, then moves its high-volume simple tasks to a cheaper self-hosted model.",
            pm: "Frame it by stage: pre-product-market-fit → rent the best. At scale → optimize the cost curve.",
          },
        ],
        quiz: [
          {
            q: "Why do AI features have real per-use costs?",
            choices: [
              "Electricity for the user's phone",
              "APIs charge per token for every prompt and response",
              "They don't — AI is free after building",
            ],
            answer: 1,
            explain:
              "Every message costs tokens in and out. At millions of users, cents per action become serious money.",
          },
          {
            q: "Why do AI apps stream answers word-by-word?",
            choices: [
              "It looks futuristic",
              "It hides multi-second generation time — users see progress instantly",
              "The models can only type slowly",
            ],
            answer: 1,
            explain:
              "Streaming turns dead waiting time into visible progress. Perceived speed is a design choice.",
          },
          {
            q: "'Model routing' means...",
            choices: [
              "Sending easy queries to cheap models and hard ones to frontier models",
              "Choosing which country's servers to use",
              "Randomly picking a model each time",
            ],
            answer: 0,
            explain:
              "Triage for AI: match query difficulty to model cost. Can slash spend with little quality loss.",
          },
        ],
      },
    ],
  },
];
