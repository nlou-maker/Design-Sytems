import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  social?: FooterLink[];
  copyright?: string;
}

export const Footer: React.FC<FooterProps> = ({
  links = [],
  social = [],
  copyright = '© 2026 Luffu. All rights reserved.',
}) => {
  return (
    <footer
      style={{
        backgroundColor: '#393e28',
        padding: 'var(--spacing-32)',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 'var(--page-max-width)',
          margin: '0 auto',
          gap: 'var(--spacing-32)',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-32)',
            flexWrap: 'wrap',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-white)',
                fontFamily: 'var(--font-abc-arizona-sans)',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '-0.35px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-20)',
          }}
        >
          {social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-white)',
                fontFamily: 'var(--font-abc-arizona-sans)',
                fontSize: '14px',
                fontWeight: 400,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {copyright && (
        <p
          style={{
            color: 'var(--color-white)',
            fontFamily: 'var(--font-abc-arizona-sans)',
            fontSize: '12px',
            fontWeight: 400,
            marginTop: 'var(--spacing-24)',
            opacity: 0.7,
          }}
        >
          {copyright}
        </p>
      )}
    </footer>
  );
};
