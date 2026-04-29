import Link from 'next/link';
import { mainNav } from '@/data/navigation';
import { siteConfig } from '@/lib/site';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function SiteHeader() {
  return (
    <header className="border-border bg-background/50 fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md">
      <nav
        className="container mx-auto flex h-16 items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus-visible:ring-accent font-mono text-sm font-bold focus-visible:ring-2 focus-visible:outline-none"
        >
          priyanshu<span className="text-accent">_</span>
        </Link>
        <div className="text-muted-foreground hidden gap-6 text-sm font-medium md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
            className="text-muted-foreground hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            className="text-muted-foreground hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
