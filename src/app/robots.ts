import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const searchAndCitationBots = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Claude-SearchBot',
  'Claude-User',
  'DuckAssistBot',
  'MistralAI-User',
  'Meta-ExternalFetcher',
  'archive.org_bot',
] as const;

const bulkTrainingBots = [
  'GPTBot',
  'ClaudeBot',
  'CCBot',
  'Google-CloudVertexBot',
  'Bytespider',
  'TikTok Spider',
  'FacebookBot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'PetalBot',
  'Cloudflare Crawler',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [...searchAndCitationBots],
        allow: '/',
      },
      {
        userAgent: [...bulkTrainingBots],
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
