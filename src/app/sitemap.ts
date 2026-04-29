import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/lib/site';

const lastModified = new Date();

const staticRoutes = [
  '/',
  '/about',
  '/projects',
  '/services',
  '/writing',
  '/achievements',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
    alternates: {
      languages: {
        'en-US': `${siteConfig.url}${route === '/' ? '' : route}`,
        'x-default': `${siteConfig.url}${route === '/' ? '' : route}`,
      },
    },
  }));

  const projectEntries = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'en-US': `${siteConfig.url}/projects/${project.slug}`,
        'x-default': `${siteConfig.url}/projects/${project.slug}`,
      },
    },
  }));

  return [...staticEntries, ...projectEntries];
}
