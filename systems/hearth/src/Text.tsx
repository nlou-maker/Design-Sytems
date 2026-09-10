import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

const sizeStyles: Record<'sm' | 'base' | 'lg', React.CSSProperties> = {
  sm: { fontSize: 'var(--text-caption)', lineHeight: 'var(--leading-caption)' },
  base: { fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)' },
  lg: { fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body-lg)' },
};

const colorMap: Record<'primary' | 'secondary' | 'tertiary', string> = {
  primary: 'var(--color-bark)',
  secondary: 'var(--color-stone)',
  tertiary: 'var(--color-moss)',
};

export const Text: React.FC<TextProps> = ({
  size = 'base',
  color = 'primary',
  children,
  style,
  ...props
}) => (
  <p
    style={{
      fontFamily: 'var(--font-work-sans)',
      color: colorMap[color],
      fontWeight: 400,
      margin: 0,
      ...sizeStyles[size],
      ...style,
    }}
    {...props}
  >
    {children}
  </p>
);
