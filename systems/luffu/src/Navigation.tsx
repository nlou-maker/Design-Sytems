import React from 'react';
import { Button } from './Button';

export interface NavigationProps {
  logo?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}

export const Navigation: React.FC<NavigationProps> = ({
  logo = 'luffu',
  links = [],
  cta,
}) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-24) var(--spacing-32)',
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-abc-arizona-flare)',
          fontSize: '20px',
          fontWeight: 400,
          letterSpacing: '-0.32px',
          color: 'var(--color-white)',
        }}
      >
        {logo}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-32)',
          alignItems: 'center',
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--color-white)',
              fontFamily: 'var(--font-abc-arizona-sans)',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.32px',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {link.label}
          </a>
        ))}

        {cta && (
          <Button variant="ghost" style={{ color: 'var(--color-white)' }}>
            {cta.label}
          </Button>
        )}
      </div>
    </nav>
  );
};
