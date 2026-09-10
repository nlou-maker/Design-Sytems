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
      backgroundColor: 'var(--color-paper-hi)',
      borderBottom: `var(--stroke-thin) solid var(--color-hatch-line)`,
      padding: 'var(--spacing-3) var(--spacing-4)',
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1160px',
        margin: '0 auto',
      }}
    >
      {brand && (
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '18px',
            color: 'var(--color-ink)',
          }}
        >
          {brand}
        </div>
      )}
      {links && (
        <div style={{ display: 'flex', gap: 'var(--spacing-5)' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--color-graphite)',
                textDecoration: 'none',
                transition: `color var(--transition)`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-signal)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--color-graphite)')
              }
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
