import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'base' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = 'base',
  color = 'primary',
  children,
  className = '',
  style,
  ...props
}) => {
  const sizeMap = {
    sm: { fontSize: '14px', letterSpacing: '-0.35px' },
    base: { fontSize: '16px', letterSpacing: '-0.32px' },
    lg: { fontSize: '20px', letterSpacing: '-0.32px' },
  };

  const colorMap = {
    primary: 'var(--color-graphite)',
    secondary: 'var(--color-slate)',
    tertiary: 'var(--color-dusk)',
  };

  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-abc-arizona-sans)',
        ...sizeMap[size],
        color: colorMap[color],
        fontWeight: 400,
        lineHeight: 1.2,
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};
