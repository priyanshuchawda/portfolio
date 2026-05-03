import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import { getProjectPath } from '@/data/projects';
import { GithubIcon } from './SocialIcons';

export function ProjectCard({ project }: { project: Project }) {
  const projectPath = getProjectPath(project.slug);

  return (
    <article className="group border-border bg-background hover:bg-muted/10 relative flex h-full flex-col rounded-lg border p-6 transition-colors md:p-8">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="group-hover:text-accent text-2xl font-bold transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mt-2 text-sm">
            {project.subtitle}
          </p>
        </div>
        <div className="flex gap-3">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      </div>

      <div className="grow space-y-4 text-sm">
        <p className="text-muted-foreground">{project.summary}</p>
        <div>
          <span className="text-foreground font-semibold">Problem: </span>
          <span className="text-muted-foreground">{project.problem}</span>
        </div>
        <div>
          <span className="text-foreground font-semibold">Solution: </span>
          <span className="text-muted-foreground">{project.solution}</span>
        </div>
        <div>
          <span className="text-foreground font-semibold">Tech: </span>
          <span className="text-muted-foreground font-mono text-xs">
            {project.tech.join(', ')}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.proof.slice(0, 4).map((item) => (
            <span
              key={item}
              className="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="border-border mt-6 space-y-4 border-t pt-6">
        <div>
          <span className="text-accent font-semibold">Impact: </span>
          <span className="text-muted-foreground text-sm font-medium">
            {project.impact}
          </span>
        </div>
        <Link
          href={projectPath}
          className="text-foreground hover:text-accent focus-visible:ring-accent inline-flex items-center gap-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
