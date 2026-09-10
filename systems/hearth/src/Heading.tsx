import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const sizeStyles: Record<'sm' | 'md' | 'lg' | 'xl', React.CSSProperties> = {
  xl: {
    fontFamily: 'var(--font-work-sans)',
    fontSize: 'var(--text-body-lg)',
    lineHeight: 'var(--leading-body-lg)',
    fontWeight: 400,
  },
  sm: {
    fontFamily: 'var(--font-fraunces)',
    fontSize: 'var(--text-heading-sm)',
    lineHeight: 'var(--leading-heading-sm)',
    fontWeight: 600,
  },
  md: {
    fontFamily: 'var(--font-fraunces)',
    fontSize: 'var(--text-heading)',
    lineHeight: 'var(--leading-heading)',
    fontWeight: 600,
  },
  lg: {
    fontFamily: 'var(--font-fraunces)',
    fontSize: 'var(--text-display)',
    lineHeight: 'var(--leading-display)',
    fontWeight: 600,
  },
};

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  size = 'md',
  children,
  style,
  ...props
}) => {
  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag
      style={{
        color: 'var(--color-bark)',
        margin: 0,
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};
