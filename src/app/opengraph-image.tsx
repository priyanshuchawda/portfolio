import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';
import { SocialImageCard, socialImageSize } from '@/lib/social-image';

/** Accessible fallback text for the default portfolio social image. */
export const alt = `${siteConfig.name} - AI Engineer Portfolio`;
/** Pixel dimensions for the default portfolio social image. */
export const size = socialImageSize;
/** MIME type returned by the generated social image endpoint. */
export const contentType = 'image/png';

/** Render the default portfolio social sharing image. */
export default function Image() {
  return new ImageResponse(
    <SocialImageCard
      eyebrow="AI-focused software engineer / Agentic systems / Developer tools"
      title={siteConfig.name}
      description="Building MCP servers, LLM workflows, automation systems, and full-stack AI applications."
    />,
    size,
  );
}
