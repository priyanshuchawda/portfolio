import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Code, Cpu, Activity } from 'lucide-react';
import { CapabilityCard } from '@/components/CapabilityCard';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { FreshnessNote } from '@/components/FreshnessNote';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsGrid } from '@/components/StatsGrid';
import { StructuredData } from '@/components/StructuredData';
import { achievementStats } from '@/data/achievements';
import { homeFaqs } from '@/data/faqs';
import { featuredProjects } from '@/data/projects';
import { profile } from '@/data/profile';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import {
  getFaqStructuredData,
  getWebPageStructuredData,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/site';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export const metadata: Metadata = buildMetadata(pageMetadata.home);

const capabilityIcons = {
  ai: <Cpu className="text-accent h-8 w-8" aria-hidden="true" />,
  fullstack: <Code className="text-accent h-8 w-8" aria-hidden="true" />,
  systems: <Activity className="text-accent h-8 w-8" aria-hidden="true" />,
} as const;

export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-background text-foreground selection:bg-accent min-h-screen selection:text-white"
    >
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.home.title,
          description: pageMetadata.home.description,
          path: pageMetadata.home.path,
          type: 'ProfilePage',
        })}
      />
      <StructuredData data={getFaqStructuredData(homeFaqs)} />

      <div className="container mx-auto max-w-5xl space-y-24 px-6 pt-20 pb-20">
        <section
          className="flex min-h-[50vh] flex-col items-start justify-center"
          aria-label="Introduction"
        >
          <div className="animate-enter space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-balance md:text-7xl">
                {profile.name}
              </h1>
              <p className="text-muted-foreground text-xl font-semibold md:text-3xl">
                {profile.headline}
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              {profile.intro}
            </p>
            <div className="text-muted-foreground flex flex-wrap gap-3 text-sm font-medium">
              <span className="bg-muted rounded-full px-4 py-2">
                {profile.location}
              </span>
              <span className="bg-muted rounded-full px-4 py-2">
                {profile.education}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-accent flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="border-border hover:bg-muted focus-visible:ring-accent flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                About Me
              </Link>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:bg-muted focus-visible:ring-accent flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:bg-muted focus-visible:ring-accent flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <Link
                href="/contact"
                className="border-border hover:bg-muted focus-visible:ring-accent flex items-center gap-2 rounded-full border bg-transparent px-6 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                Contact
              </Link>
            </div>
            <div className="text-muted-foreground flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
              <Link href="/writing" className="hover:text-foreground">
                Writing
              </Link>
              <Link href="/achievements" className="hover:text-foreground">
                Achievements
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </section>

        <section
          className="border-border/50 border-y py-10"
          aria-label="Current focus"
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
              {profile.nowBuilding.map((item) => (
                <span key={item} className="bg-muted rounded-md px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-12" aria-label="Featured projects">
          <SectionHeading
            title="Featured Projects"
            description="Impact-driven engineering. Code is the medium."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="space-y-12" aria-label="Capabilities">
          <SectionHeading
            title="Capabilities"
            description="What I build across AI, developer tools, and full-stack systems."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {profile.capabilities.map((capability) => (
              <CapabilityCard
                key={capability.key}
                icon={capabilityIcons[capability.key]}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </div>
        </section>

        <section
          className="bg-muted/10 border-border/50 -mx-6 space-y-10 rounded-lg border px-6 py-16"
          aria-label="Proof metrics"
        >
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-bold text-balance">
              Analytics-driven Proof
            </h2>
            <p className="text-muted-foreground">
              Consistent output across projects, problem-solving, and shipping.
            </p>
          </div>
          <StatsGrid stats={achievementStats} />
        </section>

        <FAQSection
          title="Quick Answers"
          description="Concise entity and expertise answers for search engines, AI assistants, and visitors."
          items={homeFaqs}
        />

        <FreshnessNote />

        <CTASection
          title="Let's build something together."
          description="Open for AI engineering, MCP tool development, and full-stack product work."
          primary={{
            label: 'Contact Priyanshu',
            href: '/contact',
          }}
          secondary={{
            label: 'View Projects',
            href: '/projects',
          }}
        />
      </div>
    </main>
  );
}
