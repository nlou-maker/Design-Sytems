import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg';
  weight?: 'regular' | 'semibold';
  color?: 'ink' | 'graphite' | 'graphite-soft' | 'signal';
  children: React.ReactNode;
}

const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
  sm: {
    fontSize: '14px',
    lineHeight: 1.4,
  },
  md: {
    fontSize: '16px',
    lineHeight: 1.5,
  },
  lg: {
    fontSize: '19px',
    lineHeight: 1.6,
  },
};

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'regular',
  color = 'ink',
  children,
  style,
  ...props
}) => (
  <p
    style={{
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: weight === 'regular' ? 400 : 600,
      color: `var(--color-${color})`,
      ...sizeStyles[size],
      ...style,
    }}
    {...props}
  >
    {children}
  </p>
);
