import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { StructuredData } from '@/components/StructuredData';
import {
  getWritingPostBySlug,
  getWritingPath,
  writingPosts,
} from '@/data/writing';
import { buildMetadata } from '@/lib/metadata';
import {
  getArticleStructuredData,
  getBreadcrumbStructuredData,
} from '@/lib/structured-data';

export const dynamicParams = false;

export async function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: 'Writing not found',
      description: 'This writing page could not be found.',
      path: '/writing',
    });
  }

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: getWritingPath(post.slug),
    type: 'article',
  });
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData data={getArticleStructuredData(post)} />
      <StructuredData
        data={getBreadcrumbStructuredData([
          { name: 'Home', path: '/' },
          { name: 'Writing', path: '/writing' },
          { name: post.title, path: getWritingPath(post.slug) },
        ])}
      />

      <article className="container mx-auto max-w-3xl space-y-10 px-6 pt-20 pb-20">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Writing', href: '/writing' },
            { label: post.title },
          ]}
        />

        <header className="space-y-5">
          <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
            <time dateTime={post.publishedAt}>
              Published {post.publishedAt}
            </time>
            <span>/</span>
            <time dateTime={post.updatedAt}>Updated {post.updatedAt}</time>
            <span>/</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-balance md:text-5xl">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {post.summary}
          </p>
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
        </header>

        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="text-muted-foreground list-disc space-y-2 pl-6 leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {section.code ? (
                <pre className="border-border bg-muted/20 overflow-x-auto rounded-lg border p-4 text-sm leading-relaxed">
                  <code>{section.code}</code>
                </pre>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
