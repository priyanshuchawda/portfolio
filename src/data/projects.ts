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
      'Designed to reduce manual note-making effort by turning lectures into structured flashcards.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      demo: 'https://youtube-flashcards-alpha.vercel.app',
      github: 'https://github.com/priyanshuchawda/youtube-flashcards',
    },
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
      'Speeds up developer discovery by narrowing results to the most relevant threads.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/ghfind',
    },
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
    impact: 'Built to prevent suspicious activity before it reaches end users.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/browser4all',
    },
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
      'Designed to improve safety and reduce congestion during high-traffic events.',
    featured: true,
    updatedAt: '2026-04-29',
    links: {
      github: 'https://github.com/priyanshuchawda/smart-crowd-navigator',
    },
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
