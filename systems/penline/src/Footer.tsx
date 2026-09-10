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
      backgroundColor: 'var(--color-paper-alt)',
      borderTop: `var(--stroke-thin) solid var(--color-hatch-line)`,
      padding: 'var(--spacing-5) var(--spacing-4)',
      marginTop: 'var(--spacing-9)',
      ...style,
    }}
    {...props}
  >
    <div
      style={{
        maxWidth: '1160px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--spacing-5)',
      }}
    >
      <div>
        {links && (
          <div style={{ display: 'flex', gap: 'var(--spacing-5)' }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--color-graphite-soft)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: `color var(--transition)`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-signal)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-graphite-soft)')
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {copyright && (
          <p
            style={{
              margin: links ? 'var(--spacing-2) 0 0' : 0,
              fontSize: '13px',
              color: 'var(--color-graphite-soft)',
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
