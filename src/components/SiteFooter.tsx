import Link from 'next/link';
import { footerNav } from '@/data/navigation';
import { siteConfig } from '@/lib/site';

const copyrightYear = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
}).format(new Date(siteConfig.lastUpdated));

export function SiteFooter() {
  return (
    <footer className="border-border text-muted-foreground border-t py-10 text-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p>
            © {copyrightYear} {siteConfig.name}. Built with Next.js &amp;
            Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground focus-visible:ring-accent transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
