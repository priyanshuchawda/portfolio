'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code, Cpu, Activity } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { CommandPalette } from '@/components/CommandPalette';

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  tech: string;
  impact: string;
  link?: string;
  github?: string;
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  active?: boolean;
}

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent min-h-screen selection:text-white">
      {/* Skip to content link for accessibility */}
      <a
        href="#hero"
        className="bg-accent text-background fixed top-0 left-1/2 z-[100] -translate-x-1/2 -translate-y-full rounded-b-md px-4 py-2 font-medium transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <CommandPalette />

      {/* Navigation */}
      <nav
        className="border-border bg-background/50 fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="font-mono text-sm font-bold tracking-tighter">
            priyanshu<span className="text-accent">_</span>
          </div>
          <div className="text-muted-foreground hidden gap-6 text-sm font-medium md:flex">
            <a
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#journey"
              className="hover:text-foreground transition-colors"
            >
              Journey
            </a>
            <a
              href="#skills"
              className="hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/priyanshuchawda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshuchawda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-5xl space-y-32 px-6 pt-32 pb-24">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="flex min-h-[50vh] flex-col items-start justify-center"
          aria-label="Introduction"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl">
              Priyanshu Chawda
            </h1>
            <p className="text-muted-foreground mb-6 max-w-2xl text-xl font-semibold md:text-3xl">
              AI Engineer building agentic systems &amp; developer tools.
            </p>
            <p className="text-muted-foreground mb-10 max-w-xl text-lg leading-relaxed">
              I ship AI-powered tools, automation systems, and scalable software
              fast. Turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/priyanshuchawda"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:bg-muted flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-all"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshuchawda"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:bg-muted flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-all"
              >
                <Linkedin className="h-4 w-4" /> Contact
              </a>
            </div>
          </motion.div>
        </section>

        {/* NOW BUILDING */}
        <section
          className="border-border/50 border-y py-10"
          aria-label="Current work"
        >
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="text-accent flex items-center gap-3 font-mono text-sm whitespace-nowrap">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-accent relative inline-flex h-3 w-3 rounded-full"></span>
              </span>
              Now Building
            </div>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm font-medium">
              <span className="bg-muted rounded-md px-4 py-2">
                Building MCP servers
              </span>
              <span className="bg-muted rounded-md px-4 py-2">
                Building AI tools
              </span>
              <span className="bg-muted rounded-md px-4 py-2">
                Preparing for FAANG / ML roles
              </span>
              <span className="bg-muted rounded-md px-4 py-2">
                Writing blogs on AI workflows
              </span>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section
          id="projects"
          className="space-y-12"
          aria-label="Featured Projects"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              Impact-driven engineering. Code is just the medium.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              title="YouTube Flashcards"
              problem="Watching educational videos is passive. Notes are slow to make."
              solution="Turn any YouTube lecture into interactive study flashcards instantly using Gemini AI."
              tech="Next.js, TypeScript, Tailwind, Gemini API"
              impact="Reduced note-taking time by 80%. Instant study material generation."
              link="https://youtube-flashcards-alpha.vercel.app"
              github="https://github.com/priyanshuchawda/youtube-flashcards"
            />
            <ProjectCard
              title="ghfind"
              problem="Searching for specific GitHub Issues or PRs is tedious and unoptimized via UI."
              solution="A fast, lightweight developer tool that uses the Gemini API to intelligently discover relevant GitHub Issues or PRs."
              tech="Python, Streamlit, GitHub CLI, Gemini API"
              impact="Optimizes developer workflows by saving hours of manual search."
              github="https://github.com/priyanshuchawda/ghfind"
            />
            <ProjectCard
              title="Browser4All"
              problem="Phishing and malware threats are evolving faster than standard browsers can catch."
              solution="AI Secure Browser with real-time phishing &amp; malware protection powered by Gemini AI."
              tech="TypeScript, Gemini AI, Multi-layered Threat Analysis"
              impact="Proactive security. Intelligent download scanning to prevent attacks before they happen."
              github="https://github.com/priyanshuchawda/browser4all"
            />
            <ProjectCard
              title="Smart Crowd Navigator"
              problem="Large events suffer from dangerous crowding and inefficient exit timings."
              solution="Gemini-powered stadium assistant for real-time crowd navigation and timing decisions."
              tech="TypeScript, AI Analytics"
              impact="Enhances safety and significantly reduces exit wait times."
              github="https://github.com/priyanshuchawda/smart-crowd-navigator"
            />
          </div>
        </section>

        {/* TIMELINE / JOURNEY */}
        <section
          id="journey"
          className="space-y-12"
          aria-label="Career Journey"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">The Journey</h2>
            <p className="text-muted-foreground">
              Progression over perfection.
            </p>
          </div>

          <div className="border-border relative ml-3 space-y-8 border-l pl-6">
            <TimelineItem
              year="2026"
              title="Building Agentic Systems"
              description="Focusing on MCP servers, LLM orchestration, and advanced AI workflows."
              active
            />
            <TimelineItem
              year="2025"
              title="Entered AI + Open Source"
              description="Built full-stack AI tools, contributed to open-source, and integrated LLMs."
            />
            <TimelineItem
              year="2024"
              title="Built Full Stack Apps"
              description="Mastered Next.js, React, databases, and shipped scalable web applications."
            />
            <TimelineItem
              year="July 2024"
              title="Started Coding"
              description="Wrote my first lines of code. Discovered a passion for problem-solving."
            />
          </div>
        </section>

        {/* CAPABILITIES / SKILLS */}
        <section
          id="skills"
          className="space-y-12"
          aria-label="Skills and Capabilities"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Capabilities</h2>
            <p className="text-muted-foreground">
              What I can actually DO, not just syntax memorization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-border bg-muted/20 space-y-4 rounded-2xl border p-6">
              <Cpu className="text-accent h-8 w-8" aria-hidden="true" />
              <h3 className="text-xl font-bold">AI Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                LLMs, RAG, MCP, Prompt Engineering, Vector DBs, Agentic
                Workflows.
              </p>
            </div>
            <div className="border-border bg-muted/20 space-y-4 rounded-2xl border p-6">
              <Code className="text-accent h-8 w-8" aria-hidden="true" />
              <h3 className="text-xl font-bold">Software Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack apps, Next.js, APIs, Auth, DB Design, Scalable
                Architecture.
              </p>
            </div>
            <div className="border-border bg-muted/20 space-y-4 rounded-2xl border p-6">
              <Activity className="text-accent h-8 w-8" aria-hidden="true" />
              <h3 className="text-xl font-bold">
                Systems &amp; Problem Solving
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DSA, Competitive Programming, Optimization, Architecture Design.
              </p>
            </div>
          </div>
        </section>

        {/* PROOF OF WORK / GITHUB */}
        <section
          className="bg-muted/10 border-border/50 -mx-6 space-y-12 rounded-3xl border px-6 py-20"
          aria-label="Statistics"
        >
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Analytics-driven Proof
            </h2>
            <p className="text-muted-foreground">
              Numbers speak louder than words.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-foreground text-4xl font-black">20+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Projects Shipped
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-foreground text-4xl font-black">250+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                LeetCode Solved
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-foreground text-4xl font-black">2k+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                GitHub Commits
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-foreground text-4xl font-black">5+</div>
              <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Hackathons
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="space-y-8 py-20 text-center"
          aria-label="Contact"
        >
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Let&apos;s build something together.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md">
            Currently open for new opportunities, ML roles, or exciting
            collaborative projects.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/priyanshuchawda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 font-bold transition-all"
            >
              Contact on LinkedIn
            </a>
            <a
              href="https://github.com/priyanshuchawda"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-muted/50 hover:bg-muted rounded-full border px-8 py-4 font-bold transition-all"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>

      <footer className="border-border text-muted-foreground border-t py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Priyanshu Chawda. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  problem,
  solution,
  tech,
  impact,
  link,
  github,
}: ProjectCardProps) {
  return (
    <article className="group border-border bg-background hover:bg-muted/10 relative flex h-full flex-col rounded-3xl border p-6 transition-colors md:p-8">
      <div className="mb-6 flex items-start justify-between">
        <h3 className="group-hover:text-accent text-2xl font-bold transition-colors">
          {title}
        </h3>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source on GitHub`}
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live site`}
              className="text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-grow space-y-4 text-sm">
        <div>
          <span className="text-foreground font-semibold">Problem: </span>
          <span className="text-muted-foreground">{problem}</span>
        </div>
        <div>
          <span className="text-foreground font-semibold">Solution: </span>
          <span className="text-muted-foreground">{solution}</span>
        </div>
        <div>
          <span className="text-foreground font-semibold">Tech: </span>
          <span className="text-muted-foreground font-mono text-xs">
            {tech}
          </span>
        </div>
      </div>

      <div className="border-border mt-6 border-t pt-6">
        <span className="text-accent font-semibold">Impact: </span>
        <span className="text-muted-foreground text-sm font-medium">
          {impact}
        </span>
      </div>
    </article>
  );
}

function TimelineItem({
  year,
  title,
  description,
  active = false,
}: TimelineItemProps) {
  return (
    <div className="relative">
      <div
        className={`border-background absolute top-1 -left-[31px] h-4 w-4 rounded-full border-4 ${active ? 'bg-accent' : 'bg-muted-foreground'}`}
        aria-hidden="true"
      ></div>
      <div className="text-muted-foreground mb-1 font-mono text-sm">{year}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
