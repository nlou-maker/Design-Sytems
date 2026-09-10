import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
  sm: {
    fontSize: 'var(--text-caption)',
    lineHeight: 'var(--leading-caption)',
    letterSpacing: 'var(--tracking-caption)',
  },
  md: {
    fontSize: 'var(--text-body)',
    lineHeight: 'var(--leading-body)',
    letterSpacing: 'var(--tracking-body)',
  },
  lg: {
    fontSize: 'var(--text-body-lg)',
    lineHeight: 'var(--leading-body-lg)',
    letterSpacing: 'var(--tracking-body-lg)',
  },
};

const toneStyles: Record<'primary' | 'secondary' | 'tertiary', React.CSSProperties> = {
  primary: {
    color: 'var(--color-graphite)',
  },
  secondary: {
    color: 'var(--color-slate)',
  },
  tertiary: {
    color: 'var(--color-dusk)',
  },
};

export const Text: React.FC<TextProps> = ({
  size = 'md',
  tone = 'primary',
  children,
  style,
  ...props
}) => (
  <p
    style={{
      margin: 0,
      fontFamily: 'var(--font-abc-arizona-sans)',
      fontWeight: 400,
      ...sizeStyles[size],
      ...toneStyles[tone],
      ...style,
    }}
    {...props}
  >
    {children}
  </p>
);
