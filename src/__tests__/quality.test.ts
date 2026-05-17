import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

describe('Repository quality tooling', () => {
  test('keeps DeepSource configured for the TypeScript app stack', () => {
    const configPath = join(process.cwd(), '.deepsource.toml');

    expect(existsSync(configPath)).toBe(true);

    const config = readFileSync(configPath, 'utf8');

    expect(config).toContain('version = 1');
    expect(config).toMatch(/\[\[analyzers\]\]\s+name = "javascript"/);
    expect(config).toContain('plugins = ["react"]');
    expect(config).toContain('environment = ["nodejs", "browser", "vitest"]');
    expect(config).toContain('"src/__tests__/**"');
    expect(config).toContain('"node_modules/**"');
    expect(config).toContain('".next/**"');
  });
});
