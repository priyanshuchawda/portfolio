import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { SiteHeader } from '@/components/SiteHeader';
import { mainNav } from '@/data/navigation';

describe('SiteHeader', () => {
  test('opens mobile navigation and exposes all main routes', () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole('button', {
      name: 'Open navigation menu',
    });
    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeNull();

    fireEvent.click(menuButton);

    const mobileNav = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    });
    expect(
      screen
        .getByRole('button', { name: 'Close navigation menu' })
        .getAttribute('aria-expanded'),
    ).toBe('true');

    mainNav.forEach((item) => {
      const link = within(mobileNav).getByRole('link', { name: item.label });
      expect(link.getAttribute('href')).toBe(item.href);
    });
  });

  test('closes mobile navigation after selecting a route', () => {
    render(<SiteHeader />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    );
    const projectsLink = within(
      screen.getByRole('navigation', { name: 'Mobile navigation' }),
    ).getByRole('link', { name: 'Projects' });

    projectsLink.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    });
    fireEvent.click(projectsLink);

    expect(
      screen.queryByRole('navigation', { name: 'Mobile navigation' }),
    ).toBeNull();
    expect(
      screen
        .getByRole('button', { name: 'Open navigation menu' })
        .getAttribute('aria-expanded'),
    ).toBe('false');
  });
});
