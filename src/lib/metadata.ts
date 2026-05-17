import type { Metadata } from 'next';
import { siteConfig } from './site';

export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  keywords,
  imagePath,
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  keywords?: readonly string[];
  imagePath?: string;
  imageAlt?: string;
}): Metadata {
  const ogImagePath = imagePath ?? '/opengraph-image';
  const twitterImagePath = imagePath ?? '/twitter-image';
  const ogImage = {
    url: ogImagePath,
    width: 1200,
    height: 630,
    alt: imageAlt ?? title,
  };

  const twitterImage = {
    url: twitterImagePath,
    alt: imageAlt ?? title,
  };

  return {
    title: { absolute: title },
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: path,
      languages: {
        'en-US': path,
        'x-default': path,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url: path,
      title,
      description,
      siteName: siteConfig.name,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
      images: [twitterImage],
    },
  };
}
