# Priyanshu Chawda Portfolio

SEO-optimized personal portfolio for Priyanshu Chawda, an AI-focused software
engineer building agentic systems, MCP tools, developer automation, and
full-stack AI applications.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Vitest
- Structured Data / JSON-LD
- SEO, GEO, and AI-search optimization

## Routes

- `/`
- `/about`
- `/projects`
- `/projects/youtube-flashcards`
- `/projects/ghfind`
- `/projects/browser4all`
- `/projects/smart-crowd-navigator`
- `/services`
- `/writing`
- `/writing/what-are-mcp-servers`
- `/writing/how-llm-orchestration-works`
- `/writing/gemini-vs-openai-for-developer-tools`
- `/achievements`
- `/contact`

## SEO Features

- Unique metadata per page
- Canonical URLs
- Open Graph and Twitter images
- Sitemap
- Robots.txt
- JSON-LD structured data
- `llms.txt`
- `ai-profile.json`
- IndexNow submission script

## Development

```bash
pnpm install
pnpm dev
```

## IndexNow

Set `INDEXNOW_KEY` in production so `/<INDEXNOW_KEY>.txt` returns the key for
search engine verification, then submit the deployed sitemap URLs after content
updates:

```bash
pnpm seo:indexnow
```
