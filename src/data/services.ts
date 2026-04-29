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
    keywords: ['AI app developer', 'Next.js developer', 'TypeScript developer'],
  },
] as const;

export type Service = (typeof services)[number];
