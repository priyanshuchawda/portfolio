import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, Code, Cpu } from 'lucide-react';
import { CapabilityCard } from '@/components/CapabilityCard';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { FreshnessNote } from '@/components/FreshnessNote';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StructuredData } from '@/components/StructuredData';
import { Timeline } from '@/components/Timeline';
import { homeFaqs } from '@/data/faqs';
import { profile } from '@/data/profile';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import {
  getFaqStructuredData,
  getWebPageStructuredData,
} from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata(pageMetadata.about);

const capabilityIcons = {
  ai: <Cpu className="text-accent h-8 w-8" aria-hidden="true" />,
  fullstack: <Code className="text-accent h-8 w-8" aria-hidden="true" />,
  systems: <Activity className="text-accent h-8 w-8" aria-hidden="true" />,
} as const;

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.about.title,
          description: pageMetadata.about.description,
          path: pageMetadata.about.path,
        })}
      />
      <StructuredData data={getFaqStructuredData(homeFaqs)} />

      <div className="container mx-auto max-w-5xl space-y-16 px-6 pt-20 pb-20">
        <PageHeader
          eyebrow="About"
          title="Who is Priyanshu Chawda?"
          description={profile.bio}
        />
        <FreshnessNote />

        <section className="space-y-6">
          <SectionHeading
            title="Identity"
            description="AI-focused software engineer building agentic systems, MCP servers, and developer tools."
          />
          <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
            <p>
              Based in {profile.location}, I work as an AI Engineer and
              full-stack developer, building AI applications with Next.js,
              TypeScript, and Python.
            </p>
            <p>
              Education: {profile.education}. I am targeting FAANG / ML roles
              and continuously improving my system design and AI research depth.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Current focus"
            description="What I am working on right now."
          />
          <ul className="text-muted-foreground grid gap-3 md:grid-cols-2">
            {profile.currentFocus.map((item) => (
              <li key={item} className="bg-muted rounded-lg px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Journey"
            description="A focused path from foundations to agentic systems."
          />
          <Timeline items={profile.journey} />
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Technical direction"
            description="The capabilities and tools I lean on for shipping AI products."
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

        <section className="text-muted-foreground space-y-4">
          <p>
            Explore the{' '}
            <Link
              href="/projects"
              className="text-foreground hover:text-accent"
            >
              projects
            </Link>{' '}
            I have shipped and the{' '}
            <Link
              href="/achievements"
              className="text-foreground hover:text-accent"
            >
              achievements
            </Link>{' '}
            that back the work with proof.
          </p>
        </section>

        <FAQSection
          title="About Priyanshu FAQ"
          description="Entity-focused answers that make the profile easier to understand and cite."
          items={homeFaqs}
        />

        <CTASection
          title="Build with Priyanshu"
          description="Reach out for AI engineering collaborations, product builds, or developer tooling work."
          primary={{ label: 'Contact', href: '/contact' }}
          secondary={{ label: 'View Projects', href: '/projects' }}
        />
      </div>
    </main>
  );
}
