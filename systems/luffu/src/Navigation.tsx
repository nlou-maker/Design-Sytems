import React from 'react';

export interface NavigationProps extends React.HTMLAttributes<HTMLNavElement> {
  brand?: string;
  links?: Array<{ label: string; href: string }>;
  children?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({
  brand,
  links,
  children,
  style,
  ...props
}) => (
  <nav
    style={{
      backgroundColor: 'var(--color-parchment)',
      borderBottom: '1px solid var(--color-linen)',
      padding: 'var(--spacing-18) var(--spacing-20)',
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {brand && (
        <div
          style={{
            fontFamily: 'var(--font-abc-arizona-flare)',
            fontWeight: 400,
            fontSize: 'var(--text-heading-sm)',
            letterSpacing: 'var(--tracking-heading-sm)',
            color: 'var(--color-graphite)',
          }}
        >
          {brand}
        </div>
      )}
      {links && (
        <div style={{ display: 'flex', gap: 'var(--spacing-20)' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-graphite)',
                textDecoration: 'none',
                fontSize: 'var(--text-body)',
                fontFamily: 'var(--font-abc-arizona-sans)',
                letterSpacing: 'var(--tracking-body)',
                borderBottom: '1px solid transparent',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-deep-ink)';
                e.currentTarget.style.borderBottomColor = 'var(--color-deep-ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-graphite)';
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {children}
    </div>
  </nav>
);
