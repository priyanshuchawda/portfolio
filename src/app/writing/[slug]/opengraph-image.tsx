import { ImageResponse } from 'next/og';
import {
  getWritingPath,
  getWritingPostBySlug,
  writingPosts,
} from '@/data/writing';
import { siteConfig } from '@/lib/site';
import { SocialImageCard, socialImageSize } from '@/lib/social-image';

/** Restrict generated writing social images to known article slugs. */
export const dynamicParams = false;
/** Pixel dimensions for writing social images. */
export const size = socialImageSize;
/** MIME type returned by generated writing social image endpoints. */
export const contentType = 'image/png';

/** Prebuild social images for every known writing route. */
export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

/** Render an article-specific Open Graph image. */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingPostBySlug(slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const writingPath = getWritingPath(post.slug);

  return new ImageResponse(
    <SocialImageCard
      eyebrow={`${post.tags.join(' / ')} / ${post.readingTime}`}
      title={post.title}
      description={post.summary}
      footer={`${siteConfig.url.replace('https://', '')}${writingPath}`}
    />,
    size,
  );
}
