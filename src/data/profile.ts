import { siteConfig } from '@/lib/site';

export const profile = {
  name: siteConfig.name,
  role: 'AI-focused software engineer',
  location: 'Pune, India',
  education: 'B.Tech Computer Science',
  headline:
    'AI-focused software engineer building LLM workflows, MCP tools, and production-grade web apps.',
  intro:
    'I build AI products with Next.js, TypeScript, Python, Gemini, typed APIs, evals, and deployment-focused engineering. My work focuses on turning AI demos into usable tools with clear UX, safety boundaries, and measurable behavior.',
  proofLine:
    '20+ shipped projects · 2k+ GitHub commits · 250+ LeetCode · 5+ hackathons · production Cloud Run / Vercel deployments',
  bio: 'Priyanshu Chawda is a B.Tech Computer Science student in Pune focused on AI engineering, developer tools, and full-stack systems. He is building a portfolio around practical LLM products: tools that use typed APIs, retrieval, evals, safety boundaries, and clean user experience.',
  currentFocus: [
    'MCP servers and agentic systems',
    'Developer automation tools',
    'LLM workflows with Gemini AI',
    'High-bar software and ML engineering practice',
  ],
  nowBuilding: [
    'Building MCP servers',
    'Building AI tools',
    'Shipping public technical breakdowns',
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
        'Built Gemini-powered apps with prompt pipelines, structured outputs, fallback states, and user-review flows.',
    },
    {
      key: 'fullstack',
      title: 'Full-stack Development',
      description:
        'Shipped Next.js + TypeScript apps with SEO metadata, accessible UI, dynamic routes, reusable data models, and clean component architecture.',
    },
    {
      key: 'systems',
      title: 'Developer Tools',
      description:
        'Built tools for GitHub search, learning workflows, and automation where AI is used as a system component, not just a chatbot wrapper.',
    },
  ],
  proofOfSkill: [
    {
      title: 'AI Engineering',
      description:
        'Built Gemini-powered apps with prompt pipelines, structured outputs, fallback states, and user-review flows.',
    },
    {
      title: 'Full-Stack Engineering',
      description:
        'Shipped Next.js + TypeScript apps with SEO metadata, accessible UI, dynamic routes, reusable data models, and clean component architecture.',
    },
    {
      title: 'Developer Tools',
      description:
        'Built tools for GitHub search, learning workflows, and automation where AI is used as a system component, not just a chatbot wrapper.',
    },
    {
      title: 'Reliability Mindset',
      description:
        'I document architecture, edge cases, limitations, future improvements, and testing strategy so projects are easier to review and maintain.',
    },
  ],
  links: {
    github: siteConfig.github,
    linkedin: siteConfig.linkedin,
    email: siteConfig.email,
  },
} as const;

export type TimelineItem = (typeof profile.journey)[number];
