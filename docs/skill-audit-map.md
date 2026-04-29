# Skill Audit Map

Audit date: 2026-04-29 Scope: Next.js App Router portfolio for Priyanshu Chawda
Positioning to preserve: "Priyanshu Chawda is an AI-focused software engineer
building agentic systems, MCP tools, developer automation, and full-stack AI
applications."

## Skills inventory (all found)

- ai-seo
- backlink-analyzer
- build-links
- content-gap-analysis
- find-keywords
- geo-content-optimizer
- keyword-research
- next-best-practices
- nextjs
- on-page-seo-auditor
- optimize-for-ai
- programmatic-seo
- seo
- seo-aeo-best-practices
- seo-audit
- seo-geo
- tailwind-best-practices
- tailwind-css-patterns
- tailwind-design-system
- technical-seo-checker
- ui-ux-pro-max
- vercel-react-best-practices

## Skills read

All SKILL.md files were read. Relevant reference files were read for AI
SEO/GEO/AEO, technical SEO, structured data, metadata, Next.js App Router,
Vercel React performance, Tailwind/UI/UX, accessibility, and keyword/content gap
frameworks.

## Relevance classification

### Relevant now

- ai-seo (AI citation structure, bots access, extractability)
- geo-content-optimizer (GEO answer-first structure, definitions, FAQ/schema
  patterns)
- optimize-for-ai (AEO/AI visibility checklist)
- seo (technical + on-page baseline)
- seo-aeo-best-practices (EEAT, structured data, metadata, AEO)
- seo-geo (AI bot access, schema templates, SEO/GEO checklist)
- seo-audit (full SEO audit framework)
- on-page-seo-auditor (title/meta/H1/heading structure and scoring)
- technical-seo-checker (robots/sitemap/crawlability/Core Web Vitals)
- nextjs (App Router constraints, metadata rules)
- next-best-practices (file conventions, metadata, route handlers, images,
  fonts)
- vercel-react-best-practices (waterfalls, bundle size, rendering performance)
- tailwind-css-patterns (responsive, accessibility, performance)
- ui-ux-pro-max (accessibility, hierarchy, interaction rules)

### Conditionally relevant

- content-gap-analysis (only if planning new content strategy)
- keyword-research / find-keywords (only if doing keyword planning)
- tailwind-design-system (only if migrating to Tailwind v4 design system)

### Not relevant now

- backlink-analyzer (no backlink audit requested)
- build-links (no outreach/link acquisition requested)
- programmatic-seo (no pSEO page expansion needed)
- tailwind-best-practices (scoped to external packages, not this repo)

## Extracted audit rules (key signals)

### AI SEO / GEO / AEO

- Answer-first structure; definition blocks near top; 25-50 word standalone
  definitions.
- Use scannable H2/H3 headings that match query phrasing.
- Add quotable statements with specific numbers and named sources; avoid vague
  claims.
- Favor tables/lists for comparisons and processes.
- Provide FAQ sections when natural and align FAQ schema to visible content.
- Show freshness (updated date where appropriate).
- Allow AI bots (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai,
  Google-Extended, Bingbot) unless policy says otherwise.

### Traditional SEO

- Unique title + description per page (title 50-60 chars, description 150-160
  chars).
- One H1 per page with clear topic; logical H2/H3 hierarchy.
- Canonical URLs correct and consistent; avoid duplicates.
- Open Graph + Twitter metadata present.
- Clean URL slugs; internal links use descriptive anchors.
- No broken links; no accidental noindex.

### Structured data

- Person/Organization/WebSite schemas valid and not duplicated unnecessarily.
- BreadcrumbList when breadcrumbs appear.
- JSON-LD must be serializable, align with visible content, and avoid
  unsupported claims.
- Use @graph when multiple schema types exist on a page.

### Technical SEO

- robots.txt returns 200, includes sitemap URL, does not block critical routes
  or assets.
- sitemap contains only indexable, canonical URLs; lastmod reflects real
  updates.
- Core Web Vitals targets: LCP <2.5s, INP <200ms, CLS <0.1.

### Next.js App Router

- Server Components by default; avoid unnecessary 'use client'.
- Metadata only in Server Components; use generateMetadata as needed.
- params/searchParams/cookies/headers are async in Next.js 15+.
- Use next/image and next/font for performance and CLS control.
- Do not co-locate route.ts with page.tsx in same folder.

### React/Vercel performance

- Avoid data waterfalls; use Promise.all or parallel fetch patterns.
- Reduce client bundle size; avoid barrel imports and large client-only deps.
- Hoist static I/O; minimize RSC->client serialization payloads.

### UI/UX + accessibility

- Visible focus states; WCAG contrast; semantic headings.
- Touch target size >= 44x44px where relevant.
- Avoid layout shift; reserve image dimensions and avoid heavy animation.
- Mobile-first layout and readable line-lengths.

## How rules will be applied to this project

- Verify metadata for all routes (titles, descriptions, OG/Twitter, canonical,
  metadataBase).
- Validate robots.ts and sitemap.ts output against AI bot access and public
  routes.
- Review structured data generation for Person/WebSite/Project/ Breadcrumb
  validity and consistency.
- Audit each page for single H1, heading structure, and clear "AI-focused
  software engineer" positioning.
- Validate project case studies for non-exaggerated claims and structured
  content (problem, solution, stack, impact).
- Check server/client boundaries; remove unnecessary 'use client' and
  client-only logic in server pages.
- Review Tailwind usage for accessibility, responsive behavior, and CLS
  mitigation.
- Strengthen tests that cover data integrity, metadata presence, structured data
  fields, sitemap routes, and slug validity.

## Applied fixes in this pass

- Replaced invalid Tailwind utilities in the skip link, command palette list,
  and timeline marker offset to ensure compiled CSS matches intended layout.
- Added explicit Open Graph/Twitter images in metadata and introduced llms.txt
  for AI assistant context.
- Updated sitemap lastModified to build-time values for fresher indexing
  signals.
