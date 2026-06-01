export type ProjectSlug =
  | 'gemma-control'
  | 'screen-recorder'
  | 'codeaudit'
  | 'workaudit-ai'
  | 'youtube-flashcards'
  | 'ghfind'
  | 'browser4all'
  | 'smart-crowd-navigator';

export interface ProjectLinks {
  github?: string;
  demo?: string;
  npm?: string;
  skills?: string;
}

export interface ProjectPackageInfo {
  name: string;
  version: string;
  installCommand: string;
  skillName?: string;
  skillInstallCommand?: string;
  registryUrl: string;
  skillsUrl?: string;
  runtime: string;
  license: string;
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
  seoKeywords?: string[];
  packageInfo?: ProjectPackageInfo;
  artifacts: string[];
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
    slug: 'gemma-control',
    title: 'GemmaControl',
    subtitle: 'Private on-device WhatsApp AI agent',
    summary:
      'Native Android AI agent that turns WhatsApp notifications into a local actionable inbox with offline FunctionGemma tool-call suggestions.',
    problem:
      'Busy WhatsApp conversations create scattered follow-ups, priority messages, and reminders, while cloud assistants introduce privacy risk for personal or work chats.',
    solution:
      'I built a Kotlin Android app that captures notifications with user permission, parses WhatsApp message context, stores sensitive data locally with AES-GCM encryption, and uses on-device FunctionGemma through LiteRT-LM to propose user-confirmed actions.',
    tech: [
      'Kotlin',
      'Android 16',
      'Jetpack Compose',
      'Room SQLite',
      'WorkManager',
      'LiteRT-LM',
      'FunctionGemma 270M',
      'AES-GCM',
      'Android Keystore',
      'MVVM',
    ],
    impact:
      'Demonstrates a privacy-first mobile AI agent pattern where notification ingestion, task extraction, reminders, priority flags, and reply preparation stay on device unless the user explicitly acts.',
    featured: true,
    updatedAt: '2026-06-01',
    links: {
      github: 'https://github.com/priyanshuchawda/gemma_control',
    },
    seoKeywords: [
      'GemmaControl',
      'gemma_control',
      'WhatsApp AI agent',
      'on-device AI',
      'FunctionGemma 270M',
      'LiteRT-LM',
      'Android notification listener',
      'private Android assistant',
      'AES-GCM encrypted storage',
      'Jetpack Compose AI app',
    ],
    artifacts: [
      'GitHub repo',
      'Native Android app',
      'Technical documentation',
      'Notification parser',
      'Tool registry',
      'Security and privacy notes',
      'Static download website',
      'Device validation evidence',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'Kotlin, Jetpack Compose, Room, WorkManager, LiteRT-LM, and FunctionGemma fit an Android-native assistant that can keep message processing, reminders, and model inference local on a real handset.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the notification ingestion flow, WhatsApp parsing model, local inbox, follow-up and reminder tools, Compose confirmation screens, encrypted storage boundary, and download-site packaging.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'The hardest part was making notification actions useful while preventing silent automation, so every reply path requires active notification verification and a physical user confirmation.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I kept the assistant English-only and on-device for the first version instead of adding broader language support or cloud model fallback that would weaken the privacy story.',
      },
      {
        label: 'How I tested it',
        detail:
          'I validated the app against Android 16 behavior, WhatsApp notification structures, duplicate event handling, reminder delivery, encryption boundaries, and Redmi 13 5G device constraints discovered through ADB.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add broader device testing, stronger release signing workflows, richer local evaluation fixtures, multilingual handling, and more transparent model-download state management.',
      },
    ],
    metaTitle: 'GemmaControl | Private WhatsApp AI Agent',
    metaDescription:
      'GemmaControl is a Kotlin Android AI agent that organizes WhatsApp notifications into a private local inbox with on-device FunctionGemma tool-call suggestions.',
    caseStudy: {
      overview:
        'An Android-native productivity agent that captures allowed WhatsApp notifications, turns them into local tasks, and proposes actions without sending chat context to a hosted assistant.',
      architecture: [
        'Notification listener parses MessagingStyle payloads, separates group headers from message authors, and deduplicates reposted events',
        'Room SQLite stores inbox items, follow-ups, priorities, reminders, drafts, and sensitive message text under Android Keystore-backed AES-GCM encryption',
        'LiteRT-LM runs FunctionGemma as a proposal engine while Kotlin tool handlers enforce permission, verification, and confirmation boundaries',
      ],
      keyFeatures: [
        'Local WhatsApp notification inbox with priority and cleanup controls',
        'Follow-up creation, encrypted local reminders, and WorkManager notification delivery',
        'User-confirmed click-to-chat and live remote-input reply paths',
        'Scoped network access limited to explicit model binary downloads',
      ],
      challenges: [
        'Parsing varied WhatsApp notification structures without over-collecting message content',
        'Designing AI tool calls as proposals while keeping direct action behind user confirmation',
      ],
      learnings: [
        'On-device assistants need strong UX boundaries as much as model capability',
        'Android notification workflows require careful deduplication and lifecycle handling',
      ],
      futureImprovements: [
        'Expand physical device validation beyond the initial Redmi 13 5G target',
        'Add stronger local evals for notification parsing and proposed tool calls',
      ],
    },
  },
  {
    slug: 'screen-recorder',
    title: 'Screen Recorder',
    subtitle: 'Native Windows capture and encoding app',
    summary:
      'Stable C++20 Windows screen recorder with WGC capture, D3D11, hardware-first H.264, WASAPI audio, camera overlay, HQ mode, and diagnostics.',
    problem:
      'Reliable Windows screen recording needs low overhead capture, synchronized audio/video output, useful diagnostics, and graceful fallbacks across different GPU and power states.',
    solution:
      'I built a native Win32/C++ recorder that captures the full screen through Windows Graphics Capture, encodes MP4 output with Media Foundation and Intel Quick Sync when available, records system audio through WASAPI, and writes per-session diagnostics beside each recording.',
    tech: [
      'C++20',
      'Win32',
      'Windows Graphics Capture',
      'D3D11',
      'Media Foundation',
      'Intel Quick Sync',
      'WASAPI',
      'CMake',
      'CPack',
      'GitHub Actions',
    ],
    impact:
      'Ships a lightweight native recording pipeline with default low-resource capture, optional 1080p HQ output, camera overlay, audio controls, orphaned partial-file recovery, and a public Netlify documentation site.',
    featured: true,
    updatedAt: '2026-06-01',
    links: {
      github: 'https://github.com/priyanshuchawda/screen-recorder',
      demo: 'https://screen-recorder-windows.netlify.app',
    },
    seoKeywords: [
      'Screen Recorder',
      'screen-recorder',
      'native Windows recorder',
      'C++20 screen capture',
      'Windows Graphics Capture',
      'D3D11 recorder',
      'Media Foundation H.264',
      'WASAPI audio capture',
      'Intel Quick Sync',
      'MP4 recorder',
    ],
    artifacts: [
      'GitHub repo',
      'Live documentation site',
      'Native Windows app',
      'CMake build',
      'CPack ZIP package',
      'GitHub Actions CI',
      'Per-session diagnostics',
      'MIT license',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'C++20, Win32, WGC, D3D11, Media Foundation, and WASAPI provide direct access to the Windows capture and encoding path without the overhead of a cross-platform shell.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the capture controller, hardware-first encoder selection, audio loopback path, camera overlay preview, recording state machine, diagnostics writer, packaging flow, and website deployment.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'The hardest part was keeping capture, audio, camera preview, encoder state, and pause/resume timing aligned while still recovering cleanly from interrupted recordings.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I optimized the default profile for low RAM and battery use at 848x480, with a separate HQ mode for users who explicitly want higher bitrate 1080p-capable output.',
      },
      {
        label: 'How I tested it',
        detail:
          'I validated CMake builds, CTest coverage, CI workflow behavior, MP4 packaging, diagnostics output, hardware and software encoder paths, audio capture, and partial-file recovery.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add broader GPU vendor profiling, signed installers, richer crash telemetry, more webcam fallback testing, and automatic release packaging for every tagged build.',
      },
    ],
    metaTitle: 'Screen Recorder | Native Windows C++ Capture App',
    metaDescription:
      'Screen Recorder is a C++20 Windows app using WGC, D3D11, Media Foundation H.264, WASAPI audio, camera overlay, HQ mode, and local diagnostics.',
    caseStudy: {
      overview:
        'A native Windows recorder focused on predictable local capture, hardware-first encoding, practical audio handling, and inspectable diagnostics.',
      architecture: [
        'Win32 controller coordinates Windows Graphics Capture frames with D3D11 resources and recording state',
        'Media Foundation muxes hardware-first H.264 video and AAC audio into MP4, falling back when hardware encoding is unavailable',
        'WASAPI loopback, microphone gating, camera overlay preview, and local diagnostics run as bounded subsystems around the recording session',
      ],
      keyFeatures: [
        'Full-screen capture through Windows Graphics Capture',
        'Hardware-first H.264 MP4 output with software fallback',
        'System audio capture, microphone noise gate, mute controls, and anti-ducking option',
        'Camera overlay, HQ mode, pause/resume, low-disk auto-stop, and orphaned partial-file recovery',
      ],
      challenges: [
        'Balancing video quality with low resource use on battery-powered Windows machines',
        'Keeping diagnostic output useful without making normal recording setup noisy',
      ],
      learnings: [
        'Native capture apps need explicit recovery paths for interrupted finalization',
        'Per-session diagnostics make hardware encoder behavior much easier to debug',
      ],
      futureImprovements: [
        'Add signed installer distribution and automated release artifacts',
        'Profile additional GPU and webcam combinations for more predictable defaults',
      ],
    },
  },
  {
    slug: 'codeaudit',
    title: 'CodeAudit MCP',
    subtitle: 'AI code audit MCP server',
    summary:
      'Read-only MCP server and skill for AI code audits and repository reviews.',
    problem:
      'Developers using AI agents need a safer way to inspect projects, improve code quality, review security risks, and plan issues or PRs before changes are made.',
    solution:
      'Exposes read-only MCP tools and a CodeAudit skill for project detection, skill routing, repository audits, documentation evidence checks, security review, and issue or PR planning.',
    tech: [
      'TypeScript',
      'Model Context Protocol',
      'MCP',
      'Node.js',
      'npm',
      'Streamable HTTP',
    ],
    impact:
      'Packages a production-style code audit MCP server on npm and skills.sh so agents can inspect repositories, improve code quality, and produce evidence-backed plans without write access or remote mutation tools.',
    featured: true,
    updatedAt: '2026-05-04',
    links: {
      github: 'https://github.com/priyanshuchawda/codeaudit',
      npm: 'https://www.npmjs.com/package/@priyanshuchawda/codeaudit',
      skills: 'https://skills.sh/priyanshuchawda/codeaudit',
    },
    seoKeywords: [
      'CodeAudit MCP',
      'codeaudit',
      '@priyanshuchawda/codeaudit',
      'Model Context Protocol server',
      'MCP server',
      'AI code audit',
      'code audit MCP',
      'MCP repository audit',
      'read-only MCP server',
      'improve code quality',
      'AI code review',
      'repository review tool',
      'software project audit',
      'security review MCP',
      'agent workflow routing',
      'Codex MCP server',
      'Claude MCP server',
      'npm MCP server',
      'skills CLI codeaudit',
      'repository inspection MCP',
      'documentation evidence audit',
      'skill routing MCP',
    ],
    packageInfo: {
      name: '@priyanshuchawda/codeaudit',
      version: '0.1.5',
      installCommand: 'npx -y @priyanshuchawda/codeaudit',
      skillName: 'codeaudit',
      skillInstallCommand:
        'npx skills add priyanshuchawda/codeaudit --skill codeaudit',
      registryUrl: 'https://www.npmjs.com/package/@priyanshuchawda/codeaudit',
      skillsUrl: 'https://skills.sh/priyanshuchawda/codeaudit',
      runtime: 'Node.js',
      license: 'MIT',
    },
    artifacts: [
      'npm package',
      'skills.sh skill',
      'GitHub repo',
      'MCP server',
      'HTTP transport',
      'Skills pack',
      'Audit reports',
      'Safety model',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'TypeScript, Node.js, MCP, and skills.sh fit a typed audit tool that can run locally with npx, install as a reusable agent skill, and still support a controlled HTTP deployment path.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the project detection, skill routing manifest, repository audit tools, documentation evidence checks, HTTP runtime, scoped npm package, skills install path, and safety documentation.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'The hardest part was making code audits useful to agents while keeping the tool surface read-only, bounded to the requested project root, and explicit about disallowed actions.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I prioritized reliable read-only inspection and planning over adding write, push, merge, or remote mutation tools that would need a separate approval model.',
      },
      {
        label: 'How I tested it',
        detail:
          'I validated project detection, skill routing, planning outputs, HTTP health and metadata endpoints, documentation-claim audits, installed-skill audits, skills install, npx execution, and build checks.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would add OAuth-style multi-user identity, hosted deployment templates, richer framework-specific audits, and deeper report exports while keeping mutation controls explicit.',
      },
    ],
    metaTitle: 'CodeAudit MCP | AI Code Audit Server',
    metaDescription:
      'CodeAudit MCP is a read-only TypeScript MCP server on npm for AI code audits, repository review, code quality, docs evidence, and PR planning.',
    caseStudy: {
      overview:
        'Run CodeAudit with npx or install the codeaudit skill to give AI agents a safe read-only inspection layer before repository changes.',
      architecture: [
        'Detect local project signals such as language, framework, tests, deployment, CI, and risk notes',
        'Route agent workflows with recommended tool sequences, skill activation order, quality gates, and strict instructions',
        'Expose read-only audits and planning tools over stdio or Streamable HTTP with API-key protection for HTTP deployments',
      ],
      keyFeatures: [
        'Project detection and skill-routing manifest for coding agents',
        'Repository, code quality, Python, Next.js security, docs-claims, tests, and installed-skill audits',
        'Public codeaudit skill install through npx skills add',
        'Issue and PR planning outputs generated from evidence-backed findings',
      ],
      challenges: [
        'Keeping useful repository inspection separate from write-capable automation',
        'Designing outputs that are actionable for agents without hiding the evidence behind each recommendation',
      ],
      learnings: [
        'Agent tooling benefits from workflow manifests, not only raw inspection results',
        'Read-only boundaries make MCP tools easier to adopt in local development setups',
      ],
      futureImprovements: [
        'Add authenticated multi-user HTTP deployments',
        'Expand framework-specific audit coverage and exportable report formats',
      ],
    },
  },
  {
    slug: 'workaudit-ai',
    title: 'WorkAudit AI',
    subtitle: 'Local-first desktop work evidence system',
    summary:
      'Privacy-first Windows work recorder for local evidence timelines and cited AI reports.',
    problem:
      'Developers, students, freelancers, and remote knowledge workers often need to reconstruct what they worked on, but manual notes lose context and many AI summaries cannot cite trustworthy session evidence.',
    solution:
      'I built a local-first Tauri + Python sidecar app that records allowed desktop activity evidence, builds deterministic local timelines, previews and deletes sensitive artifacts, and generates reports only from cited session evidence.',
    tech: [
      'Tauri v2',
      'React',
      'TypeScript',
      'Python 3.13',
      'FastAPI',
      'Rust',
      'SQLite WAL',
      'Local Ollama-compatible models',
      'Vitest',
      'Pytest',
    ],
    impact:
      'Proves a private-beta Windows workflow for first-run privacy onboarding, session recording controls, active-window and screenshot metadata capture, evidence search, share-safe exports, provider provenance, and local validation gates.',
    featured: true,
    updatedAt: '2026-06-01',
    links: {
      github: 'https://github.com/priyanshuchawda/workaudit-ai',
    },
    seoKeywords: [
      'WorkAudit AI',
      'workaudit-ai',
      'WorkTrace AI',
      'local-first desktop recorder',
      'evidence-backed session timeline',
      'AI report with citations',
      'Tauri FastAPI app',
      'privacy redaction pipeline',
    ],
    artifacts: [
      'GitHub repo',
      'Tauri desktop app',
      'FastAPI sidecar',
      'SQLite WAL storage',
      'Deterministic Markdown and JSON export',
      'Evidence-linked AI report UI',
      'Privacy redaction controls',
      'Local validation scripts',
      'Private-beta readiness docs',
    ],
    engineeringDecisions: [
      {
        label: 'Why I chose this stack',
        detail:
          'Tauri, React, Rust commands, Python FastAPI, and SQLite WAL keep the app local-first while separating desktop UX, capture orchestration, storage, and model-provider integrations behind clear boundaries.',
      },
      {
        label: 'What I handled myself',
        detail:
          'I built the privacy onboarding, recorder controls, active-window capture, screenshot metadata review, local timeline search, evidence-linked reports, diagnostics bundles, validation scripts, and desktop-to-sidecar command flow.',
      },
      {
        label: 'Hardest technical problem',
        detail:
          'Balancing useful evidence with privacy controls was the hardest part, especially around screenshot review, raw artifact deletion, provider provenance, and making every AI summary cite the evidence it used.',
      },
      {
        label: 'Tradeoff I made',
        detail:
          'I deferred public Windows distribution and unsigned installer publishing until Store-compatible packaging, sidecar bundling, certification, and update evidence are ready.',
      },
      {
        label: 'How I tested it',
        detail:
          'I used deterministic tests, CI, installed-app smoke tooling, local validation scripts, manual recorder flows, and evidence benchmark docs to verify capture, export, reporting, diagnostics, and privacy behavior.',
      },
      {
        label: 'What I would improve in production',
        detail:
          'I would complete Store-ready packaging, expand long-running capture benchmarks, add richer privacy-center controls, and profile optional OCR, embedding, audio, and VLM runtimes as local-only modules.',
      },
    ],
    metaTitle: 'WorkAudit AI | Local-First Work Timeline',
    metaDescription:
      'WorkAudit AI is a privacy-first Windows desktop recorder that captures local work evidence, builds timelines, and generates citation-backed AI reports.',
    caseStudy: {
      overview:
        'A Windows private-beta app for answering what work happened, what evidence supports it, and what should continue next without sending raw desktop artifacts to hosted models by default.',
      architecture: [
        'Tauri desktop app coordinates first-run privacy setup, recorder state, review screens, and local shell commands',
        'Python FastAPI sidecar captures allowed events, active-window data, screenshot metadata, OCR snippets, file-watch roots, and manual terminal ingests',
        'SQLite WAL storage links sessions, events, evidence IDs, hashes, local previews, provider provenance, deterministic exports, and cited report output',
      ],
      keyFeatures: [
        'First-run privacy onboarding before recording starts',
        'Start, pause, resume, finish, restart, and interrupted-session recovery flows',
        'Evidence search, timeline filtering, moment review, local preview, deletion, and share-safe Markdown export',
        'AI report UI that includes provider provenance and cites session evidence',
      ],
      challenges: [
        'Keeping evidence useful while avoiding cloud surveillance, keylogging, or unrestricted raw artifact sharing',
        'Maintaining deterministic report fallbacks when optional local model runtimes are unavailable',
      ],
      learnings: [
        'Evidence IDs and deterministic exports make AI summaries more trustworthy',
        'Private-beta desktop products need explicit distribution boundaries before public installer release',
      ],
      futureImprovements: [
        'Complete Microsoft Store MSIX or AppX packaging and certification readiness',
        'Run deeper multi-hour storage, reporting, and local runtime benchmarks',
      ],
    },
  },
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
    artifacts: [
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
    artifacts: [
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
    artifacts: [
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
    artifacts: [
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

export const projectsByRecentUpdate = [...projects].sort(
  (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
);

export const featuredProjects = projectsByRecentUpdate.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPath(slug: ProjectSlug) {
  return `/projects/${slug}`;
}
