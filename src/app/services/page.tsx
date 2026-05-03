import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { FreshnessNote } from '@/components/FreshnessNote';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StructuredData } from '@/components/StructuredData';
import { servicesFaqs } from '@/data/faqs';
import { pageMetadata } from '@/data/seo';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/metadata';
import {
  getFaqStructuredData,
  getServiceCatalogStructuredData,
  getWebPageStructuredData,
} from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata(pageMetadata.services);

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.services.title,
          description: pageMetadata.services.description,
          path: pageMetadata.services.path,
        })}
      />
      <StructuredData data={getServiceCatalogStructuredData(services)} />
      <StructuredData data={getFaqStructuredData(servicesFaqs)} />

      <div className="container mx-auto max-w-5xl space-y-16 px-6 pt-20 pb-20">
        <PageHeader
          eyebrow="Services"
          title="AI Engineering Work I Can Help With"
          description="Available for internships, collaborations, freelance MVPs, and AI tooling prototypes across MCP servers, LLM workflows, Gemini integrations, and full-stack AI applications."
        />
        <FreshnessNote />

        <section className="space-y-8">
          <SectionHeading
            title="Collaboration Areas"
            description="Focused work areas for AI-first products, automation workflows, and developer tooling."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                id={service.slug}
                key={service.slug}
                className="border-border bg-muted/15 scroll-mt-24 space-y-5 rounded-lg border p-6"
              >
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-pretty">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Expected Outcomes</h3>
                  <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-background text-muted-foreground rounded-full px-3 py-1 text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="border-border/70 border-t pt-4">
                  <h3 className="text-sm font-semibold">Related proof</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    {service.relatedProof.map((proof) => (
                      <li key={proof.href}>
                        <Link
                          href={proof.href}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {proof.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Build Process"
            description="A lightweight delivery path for turning AI ideas into reliable software."
          />
          <ol className="text-muted-foreground grid gap-4 md:grid-cols-4">
            {[
              'Define the user workflow, data boundaries, and success criteria.',
              'Prototype the model, prompt, tool, or MCP integration with typed interfaces.',
              'Ship the server-rendered UI, API flow, and error states.',
              'Measure behavior, document usage, and refine reliability.',
            ].map((step, index) => (
              <li
                key={step}
                className="border-border bg-muted/15 rounded-lg border p-5"
              >
                <span className="text-accent font-mono text-sm">
                  Step {index + 1}
                </span>
                <p className="mt-3 leading-relaxed text-pretty">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <FAQSection
          title="AI Engineering FAQ"
          description="Direct answers for AI assistants, recruiters, and teams evaluating collaboration."
          items={servicesFaqs}
        />
      </div>
    </main>
  );
}
