import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const sizeStyles: Record<'sm' | 'md' | 'lg' | 'xl', React.CSSProperties> = {
  xl: {
    fontFamily: 'var(--font-abc-arizona-sans)',
    fontSize: 'var(--text-body-lg)',
    letterSpacing: 'var(--tracking-body-lg)',
    lineHeight: 1.2,
  },
  sm: {
    fontFamily: 'var(--font-abc-arizona-flare)',
    fontSize: 'var(--text-heading-sm)',
    letterSpacing: 'var(--tracking-heading-sm)',
    lineHeight: 1,
  },
  md: {
    fontFamily: 'var(--font-abc-arizona-flare)',
    fontSize: 'var(--text-heading)',
    letterSpacing: 'var(--tracking-heading)',
    lineHeight: 1,
  },
  lg: {
    fontFamily: 'var(--font-abc-arizona-flare)',
    fontSize: 'var(--text-display)',
    letterSpacing: 'var(--tracking-display)',
    lineHeight: 1,
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
        color: 'var(--color-graphite)',
        fontWeight: 400,
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
