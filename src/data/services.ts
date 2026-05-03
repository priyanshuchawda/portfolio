export const services = [
  {
    name: 'MCP Server Development',
    slug: 'mcp-server-development',
    description:
      'Design and build Model Context Protocol servers that connect AI agents to tools, APIs, files, and developer workflows.',
    outcomes: [
      'Typed tool contracts for reliable agent actions',
      'Secure API and filesystem boundaries',
      'Documentation that agents and humans can both follow',
    ],
    relatedWork: [
      {
        label: 'Writing: What are MCP servers?',
        href: '/writing/what-are-mcp-servers',
      },
      { label: 'Project architecture notes', href: '/projects/ghfind' },
    ],
    keywords: ['MCP server developer', 'agentic systems', 'AI tools'],
  },
  {
    name: 'LLM Workflow Engineering',
    slug: 'llm-workflow-engineering',
    description:
      'Build retrieval, prompt, evaluation, and orchestration flows for practical AI products using Gemini, TypeScript, and Python.',
    outcomes: [
      'Answer-first UX for AI output review',
      'RAG and prompt pipelines with measurable behavior',
      'Evaluation loops for quality and reliability',
    ],
    relatedWork: [
      {
        label: 'Project: YouTube Flashcards',
        href: '/projects/youtube-flashcards',
      },
      {
        label: 'Writing: LLM orchestration',
        href: '/writing/how-llm-orchestration-works',
      },
    ],
    keywords: ['LLM workflows', 'Gemini AI developer', 'RAG systems'],
  },
  {
    name: 'Full-Stack AI Applications',
    slug: 'full-stack-ai-applications',
    description:
      'Ship fast, accessible AI applications with Next.js, TypeScript, server-rendered pages, and production-ready integrations.',
    outcomes: [
      'SEO-ready App Router architecture',
      'Accessible React interfaces with strong Core Web Vitals',
      'API integrations designed for maintainability',
    ],
    relatedWork: [
      { label: 'Portfolio case studies', href: '/projects' },
      {
        label: 'Deployed demo: YouTube Flashcards',
        href: '/projects/youtube-flashcards',
      },
    ],
    keywords: ['AI app developer', 'Next.js developer', 'TypeScript developer'],
  },
] as const;

export type Service = (typeof services)[number];
