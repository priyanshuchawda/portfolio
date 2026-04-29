import { siteConfig } from '@/lib/site';

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Writing', href: '/writing' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Writing', href: '/writing' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export const commandPaletteNav = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/about', icon: 'user' },
  { label: 'Projects', href: '/projects', icon: 'folder' },
  { label: 'Services', href: '/services', icon: 'briefcase' },
  { label: 'Writing', href: '/writing', icon: 'book' },
  { label: 'Achievements', href: '/achievements', icon: 'activity' },
  { label: 'Contact', href: '/contact', icon: 'mail' },
] as const;

export const externalNav = [
  {
    label: 'GitHub Profile',
    href: siteConfig.github,
    icon: 'external',
  },
  {
    label: 'LinkedIn Profile',
    href: siteConfig.linkedin,
    icon: 'external',
  },
] as const;
