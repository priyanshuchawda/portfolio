import { sameAsLinks, siteConfig } from './site';

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      image: `${siteConfig.url}/opengraph-image`,
      jobTitle: 'AI Engineer',
      description: siteConfig.description,
      sameAs: sameAsLinks,
      knowsAbout: siteConfig.knowsAbout,
      hasOccupation: {
        '@type': 'Occupation',
        name: 'AI Engineer',
        skills: siteConfig.knowsAbout,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: `${siteConfig.name} - AI Engineer Portfolio`,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      about: {
        '@id': `${siteConfig.url}/#person`,
      },
      mainEntity: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
  ],
} as const;

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
