import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const levelStyles: Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', React.CSSProperties> = {
  h1: {
    fontSize: '48px',
    lineHeight: 1.1,
  },
  h2: {
    fontSize: '40px',
    lineHeight: 1.15,
  },
  h3: {
    fontSize: '32px',
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '24px',
    lineHeight: 1.25,
  },
  h5: {
    fontSize: '20px',
    lineHeight: 1.3,
  },
  h6: {
    fontSize: '16px',
    lineHeight: 1.4,
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
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        margin: 0,
        color: 'var(--color-ink)',
        ...levelStyles[level],
        ...style,
      },
      ...props,
    },
    children
  );
};
