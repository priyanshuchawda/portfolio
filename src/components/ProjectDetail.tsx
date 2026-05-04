import Link from 'next/link';
import { ExternalLink, Package, Sparkles } from 'lucide-react';
import { getProjectFaqs } from '@/data/faqs';
import type { Project } from '@/data/projects';
import { FAQSection } from './FAQSection';
import { FreshnessNote } from './FreshnessNote';
import { GithubIcon } from './SocialIcons';

export function ProjectDetail({ project }: { project: Project }) {
  const projectFaqs = getProjectFaqs(project);

  return (
    <article className="space-y-16">
      <header className="space-y-6">
        <div className="space-y-2">
          <p className="text-accent font-mono text-sm tracking-widest uppercase">
            {project.subtitle}
          </p>
          <h1 className="text-4xl font-bold text-balance md:text-5xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            {project.summary}
          </p>
          <p className="text-muted-foreground max-w-2xl text-base">
            {project.caseStudy.overview}
          </p>
          <FreshnessNote />
        </div>
        <div className="flex flex-wrap gap-4">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border hover:bg-muted focus-visible:ring-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border hover:bg-muted focus-visible:ring-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <ExternalLink className="h-4 w-4" />
              Live demo
            </a>
          ) : null}
          {project.links.npm ? (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border hover:bg-muted focus-visible:ring-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Package className="h-4 w-4" />
              npm package
            </a>
          ) : null}
          {project.links.skills ? (
            <a
              href={project.links.skills}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border hover:bg-muted focus-visible:ring-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Sparkles className="h-4 w-4" />
              codeaudit skill
            </a>
          ) : null}
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Problem</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.problem}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Solution</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.solution}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tech stack</h2>
        <ul className="text-muted-foreground flex flex-wrap gap-3 text-sm">
          {project.tech.map((tech) => (
            <li key={tech} className="bg-muted rounded-full px-4 py-2">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.packageInfo ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Package and install</h2>
          <div className="border-border bg-muted/15 space-y-4 rounded-lg border p-5">
            <div>
              <span className="text-foreground font-semibold">Package: </span>
              <a
                href={project.packageInfo.registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground focus-visible:ring-accent font-mono text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {project.packageInfo.name}
              </a>
            </div>
            <div>
              <span className="text-foreground font-semibold">Version: </span>
              <span className="text-muted-foreground font-mono text-sm">
                {project.packageInfo.version}
              </span>
            </div>
            <div>
              <span className="text-foreground font-semibold">Install: </span>
              <code className="bg-muted text-muted-foreground rounded px-2 py-1 text-sm">
                {project.packageInfo.installCommand}
              </code>
            </div>
            {project.packageInfo.skillInstallCommand ? (
              <div>
                <span className="text-foreground font-semibold">
                  Skill install:{' '}
                </span>
                <code className="bg-muted text-muted-foreground rounded px-2 py-1 text-sm">
                  {project.packageInfo.skillInstallCommand}
                </code>
              </div>
            ) : null}
            {project.packageInfo.skillName ? (
              <div>
                <span className="text-foreground font-semibold">Skill: </span>
                {project.packageInfo.skillsUrl ? (
                  <a
                    href={project.packageInfo.skillsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground focus-visible:ring-accent font-mono text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {project.packageInfo.skillName}
                  </a>
                ) : (
                  <span className="text-muted-foreground font-mono text-sm">
                    {project.packageInfo.skillName}
                  </span>
                )}
              </div>
            ) : null}
            <div>
              <span className="text-foreground font-semibold">Runtime: </span>
              <span className="text-muted-foreground">
                {project.packageInfo.runtime}
              </span>
              <span className="text-muted-foreground"> · </span>
              <span className="text-foreground font-semibold">License: </span>
              <span className="text-muted-foreground">
                {project.packageInfo.license}
              </span>
            </div>
          </div>
        </section>
      ) : null}

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Available artifacts</h2>
        <ul className="text-muted-foreground flex flex-wrap gap-3 text-sm">
          {project.artifacts.map((item) => (
            <li
              key={item}
              className="border-border rounded-full border px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Architecture and how it works</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          {project.caseStudy.architecture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Engineering Decisions</h2>
        <div className="grid gap-4">
          {project.engineeringDecisions.map((decision) => (
            <div
              key={decision.label}
              className="border-border bg-muted/15 rounded-lg border p-5"
            >
              <h3 className="font-semibold">{decision.label}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {decision.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Key features</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          {project.caseStudy.keyFeatures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Impact</h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.impact}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Challenges</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          {project.caseStudy.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What I learned</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          {project.caseStudy.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Future improvements</h2>
        <ul className="text-muted-foreground list-disc space-y-2 pl-6">
          {project.caseStudy.futureImprovements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <FAQSection
        title={`${project.title} FAQ`}
        description="Direct answers for AI assistants, search snippets, and visitors evaluating the project."
        items={projectFaqs}
      />

      <div className="border-border flex flex-wrap items-center justify-between gap-4 border-t pt-8">
        <Link
          href="/projects"
          className="text-foreground hover:text-accent focus-visible:ring-accent inline-flex items-center gap-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span aria-hidden="true">←</span>
          Back to all projects
        </Link>
      </div>
    </article>
  );
}
