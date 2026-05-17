import { ImageResponse } from 'next/og';
import { getProjectBySlug, projects } from '@/data/projects';
import { siteConfig } from '@/lib/site';
import { SocialImageCard, socialImageSize } from '@/lib/social-image';

/** Restrict generated project social images to known project slugs. */
export const dynamicParams = false;
/** Pixel dimensions for project social images. */
export const size = socialImageSize;
/** MIME type returned by generated project social image endpoints. */
export const contentType = 'image/png';

/** Prebuild social images for every known project route. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Render a project-specific Open Graph image. */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    <SocialImageCard
      eyebrow={`${project.subtitle} / ${siteConfig.name}`}
      title={project.title}
      description={project.summary}
      footer={`${siteConfig.url.replace('https://', '')}/projects/${slug}`}
    />,
    size,
  );
}
