import { sameAsLinks, siteConfig } from './site';
import type { FAQItem } from '@/data/faqs';
import type { Project } from '@/data/projects';
import type { Service } from '@/data/services';
import type { WritingPost } from '@/data/writing';

const websiteStructuredData = {
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: {
    '@id': `${siteConfig.url}/#person`,
  },
} as const;

export const personStructuredData = {
  '@type': 'Person',
  '@id': `${siteConfig.url}/#person`,
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  image: `${siteConfig.url}/opengraph-image`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  sameAs: sameAsLinks,
  knowsAbout: siteConfig.knowsAbout,
  homeLocation: {
    '@type': 'Place',
    name: 'Pune, India',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'PES Modern College of Engineering',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'B.Tech Computer Science and Engineering',
  },
  knowsLanguage: ['en-US', 'hi-IN'],
  hasOccupation: {
    '@type': 'Occupation',
    name: siteConfig.jobTitle,
    skills: siteConfig.knowsAbout,
  },
} as const;

export const baseStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [websiteStructuredData, personStructuredData],
} as const;

export function getWebPageStructuredData({
  name,
  description,
  path,
  type = 'WebPage',
}: {
  name: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'ProfilePage';
}) {
  const pageData: {
    '@context': 'https://schema.org';
    '@type': 'WebPage' | 'ProfilePage';
    '@id': string;
    url: string;
    name: string;
    description: string;
    inLanguage: string;
    isPartOf: { '@id': string };
    about: { '@id': string };
    mainEntity?: { '@id': string };
  } = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${siteConfig.url}${path}#webpage`,
    url: `${siteConfig.url}${path}`,
    name,
    description,
    inLanguage: siteConfig.language,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#person`,
    },
  };

  if (type === 'ProfilePage') {
    pageData.mainEntity = {
      '@id': `${siteConfig.url}/#person`,
    };
  }

  return pageData;
}

export function getBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  } as const;
}

export function getFaqStructuredData(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } as const;
}

export function getProjectListStructuredData(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteConfig.url}/projects#project-list`,
    name: `Projects by ${siteConfig.name}`,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteConfig.url}/projects/${project.slug}`,
      name: project.title,
      description: project.summary,
    })),
  } as const;
}

export function getProjectStructuredData(project: Project) {
  const sameAs = [
    project.links.github,
    project.links.demo,
    project.links.npm,
    project.links.skills,
  ].filter((link): link is string => Boolean(link));
  const packageInfo = project.packageInfo;
  const usageInfo = [
    packageInfo?.installCommand,
    packageInfo?.skillInstallCommand,
  ]
    .filter((command): command is string => Boolean(command))
    .join(' | ');

  return {
    '@context': 'https://schema.org',
    '@type': packageInfo ? 'SoftwareSourceCode' : 'CreativeWork',
    '@id': `${siteConfig.url}/projects/${project.slug}#project`,
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    inLanguage: siteConfig.language,
    keywords: [...project.tech, ...(project.seoKeywords ?? [])].join(', '),
    author: {
      '@id': `${siteConfig.url}/#person`,
    },
    creator: {
      '@id': `${siteConfig.url}/#person`,
    },
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    mainEntityOfPage: `${siteConfig.url}/projects/${project.slug}`,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    codeRepository: project.links.github,
    programmingLanguage: project.tech.includes('TypeScript')
      ? 'TypeScript'
      : undefined,
    runtimePlatform: packageInfo?.runtime,
    softwareVersion: packageInfo?.version,
    installUrl: packageInfo?.registryUrl,
    usageInfo: usageInfo || undefined,
    license: packageInfo?.license,
    applicationCategory: packageInfo ? 'DeveloperApplication' : undefined,
    operatingSystem: packageInfo ? 'Cross-platform' : undefined,
    dateModified: project.updatedAt,
  } as const;
}

export function getArticleStructuredData(post: WritingPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteConfig.url}/writing/${post.slug}#article`,
    headline: post.title,
    description: post.summary,
    url: `${siteConfig.url}/writing/${post.slug}`,
    inLanguage: siteConfig.language,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.tags.join(', '),
    author: {
      '@id': `${siteConfig.url}/#person`,
    },
    publisher: {
      '@id': `${siteConfig.url}/#person`,
    },
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
  } as const;
}

export function getServiceCatalogStructuredData(services: readonly Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${siteConfig.url}/services#service-catalog`,
    name: `${siteConfig.name} AI engineering services`,
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${siteConfig.url}/#person`,
        },
        areaServed: 'Worldwide',
        serviceType: service.keywords.join(', '),
        url: `${siteConfig.url}/services#${service.slug}`,
      },
    })),
  } as const;
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
