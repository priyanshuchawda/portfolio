import type { Metadata } from 'next';
import { siteConfig } from './site';

export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  keywords?: readonly string[];
}): Metadata {
  const ogImage = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: title,
  };

  const twitterImage = {
    url: '/twitter-image',
    alt: title,
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
      siteName: `${siteConfig.name} Portfolio`,
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
