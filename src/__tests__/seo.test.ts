import { describe, expect, test } from 'vitest';
import manifest from '@/app/manifest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import { sameAsLinks, siteConfig } from '@/lib/site';
import { serializeJsonLd, structuredData } from '@/lib/structured-data';

describe('SEO indexing contract', () => {
  test('uses one canonical origin in sitemap and robots', () => {
    const [home] = sitemap();
    const robotsTxt = robots();

    expect(home?.url).toBe(siteConfig.url);
    expect(home?.alternates?.languages?.['en-US']).toBe(siteConfig.url);
    expect(robotsTxt.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
    expect(robotsTxt.host).toBe(siteConfig.url);
  });

  test('keeps Googlebot crawlable while blocking bulk training bots', () => {
    const rules = robots().rules;
    const googleRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('Googlebot'))
      : undefined;
    const trainingRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent.includes('GPTBot'))
      : undefined;

    expect(googleRule?.allow).toBe('/');
    expect(trainingRule?.disallow).toBe('/');
  });

  test('serializes structured data safely with canonical sameAs links', () => {
    const serialized = serializeJsonLd({
      ...structuredData,
      probe: '<script>alert(1)</script>',
    });

    expect(serialized).not.toContain('<script>');
    sameAsLinks.forEach((link) => {
      expect(serialized).toContain(link);
    });
  });

  test('generates a browser manifest for Search Console-friendly inspection', () => {
    const webManifest = manifest();

    expect(webManifest.name).toContain(siteConfig.name);
    expect(webManifest.start_url).toBe('/');
    expect(webManifest.icons?.[0]?.src).toBe('/favicon.ico');
  });
});
