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
  copyright = '© 2026 Hearth. All rights reserved.',
}) => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bark)', padding: 'var(--spacing-48) var(--spacing-32)' }}>
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
        <div style={{ display: 'flex', gap: 'var(--spacing-32)', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-oat)',
                fontFamily: 'var(--font-work-sans)',
                fontSize: 'var(--text-caption)',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 'var(--spacing-20)' }}>
          {social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-oat)',
                fontFamily: 'var(--font-work-sans)',
                fontSize: 'var(--text-caption)',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {copyright && (
        <p
          style={{
            color: 'var(--color-oat)',
            fontFamily: 'var(--font-work-sans)',
            fontSize: '12px',
            marginTop: 'var(--spacing-24)',
            opacity: 0.6,
          }}
        >
          {copyright}
        </p>
      )}
    </footer>
  );
};
