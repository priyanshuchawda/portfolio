'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { mainNav } from '@/data/navigation';
import { siteConfig } from '@/lib/site';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
        <div className="flex items-center gap-3">
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
          <button
            type="button"
            aria-label={
              mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-controls="mobile-navigation"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
            className="border-border text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:ring-accent inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors focus-visible:ring-2 focus-visible:outline-none md:hidden"
          >
            {mobileNavOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {mobileNavOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-border bg-background absolute inset-x-0 top-full border-b shadow-lg md:hidden"
        >
          <div className="container mx-auto grid gap-1 px-6 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className="hover:bg-muted focus-visible:ring-accent rounded-md px-3 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
