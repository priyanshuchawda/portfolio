# SEO Migration Plan

## Current architecture summary

- Next.js App Router in src/app with a single homepage at app/page.tsx.
- Tailwind CSS v4 with CSS variables in app/globals.css; dark theme by default.
- Site metadata defined in app/layout.tsx with metadataBase, Open Graph,
  Twitter, robots, and verification.
- JSON-LD structured data in lib/structured-data.ts injected in app/layout.tsx.
- SEO route files in app: manifest.ts, robots.ts, sitemap.ts,
  opengraph-image.tsx, twitter-image.tsx.
- Content and section components are currently in a single file (app/page.tsx).
- Command palette in components/CommandPalette.tsx uses hash navigation and
  external links.
- Tests use Vitest + React Testing Library in src/**tests**.

## Existing SEO strengths

- App Router metadata API in use with metadataBase and canonical defaults.
- Robots, sitemap, manifest, Open Graph, and Twitter image routes exist.
- JSON-LD structured data for WebSite + Person + ProfilePage is present.
- Accessible basics: skip link, semantic sections, clear headings, aria labels.
- Security headers configured in next.config.ts.

## Existing SEO weaknesses

- Single-page layout relies on hash navigation; limited crawl depth and poor
  keyword separation.
- Sitemap only includes the homepage; no route-level entries.
- Page-level metadata only exists for the homepage; no unique
  titles/descriptions per section.
- Structured data is global only; no breadcrumbs or project-level schema.
- Project impact claims include at least one potentially inflated metric.
- Navigation links are anchored to sections rather than internal routes.

## Proposed multi-page route structure

- /
- /about
- /projects
- /projects/youtube-flashcards
- /projects/ghfind
- /projects/browser4all
- /projects/smart-crowd-navigator
- /writing
- /achievements
- /contact
- Optional: /now (only if it fits cleanly)

## Components to reuse

- Hero section, SectionHeading, ProjectCard, Timeline, Stats, Contact CTA,
  SiteFooter.
- CommandPalette (update to use routes + sections).

## Components to create/refactor

- Header/Nav (shared) with route links and optional section anchors for home.
- ProjectDetail layout (hero, problem, solution, stack, architecture, etc.).
- Breadcrumbs component for project pages and deeper routes.
- Reusable CTA component for page endings.
- Structured data helper for per-page JSON-LD blocks.

## Data/config to extract

- src/data/profile.ts (bio, education, skills, focus, now building, links).
- src/data/projects.ts (projects list + case study content + links).
- src/data/achievements.ts (metrics and verified items).
- src/data/navigation.ts (site nav + command palette items).

## Testing plan

- Projects data: unique slugs, required fields, featured list exists.
- SEO helpers/config: page titles and descriptions exist, canonical paths valid.
- Navigation data: unique paths and valid routes.
- Structured data: Person schema has required fields; Project schema for case
  studies.
- Avoid snapshot-only tests; assert real constraints.

## Implementation checklist

1. Extract site content into data files (profile, projects, achievements,
   navigation).
2. Create shared layout components (Header/Nav, Footer, SectionHeading, CTA).
3. Split home page into reusable sections and keep the hero, preview cards, and
   proof stats concise.
4. Add new routes with page-level metadata and semantic headings.
5. Build projects index and case-study pages from data.
6. Add About, Writing, Achievements, Contact pages using existing content only.
7. Update CommandPalette and navigation to route-based links.
8. Expand sitemap.ts and robots.ts to cover all routes.
9. Add JSON-LD per page: breadcrumbs, project schema where applicable.
10. Update tests to cover new data, metadata, navigation, and structured data.
11. Run lint/test/build scripts and fix any errors.
12. Create docs/seo-implementation-report.md after implementation.
