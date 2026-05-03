import { describe, expect, test } from 'vitest';
import { mainNav } from '@/data/navigation';
import { pageMetadata } from '@/data/seo';
import { projects } from '@/data/projects';
import { services } from '@/data/services';
import { getProjectStructuredData } from '@/lib/structured-data';

describe('Content data integrity', () => {
  test('project slugs are unique and required fields exist', () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.impact).toBeTruthy();
      expect(project.artifacts.length).toBeGreaterThan(2);
      expect(project.engineeringDecisions.length).toBe(6);
    });
  });

  test('featured projects exist', () => {
    expect(projects.some((project) => project.featured)).toBe(true);
  });

  test('RepoSentinel MCP project is listed with repository and npm links', () => {
    const project = projects.find((item) => item.slug === 'reposentinel-mcp');

    expect(project?.title).toBe('RepoSentinel MCP');
    expect(project?.links.github).toBe(
      'https://github.com/priyanshuchawda/reposentinel-mcp',
    );
    expect(project?.links.npm).toBe(
      'https://www.npmjs.com/package/reposentinel-mcp',
    );
  });

  test('service entries are unique and useful', () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    services.forEach((service) => {
      expect(service.name).toBeTruthy();
      expect(service.description.length).toBeGreaterThan(80);
      expect(service.outcomes.length).toBeGreaterThan(1);
      expect(service.keywords.length).toBeGreaterThan(1);
      expect(service.relatedWork.length).toBeGreaterThan(0);
    });
  });

  test('navigation routes are unique and valid', () => {
    const paths = mainNav.map((item) => item.href);
    expect(new Set(paths).size).toBe(paths.length);

    paths.forEach((path) => {
      expect(path.startsWith('/')).toBe(true);
    });
  });

  test('page metadata entries include titles, descriptions, and canonical paths', () => {
    Object.values(pageMetadata).forEach((meta) => {
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.path.startsWith('/')).toBe(true);
    });
  });

  test('project structured data includes required fields', () => {
    projects.forEach((project) => {
      const schema = getProjectStructuredData(project);
      expect(schema['@type']).toBe('CreativeWork');
      expect(schema.name).toBe(project.title);
      expect(schema.url).toContain(`/projects/${project.slug}`);
    });
  });
});
