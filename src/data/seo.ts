import { siteConfig } from '@/lib/site';

export const pageMetadata = {
  home: {
    title: 'Priyanshu Chawda | AI-Focused Software Engineer',
    description: siteConfig.description,
    path: '/',
  },
  about: {
    title: 'Who is Priyanshu Chawda? | AI Engineer & Full-Stack Developer',
    description:
      'Learn about Priyanshu Chawda, an AI-focused software engineer from Pune, India building agentic systems, MCP servers, and full-stack AI products.',
    path: '/about',
  },
  projects: {
    title:
      'Projects by Priyanshu Chawda | AI Agents, Developer Tools & Full-Stack Apps',
    description:
      'Explore AI agents, developer tools, and full-stack applications built by Priyanshu Chawda using Next.js, TypeScript, Python, and Gemini AI.',
    path: '/projects',
  },
  services: {
    title:
      'AI Engineering Services | MCP Servers, LLM Workflows & Next.js Apps',
    description:
      'AI engineering services from Priyanshu Chawda for MCP server development, LLM workflows, Gemini integrations, and full-stack Next.js AI applications.',
    path: '/services',
  },
  writing: {
    title: 'Writing by Priyanshu Chawda | AI, MCP, LLMs & Developer Tools',
    description:
      'Technical writing on AI workflows, MCP servers, LLMs, Gemini AI, and developer automation from Priyanshu Chawda.',
    path: '/writing',
  },
  achievements: {
    title: 'Achievements | Priyanshu Chawda',
    description:
      'Project milestones, problem-solving metrics, and engineering achievements from Priyanshu Chawda.',
    path: '/achievements',
  },
  contact: {
    title: 'Contact Priyanshu Chawda | AI-Focused Software Engineer',
    description:
      'Get in touch with Priyanshu Chawda for AI engineering, MCP tools, and full-stack developer opportunities.',
    path: '/contact',
  },
} as const;
