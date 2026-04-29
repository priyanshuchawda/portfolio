import type { Project } from './projects';

export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    question: 'Who is Priyanshu Chawda?',
    answer:
      'Priyanshu Chawda is an AI-focused software engineer from Pune, India who builds agentic systems, MCP servers, developer tools, and full-stack AI applications with TypeScript, Python, Gemini, and Next.js.',
  },
  {
    question: 'What does Priyanshu Chawda build?',
    answer:
      'Priyanshu builds practical AI software: MCP servers for agent-tool integrations, LLM workflows for automation, developer utilities, and full-stack applications that turn AI capabilities into usable products.',
  },
  {
    question: 'Which technologies does Priyanshu use?',
    answer:
      'Priyanshu works with Next.js, React, TypeScript, Python, Tailwind CSS, Gemini AI, MCP, LLM orchestration, automation pipelines, and API integrations for AI-powered web products.',
  },
  {
    question: 'How can someone contact Priyanshu Chawda?',
    answer:
      'The fastest way to contact Priyanshu Chawda is by email at priyanshuchawda20@gmail.com or through LinkedIn at linkedin.com/in/priyanshuchawda for AI engineering, MCP tooling, and full-stack project work.',
  },
];

export const servicesFaqs: FAQItem[] = [
  {
    question: 'What AI engineering services does Priyanshu offer?',
    answer:
      'Priyanshu focuses on MCP server development, LLM workflow engineering, Gemini AI integrations, developer automation tools, and full-stack AI applications built with Next.js, TypeScript, and Python.',
  },
  {
    question: 'What is an MCP server used for?',
    answer:
      'An MCP server exposes tools, resources, and workflows to AI agents through a structured protocol, making it easier for assistants to interact with APIs, repositories, files, and internal systems safely.',
  },
  {
    question: 'What makes a full-stack AI application production-ready?',
    answer:
      'A production-ready AI app needs reliable prompts, typed API boundaries, secure tool access, evaluation loops, accessible UI, fast server-rendered pages, observability, and clear fallback states when AI output is uncertain.',
  },
];

export function getProjectFaqs(project: Project): FAQItem[] {
  return [
    {
      question: `What is ${project.title}?`,
      answer: `${project.title} is ${project.summary.charAt(0).toLowerCase()}${project.summary.slice(1)} It was built as a ${project.subtitle.toLowerCase()} using ${project.tech.join(', ')}.`,
    },
    {
      question: `What problem does ${project.title} solve?`,
      answer: project.problem,
    },
    {
      question: `How does ${project.title} work?`,
      answer: `${project.solution} The implementation focuses on ${project.caseStudy.architecture.join('; ').toLowerCase()}.`,
    },
  ];
}
