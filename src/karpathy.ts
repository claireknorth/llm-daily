import type { Unit } from "./types";

// The ideas from Andrej Karpathy's most-watched LLM talks, in plain English.
// Software 1.0/2.0/3.0, the data engine, English-as-code, attention, transformers.

export const karpathyUnit: Unit = {
  id: "uk",
  title: "Karpathy's Map",
  emoji: "🗺️",
  color: "#ffb347",
  tagline: "The ideas from the talk people say you have to watch",
  lessons: [
    {
      id: "ukl1",
      title: "Software 1.0, 2.0, 3.0",
      emoji: "📚",
      cards: [
        {
          title: "Software 1.0: you write the recipe",
          emoji: "✍️",
          hook: "For ~70 years, programming meant spelling out instructions: if this, do that. Linux, Excel, your banking app — a human designed the algorithm and typed the code.",
          analogy:
            "Handing a cook a recipe with every step. The cook does exactly what you wrote, nothing more.",
          example:
            "A sorting function, a checkout flow, a password check — you can write the rules. Karpathy's point: this got us incredibly far, then hit a wall.",
          pm: "When a PM says 'just write some logic for it,' that's 1.0 thinking. It still wins whenever the rules are knowable and must be exact.",
        },
        {
          title: "The wall: you can't write 'cat'",
          emoji: "🐱",
          hook: "Some jobs refuse to be written as instructions. Recognizing a cat in a photo, playing championship chess, driving a car, building AGI — the world has too many shapes. There is no recipe you can type.",
          analogy:
            "Try writing steps for 'find the cat.' Cats sit, jump, hide, come in 50 colors. Your recipe will always miss a pose.",
          example:
            "Early computer vision papers were a zoo of hand-built features (SIFT, color histograms) plus an SVM. It barely worked. Today you'd assume there was a bug.",
          pm: "Use this test: if a smart intern couldn't follow a written SOP to do the job reliably, you probably need 2.0 or 3.0, not more if-then rules.",
        },
        {
          title: "Software 2.0: you write the data",
          emoji: "🏋️",
          hook: "Neural networks aren't just another classifier. They're a new programming stack. You don't write the program — you gather a dataset. Training COMPILES that data into weights (the 'binary'). You could never write those billions of numbers by hand.",
          analogy:
            "Instead of a recipe, you show the cook 10 million plated dishes and say 'make food like this.' The skill gets baked into their hands.",
          example:
            "Tesla Autopilot's 'there's a car / a light / a lane' predictions aren't a 1.0 algorithm. They're a neural net compiled from labeled driving data.",
          pm: "In 2.0, your leverage is the dataset and the loop around it, not the source code. That's a different product job.",
        },
        {
          title: "Software 3.0: you write English",
          emoji: "🗣️",
          hook: "Karpathy's punchline: a big enough language model is a general-purpose computer you reprogram at runtime with a prompt. Software 3.0 = you design the prompt. The model 'runs' the program by completing the text. The hottest new programming language is English. 1.0, 2.0, and 3.0 stack — they don't replace each other.",
          analogy:
            "1.0 is writing the app. 2.0 is training the intern for years. 3.0 is briefing a brilliant intern in the room, in English, right now.",
          example:
            "Bing's Sydney chatbot was (allegedly) 'programmed' with a document in English: who Sydney is, how to greet, what to refuse. No new model training required.",
          pm: "Most AI features you'll ship are 3.0 sitting on someone else's 2.0 (the frontier model), glued together with 1.0 code. Knowing which layer you're working in keeps scope honest.",
        },
      ],
      quiz: [
        {
          q: "In Karpathy's map, how do you 'program' software 2.0?",
          choices: [
            "By writing C++ algorithms by hand",
            "By iterating a dataset; training compiles it into neural net weights",
            "By writing a clever English prompt",
          ],
          answer: 1,
          explain:
            "2.0 = data in, training (the compiler), weights out (the binary). You can't write the weights by hand.",
        },
        {
          q: "Software 3.0 means...",
          choices: [
            "A faster programming language than Python",
            "You condition a large language model with a prompt — English is the program",
            "Deleting all existing code",
          ],
          answer: 1,
          explain:
            "3.0: the model is a general-purpose computer. The prompt is the program. Completion is execution.",
        },
        {
          q: "Do 2.0 and 3.0 replace 1.0 code?",
          choices: [
            "Yes — neural nets made ordinary code obsolete",
            "No — they layer. You still need lots of 1.0 code to train, serve, and constrain the model",
            "Only on mobile",
          ],
          answer: 1,
          explain:
            "Karpathy: 2.0 sits on 1.0. Training, APIs, guardrails, UIs — still written as normal software.",
        },
      ],
    },
    {
      id: "ukl2",
      title: "The data engine",
      emoji: "🔄",
      cards: [
        {
          title: "How Tesla actually 'programs' a net",
          emoji: "🚗",
          hook: "Karpathy spent ~5 years on Autopilot running one loop: train on a dataset → deploy to cars → watch where the net fails → collect those hard cases → humans label them → some go to a test set, some back into training → train again. He calls that the data engine.",
          analogy:
            "A restaurant that tastes every dish that comes back uneaten, adds that recipe to the training menu, and cooks again tomorrow.",
          example:
            "The net misses a weird construction-zone cone at dusk. That clip is labeled and fed back so the next model doesn't miss it.",
          pm: "This is the real 2.0 roadmap: not 'train a model once,' but own the loop of failures → labels → tests → retrain.",
        },
        {
          title: "The program IS the dataset",
          emoji: "📦",
          hook: "In 2.0, changing behavior means changing examples, not rewriting functions. Coverage, balance, and labels are the source code. Garbage in, garbage compiled into the weights.",
          analogy:
            "If your textbook only has even-numbered problems, the student never learns odds. The curriculum is the program.",
          example:
            "A support-bot fine-tune that's 90% polite emails and 10% angry ones will freeze on rage. You don't 'fix a function' — you add angry examples.",
          pm: "Ask 'what's in the set?' the way you'd ask 'what's in the spec?' Unique labeled data is often the moat.",
        },
        {
          title: "Test set vs. training set",
          emoji: "🧪",
          hook: "Hard cases split two ways: training (teach the net) and test (grade it fairly). If a clip is in both, you're cheating — the net memorized the exam.",
          analogy:
            "Practice quizzes vs. the final. If the final is the practice quiz, a 100% doesn't mean they learned.",
          example:
            "Autopilot keeps a held-out set of scary clips. New models must beat the old ones on that set before they ship.",
          pm: "Same instinct as evals for LLMs: a frozen test set is how you know you improved, not just overfit.",
        },
        {
          title: "When 2.0 is the wrong hammer",
          emoji: "🪜",
          hook: "The data engine is expensive: labeling, cars in the wild, months of iteration. If you can write a rule or a prompt, start there. Climb to 2.0 when the world is too messy for English or if-thens and you have (or can get) the data.",
          analogy:
            "Don't open a cooking school to make toast. Use the toaster. Open the school when you need a chef.",
          example:
            "'Block charges over $10k from new accounts' is a rule. 'Detect a pedestrian in rain at night' is a data engine. 'Draft a refund email' is a prompt.",
          pm: "Karpathy's stack is a product-scoping tool: 1.0 / 2.0 / 3.0. Pick the cheapest layer that actually solves it.",
        },
      ],
      quiz: [
        {
          q: "What is a 'data engine'?",
          choices: [
            "A faster GPU",
            "The loop: train, deploy, find failures, label them, add to train/test, retrain",
            "A database of Wikipedia",
          ],
          answer: 1,
          explain:
            "That's how Karpathy says you program software 2.0 — by iterating the dataset from live failures.",
        },
        {
          q: "Why keep a separate test set of hard examples?",
          choices: [
            "So the model can study them extra",
            "To grade new models fairly — if the exam is in the textbook, scores lie",
            "Regulators require two copies of everything",
          ],
          answer: 1,
          explain:
            "Training data teaches. Held-out tests measure. Mixing them is studying the answer key.",
        },
        {
          q: "A product needs 'flag angry emails.' You have almost no labeled anger. Best first move?",
          choices: [
            "Immediately start a Tesla-style data engine",
            "Try 3.0 (prompt + a frontier model) or a simple 1.0 heuristic, and only invest in 2.0 if that fails",
            "Give up",
          ],
          answer: 1,
          explain:
            "Data engines are costly. Prompting or rules first; 2.0 when those can't capture the mess and you can fund labels.",
        },
      ],
    },
    {
      id: "ukl3",
      title: "English is the new code",
      emoji: "💻",
      cards: [
        {
          title: "A GPT is a computer. The prompt is the program.",
          emoji: "🖥️",
          hook: "Older neural nets were special-purpose: trained for one job. A GPT is a general-purpose computer you reconfigure at runtime. You write the program in English (the prompt). The model runs it by predicting the next token until the 'program' has executed.",
          analogy:
            "Not a toaster (one job). A laptop you can load a new app onto by describing the app in a paragraph.",
          example:
            "Same model: poem, JSON for a smart home, fake Linux terminal, or a to-do backend — the prompt is what changed, not the weights.",
          pm: "This is why 'which model?' is only half the spec. The other half is the program you'll make it run.",
        },
        {
          title: "It imitates the AVERAGE of the internet",
          emoji: "📉",
          hook: "Ask 'why does it rain?' and you get the average of every explanation online — mixed IQ, mixed quality. Karpathy's move: condition the model on the SLICE you want. 'Explain like a physicist' beats the default, because you're no longer asking for the mean of the web.",
          analogy:
            "A karaoke machine that sings the average of every singer unless you say 'do this like Adele.'",
          example:
            "The famous juggler math problem: a naive prompt answers '8' (wrong). 'Let's think step by step' jumped accuracy from 17% to ~79%. Adding 'to be sure we have the right answer' hit ~82%. The model can't think very hard on a SINGLE token, so you give it more tokens to show its work.",
          pm: "Default ChatGPT is 'average internet.' Product quality is how well you aim it: role, examples, steps, format.",
        },
        {
          title: "The model is a simulator",
          emoji: "🎭",
          hook: "Describe a universe in the prompt and the model stays in character inside it. People have made ChatGPT act as a Linux machine: pwd, ls, even 'running' Python — all imaginary, all in the weights. It can also emit JSON a real house then executes.",
          analogy:
            "Improv: you set the scene ('you're a Linux terminal, output only what the terminal would print') and it never breaks character.",
          example:
            "A hackathon winner built an app backend with NO Python routes — just an LLM that takes JSON state + an English request ('delete last two todos') and returns new JSON. The 'code' was English.",
          pm: "Powerful and dangerous: the model will simulate a file system, a ping, a citation. Simulation ≠ a real computer or a real source. Ground anything that must be true.",
        },
        {
          title: "Personality is a text file",
          emoji: "📄",
          hook: "Microsoft's Bing 'Sydney' (allegedly) was a long English doc: who you are, how you introduce yourself, output format, safety refusals. That's software 3.0. Prompt engineer became a real job because these programs are now load-bearing.",
          analogy:
            "Casting a play: the script IS the performance. Change a paragraph, you change the character.",
          example:
            "'You are a banking assistant. Never give investment advice. Answer in under 100 words.' That paragraph is as much the product as the UI.",
          pm: "Treat system prompts like production code: version them, eval them, red-team them. They're not copy in a Figma file.",
        },
      ],
      quiz: [
        {
          q: "Why does 'think step by step' help on hard questions?",
          choices: [
            "It makes the GPU hotter",
            "The model can't do much thinking on one token — extra tokens are extra time to work the problem",
            "It searches Google automatically",
          ],
          answer: 1,
          explain:
            "Karpathy: each token is a small step. Chain-of-thought buys more steps, so harder problems get solved.",
        },
        {
          q: "'The hottest new programming language is English' means...",
          choices: [
            "Python is obsolete",
            "You can program a general-purpose LLM by writing prompts instead of (or on top of) conventional code",
            "All UIs must be chat",
          ],
          answer: 1,
          explain:
            "Prompts are programs the model executes by completing text. You still wrap them in real software.",
        },
        {
          q: "ChatGPT 'runs ls' in a fake Linux session and lists files. What's true?",
          choices: [
            "It has a real computer inside it",
            "It's simulating a computer in language — convincing, not actually executing your OS",
            "Those files are on OpenAI's servers",
          ],
          answer: 1,
          explain:
            "It's a text simulator. Great for interfaces; never trust it as a source of truth without a real system behind it.",
        },
      ],
    },
    {
      id: "ukl4",
      title: "Attention: tokens talking",
      emoji: "📡",
      cards: [
        {
          title: "Two phases: talk, then think",
          emoji: "🔁",
          hook: "A transformer block does two things, over and over. COMMUNICATION: tokens pass messages (attention). COMPUTATION: each token thinks on its own (a tiny neural net called an MLP). Stack dozens of these blocks and you get GPT.",
          analogy:
            "A meeting: everyone talks and listens (attention), then each person silently updates their notes (MLP). Repeat for many rounds.",
          example:
            "On the word 'bank,' attention might pull meaning from 'river' vs 'money' elsewhere in the sentence. Then the MLP processes that mix.",
          pm: "You don't implement this — but 'the model attends to relevant context' is why long prompts and RAG chunks work or fail.",
        },
        {
          title: "Q, K, V — the three notes each token carries",
          emoji: "🔑",
          hook: "Every token publishes three vectors. Query (Q): what am I looking for? Key (K): what do I contain? Value (V): if you pick me, here's the message I'll send. Match Q against others' K (dot product → softmax so weights add to 1) → take a weighted mix of their V. That's attention.",
          analogy:
            "A party. You (query) look for 'anyone talking about refunds.' Name tags (keys) advertise topics. When you walk up, they give you their actual info (value).",
          example:
            "Decoding 'The capital of France is ___,' the blank's query matches the key for 'France,' and the value that flows in is heavily 'Paris.'",
          pm: "You won't write QKV math in a PRD. You WILL hear 'attention' in evals of why the model ignored paragraph 7 — it didn't attend to it.",
        },
        {
          title: "Many heads, many layers",
          emoji: "🐙",
          hook: "Multi-head = several attentions in parallel, each looking for a different kind of relationship (grammar vs. facts vs. quotes). Layers = the same idea stacked in series, so meaning gets richer as you go up.",
          analogy:
            "Heads = several people listening for different things at once. Layers = round 1 of the meeting, then round 2, then round 3.",
          example:
            "One head might link pronouns to names. Another might link 'not' to the verb it flips. They all write into the same token.",
          pm: "More layers/heads generally means more capability and more cost. That's the same quality-cost-speed triangle in different clothing.",
        },
        {
          title: "Don't peek at the future",
          emoji: "🙈",
          hook: "A GPT is a decoder: when predicting token 5, it may only look at tokens 1–5, never 6+. That's a causal mask — future keys are blocked (set to −infinity before softmax so their weight is 0). If it could peek, it would cheat at language modeling.",
          analogy:
            "Writing a story one word at a time with a card covering the rest of the page. You're not allowed to copy the ending.",
          example:
            "That's why ChatGPT streams left-to-right. BERT (an encoder) lets every word see every other word, which is great for 'what's the sentiment of this whole sentence?' and bad for generating the next word.",
          pm: "GPT-style models generate. BERT-style models understand a full passage. Product fit: generation vs. classification/search embeddings.",
        },
      ],
      quiz: [
        {
          q: "In attention, the Query is...",
          choices: [
            "The user's Google search",
            "What this token is looking for in the other tokens",
            "The final answer",
          ],
          answer: 1,
          explain:
            "Q = what I'm seeking. K = what I have. V = the payload I send if you pick me.",
        },
        {
          q: "Why can't a GPT look ahead while generating?",
          choices: [
            "GPUs only run left to right",
            "Causal masking: seeing the future would let it cheat instead of actually predicting",
            "Copyright law",
          ],
          answer: 1,
          explain:
            "Language models are trained to predict the next token from the past. The mask enforces that.",
        },
        {
          q: "Attention vs. the MLP inside a transformer block...",
          choices: [
            "Attention = tokens communicate; MLP = each token computes alone",
            "They're two names for the same layer",
            "MLP talks; attention thinks",
          ],
          answer: 0,
          explain:
            "Karpathy: communication phase (attention) then computation phase (MLP), stacked many times.",
        },
      ],
    },
    {
      id: "ukl5",
      title: "Why transformers won",
      emoji: "🏆",
      cards: [
        {
          title: "One architecture, copy-paste everywhere",
          emoji: "📄",
          hook: "2017's 'Attention Is All You Need' was a translation paper. Then people chopped EVERYTHING into tokens and fed the same transformer: image patches (ViT), audio slices (Whisper), game states (Decision Transformer), even protein folding (AlphaFold). Details of the data change; the engine stays.",
          analogy:
            "One Lego brick type. You still build cars, houses, and spaceships — you just snap different pieces into the same studs.",
          example:
            "Whisper: slice a spectrogram, pretend it's text, train a transformer. It became the default speech-to-text stack.",
          pm: "When someone says 'it's just a transformer,' they mean the same computer, new data. Your differentiation is data, evals, and workflow — not a secret architecture.",
        },
        {
          title: "Chop it up and throw it in",
          emoji: "✂️",
          hook: "Karpathy's practical trick (from Tesla): extra sensors used to be a nightmare to bolt onto ConvNets (where do I concatenate radar?). With a transformer, chop radar / maps / video into tokens, add a type tag, dump them in the set. Self-attention figures out who should talk to whom. Everything is a set, not a 3D grid.",
          analogy:
            "A group chat: you don't rebuild the app for each new person. You add them to the thread and let people @mention.",
          example:
            "An image becomes 16×16 patches. The model isn't even told (at first) where patches sat — it relearns spatial structure, often with a position vector added on.",
          pm: "Multimodal products follow this pattern: new input type = new tokenizer + same model family. The hard part is data and UX, not inventing a new net.",
        },
        {
          title: "In-context learning: studying during the test",
          emoji: "🧠",
          hook: "The GPT-3 paper's real headline (Karpathy would rename it): transformers can LEARN FROM EXAMPLES IN THE PROMPT without changing weights. More few-shot examples → higher accuracy. That's an inner loop of learning in the activations, while the outer loop is the original gradient-descent training.",
          analogy:
            "A student who already finished school (outer loop) can still pick up a new puzzle format from three worked examples on the exam page (inner loop).",
          example:
            "You paste three tagged support tickets and a fourth unlabeled one. The model applies the tag scheme — no fine-tune. That's in-context learning.",
          pm: "This is why few-shot prompts feel like magic and why RAG + examples often beat a small fine-tune for a v1.",
        },
        {
          title: "Why not RNNs? Shallow, wide, GPU-shaped",
          emoji: "📐",
          hook: "Old sequence models (RNNs/LSTMs) were a long thin chain: word 1, then 2, then 3. Hard to train (too many hops for gradients) and slow (can't parallelize time). Transformers are shallow and wide: every token processed in parallel, residual 'highways,' layer norms to keep numbers well-behaved. Designed to drink GPUs.",
          analogy:
            "RNNs are a single-file mountain path. Transformers are a wide highway with short on-ramps from the answer back to the input.",
          example:
            "GPT-2-scale training is feasible because attention+MLP on a whole context runs as big matrix multiplies — exactly what GPUs love.",
          pm: "Scale is a product fact: the architecture that trains biggest on current hardware wins the capability race. That's why this 2017 design is still the default.",
        },
      ],
      quiz: [
        {
          q: "What does 'in-context learning' mean?",
          choices: [
            "The model updates its saved weights from your chat",
            "It picks up a task from examples in the prompt, without a training run",
            "It opens a new browser tab",
          ],
          answer: 1,
          explain:
            "Few-shot in the prompt is learning at inference time. Fine-tuning is the outer loop that changes weights.",
        },
        {
          q: "ViT and Whisper both...",
          choices: [
            "Invented brand-new neural architectures",
            "Chop their input (image patches / audio slices) into tokens and run a transformer",
            "Only work on English",
          ],
          answer: 1,
          explain:
            "Copy-paste transformer + domain-specific tokenization. That's the 2017–now pattern.",
        },
        {
          q: "Transformers beat RNNs for large models mainly because they are...",
          choices: [
            "Written in English",
            "Shallow, wide, and parallel — so they train efficiently on GPUs",
            "Always smaller",
          ],
          answer: 1,
          explain:
            "Karpathy: expressive + optimizable + hardware-efficient. Scale needs all three.",
        },
      ],
    },
  ],
};
