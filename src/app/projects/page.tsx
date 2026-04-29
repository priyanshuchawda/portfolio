import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { StructuredData } from '@/components/StructuredData';
import { projects } from '@/data/projects';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import {
  getBreadcrumbStructuredData,
  getProjectListStructuredData,
  getWebPageStructuredData,
} from '@/lib/structured-data';

export const metadata: Metadata = buildMetadata(pageMetadata.projects);

export default function ProjectsPage() {
  const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Projects' }];

  return (
    <main id="main-content" className="bg-background text-foreground">
      <StructuredData
        data={getWebPageStructuredData({
          name: pageMetadata.projects.title,
          description: pageMetadata.projects.description,
          path: pageMetadata.projects.path,
        })}
      />
      <StructuredData
        data={getBreadcrumbStructuredData([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ])}
      />
      <StructuredData data={getProjectListStructuredData(projects)} />

      <div className="container mx-auto max-w-5xl space-y-10 px-6 pt-20 pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageHeader
          eyebrow="Projects"
          title="Projects by Priyanshu Chawda"
          description="A focused collection of AI agents, developer tools, and full-stack applications."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
