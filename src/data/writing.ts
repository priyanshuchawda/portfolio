export type WritingSlug =
  | 'what-are-mcp-servers'
  | 'how-llm-orchestration-works'
  | 'gemini-vs-openai-for-developer-tools';

export interface WritingSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
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
    ],
  },
];

export function getWritingPostBySlug(slug: string) {
  return writingPosts.find((post) => post.slug === slug);
}

export function getWritingPath(slug: WritingSlug) {
  return `/writing/${slug}`;
}
