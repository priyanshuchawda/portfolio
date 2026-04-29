import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StructuredData } from '@/components/StructuredData';
import { profile } from '@/data/profile';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import { getWebPageStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata(pageMetadata.contact);

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.contact.title,
          description: pageMetadata.contact.description,
          path: pageMetadata.contact.path,
        })}
      />

      <div className="container mx-auto max-w-4xl space-y-16 px-6 pt-20 pb-20">
        <PageHeader
          eyebrow="Contact"
          title="Contact Priyanshu Chawda"
          description="Reach out for AI engineering roles, MCP tooling collaborations, or developer automation work."
        />

        <section className="space-y-6">
          <SectionHeading
            title="Primary channels"
            description="The fastest ways to connect."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profile.links.email}`}
              className="border-border bg-muted/20 hover:bg-muted focus-visible:ring-accent rounded-lg border px-6 py-5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground mt-2">
                {profile.links.email}
              </p>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-muted/20 hover:bg-muted focus-visible:ring-accent rounded-lg border px-6 py-5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground mt-2">
                linkedin.com/in/priyanshuchawda
              </p>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-muted/20 hover:bg-muted focus-visible:ring-accent rounded-lg border px-6 py-5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-muted-foreground mt-2">
                github.com/priyanshuchawda
              </p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
