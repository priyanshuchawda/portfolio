import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Home from '../app/page';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => (
    <>{children}</>
  ),
}));

// Mock cmdk
vi.mock('cmdk', () => ({
  Command: Object.assign(
    ({ children }: React.PropsWithChildren) => <div>{children}</div>,
    {
      Input: (props: Record<string, unknown>) => (
        <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
      ),
      List: ({ children }: React.PropsWithChildren) => (
        <div>{children}</div>
      ),
      Empty: ({ children }: React.PropsWithChildren) => (
        <div>{children}</div>
      ),
      Group: ({ children }: React.PropsWithChildren) => (
        <div>{children}</div>
      ),
      Item: ({
        children,
      }: React.PropsWithChildren<Record<string, unknown>>) => (
        <div>{children}</div>
      ),
    },
  ),
}));

describe('Home Page', () => {
  test('renders hero section with correct heading', () => {
    render(<Home />);
    expect(screen.getByText('Priyanshu Chawda')).toBeDefined();
    expect(
      screen.getByText(/AI Engineer building agentic systems/i),
    ).toBeDefined();
  });

  test('renders all navigation links', () => {
    render(<Home />);
    const projectLinks = screen.getAllByText('Projects');
    expect(projectLinks.length).toBeGreaterThanOrEqual(1);

    const journeyLink = screen.getByText('Journey');
    expect(journeyLink).toBeDefined();

    const skillsLink = screen.getByText('Skills');
    expect(skillsLink).toBeDefined();
  });

  test('renders all project cards', () => {
    render(<Home />);
    expect(screen.getByText('YouTube Flashcards')).toBeDefined();
    expect(screen.getByText('ghfind')).toBeDefined();
    expect(screen.getByText('Browser4All')).toBeDefined();
    expect(screen.getByText('Smart Crowd Navigator')).toBeDefined();
  });

  test('renders timeline items', () => {
    render(<Home />);
    expect(screen.getByText('Building Agentic Systems')).toBeDefined();
    expect(screen.getByText('Started Coding')).toBeDefined();
  });

  test('renders capabilities section', () => {
    render(<Home />);
    expect(screen.getByText('AI Engineering')).toBeDefined();
    expect(screen.getByText('Software Engineering')).toBeDefined();
  });

  test('renders statistics section', () => {
    render(<Home />);
    expect(screen.getByText('20+')).toBeDefined();
    expect(screen.getByText('250+')).toBeDefined();
    expect(screen.getByText('2k+')).toBeDefined();
  });

  test('all external links have rel="noopener noreferrer"', () => {
    render(<Home />);
    const externalLinks = screen.getAllByRole('link').filter((link) => {
      return link.getAttribute('target') === '_blank';
    });

    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toContain('noopener');
      expect(link.getAttribute('rel')).toContain('noreferrer');
    });
  });

  test('all external links have proper aria-labels', () => {
    render(<Home />);
    const externalLinks = screen.getAllByRole('link').filter((link) => {
      return link.getAttribute('target') === '_blank';
    });

    externalLinks.forEach((link) => {
      const hasAriaLabel = link.getAttribute('aria-label');
      const hasTextContent = link.textContent && link.textContent.trim() !== '';
      expect(hasAriaLabel || hasTextContent).toBeTruthy();
    });
  });

  test('renders skip navigation link for accessibility', () => {
    render(<Home />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeDefined();
    expect(skipLink.getAttribute('href')).toBe('#hero');
  });

  test('renders contact section with CTA', () => {
    render(<Home />);
    expect(screen.getByText('Contact on LinkedIn')).toBeDefined();
  });

  test('renders footer with copyright', () => {
    render(<Home />);
    const year = new Date().getFullYear().toString();
    const yearElements = screen.getAllByText(new RegExp(year));
    expect(yearElements.length).toBeGreaterThanOrEqual(1);
  });
});
