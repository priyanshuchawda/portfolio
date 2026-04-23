import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://priyanshuworks.tech'),
  title: {
    default:
      'Priyanshu Chawda | AI Engineer — Agentic Systems & Developer Tools',
    template: '%s | Priyanshu Chawda',
  },
  description:
    'Priyanshu Chawda is an AI Engineer shipping AI-powered tools and scalable software. Specializing in agentic systems, LLM orchestration & full-stack.',
  keywords: [
    'AI Engineer',
    'Priyanshu Chawda',
    'Next.js',
    'Agentic Systems',
    'Developer Tools',
    'Machine Learning',
    'Software Engineer',
    'MCP Servers',
    'LLM Orchestration',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Priyanshu Chawda', url: 'https://priyanshuworks.tech' }],
  creator: 'Priyanshu Chawda',
  publisher: 'Priyanshu Chawda',
  alternates: {
    canonical: 'https://priyanshuworks.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priyanshuworks.tech',
    title: 'Priyanshu Chawda | AI Engineer',
    description:
      'AI Engineer building agentic systems & developer tools. I ship AI-powered tools, automation systems, and scalable software fast.',
    siteName: 'Priyanshu Chawda Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Priyanshu Chawda — AI Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyanshu Chawda | AI Engineer',
    description:
      'AI Engineer building agentic systems & developer tools. I ship AI-powered tools, automation systems, and scalable software fast.',
    creator: '@priyanshuchawda',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Priyanshu Chawda',
  url: 'https://priyanshuworks.tech',
  image: 'https://priyanshuworks.tech/og-image.png',
  jobTitle: 'AI Engineer',
  email: 'priyanshuchawda20@gmail.com',
  description:
    'AI Engineer building agentic systems & developer tools. Specializing in MCP servers, LLM orchestration, and full-stack development.',
  sameAs: [
    'https://github.com/priyanshuchawda',
    'https://www.linkedin.com/in/priyanshuchawda',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Large Language Models',
    'Agentic Systems',
    'Full Stack Development',
    'Next.js',
    'TypeScript',
    'Python',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
