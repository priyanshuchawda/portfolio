export type WritingSlug =
  | 'what-are-mcp-servers'
  | 'how-llm-orchestration-works'
  | 'gemini-vs-openai-for-developer-tools';

export interface WritingSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
}

export interface WritingPost {
  slug: WritingSlug;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  sections: WritingSection[];
}

export const writingPosts: WritingPost[] = [
  {
    slug: 'what-are-mcp-servers',
    title: 'What are MCP servers?',
    summary:
      'A practical explanation of MCP servers, what they expose, and why they matter for tool-using AI systems.',
    metaTitle: 'What are MCP servers? | Priyanshu Chawda',
    metaDescription:
      'A practical guide to MCP servers, resources, tools, prompts, and how they connect AI assistants to real developer workflows.',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-02',
    readingTime: '4 min read',
    tags: ['MCP Servers', 'AI Tools', 'Developer Automation'],
    sections: [
      {
        heading: 'The short version',
        paragraphs: [
          'An MCP server is a small service that gives an AI assistant a structured way to read context and call tools. Instead of pasting files, credentials, and instructions into a chat, the assistant can ask the server for a resource, run a named tool, or use a prepared prompt.',
          'That matters because useful AI work usually depends on live project state. A portfolio audit, repository search, calendar workflow, or database task becomes more reliable when the model gets fresh, typed access instead of a loose text dump.',
        ],
      },
      {
        heading: 'What an MCP server usually exposes',
        paragraphs: [
          'Most servers are built around three surfaces: resources, tools, and prompts. Resources are readable context such as files, documents, or records. Tools are actions with an input schema and a clear result. Prompts are reusable task templates that package intent and constraints.',
        ],
        bullets: [
          'Resources answer, "what can the assistant inspect?"',
          'Tools answer, "what can the assistant do safely?"',
          'Prompts answer, "what repeatable workflow should the assistant follow?"',
        ],
      },
      {
        heading: 'Where MCP helps in real products',
        paragraphs: [
          'MCP is most useful when the assistant needs to work across systems without turning every integration into custom chat glue. A GitHub server can expose issues and pull requests. A filesystem server can expose project files. A business system server can expose account, ticket, or deployment data.',
          'The key design decision is not how many tools a server has. The stronger question is whether each tool has a narrow contract, predictable permissions, and enough result detail for the model to make the next decision.',
        ],
      },
      {
        heading: 'A good MCP server is boring',
        paragraphs: [
          'The best servers feel like stable internal APIs. They validate inputs, return structured output, keep side effects explicit, and avoid hiding policy decisions in model prompts. That lets the assistant reason over the workflow while the server remains responsible for boundaries.',
        ],
      },
      {
        heading: 'Code example',
        paragraphs: [
          'A useful MCP tool starts with a narrow name, a typed input shape, and a result that gives the model enough context for the next step.',
        ],
        code: `const searchIssuesTool = {
  name: 'search_github_issues',
  inputSchema: {
    type: 'object',
    properties: {
      repo: { type: 'string' },
      query: { type: 'string' },
      limit: { type: 'number', maximum: 10 },
    },
    required: ['repo', 'query'],
  },
};`,
      },
      {
        heading: 'Architecture diagram',
        paragraphs: [
          'The flow I use for MCP design is intentionally small: assistant request, server validation, tool execution, structured result, then model reasoning.',
        ],
        bullets: [
          'Assistant asks for a named tool with structured arguments.',
          'MCP server validates input and checks permissions.',
          'Tool adapter calls the API, filesystem, database, or CLI.',
          'Server returns a compact result with errors and next-step context.',
        ],
      },
      {
        heading: 'Failure modes',
        paragraphs: [
          'MCP servers fail when tool descriptions are too vague, side effects are hidden, permissions are broader than the workflow needs, or errors come back as plain text that the model cannot reason about.',
        ],
      },
      {
        heading: 'What I built after learning this',
        paragraphs: [
          'I used this thinking to plan developer automation tools where the AI layer calls narrow, typed actions instead of receiving broad access to a whole machine or repository.',
        ],
      },
      {
        heading: 'References / docs read',
        paragraphs: [
          'The strongest references for this topic are the MCP specification, SDK examples, tool-calling docs, and real integration patterns from GitHub, filesystem, and browser automation servers.',
        ],
      },
    ],
  },
  {
    slug: 'how-llm-orchestration-works',
    title: 'How LLM orchestration works',
    summary:
      'A grounded look at routing, retrieval, tools, state, and verification in LLM orchestration systems.',
    metaTitle: 'How LLM orchestration works | Priyanshu Chawda',
    metaDescription:
      'Learn how LLM orchestration combines routing, retrieval, tool calls, memory, and verification to build reliable AI workflows.',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-02',
    readingTime: '5 min read',
    tags: ['LLM Orchestration', 'Agentic Systems', 'RAG'],
    sections: [
      {
        heading: 'Orchestration is the control layer',
        paragraphs: [
          'LLM orchestration is the application layer that decides which context, model, tool, and validation step should run for a task. The model generates language, but the orchestrator decides how the workflow moves from input to useful output.',
          'In a simple chatbot, orchestration may only mean adding a system prompt and streaming the answer. In a production workflow, it can include intent classification, retrieval, tool calls, retries, human approval, and structured output checks.',
        ],
      },
      {
        heading: 'Core pieces',
        paragraphs: [
          'A practical orchestration stack usually has a router, a context builder, a tool layer, state management, and an evaluator. Each piece reduces ambiguity before or after the model call.',
        ],
        bullets: [
          'Routing chooses the workflow or model based on the request.',
          'Retrieval adds relevant documents, code, or records.',
          'Tools let the model request real actions through typed interfaces.',
          'State tracks what happened so multi-step tasks remain coherent.',
          'Verification checks whether the output is complete, valid, and safe to use.',
        ],
      },
      {
        heading: 'Why prompts are not enough',
        paragraphs: [
          'Prompting is important, but it cannot replace system design. If the model receives stale data, vague tool descriptions, or no validation path, a better instruction usually only hides the weakness for a while.',
          'Reliable orchestration treats prompts as one layer. Data freshness, permissions, observability, and fallback behavior are equally important because they determine what happens when the model is uncertain or the world changes.',
        ],
      },
      {
        heading: 'What to measure',
        paragraphs: [
          'The useful metrics are task completion, groundedness, latency, cost, and recovery from failure. A workflow that answers quickly but cannot show where its facts came from is weak for developer tooling. A workflow that is accurate but too slow may be unusable in an editor or command palette.',
          'Good orchestration is visible in the edge cases: missing context, partial tool failures, invalid JSON, outdated docs, and requests that should be declined instead of guessed.',
        ],
      },
      {
        heading: 'Code example',
        paragraphs: [
          'Even a small AI feature benefits from an explicit workflow object instead of a single prompt string hidden inside a component.',
        ],
        code: `type WorkflowStep =
  | { type: 'retrieve'; source: 'docs' | 'transcript' }
  | { type: 'generate'; schema: 'flashcards' | 'summary' }
  | { type: 'validate'; checks: Array<'json' | 'grounding'> }
  | { type: 'review'; mode: 'user-approval' };`,
      },
      {
        heading: 'Architecture diagram',
        paragraphs: [
          'A reliable LLM workflow is usually input, route, retrieve, generate, validate, review, and observe.',
        ],
        bullets: [
          'Input parser turns the user request into a typed task.',
          'Router chooses the workflow and context source.',
          'Model call produces structured output.',
          'Validation checks schema, grounding, safety, and completeness.',
          'UI exposes review, retry, and fallback states.',
        ],
      },
      {
        heading: 'Failure modes',
        paragraphs: [
          'The common failures are stale context, invalid JSON, hallucinated citations, tool retries without limits, silent cost growth, and UIs that show AI output without a user-review path.',
        ],
      },
      {
        heading: 'What I built after learning this',
        paragraphs: [
          'I applied this to YouTube Flashcards by treating generation as one step inside a larger product loop: source input, structured output, editing, and future evals.',
        ],
      },
      {
        heading: 'References / docs read',
        paragraphs: [
          'Useful references include model structured-output docs, retrieval guides, prompt-eval examples, and production postmortems on latency, cost, and safety failures.',
        ],
      },
    ],
  },
  {
    slug: 'gemini-vs-openai-for-developer-tools',
    title: 'Gemini vs OpenAI for developer tools',
    summary:
      'A developer-focused comparison of Gemini and OpenAI model choices for coding tools, multimodal apps, and automation.',
    metaTitle: 'Gemini vs OpenAI for developer tools',
    metaDescription:
      'A practical comparison of Gemini and OpenAI for developer tools, covering coding, multimodal input, latency, cost, and workflow fit.',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-02',
    readingTime: '5 min read',
    tags: ['Gemini AI', 'OpenAI', 'Developer Tools'],
    sections: [
      {
        heading: 'There is no single default winner',
        paragraphs: [
          'Gemini and OpenAI can both power serious developer tools. The right choice depends less on brand and more on the workflow: code generation, search, multimodal analysis, agentic tool use, latency needs, budget, and deployment constraints.',
          'For most products, the smartest architecture keeps the model boundary narrow. If the rest of the system uses clean schemas and strong evaluation, you can swap or route models without rewriting the product.',
        ],
      },
      {
        heading: 'When Gemini is a strong fit',
        paragraphs: [
          'Gemini is attractive when the product leans into Google ecosystem workflows, large context tasks, or multimodal input. It can be a strong choice for tools that summarize docs, inspect screenshots, process mixed content, or sit near existing Google developer infrastructure.',
          'For a project like a YouTube lecture assistant, Gemini also fits naturally because the product problem is multimodal and education-oriented: long source material, extraction, compression, and structured learning output.',
        ],
      },
      {
        heading: 'When OpenAI is a strong fit',
        paragraphs: [
          'OpenAI is a strong fit when the tool needs mature agent workflows, broad SDK support, structured outputs, and a large ecosystem of examples. It is often a practical default for coding assistants, automation systems, and integrations that benefit from consistent tool-calling behavior.',
          'The strongest developer tools usually combine model quality with product guardrails: schema validation, tests, evals, and clear user control over side effects.',
        ],
      },
      {
        heading: 'A practical selection checklist',
        paragraphs: [
          'Choose the model after writing down the job the tool must perform. Then run the same task set through each provider and score the outputs. A small benchmark using your own prompts, files, and edge cases is more useful than a generic leaderboard.',
        ],
        bullets: [
          'Measure accuracy on real developer tasks, not only demo prompts.',
          'Track latency and cost at the workflow level, including retries.',
          'Check structured output reliability for the schemas your app needs.',
          'Evaluate safety around file edits, commands, credentials, and external actions.',
        ],
      },
      {
        heading: 'Code example',
        paragraphs: [
          'I prefer hiding providers behind a small adapter so the product can test Gemini and OpenAI on the same task set.',
        ],
        code: `interface ModelAdapter {
  name: 'gemini' | 'openai';
  generateStructured<T>(input: {
    prompt: string;
    schemaName: string;
  }): Promise<T>;
}`,
      },
      {
        heading: 'Architecture diagram',
        paragraphs: [
          'The practical architecture is provider adapter, common schema, task benchmark, scoring, and product routing.',
        ],
        bullets: [
          'Adapter normalizes model calls behind one app-level interface.',
          'Schemas keep downstream UI independent from provider wording.',
          'Benchmarks compare the same real prompts across providers.',
          'Routing chooses the provider based on quality, latency, cost, and risk.',
        ],
      },
      {
        heading: 'Failure modes',
        paragraphs: [
          'Teams get stuck when provider-specific code leaks everywhere, benchmarks use toy prompts, or model comparisons ignore retries, latency, cost, structured-output errors, and safety boundaries.',
        ],
      },
      {
        heading: 'What I built after learning this',
        paragraphs: [
          'I used Gemini heavily for education and developer-tool experiments, but I design the product boundary so future model routing or provider swaps stay possible.',
        ],
      },
      {
        heading: 'References / docs read',
        paragraphs: [
          'The most useful docs to compare are official model API references, structured-output guides, tool-calling examples, pricing pages, and latency notes from real app integrations.',
        ],
      },
    ],
  },
];

export const writingIdeas = [
  'How I Built a Gemini Assistant with Source Grounding and Safety Checks',
  'What Makes an AI App Production-Ready Beyond Prompt Engineering',
  'MCP Server Design: Tool Contracts, Permissions, and Failure States',
  'Building AI Features in Next.js Without Turning Everything Into a Chatbot',
  'How I Think About Evals for Small AI Projects',
] as const;

export function getWritingPostBySlug(slug: string) {
  return writingPosts.find((post) => post.slug === slug);
}

export function getWritingPath(slug: WritingSlug) {
  return `/writing/${slug}`;
}
