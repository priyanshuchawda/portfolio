import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const lastModified = new Date('2026-04-28T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'en-US': siteConfig.url,
        },
      },
    },
  ];
}
