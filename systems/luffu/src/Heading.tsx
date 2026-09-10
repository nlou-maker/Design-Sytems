import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const levelStyles: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', React.CSSProperties> = {
  h1: {
    fontSize: 'var(--text-display)',
    lineHeight: 'var(--leading-display)',
    letterSpacing: 'var(--tracking-display)',
  },
  h2: {
    fontSize: 'var(--text-heading)',
    lineHeight: 'var(--leading-heading)',
    letterSpacing: 'var(--tracking-heading)',
  },
  h3: {
    fontSize: 'var(--text-heading)',
    lineHeight: 'var(--leading-heading)',
    letterSpacing: 'var(--tracking-heading)',
  },
  h4: {
    fontSize: 'var(--text-heading-sm)',
    lineHeight: 'var(--leading-heading-sm)',
    letterSpacing: 'var(--tracking-heading-sm)',
  },
  h5: {
    fontSize: 'var(--text-body-lg)',
    lineHeight: 'var(--leading-body-lg)',
    letterSpacing: 'var(--tracking-body-lg)',
  },
  h6: {
    fontSize: 'var(--text-body)',
    lineHeight: 'var(--leading-body)',
    letterSpacing: 'var(--tracking-body)',
  },
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h1',
  children,
  style,
  ...props
}) => {
  const Component = level as React.ElementType;
  return React.createElement(
    Component,
    {
      style: {
        fontFamily: 'var(--font-abc-arizona-flare)',
        fontWeight: 400,
        margin: 0,
        color: 'var(--color-graphite)',
        ...levelStyles[level],
        ...style,
      },
      ...props,
    },
    children
  );
};
