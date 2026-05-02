import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeading } from '@/components/SectionHeading';
import { StructuredData } from '@/components/StructuredData';
import { pageMetadata } from '@/data/seo';
import { getWritingPath, writingPosts } from '@/data/writing';
import { buildMetadata } from '@/lib/metadata';
import { getWebPageStructuredData } from '@/lib/structured-data';

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
            title="Technical explainers"
            description="Practical notes on MCP, LLM orchestration, model choices, and AI developer tooling."
          />
          <div className="grid gap-5">
            {writingPosts.map((post) => (
              <Link
                key={post.slug}
                href={getWritingPath(post.slug)}
                className="border-border bg-muted/10 hover:border-accent/60 group rounded-lg border p-6 transition-colors"
              >
                <article className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <time
                      dateTime={post.updatedAt}
                      className="text-muted-foreground"
                    >
                      Updated {post.updatedAt}
                    </time>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-accent text-2xl font-semibold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-border text-muted-foreground rounded-full border px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
