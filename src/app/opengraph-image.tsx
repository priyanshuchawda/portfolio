import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = `${siteConfig.name} - AI Engineer Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#050505',
        color: '#ededed',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: '72px',
        width: '100%',
      }}
    >
      <div
        style={{
          color: '#3b82f6',
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 0,
        }}
      >
        AI-focused software engineer / Agentic systems / Developer tools
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: 0,
            lineHeight: 1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            color: '#a3a3a3',
            fontSize: 38,
            lineHeight: 1.25,
            maxWidth: 900,
          }}
        >
          Building MCP servers, LLM workflows, automation systems, and
          full-stack AI applications.
        </div>
      </div>
      <div
        style={{
          alignItems: 'center',
          borderTop: '1px solid #262626',
          color: '#ededed',
          display: 'flex',
          fontSize: 28,
          justifyContent: 'space-between',
          paddingTop: 28,
        }}
      >
        <span>{siteConfig.url.replace('https://', '')}</span>
        <span style={{ color: '#3b82f6' }}>priyanshu_</span>
      </div>
    </div>,
    size,
  );
}
