import React from 'react';
import { Button } from './Button';

export interface NavigationProps {
  logo?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}

export const Navigation: React.FC<NavigationProps> = ({ logo = 'Hearth', links = [], cta }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-20) var(--spacing-32)',
        backgroundColor: 'var(--color-oat)',
        borderBottom: '1px solid var(--color-sand)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-fraunces)',
          fontSize: 'var(--text-heading-sm)',
          fontWeight: 600,
          color: 'var(--color-bark)',
        }}
      >
        {logo}
      </div>

      <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--color-bark)',
              fontFamily: 'var(--font-work-sans)',
              fontSize: 'var(--text-body)',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            {link.label}
          </a>
        ))}

        {cta && <Button variant="primary">{cta.label}</Button>}
      </div>
    </nav>
  );
};
