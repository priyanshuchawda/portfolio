import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import manifest from '@/app/manifest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';
import { generateMetadata as generateProjectMetadata } from '@/app/projects/[slug]/page';
import { pageMetadata } from '@/data/seo';
import { buildMetadata } from '@/lib/metadata';
import { sameAsLinks, siteConfig } from '@/lib/site';
import {
  baseStructuredData,
  getFaqStructuredData,
  getProjectListStructuredData,
  getProjectStructuredData,
  getServiceCatalogStructuredData,
  personStructuredData,
  serializeJsonLd,
} from '@/lib/structured-data';
import { homeFaqs } from '@/data/faqs';
import { getProjectBySlug, projects } from '@/data/projects';
import { services } from '@/data/services';
import { writingPosts } from '@/data/writing';
import aiProfile from '../../public/ai-profile.json';

const MIN_META_DESCRIPTION_LENGTH = 25;
const MAX_META_DESCRIPTION_LENGTH = 160;
const reposentinelProjectUrl = `${siteConfig.url}/projects/reposentinel-mcp`;

function expectValidMetaDescription(label: string, description: string) {
  expect(description, `${label} should not be empty`).toBeTruthy();
  expect(
    description.length,
    `${label} should be at least ${MIN_META_DESCRIPTION_LENGTH} characters`,
  ).toBeGreaterThanOrEqual(MIN_META_DESCRIPTION_LENGTH);
  expect(
    description.length,
    `${label} should be at most ${MAX_META_DESCRIPTION_LENGTH} characters`,
  ).toBeLessThanOrEqual(MAX_META_DESCRIPTION_LENGTH);
}

describe('SEO indexing contract', () => {
  test('keeps page and project titles short and unique for Bing', () => {
    const pageTitles = Object.values(pageMetadata).map((meta) => meta.title);
    const projectTitles = projects.map((project) => project.metaTitle);
    const writingTitles = writingPosts.map((post) => post.metaTitle);
    const titles = [...pageTitles, ...projectTitles, ...writingTitles];

    titles.forEach((title) => {
      expect(title.length).toBeLessThanOrEqual(70);
    });
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('keeps rendered meta descriptions useful, unique, and in Bing range', () => {
    expectValidMetaDescription(
      'siteConfig.description',
      siteConfig.description,
    );
    expect(pageMetadata.home.description).toBe(siteConfig.description);

    const routeDescriptions = [
      ...Object.entries(pageMetadata).map(([key, meta]) => ({
        label: `pageMetadata.${key}.description`,
        description: meta.description,
      })),
      ...projects.map((project) => ({
        label: `projects.${project.slug}.metaDescription`,
        description: project.metaDescription,
      })),
      ...writingPosts.map((post) => ({
        label: `writingPosts.${post.slug}.metaDescription`,
        description: post.metaDescription,
      })),
    ];

    routeDescriptions.forEach(({ label, description }) => {
      expectValidMetaDescription(label, description);
    });

    const descriptions = routeDescriptions.map((item) => item.description);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  test('keeps project descriptions used by schema in Bing range', () => {
    projects.forEach((project) => {
      expectValidMetaDescription(
        `projects.${project.slug}.summary`,
        project.summary,
      );
    });
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
    const wildcardRule = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent === '*')
      : undefined;

    expect(googleRule?.allow).toBe('/');
    expect(bingRule?.allow).toBe('/');
    expect(aiRule?.allow).toBe('/');
    expect(googleRule?.disallow).toContain('/cdn-cgi/');
    expect(bingRule?.disallow).toContain('/cdn-cgi/');
    expect(wildcardRule?.disallow).toContain('/cdn-cgi/');
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
    expect(personStructuredData.alumniOf.name).toBe(
      'PES Modern College of Engineering',
    );
    expect(personStructuredData.hasCredential.name).toBe(
      'B.Tech Computer Science and Engineering',
    );
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
    writingPosts.forEach((post) => {
      expect(urls).toContain(`${siteConfig.url}/writing/${post.slug}`);
    });
    expect(urls).toContain(reposentinelProjectUrl);
  });

  test('sitemap uses stable content dates for freshness signals', () => {
    const entries = sitemap();
    const homeEntry = entries.find((entry) => entry.url === siteConfig.url);
    const projectEntry = entries.find(
      (entry) => entry.url === `${siteConfig.url}/projects/${projects[0].slug}`,
    );
    const writingEntry = entries.find(
      (entry) =>
        entry.url === `${siteConfig.url}/writing/${writingPosts[0].slug}`,
    );

    expect(homeEntry?.lastModified).toEqual(new Date(siteConfig.lastUpdated));
    expect(projectEntry?.lastModified).toEqual(new Date(projects[0].updatedAt));
    expect(writingEntry?.lastModified).toEqual(
      new Date(writingPosts[0].updatedAt),
    );
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

  test('RepoSentinel MCP page metadata targets MCP and npm package discovery', async () => {
    const metadata = await generateProjectMetadata({
      params: Promise.resolve({ slug: 'reposentinel-mcp' }),
    });

    expect(metadata.alternates?.canonical).toBe('/projects/reposentinel-mcp');
    expect(metadata.openGraph?.url).toBe('/projects/reposentinel-mcp');
    expect(metadata.title).toEqual({
      absolute: 'RepoSentinel MCP | TypeScript MCP Server',
    });
    expect(metadata.description).toContain('npm');
    expect(metadata.keywords).toEqual(
      expect.arrayContaining([
        'RepoSentinel MCP',
        'reposentinel-mcp',
        'Model Context Protocol server',
        'MCP repository audit',
        'npm MCP server',
      ]),
    );
  });

  test('RepoSentinel MCP structured data includes package, source, and install facts', () => {
    const project = getProjectBySlug('reposentinel-mcp');
    expect(project).toBeDefined();

    const schema = getProjectStructuredData(project!);

    expect(schema['@type']).toBe('SoftwareSourceCode');
    expect(schema.name).toBe('RepoSentinel MCP');
    expect(schema.url).toBe(reposentinelProjectUrl);
    expect(schema.sameAs).toEqual(
      expect.arrayContaining([
        'https://github.com/priyanshuchawda/reposentinel-mcp',
        'https://www.npmjs.com/package/reposentinel-mcp',
      ]),
    );
    expect(schema.codeRepository).toBe(
      'https://github.com/priyanshuchawda/reposentinel-mcp',
    );
    expect(schema.runtimePlatform).toBe('Node.js');
    expect(schema.softwareVersion).toBe('0.1.1');
    expect(schema.installUrl).toBe(
      'https://www.npmjs.com/package/reposentinel-mcp',
    );
    expect(schema.usageInfo).toContain('npx -y reposentinel-mcp');
  });

  test('AI-readable discovery files mention RepoSentinel MCP and npm package evidence', () => {
    const llmsText = readFileSync(
      join(process.cwd(), 'public/llms.txt'),
      'utf8',
    );

    expect(llmsText).toContain(reposentinelProjectUrl);
    expect(llmsText).toContain(
      'https://www.npmjs.com/package/reposentinel-mcp',
    );
    expect(llmsText).toContain('npx -y reposentinel-mcp');

    expect(aiProfile.keyPages).toContain(reposentinelProjectUrl);
    expect(aiProfile.projects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'RepoSentinel MCP',
          url: reposentinelProjectUrl,
          npm: 'https://www.npmjs.com/package/reposentinel-mcp',
        }),
      ]),
    );
  });
});
