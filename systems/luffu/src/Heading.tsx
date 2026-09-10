import React from 'react';
import '../styles/variables.css';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const sizeMap = {
    sm: { fontSize: '40px', letterSpacing: '-1.24px', font: 'var(--font-abc-arizona-flare)' },
    md: { fontSize: '48px', letterSpacing: '-2.02px', font: 'var(--font-abc-arizona-flare)' },
    lg: { fontSize: '64px', letterSpacing: '-3.2px', font: 'var(--font-abc-arizona-flare)' },
    xl: { fontSize: '20px', letterSpacing: '-0.32px', font: 'var(--font-abc-arizona-sans)' },
  };

  const headingStyle = {
    ...sizeMap[size],
    color: 'var(--color-graphite)',
    fontFamily: sizeMap[size].font,
    fontWeight: 400,
    lineHeight: 1,
    margin: 0,
  };

  const Comp = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    Comp,
    { className, style: headingStyle, ...props },
    children
  );
};
