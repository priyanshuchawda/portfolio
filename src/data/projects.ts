export type ProjectSlug =
  | 'youtube-flashcards'
  | 'ghfind'
  | 'browser4all'
  | 'smart-crowd-navigator';

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  architecture: string[];
  keyFeatures: string[];
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: ProjectSlug;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  featured: boolean;
  updatedAt: string;
  links: ProjectLinks;
  proof: string[];
  engineeringDecisions: Array<{
    label: string;
    detail: string;
  }>;
  metaTitle: string;
  metaDescription: string;
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'youtube-flashcards',
    title: 'YouTube Flashcards',
    subtitle: 'Gemini AI study tool',
    summary:
      'Turns YouTube lectures into interactive flashcards for faster review.',
    problem:
      'Watching long educational videos is passive and manual note-taking slows learning.',
    solution:
      'Uses Gemini AI to transform transcripts into concise Q/A flashcards with a quick review flow.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    impact:
      'Converts passive lecture watching into a reviewable study workflow with transcript parsing, structured Gemini output, and editable user approval before cards are trusted.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      demo: 'https://youtube-flashcards-alpha.vercel.app',
      github: 'https://github.com/priyanshuchawda/youtube-flashcards',
    },
    proof: [
      'Live demo',
      'GitHub repo',
      'Architecture notes',
      'Screenshots',
      'Tests / validation plan',
      'Known limitations',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'Next.js and TypeScript keep the transcript, generation, review, and deploy flow in one typed product surface while Gemini fits long educational source material.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the video input flow, AI prompt pipeline, flashcard data model, review UX, deployment path, and project documentation.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'Transcript quality varies heavily, so the product needs clear fallback states and user editing instead of pretending every generated card is correct.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I prioritized a fast review loop and editable cards over a heavier spaced-repetition engine for the first usable version.',
      },
      {
        label: 'How I tested it',
        detail:
          'I validated generation against different lecture styles, checked empty transcript paths, and reviewed whether card answers stayed concise and source-grounded.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add durable user accounts, spaced repetition, transcript-source citations, model output evals, and analytics for card quality.',
      },
    ],
    metaTitle: 'YouTube Flashcards | Priyanshu Chawda',
    metaDescription:
      'YouTube Flashcards is a Gemini AI study tool that turns long lectures into interactive flashcards for faster review and retention.',
    caseStudy: {
      overview:
        'Paste a YouTube link, generate flashcards instantly, and refine them into a focused study deck.',
      architecture: [
        'Parse video IDs and fetch transcripts when available',
        'Prompt Gemini to generate concise Q/A pairs with context',
        'Review and edit flashcards before saving or exporting',
      ],
      keyFeatures: [
        'Instant flashcard generation from video lectures',
        'Editable cards with quick review workflow',
        'Shareable decks for repeat study sessions',
      ],
      challenges: [
        'Handling inconsistent transcript quality across videos',
        'Balancing concise answers with enough learning context',
      ],
      learnings: [
        'Prompt iteration dramatically improves answer quality',
        'User review steps build trust in AI output',
      ],
      futureImprovements: [
        'Add spaced repetition sessions for long-term recall',
        'Support playlists and multi-video collections',
      ],
    },
  },
  {
    slug: 'ghfind',
    title: 'ghfind',
    subtitle: 'AI GitHub issue and PR search',
    summary:
      'AI-powered search for relevant GitHub issues and PRs using natural language.',
    problem:
      'Finding the right GitHub issues or PRs via the UI is slow and often incomplete.',
    solution:
      'Uses Gemini to interpret natural language queries and surface high-signal results quickly.',
    tech: ['Python', 'Streamlit', 'GitHub CLI', 'Gemini API'],
    impact:
      'Turns vague developer questions into targeted GitHub searches, reducing manual filtering through issues and PRs while preserving direct links to original discussions.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/ghfind',
    },
    proof: [
      'GitHub repo',
      'Architecture notes',
      'CLI integration',
      'Query validation',
      'Tests / validation plan',
      'Known limitations',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'Python, Streamlit, GitHub CLI, and Gemini made it possible to prototype a developer search workflow quickly while still keeping the search boundary inspectable.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the query flow, Gemini query expansion, GitHub CLI handoff, result ranking surface, and documentation for limitations.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'The difficult part was reducing noisy GitHub results without hiding the source links developers need to verify context.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I used GitHub CLI as a trusted integration layer instead of building a larger OAuth-backed GitHub app before the workflow was proven.',
      },
      {
        label: 'How I tested it',
        detail:
          'I ran natural-language searches across different repository topics and checked whether the returned issues and PRs matched the original intent.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add saved searches, repository scopes, result feedback, rate-limit handling, and an eval set for search relevance.',
      },
    ],
    metaTitle: 'ghfind | AI GitHub Search Tool',
    metaDescription:
      'ghfind is an AI GitHub issue and PR search tool powered by Gemini that helps developers find relevant discussions faster.',
    caseStudy: {
      overview:
        'A lightweight interface that turns natural language questions into targeted GitHub search results.',
      architecture: [
        'Collect query context and repos via GitHub CLI',
        'Use Gemini to expand queries with intent-aware keywords',
        'Render a ranked list of issues and PRs in a fast UI',
      ],
      keyFeatures: [
        'Natural language queries instead of manual filters',
        'Fast iteration with a lightweight Streamlit UI',
        'Direct links to relevant GitHub discussions',
      ],
      challenges: [
        'Tuning prompts to avoid noisy or irrelevant results',
        'Keeping response times fast for larger repos',
      ],
      learnings: [
        'Small prompt changes can improve relevance significantly',
        'Developer tools need clear, minimal UI to feel fast',
      ],
      futureImprovements: [
        'Add saved searches and query history',
        'Expand to code search and documentation lookups',
      ],
    },
  },
  {
    slug: 'browser4all',
    title: 'Browser4All',
    subtitle: 'AI secure browser with Gemini',
    summary:
      'AI secure browser concept with real-time phishing and malware analysis.',
    problem:
      'Phishing and malware evolve faster than traditional browser warnings can catch.',
    solution:
      'Applies Gemini-driven threat analysis to flag risky pages and downloads earlier.',
    tech: ['TypeScript', 'Gemini AI', 'Threat analysis pipeline'],
    impact:
      'Explores a defense-in-depth browser workflow where risky URLs and downloads are analyzed before user action, with explanations designed to reduce alert fatigue.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/browser4all',
    },
    proof: [
      'GitHub repo',
      'Architecture notes',
      'Threat-model notes',
      'Screenshots',
      'Tests / validation plan',
      'Known limitations',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'TypeScript keeps browser event handling and risk objects typed, while Gemini can summarize threat indicators into user-readable warnings.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I designed the risk-analysis flow, warning UX, threat indicator model, and the boundaries for when the assistant should block or only warn.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'Security UX is hard because warnings must be specific enough to help users without becoming noisy or slowing normal browsing.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I treated this as a focused security prototype instead of claiming production-grade detection accuracy without live threat feeds.',
      },
      {
        label: 'How I tested it',
        detail:
          'I validated the flow with suspicious URL patterns, download-risk scenarios, and warning copy checks for clarity.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would integrate reputation feeds, sandboxed scanning, telemetry, false-positive review, and enterprise policy controls.',
      },
    ],
    metaTitle: 'Browser4All | AI Secure Browser',
    metaDescription:
      'Browser4All is an AI secure browser concept using Gemini for phishing and malware analysis to improve browsing safety.',
    caseStudy: {
      overview:
        'A security-first browser experience that runs AI checks on risky URLs and downloads.',
      architecture: [
        'Intercept navigation and download events',
        'Run AI analysis for phishing and malware indicators',
        'Surface clear risk signals before user interaction',
      ],
      keyFeatures: [
        'Real-time risk scoring for suspicious links',
        'Download scanning with AI-driven alerts',
        'Security-first UX that avoids noisy warnings',
      ],
      challenges: [
        'Designing alerts that are accurate and actionable',
        'Balancing safety checks with smooth performance',
      ],
      learnings: [
        'Clear risk explanations improve user trust',
        'Security tooling must stay lightweight to be adopted',
      ],
      futureImprovements: [
        'Add phishing intelligence feeds for higher accuracy',
        'Expand to enterprise policy controls',
      ],
    },
  },
  {
    slug: 'smart-crowd-navigator',
    title: 'Smart Crowd Navigator',
    subtitle: 'AI crowd navigation system',
    summary:
      'AI crowd navigation system for safer exits and better flow during events.',
    problem:
      'Large events suffer from dangerous crowding and inefficient exit timing.',
    solution:
      'Uses AI analytics to suggest safer routes and timing for crowd movement.',
    tech: ['TypeScript', 'AI analytics', 'Simulation modeling'],
    impact:
      'Models crowd routing as an operator decision-support system with density signals, route tradeoffs, and safety-first recommendations instead of generic chatbot advice.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/smart-crowd-navigator',
    },
    proof: [
      'GitHub repo',
      'Architecture notes',
      'Simulation model',
      'Screenshots',
      'Tests / validation plan',
      'Known limitations',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'TypeScript fits a structured simulation UI where route, density, and recommendation objects need predictable state and clear rendering.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the event-flow model, recommendation logic, operator-facing UI, and documentation around sensor and deployment assumptions.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'The core challenge was keeping recommendations practical when real-time sensor data is incomplete or unavailable.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I focused on explainable operator guidance rather than a complex dashboard that would be harder to trust during high-pressure events.',
      },
      {
        label: 'How I tested it',
        detail:
          'I tested multiple congestion scenarios and checked whether route recommendations stayed consistent with the stated safety constraints.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add live sensor integrations, venue-specific calibration, simulation replay, and an audit trail for operator decisions.',
      },
    ],
    metaTitle: 'Smart Crowd Navigator | AI Crowd Tool',
    metaDescription:
      'Smart Crowd Navigator is an AI crowd navigation system that models safer exits and timing decisions for large events.',
    caseStudy: {
      overview:
        'A Gemini-inspired assistant concept that helps venues manage crowd flow in real time.',
      architecture: [
        'Ingest crowd density signals and event layout data',
        'Model route suggestions based on congestion patterns',
        'Provide guidance on exit timing and safe pathways',
      ],
      keyFeatures: [
        'Real-time crowd density awareness',
        'Route suggestions to avoid bottlenecks',
        'Safety-focused recommendations for venue operators',
      ],
      challenges: [
        'Modeling crowd behavior without real-time sensors',
        'Ensuring recommendations remain practical for staff',
      ],
      learnings: [
        'Simple guidance beats complex dashboards in emergencies',
        'AI outputs must remain explainable to operators',
      ],
      futureImprovements: [
        'Integrate live sensor data and simulations',
        'Add mobile guidance for attendee navigation',
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPath(slug: ProjectSlug) {
  return `/projects/${slug}`;
}
