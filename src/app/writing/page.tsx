import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StructuredData } from '@/components/StructuredData';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import { getWebPageStructuredData } from '@/lib/structured-data';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = buildMetadata(pageMetadata.writing);

export default function WritingPage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.writing.title,
          description: pageMetadata.writing.description,
          path: pageMetadata.writing.path,
        })}
      />

      <div className="container mx-auto max-w-4xl space-y-16 px-6 pt-20 pb-20">
        <PageHeader
          eyebrow="Writing"
          title="Writing by Priyanshu Chawda"
          description="Notes on AI workflows, MCP servers, LLMs, Gemini AI, and developer tools."
        />

        <section className="space-y-6">
          <SectionHeading
            title="Upcoming articles"
            description="Long-form writing is in progress. Stay tuned for deep dives and practical playbooks."
          />
          <div className="border-border bg-muted/10 space-y-4 rounded-lg border px-6 py-8">
            <p className="text-muted-foreground">
              No published posts yet. For now, explore my work on
              <Link
                href="/projects"
                className="text-foreground hover:text-accent"
              >
                {' '}
                projects
              </Link>
              or connect on
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                {' '}
                LinkedIn
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
