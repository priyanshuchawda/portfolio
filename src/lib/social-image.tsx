import { siteConfig } from './site';

/** Standard Open Graph image dimensions used across generated social cards. */
export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

/** Shared visual layout for generated portfolio, project, and writing cards. */
export function SocialImageCard({
  eyebrow,
  title,
  description,
  footer = siteConfig.url.replace('https://', ''),
  badge = 'priyanshu_',
}: {
  eyebrow: string;
  title: string;
  description: string;
  footer?: string;
  badge?: string;
}) {
  return (
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
          lineHeight: 1.2,
        }}
      >
        {eyebrow}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: 0,
            lineHeight: 0.98,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#a3a3a3',
            fontSize: 36,
            lineHeight: 1.25,
            maxWidth: 940,
          }}
        >
          {description}
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
        <span>{footer}</span>
        <span style={{ color: '#3b82f6' }}>{badge}</span>
      </div>
    </div>
  );
}
