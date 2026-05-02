import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { writingPosts } from '@/data/writing';
import { siteConfig } from '@/lib/site';

const siteLastModified = new Date(siteConfig.lastUpdated);

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
    lastModified: siteLastModified,
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
    lastModified: new Date(project.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'en-US': `${siteConfig.url}/projects/${project.slug}`,
        'x-default': `${siteConfig.url}/projects/${project.slug}`,
      },
    },
  }));

  const writingEntries = writingPosts.map((post) => ({
    url: `${siteConfig.url}/writing/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'en-US': `${siteConfig.url}/writing/${post.slug}`,
        'x-default': `${siteConfig.url}/writing/${post.slug}`,
      },
    },
  }));

  return [...staticEntries, ...projectEntries, ...writingEntries];
}
