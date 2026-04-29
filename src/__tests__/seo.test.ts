import { describe, expect, test } from 'vitest';
import manifest from '@/app/manifest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import { sameAsLinks, siteConfig } from '@/lib/site';
import {
  baseStructuredData,
  getFaqStructuredData,
  getProjectListStructuredData,
  getServiceCatalogStructuredData,
  personStructuredData,
  serializeJsonLd,
} from '@/lib/structured-data';
import { homeFaqs } from '@/data/faqs';
import { projects } from '@/data/projects';
import { services } from '@/data/services';

describe('SEO indexing contract', () => {
  test('keeps page and project titles short and unique for Bing', () => {
    const pageTitles = Object.values(pageMetadata).map((meta) => meta.title);
    const projectTitles = projects.map((project) => project.metaTitle);
    const titles = [...pageTitles, ...projectTitles];

    titles.forEach((title) => {
      expect(title.length).toBeLessThanOrEqual(70);
    });
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('uses absolute page metadata titles instead of the root title template', () => {
    const metadata = buildMetadata(pageMetadata.contact);

    expect(metadata.title).toEqual({
      absolute: pageMetadata.contact.title,
    });
  });

  test('uses one canonical origin in sitemap and robots', () => {
    const entries = sitemap();
    const robotsTxt = robots();

    expect(entries.length).toBeGreaterThan(1);
    expect(entries[0]?.url).toContain(siteConfig.url);
    expect(robotsTxt.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
    expect(robotsTxt.host).toBe(siteConfig.url);
    entries.forEach((entry) => {
      const url = new URL(entry.url);
      expect(url.origin).toBe(siteConfig.url);
      expect(entry.url).not.toContain('localhost');
      expect(entry.url).not.toContain('example.com');
    });
  });

  test('keeps search and AI citation bots crawlable while blocking bulk scrapers', () => {
    const rules = robots().rules;
    const googleRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('Googlebot'))
      : undefined;
    const bingRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('Bingbot'))
      : undefined;
    const aiRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('GPTBot'))
      : undefined;
    const bulkRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('CCBot'))
      : undefined;

    expect(googleRule?.allow).toBe('/');
    expect(bingRule?.allow).toBe('/');
    expect(aiRule?.allow).toBe('/');
    expect(bulkRule?.disallow).toBe('/');
  });

  test('serializes structured data safely with canonical sameAs links', () => {
    const serialized = serializeJsonLd({
      ...baseStructuredData,
      probe: '<script>alert(1)</script>',
    });

    expect(serialized).not.toContain('<script>');
    sameAsLinks.forEach((link) => {
      expect(serialized).toContain(link);
    });
  });

  test('keeps person schema fields populated', () => {
    expect(personStructuredData.name).toBe(siteConfig.name);
    expect(personStructuredData.url).toBe(siteConfig.url);
    expect(personStructuredData.jobTitle).toBe(siteConfig.jobTitle);
    expect(personStructuredData.knowsAbout.length).toBeGreaterThan(0);
  });

  test('generates a browser manifest for Search Console-friendly inspection', () => {
    const webManifest = manifest();

    expect(webManifest.name).toContain(siteConfig.name);
    expect(webManifest.start_url).toBe('/');
    expect(webManifest.icons?.[0]?.src).toBe('/favicon.ico');
  });

  test('sitemap includes key routes', () => {
    const urls = sitemap().map((entry) => entry.url);
    const requiredRoutes = [
      siteConfig.url,
      `${siteConfig.url}/about`,
      `${siteConfig.url}/projects`,
      `${siteConfig.url}/services`,
      `${siteConfig.url}/writing`,
      `${siteConfig.url}/achievements`,
      `${siteConfig.url}/contact`,
    ];

    requiredRoutes.forEach((route) => {
      expect(urls).toContain(route);
    });
    expect(urls).toContain(`${siteConfig.url}/contact`);
  });

  test('generates FAQ, project list, and service catalog schema', () => {
    const faqSchema = getFaqStructuredData(homeFaqs);
    const projectListSchema = getProjectListStructuredData(projects);
    const serviceCatalogSchema = getServiceCatalogStructuredData(services);

    expect(faqSchema['@type']).toBe('FAQPage');
    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);
    expect(projectListSchema['@type']).toBe('ItemList');
    expect(projectListSchema.itemListElement.length).toBe(projects.length);
    expect(serviceCatalogSchema['@type']).toBe('OfferCatalog');
    expect(serviceCatalogSchema.itemListElement.length).toBe(services.length);
  });
});
