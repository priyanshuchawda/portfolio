import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Home from '../app/page';

describe('Home Page', () => {
  test('renders hero section with correct heading', () => {
    render(<Home />);
    expect(screen.getByText('Priyanshu Chawda')).toBeDefined();
    expect(
      screen.getByText(/AI-focused software engineer building LLM workflows/i),
    ).toBeDefined();
    expect(screen.getByText(/20\+ shipped projects/i)).toBeDefined();
  });

  test('renders all project cards', () => {
    render(<Home />);
    expect(screen.getByText('YouTube Flashcards')).toBeDefined();
    expect(screen.getByText('ghfind')).toBeDefined();
    expect(screen.getByText('Browser4All')).toBeDefined();
    expect(screen.getByText('Smart Crowd Navigator')).toBeDefined();
    expect(screen.getByText('RepoSentinel MCP')).toBeDefined();
  });

  test('renders capabilities section', () => {
    render(<Home />);
    expect(screen.getAllByText('AI Engineering').length).toBeGreaterThan(0);
    expect(screen.getByText('Full-stack Development')).toBeDefined();
  });

  test('renders AI-search-friendly FAQ answers', () => {
    render(<Home />);
    expect(screen.getByText('Quick Answers')).toBeDefined();
    expect(screen.getByText('Who is Priyanshu Chawda?')).toBeDefined();
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

  test('renders contact section with CTA', () => {
    render(<Home />);
    expect(screen.getByText('Contact Priyanshu')).toBeDefined();
  });
});
