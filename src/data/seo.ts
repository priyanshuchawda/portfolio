import { siteConfig } from '@/lib/site';

export const pageMetadata = {
  home: {
    title: 'Priyanshu Chawda | AI Software Engineer',
    description: siteConfig.description,
    path: '/',
  },
  about: {
    title: 'About Priyanshu Chawda',
    description:
      'Learn about Priyanshu Chawda, an AI-focused software engineer from Pune building LLM workflows, MCP tools, developer tooling, and full-stack AI products.',
    path: '/about',
  },
  projects: {
    title: 'Projects by Priyanshu Chawda',
    description:
      'Explore AI projects by Priyanshu Chawda, including developer tools, Gemini apps, MCP workflows, and full-stack systems.',
    path: '/projects',
  },
  services: {
    title: 'AI Engineering Work | Priyanshu Chawda',
    description:
      'AI engineering collaboration areas including MCP server development, LLM workflows, Gemini integrations, and full-stack AI application work by Priyanshu Chawda.',
    path: '/services',
  },
  writing: {
    title: 'Writing by Priyanshu Chawda',
    description:
      'Technical writing on AI workflows, MCP servers, LLMs, Gemini AI, and developer automation from Priyanshu Chawda.',
    path: '/writing',
  },
  achievements: {
    title: 'Achievements | Priyanshu Chawda',
    description:
      'Achievements by Priyanshu Chawda across projects, LeetCode, hackathons, open source, and AI engineering practice.',
    path: '/achievements',
  },
  contact: {
    title: 'Contact Priyanshu Chawda',
    description:
      'Contact Priyanshu Chawda for AI engineering, MCP tooling, developer automation, and full-stack AI collaboration.',
    path: '/contact',
  },
} as const;
