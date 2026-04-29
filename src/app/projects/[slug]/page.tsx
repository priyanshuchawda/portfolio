import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProjectDetail } from '@/components/ProjectDetail';
import { StructuredData } from '@/components/StructuredData';
import { getProjectFaqs } from '@/data/faqs';
import { getProjectBySlug, projects } from '@/data/projects';
import { buildMetadata } from '@/lib/metadata';
import {
  getBreadcrumbStructuredData,
  getFaqStructuredData,
  getProjectStructuredData,
} from '@/lib/structured-data';

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: 'Project not found',
      description: 'Project details could not be found.',
      path: '/projects',
    });
  }

  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    type: 'article',
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.title },
  ];

  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData data={getProjectStructuredData(project)} />
      <StructuredData data={getFaqStructuredData(getProjectFaqs(project))} />
      <StructuredData
        data={getBreadcrumbStructuredData([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />

      <div className="container mx-auto max-w-3xl space-y-10 px-6 pt-20 pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
