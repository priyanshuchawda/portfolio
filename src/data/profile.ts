import { siteConfig } from '@/lib/site';

export const profile = {
  name: siteConfig.name,
  role: 'AI-focused software engineer',
  location: 'Pune, India',
  education: 'B.Tech Computer Science',
  headline:
    'AI-focused software engineer building agentic systems and developer tools.',
  intro:
    'I build agentic systems, MCP servers, and full-stack AI applications with TypeScript, Python, and Gemini AI.',
  bio: 'Priyanshu Chawda is an AI-focused software engineer from Pune, India. He builds developer tools, automation systems, and LLM workflows that turn complex problems into practical products.',
  currentFocus: [
    'MCP servers and agentic systems',
    'Developer automation tools',
    'LLM workflows with Gemini AI',
    'FAANG / ML role preparation',
  ],
  nowBuilding: [
    'Building MCP servers',
    'Building AI tools',
    'Preparing for FAANG / ML roles',
    'Writing blogs on AI workflows',
  ],
  journey: [
    {
      year: '2026',
      title: 'Building agentic systems',
      description:
        'Focusing on MCP servers, LLM orchestration, and advanced AI workflows.',
      active: true,
    },
    {
      year: '2025',
      title: 'Entered AI and open source',
      description:
        'Built full-stack AI tools, contributed to open-source, and shipped Gemini integrations.',
    },
    {
      year: '2024',
      title: 'Built full-stack apps',
      description:
        'Mastered Next.js, React, databases, and shipped scalable web applications.',
    },
    {
      year: 'July 2024',
      title: 'Started coding',
      description:
        'Wrote my first lines of code and found a love for problem-solving.',
    },
  ],
  capabilities: [
    {
      key: 'ai',
      title: 'AI Engineering',
      description:
        'LLMs, RAG, MCP servers, prompt design, Gemini AI, and agentic workflows.',
    },
    {
      key: 'fullstack',
      title: 'Full-stack Development',
      description:
        'Next.js, TypeScript, Python, APIs, authentication, and scalable architecture.',
    },
    {
      key: 'systems',
      title: 'Systems and Problem Solving',
      description:
        'DSA, competitive programming, performance optimization, and system design.',
    },
  ],
  links: {
    github: siteConfig.github,
    linkedin: siteConfig.linkedin,
    email: siteConfig.email,
  },
} as const;

export type TimelineItem = (typeof profile.journey)[number];
