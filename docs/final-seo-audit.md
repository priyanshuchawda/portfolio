# Final SEO Audit

Audit date: 2026-04-29 Scope: Next.js App Router portfolio with routes for home,
about, projects, project case studies, writing, achievements, contact, robots,
sitemap, manifest, and social images. Method: Full source review (app,
components, data, lib, docs, tests) plus lint, test, and production build
validation.

## Summary

- No critical SEO blockers found; metadata, structured data, sitemap, and robots
  are coherent and consistent.
- Added AI-assistant visibility improvements (llms.txt + explicit social images)
  alongside UI utility fixes.
- Routes were verified in the production build output.

## Findings

- C (Nice to have): Add external citations and screenshots to long-form writing
  once source material is stable.
- C (Nice to have): Add per-project OG image variants and FAQ sections once
  content is stable.

## Fixes applied

- Replaced invalid z-index utility on the skip link so it reliably layers above
  the header. [src/app/layout.tsx](src/app/layout.tsx#L101-L104)
- Corrected the command palette list max height with a valid Tailwind arbitrary
  value.
  [src/components/CommandPalette.tsx](src/components/CommandPalette.tsx#L85)
- Fixed the timeline marker left offset with a valid arbitrary spacing value.
  [src/components/Timeline.tsx](src/components/Timeline.tsx#L22-L26)
- Added explicit Open Graph/Twitter images in shared metadata.
  [src/lib/metadata.ts](src/lib/metadata.ts#L11-L45)
- Added llms.txt for AI assistant context and citations.
  [public/llms.txt](public/llms.txt)
- Updated sitemap lastModified values to use stable content update dates.
  [src/app/sitemap.ts](src/app/sitemap.ts#L5)
- Added real writing pages for MCP servers, LLM orchestration, and Gemini vs
  OpenAI developer tooling.
- Blocked `/cdn-cgi/` in robots while keeping normal pages crawlable for search
  and citation bots.
- Corrected Person structured data education fields.
- Removed `unsafe-eval` from the production CSP script policy.
- Added IndexNow key verification and submission support.

## Verification

- pnpm lint: passed
- pnpm test: passed
- pnpm build: passed (routes emitted for all expected pages and metadata routes)
