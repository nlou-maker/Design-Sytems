import React from 'react';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  children,
  style,
  ...props
}) => (
  <section
    style={{
      backgroundColor: 'var(--color-paper-hi)',
      padding: 'var(--spacing-9) var(--spacing-4)',
      textAlign: 'center',
      ...style,
    }}
    {...props}
  >
    <h1
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '60px',
        fontWeight: 600,
        lineHeight: 1.05,
        margin: 0,
        marginBottom: subtitle ? 'var(--spacing-3)' : undefined,
        color: 'var(--color-ink)',
      }}
    >
      {title}
    </h1>
    {subtitle && (
      <p
        style={{
          fontSize: '19px',
          color: 'var(--color-graphite)',
          margin: 0,
          marginBottom: children ? 'var(--spacing-5)' : undefined,
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </p>
    )}
    {children}
  </section>
);
