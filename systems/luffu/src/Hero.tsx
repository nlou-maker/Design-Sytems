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
      backgroundColor: 'var(--color-parchment)',
      padding: 'var(--spacing-200) var(--spacing-20)',
      textAlign: 'center',
      ...style,
    }}
    {...props}
  >
    <h1
      style={{
        fontFamily: 'var(--font-abc-arizona-flare)',
        fontSize: 'var(--text-display)',
        fontWeight: 400,
        lineHeight: 'var(--leading-display)',
        letterSpacing: 'var(--tracking-display)',
        margin: 0,
        marginBottom: subtitle ? 'var(--spacing-20)' : undefined,
        color: 'var(--color-graphite)',
      }}
    >
      {title}
    </h1>
    {subtitle && (
      <p
        style={{
          fontSize: 'var(--text-body-lg)',
          color: 'var(--color-slate)',
          margin: 0,
          marginBottom: children ? 'var(--spacing-32)' : undefined,
          lineHeight: 'var(--leading-body-lg)',
          letterSpacing: 'var(--tracking-body-lg)',
          fontFamily: 'var(--font-abc-arizona-sans)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {subtitle}
      </p>
    )}
    {children}
  </section>
);
