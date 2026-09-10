import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyright?: string;
  links?: Array<{ label: string; href: string }>;
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({
  copyright,
  links,
  children,
  style,
  ...props
}) => (
  <footer
    style={{
      backgroundColor: 'var(--color-linen)',
      borderTop: '1px solid var(--color-pressed-cotton)',
      padding: 'var(--spacing-34) var(--spacing-20)',
      marginTop: 'var(--spacing-218)',
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--spacing-32)',
      }}
    >
      <div>
        {links && (
          <div style={{ display: 'flex', gap: 'var(--spacing-20)' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--color-dusk)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-caption)',
                  fontFamily: 'var(--font-abc-arizona-sans)',
                  letterSpacing: 'var(--tracking-caption)',
                  borderBottom: '1px solid transparent',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-deep-ink)';
                  e.currentTarget.style.borderBottomColor = 'var(--color-deep-ink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-dusk)';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {copyright && (
          <p
            style={{
              margin: links ? 'var(--spacing-12) 0 0' : 0,
              fontSize: 'var(--text-caption)',
              color: 'var(--color-dusk)',
              fontFamily: 'var(--font-abc-arizona-sans)',
              letterSpacing: 'var(--tracking-caption)',
            }}
          >
            {copyright}
          </p>
        )}
      </div>
      {children}
    </div>
  </footer>
);
